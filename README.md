# SynergyCloud

A Next.js 16 marketing site built with React 19, Tailwind CSS v4, and TypeScript.

---

## Form Validation

### Libraries Used

#### 1. `react-hook-form`

**Why:** React Hook Form is the industry standard for form state management in React. It uses uncontrolled inputs and a ref-based approach, which means it does not re-render the entire component on every keystroke — only the field that changed re-renders. This makes it significantly more performant than controlled form libraries like Formik, especially on forms with many fields.

Key benefits:
- Minimal re-renders via uncontrolled inputs
- Native `ref` forwarding support — works seamlessly with custom components using `forwardRef`
- Built-in `formState` object exposes `errors`, `isSubmitting`, `isDirty`, and more
- `handleSubmit` wrapper prevents submission if validation fails and calls `onSubmit` only with valid data

#### 2. `yup`

**Why:** Yup is a schema-based validation library. Instead of writing validation logic inside components, you define the rules once as a schema object and reuse it anywhere. It integrates directly with `react-hook-form` via the `@hookform/resolvers` adapter.

Key benefits:
- Declarative, chainable API — rules read like plain English
- Schema is defined outside the component — single source of truth
- `yup.InferType<typeof schema>` automatically generates TypeScript types from the schema, keeping types and validation rules in sync with zero duplication
- Supports async validation, conditional rules, and custom validators

#### 3. `@hookform/resolvers`

**Why:** This is the official bridge between `react-hook-form` and external validation libraries like Yup. It wraps the Yup schema in a resolver function that `react-hook-form` calls internally on every submission (and optionally on every change/blur).

Usage:
```ts
useForm({ resolver: yupResolver(schema) })
```

---

### Architecture

All validation schemas live in a single file:

```
src/lib/schemas.ts
```

This is the single source of truth for all form validation rules across the entire application. Both forms import their schema and their TypeScript types from this one file.

```
src/lib/schemas.ts              ← all Yup schemas + inferred TypeScript types
src/components/shared/FormInput.tsx  ← reusable input component with error display
src/components/features/home/SignupSection.tsx   ← uses signupSchema
src/components/features/home/ContactUs.tsx       ← uses contactSchema
```

---

### Schemas

#### Signup Schema (`signupSchema`)

Used in: `SignupSection.tsx`

| Field | Yup Methods | Rule |
|-------|-------------|------|
| `name` | `.string()`, `.min(2)`, `.required()` | Non-empty string, minimum 2 characters |
| `email` | `.string()`, `.email()`, `.required()` | Valid email format, non-empty |
| `password` | `.string()`, `.min(8)`, `.required()` | Non-empty string, minimum 8 characters |

```ts
export const signupSchema = yup.object({
    name: yup.string().min(2, "Name must be at least 2 characters").required("Full name is required"),
    email: yup.string().email("Enter a valid email address").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
})
```

#### Contact Schema (`contactSchema`)

Used in: `ContactUs.tsx`

| Field | Yup Methods | Rule |
|-------|-------------|------|
| `firstName` | `.string()`, `.min(2)`, `.required()` | Non-empty string, minimum 2 characters |
| `lastName` | `.string()`, `.min(2)`, `.required()` | Non-empty string, minimum 2 characters |
| `email` | `.string()`, `.email()`, `.required()` | Valid email format, non-empty |
| `phone` | `.string()`, `.matches()`, `.required()` | Matches phone regex, non-empty |
| `message` | `.string()`, `.min(10)`, `.required()` | Non-empty string, minimum 10 characters |

```ts
export const contactSchema = yup.object({
    firstName: yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
    lastName: yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
    email: yup.string().email("Enter a valid email address").required("Email is required"),
    phone: yup.string().matches(/^\+?[0-9\s\-()]{7,15}$/, "Enter a valid phone number").required("Phone number is required"),
    message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
})
```

---

### Yup Methods Reference

| Method | What it does |
|--------|-------------|
| `.string()` | Declares the field must be a string type |
| `.required(msg)` | Field cannot be empty or undefined. `msg` is shown if violated |
| `.min(n, msg)` | String must be at least `n` characters long |
| `.email(msg)` | String must match a valid email format (`user@domain.tld`) |
| `.matches(regex, msg)` | String must match the provided regular expression |
| `yup.InferType<T>` | TypeScript utility — derives a type from the schema so you never write types and validation rules separately |

---

### TypeScript Integration

Schemas export their inferred types:

```ts
export type SignupFormData  = yup.InferType<typeof signupSchema>
export type ContactFormData = yup.InferType<typeof contactSchema>
```

These types are passed directly to `useForm`:

```ts
const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema)
})
```

This gives full TypeScript autocomplete on `errors.name`, `errors.email`, etc., and ensures the `onSubmit` callback receives a fully typed, validated data object.

---

### Reusable `FormInput` Component

`src/components/shared/FormInput.tsx` is built with `forwardRef` so `react-hook-form`'s `register()` can attach its internal ref to the underlying `<input>` element.

```tsx
const FormInput = forwardRef<HTMLInputElement, InputProps>(({ label, labelfor, error, ...rest }, ref) => (
    <div className="...flex-col-reverse...">
        <input ref={ref} id={labelfor} {...rest} className="peer ..." />
        <label htmlFor={labelfor} className="...peer-focus:text-[#011C2A]">{label}</label>
        {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
))
```

**Why `forwardRef`:** `react-hook-form` needs a ref on the input to read its value without controlled state. Without `forwardRef`, the ref passed by `register()` would be lost and the field would not be tracked.

**Why `flex-col-reverse` with input before label:** The Tailwind `peer-focus:` utility uses CSS sibling selectors, which only target elements that come *after* the `peer` element in the DOM. Since we want the label to respond to the input's focus state, the input must precede the label in HTML. `flex-col-reverse` restores the correct visual order (label on top, input below) without changing the DOM order.

**Error display:** The `error` prop receives the message string from `react-hook-form`'s `errors` object (e.g. `errors.firstName?.message`) and renders it below the input in red when present.

---

### How Validation Flows

```
User submits form
       ↓
handleSubmit() intercepts the event
       ↓
yupResolver runs the schema against form values
       ↓
  ┌─── Valid ───────────────────────────────┐
  │                                         │
  ↓                                         ↓
onSubmit(data) called              errors object populated
with typed, validated data         components re-render
                                   showing error messages
```

Validation runs on submit by default. Errors clear field-by-field as the user corrects their input.

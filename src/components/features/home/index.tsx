import AboutSection from "./AboutSection";
import ContactUsSection from "./ContactUs";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import SignupSection from "./SignupSection";
import Testimonials from "./Testimonialas";

export default function HomePageView() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <PricingSection />
            <Testimonials />
            <SignupSection />
            <ContactUsSection />
        </>
    )
}
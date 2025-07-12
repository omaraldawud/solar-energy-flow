// src/pages/AboutUsPage.tsx
import { HeroMotto, MissionSection, WhoWeAreCard, CTASection } from '@/components/about';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { HowItWorksProcess } from '@/components/HowItWorksProcess';
import SEO from '@/components/seo-components/SEO';

export const AboutUsPage = () => {
  return (
        <>
      <SEO
        title="Free Solar System Design | Solar Energy Flow"
        description="Get a free custom solar system design for your home or business. No obligation. Start saving with clean energy today!"
        keywords="free solar design, custom solar quote, solar panel estimate"
        ogTitle="Claim Your Free Solar System Design"
        ogDescription="Let our experts design a personalized solar system for your property—completely free."
        ogUrl="https://solarenergyflow.net/free-design"
        ogImage="https://solarenergyflow.net/images/free-solar-og.jpg" // add this image!
      />

      <Header />

    <div className="about-page bg-light">
      {/* Hero Section */}
      <div className="bg-primary text-white py-2">
        <div className="container py-4">
          <HeroMotto 
            title ="About Solar Energy Flow"
            subtitle="Capture the Sun - Turn your roof into an asset"
            tagline="Innovative Energy for an Evolving World"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Who We Are Card - Takes full width on mobile, 1/3 on desktop */}
          <div className="col-12 col-lg-4">
            <WhoWeAreCard />
          </div>
          
          {/* Mission Section - Takes full width on mobile, 2/3 on desktop */}
          <div className="col-12 col-lg-8">
            <MissionSection />
          </div>
        </div>

        <HowItWorksProcess variant="compact"/>
        

        {/* Final CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <CTASection />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};
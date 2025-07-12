// src/pages/AboutUsPage.tsx
import { HeroMotto, MissionSection, WhoWeAreCard, CTASection } from '@/components/about';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { HowItWorksProcess } from '@/components/forms-cta-cards/HowItWorksProcess';
import SEO from '@/components/seo/SEO';

export const AboutUsPage = () => {
  return (
        <>
      <SEO
        title="About Solar Energy Flow | Minnesota's Trusted Solar Installers"

        description="Meet the team behind Solar Energy Flow - Minnesota's premier solar panel installation experts. Learn about our mission to deliver affordable, high-efficiency solar solutions."
keywords="about solar company, solar installers Minnesota, solar energy experts, renewable energy team, solar company mission"

        ogTitle="Our Solar Story | Solar Energy Flow Minnesota"
        ogDescription="Discover how Solar Energy Flow became Minnesota's top-rated solar installation company through quality workmanship and customer-focused service."
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
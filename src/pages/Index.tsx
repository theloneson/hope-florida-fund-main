import Hero from "@/components/sections/Hero";
import Stories from "@/components/sections/Stories";
import WhyMatters from "@/components/sections/WhyMatters";
import HowYouCanHelp from "@/components/sections/HowYouCanHelp";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Hope Florida Fund – Florida Orphanage Donations";
  }, []);

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Hope Florida Fund',
    url: '/',
    description: 'Donate to support orphanage homes and children in Florida.',
    areaServed: 'Florida, USA',
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Hero />
      <Stories />
      <WhyMatters />
      <HowYouCanHelp />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

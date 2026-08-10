import AboutFestivalSection from "@/components/AboutFestival";
import ContactSection from "@/components/ContactSection";
import EventInfoSection from "@/components/EventInfoSection";
import FaqNewsletterSection from "@/components/FaqNewsletterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LineupSection from "@/components/LineupSection";
import SkyImage from "@/components/SkyImage";
import SponsorsSection from "@/components/SponsorsSection";
import TicketsSection from "@/components/TicketsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SkyImage />
      <AboutFestivalSection />
      <LineupSection />
      <TicketsSection />
      <EventInfoSection />
      <SponsorsSection />
      <FaqNewsletterSection />
      <ContactSection />
      <Footer />


      <main>

      </main>
    </>
    
  );
}

import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import StaffingServices from "@/components/StaffingServices";
import Benefits from "@/components/Benefits";
import TrustBanner from "@/components/TrustBanner";
import SuccessStories from "@/components/SuccessStories";
import LinkedInFeed from "@/components/LinkedInFeed";
import InstagramFeed from "@/components/InstagramFeed";
import Blog from "@/components/Blog";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col bg-white">
      <Reveal direction="fade" delay={80}>
        <Hero />
      </Reveal>

      <Reveal direction="up" delay={60}>
        <CompanyLogos />
      </Reveal>

      <Reveal direction="up" delay={80}>
        <StatsBar />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <Services />
      </Reveal>

      <Reveal direction="up" delay={80}>
        <StaffingServices />
      </Reveal>

      <Reveal direction="up" delay={80}>
        <Benefits />
      </Reveal>

      <Reveal direction="up" delay={100}>
        <SuccessStories />
      </Reveal>

      <LinkedInFeed />
      <InstagramFeed />

      <Reveal direction="up" delay={80}>
        <Blog />
      </Reveal>

      <Reveal direction="scale" delay={80}>
        <TrustBanner />
      </Reveal>
    </main>
  );
}

import AlternativeHero from '@/components/AlternativeHero';
import AlternativeWelcomeLetter from '@/components/AlternativeWelcomeLetter';
import AlternativeWelcomeSection from '@/components/AlternativeWelcomeSection';
import AlternativePricing from '@/components/AlternativePricing';
import AlternativeCommittee from '@/components/AlternativeCommittee';
import AlternativeExploreHyderabad from '@/components/AlternativeExploreHyderabad';
import AlternativeCTA from '@/components/AlternativeCTA';
import AlternativeFooter from '@/components/AlternativeFooter';

export default function AlternativePage() {
  return (
    <main className="relative bg-[#f5f0eb]">
      <AlternativeHero />
      <AlternativeWelcomeLetter />
      <AlternativeWelcomeSection />
      <AlternativePricing />
      <AlternativeCommittee />
      <AlternativeExploreHyderabad />
      <AlternativeCTA />
      <AlternativeFooter />
    </main>
  );
}

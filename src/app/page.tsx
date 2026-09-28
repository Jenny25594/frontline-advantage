import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { DashboardPreview } from '@/components/home/DashboardPreview';
import { MetricsStrip } from '@/components/home/MetricsStrip';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <HeroSection />
      <MetricsStrip />
      <FeatureGrid />
      <DashboardPreview />
      <CTASection />
    </main>
  );
}

import HeroSection from '@/components/home/HeroSection';
import QuoteStrip from '@/components/home/QuoteStrip';
import CategoryGrid from '@/components/home/CategoryGrid';
import NewArrivals from '@/components/home/NewArrivals';
import NewsletterBanner from '@/components/home/NewsletterBanner';
import InstagramStrip from '@/components/home/InstagramStrip';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuoteStrip />
      <CategoryGrid />
      <NewArrivals />
      <NewsletterBanner />
      <InstagramStrip />
    </>
  );
}

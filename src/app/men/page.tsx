import { getProductsByCategory } from '@/lib/data';
import CollectionPageClient from '@/components/listing/CollectionPageClient';
import NewsletterBanner from '@/components/home/NewsletterBanner';
import CollectionNewArrivals from '@/components/listing/CollectionNewArrivals';

export const metadata = {
    title: "Men's Collection — LUSSO",
    description: 'A curation of essential silhouettes, crafted with uncompromising quality and a focus on timeless masculinity.',
};

export default function MenPage() {
    const products = getProductsByCategory('men');

    return (
        <>
            <CollectionNewArrivals products={products} category="men" />
            <CollectionPageClient
                title={"MEN\nCOLLECTION"}
                subtitle="A curation of essential silhouettes, crafted with uncompromising quality and a focus on timeless masculinity."
                category="men"
                products={products}
                badge="Collection"
            />
            <NewsletterBanner />
        </>
    );
}

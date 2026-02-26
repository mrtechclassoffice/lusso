import { getProductsByCategory } from '@/lib/data';
import CollectionPageClient from '@/components/listing/CollectionPageClient';
import NewsletterBanner from '@/components/home/NewsletterBanner';
import CollectionNewArrivals from '@/components/listing/CollectionNewArrivals';

export const metadata = {
    title: "Women's Collection — LUSSO",
    description: 'A timeless collection of contemporary silhouettes, premium materials, and feminine essentials designed for the modern woman.',
};

export default function WomenPage() {
    const products = getProductsByCategory('women');

    return (
        <>
            <CollectionNewArrivals products={products} category="women" />
            <CollectionPageClient
                title={"WOMEN'S\nCOLLECTION"}
                subtitle="A timeless collection of contemporary silhouettes, premium materials, and feminine essentials designed for the modern woman with an uncompromising eye for quality."
                category="women"
                products={products}
                badge="Collection"
                quote="Design is the silent ambassador of your brand. Our women's collection is crafted for those who find power in restraint."
            />
            <NewsletterBanner />
        </>
    );
}

import { getProductsByCategory } from '@/lib/data';
import CollectionPageClient from '@/components/listing/CollectionPageClient';
import SkincareStandard from '@/components/skincare/SkincareStandard';

export const metadata = {
    title: 'Radiance Protocol — LUSSO Skincare',
    description: 'A pharmaceutical approach to skincare. Each formulation undergoes rigorous testing to deliver transformative results.',
};

export default function SkincarePage() {
    const products = getProductsByCategory('skincare');

    return (
        <>
            <CollectionPageClient
                title={"RADIANCE\nPROTOCOL"}
                subtitle="A pharmaceutical approach to skincare. Each formulation undergoes rigorous testing to deliver transformative, visible results."
                category="skincare"
                products={products}
                badge="Skincare"
                showFilters={false}
            />
            <SkincareStandard />
        </>
    );
}

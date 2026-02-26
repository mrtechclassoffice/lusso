import { getProductBySlug, products } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/detail/ProductDetailClient';

export function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};
    return {
        title: `${product.name} — LUSSO`,
        description: product.description.substring(0, 155),
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) notFound();

    return <ProductDetailClient product={product} />;
}

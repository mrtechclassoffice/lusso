export type ProductCategory = 'men' | 'women' | 'skincare';
export type ProductSubcategory = string;

export interface ProductColor {
    name: string;
    hex: string;
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface Review {
    id: string;
    author: string;
    avatar: string;
    date: string;
    rating: number;
    body: string;
    verified: boolean;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: ProductCategory;
    subcategory: string;
    price: number;
    originalPrice?: number;
    images: string[];
    colors: ProductColor[];
    sizes: string[];
    badge?: 'new' | 'sale' | 'favourite';
    rating: number;
    reviewCount: number;
    description: string;
    specs: ProductSpec[];
    reviews: Review[];
    featured?: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
    selectedSize: string;
    selectedColor: ProductColor;
}

// ─── Unsplash placeholder images ────────────────────────────────────────────
const IMG = {
    // Men
    blazer: [
        'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
        'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
        'https://images.unsplash.com/photo-1584185684996-2b5dae52b3c8?w=800&q=80',
        'https://images.unsplash.com/photo-1548389620-1c0e4ebb4bac?w=800&q=80',
    ],
    overcoat: [
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    ],
    shirt: [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
        'https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=800&q=80',
    ],
    denim: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
        'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80',
    ],
    trousers: [
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    ],
    knitwear: [
        'https://images.unsplash.com/photo-1614975058789-41316d0e2e4b?w=800&q=80',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    techJacket: [
        'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80',
        'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&q=80',
    ],
    polo: [
        'https://images.unsplash.com/photo-1625910513578-6d05ed2f7c5b?w=800&q=80',
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    // Women
    silkDress: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
        'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800&q=80',
    ],
    womenBlazer: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
        'https://images.unsplash.com/photo-1583744946564-b52d01a7e0b1?w=800&q=80',
    ],
    camisole: [
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
        'https://images.unsplash.com/photo-1512473032516-1e7e1dd89a6e?w=800&q=80',
    ],
    leatherBag: [
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    ],
    womenTrousers: [
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
        'https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&q=80',
    ],
    boot: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
        'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80',
    ],
    cashmireTurtle: [
        'https://images.unsplash.com/photo-1607347492779-3ad5df8a5fe3?w=800&q=80',
        'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=800&q=80',
    ],
    woolSkirt: [
        'https://images.unsplash.com/photo-1583496661160-fb5218b5d7b9?w=800&q=80',
        'https://images.unsplash.com/photo-1584185684996-2b5dae52b3c8?w=800&q=80',
    ],
    // Skincare
    serum: [
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
    ],
    moisturiser: [
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
        'https://images.unsplash.com/photo-1556228578-626e65a7c0db?w=800&q=80',
    ],
    cleanser: [
        'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80',
        'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
    ],
    faceoil: [
        'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=800&q=80',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    ],
    mask: [
        'https://images.unsplash.com/photo-1614159869875-15c4b7b23ee2?w=800&q=80',
        'https://images.unsplash.com/photo-1611338049047-8a93f8e3d6c1?w=800&q=80',
    ],
    spf: [
        'https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=800&q=80',
        'https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=800&q=80',
    ],
};

const REVIEWS_BLAZER: Review[] = [
    {
        id: 'r1',
        author: 'Elena V.',
        avatar: 'https://i.pravatar.cc/48?img=47',
        date: 'Oct 12, 2024',
        rating: 5,
        body: 'The quality of the wool is outstanding. It has a beautiful weight and drape that feels much more expensive than the price point suggests.',
        verified: true,
    },
    {
        id: 'r2',
        author: 'Marcus K.',
        avatar: 'https://i.pravatar.cc/48?img=12',
        date: 'Sep 28, 2024',
        rating: 4,
        body: "Perfect fit around the shoulders. The sleeves were slightly long for me, but easily tailored. Truly a classic piece.",
        verified: true,
    },
];

export const products: Product[] = [
    // ─── MEN ────────────────────────────────────────────────────────────────────
    {
        id: 'm1',
        slug: 'minimalist-structured-blazer',
        name: 'Minimalist Structured Blazer',
        category: 'men',
        subcategory: 'Outerwear',
        price: 245,
        images: IMG.blazer,
        colors: [
            { name: 'Onyx', hex: '#1a1a1a' },
            { name: 'Ash', hex: '#9ca3af' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        badge: 'new',
        rating: 4.8,
        reviewCount: 46,
        description:
            "Expertly tailored from premium Italian wool blend, this structured blazer boasts timeless sophistication. Featuring a clean silhouette, precisely welt pockets, and subtle weft passing, it transitions effortlessly from professional environments to evening affairs.",
        specs: [
            { label: 'Fabric', value: '70% Virgin Wool, 30% Silk' },
            { label: 'Origin', value: 'Crafted in Milan, Italy' },
            { label: 'Care', value: 'Dry Clean only. Do Not Bleach' },
            { label: 'Fitting', value: 'Regular Fit. Tailored internal cut' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'm2',
        slug: 'wool-mohair-overcoat',
        name: 'Wool-Mohair Overcoat',
        category: 'men',
        subcategory: 'Outerwear',
        price: 395,
        originalPrice: 520,
        images: IMG.overcoat,
        colors: [
            { name: 'Charcoal', hex: '#36454f' },
            { name: 'Camel', hex: '#c19a6b' },
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        badge: 'sale',
        rating: 4.7,
        reviewCount: 28,
        description:
            'A statement overcoat in a luxurious wool-mohair blend. The natural lustre of mohair gives a distinctive sheen to this timeless silhouette.',
        specs: [
            { label: 'Fabric', value: '60% Wool, 40% Mohair' },
            { label: 'Origin', value: 'Woven in Scotland' },
            { label: 'Care', value: 'Dry Clean Only' },
            { label: 'Fitting', value: 'Relaxed Fit' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'm3',
        slug: 'organic-cotton-oxford-shirt',
        name: 'Organic Cotton Oxford Shirt',
        category: 'men',
        subcategory: 'Tops',
        price: 145,
        images: IMG.shirt,
        colors: [
            { name: 'White', hex: '#f5f5f5' },
            { name: 'Pale Blue', hex: '#bfdbfe' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.5,
        reviewCount: 63,
        description:
            'Woven from certified organic cotton, this Oxford shirt delivers the perfect balance of structure and softness. Ideal for desk-to-dinner versatility.',
        specs: [
            { label: 'Fabric', value: '100% Organic Cotton' },
            { label: 'Origin', value: 'Made in Portugal' },
            { label: 'Care', value: 'Machine Wash 30°C' },
            { label: 'Fitting', value: 'Slim Fit' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'm4',
        slug: 'raw-denim-jean',
        name: 'Raw Selvedge Denim Jean',
        category: 'men',
        subcategory: 'Bottoms',
        price: 210,
        images: IMG.denim,
        colors: [
            { name: 'Indigo', hex: '#3730a3' },
            { name: 'Black', hex: '#111827' },
        ],
        sizes: ['28', '30', '32', '34', '36'],
        badge: 'favourite',
        rating: 4.9,
        reviewCount: 112,
        description:
            'Japanese selvedge denim that develops a unique patina with wear. Cut in a tapered silhouette for modern proportions.',
        specs: [
            { label: 'Fabric', value: '100% Japanese Selvedge Denim' },
            { label: 'Weight', value: '14oz' },
            { label: 'Care', value: 'Cold Wash, Air Dry' },
            { label: 'Fitting', value: 'Tapered Slim' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'm5',
        slug: 'tailored-linen-trousers',
        name: 'Tailored Linen Trousers',
        category: 'men',
        subcategory: 'Bottoms',
        price: 210,
        images: IMG.trousers,
        colors: [
            { name: 'Sand', hex: '#d2b48c' },
            { name: 'Navy', hex: '#1e3a5f' },
        ],
        sizes: ['28', '30', '32', '34', '36'],
        badge: 'sale',
        rating: 4.6,
        reviewCount: 34,
        description:
            'Lightweight Italian linen trousers with a pleated front and wide leg. A warm-weather essential that maintains elegance.',
        specs: [
            { label: 'Fabric', value: '100% Italian Linen' },
            { label: 'Origin', value: 'Made in Italy' },
            { label: 'Care', value: 'Hand Wash or Dry Clean' },
            { label: 'Fitting', value: 'Wide Leg, Pleated' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'm6',
        slug: 'cashmere-mock-neck-sweater',
        name: 'Cashmere Mock-Neck Sweater',
        category: 'men',
        subcategory: 'Tops',
        price: 298,
        images: IMG.knitwear,
        colors: [
            { name: 'Ivory', hex: '#fffff0' },
            { name: 'Deep Forest', hex: '#2d4a3e' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        badge: 'new',
        rating: 4.8,
        reviewCount: 51,
        description:
            'Crafted from Grade A Mongolian cashmere, this mock-neck sweater is the pinnacle of warmth and refinement. A wardrobe anchor.',
        specs: [
            { label: 'Fabric', value: '100% Grade A Cashmere' },
            { label: 'Gauge', value: '12-gauge knit' },
            { label: 'Care', value: 'Dry Clean or Hand Wash' },
            { label: 'Fitting', value: 'Regular Fit' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'm7',
        slug: 'technical-performance-jacket',
        name: 'Technical Performance Jacket',
        category: 'men',
        subcategory: 'Outerwear',
        price: 375,
        images: IMG.techJacket,
        colors: [
            { name: 'Midnight', hex: '#1a1a2e' },
            { name: 'Stone', hex: '#a0967d' },
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        badge: 'new',
        rating: 4.7,
        reviewCount: 19,
        description:
            'A sophisticated marriage of performance and luxury. Water-resistant outer shell, breathable membrane, and a clean minimalist aesthetic.',
        specs: [
            { label: 'Outer', value: '3-layer Technical Shell' },
            { label: 'Rating', value: '10,000mm Waterproof' },
            { label: 'Care', value: 'Machine Wash Technical Cycle' },
            { label: 'Fitting', value: 'Regular Fit' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'm8',
        slug: 'merino-polo-shirt',
        name: 'Merino Polo Shirt',
        category: 'men',
        subcategory: 'Tops',
        price: 165,
        images: IMG.polo,
        colors: [
            { name: 'White', hex: '#f9fafb' },
            { name: 'Racing Green', hex: '#1a4c2e' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.4,
        reviewCount: 38,
        description:
            'Ultra-fine merino polo that transitions seamlessly from the links to the boardroom. Naturally temperature-regulating.',
        specs: [
            { label: 'Fabric', value: '100% Superfine Merino' },
            { label: 'Micron', value: '17.5 micron' },
            { label: 'Care', value: 'Machine Wash Woolens Cycle' },
            { label: 'Fitting', value: 'Slim Fit' },
        ],
        reviews: REVIEWS_BLAZER,
    },

    // ─── WOMEN ──────────────────────────────────────────────────────────────────
    {
        id: 'w1',
        slug: 'asymmetric-silk-midi-dress',
        name: 'Asymmetric Silk Midi Dress',
        category: 'women',
        subcategory: 'Dresses',
        price: 385,
        images: IMG.silkDress,
        colors: [
            { name: 'Ivory', hex: '#fffff0' },
            { name: 'Onyx', hex: '#1a1a1a' },
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        badge: 'new',
        rating: 4.9,
        reviewCount: 72,
        description:
            'A sculptural midi dress in pure mulberry silk. The asymmetric hem and draped bodice create effortless movement and timeless appeal.',
        specs: [
            { label: 'Fabric', value: '100% Mulberry Silk' },
            { label: 'Momme', value: '22 Momme' },
            { label: 'Care', value: 'Dry Clean Only' },
            { label: 'Fitting', value: 'Relaxed, Draped' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'w2',
        slug: 'double-breasted-wool-blazer',
        name: 'Double-Breasted Wool Blazer',
        category: 'women',
        subcategory: 'Outerwear',
        price: 590,
        images: IMG.womenBlazer,
        colors: [
            { name: 'Cream', hex: '#f5f0e6' },
            { name: 'Charcoal', hex: '#36454f' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        badge: 'new',
        rating: 4.8,
        reviewCount: 41,
        description:
            'Power-dressing refined. This double-breasted blazer in a medium-weight wool blend is cut with broad shoulders and a nipped waist for an authoritative silhouette.',
        specs: [
            { label: 'Fabric', value: '80% Wool, 20% Polyamide' },
            { label: 'Origin', value: 'Made in France' },
            { label: 'Care', value: 'Dry Clean Only' },
            { label: 'Fitting', value: 'Structured, Regular Fit' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'w3',
        slug: 'silk-charmeuse-camisole',
        name: 'Silk Charmeuse Camisole',
        category: 'women',
        subcategory: 'Tops',
        price: 320,
        images: IMG.camisole,
        colors: [
            { name: 'Champagne', hex: '#f7e7ce' },
            { name: 'Noir', hex: '#111111' },
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        rating: 4.7,
        reviewCount: 55,
        description:
            'Liquid silk charmeuse drapes beautifully against the body. Adjustable spaghetti straps and a bias-cut hem for fluid movement.',
        specs: [
            { label: 'Fabric', value: '100% Silk Charmeuse' },
            { label: 'Origin', value: 'Made in France' },
            { label: 'Care', value: 'Hand Wash Cold' },
            { label: 'Fitting', value: 'Bias Cut, Relaxed' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'w4',
        slug: 'structured-leather-tote',
        name: 'Structured Leather Tote',
        category: 'women',
        subcategory: 'Accessories',
        price: 895,
        images: IMG.leatherBag,
        colors: [
            { name: 'Black', hex: '#111111' },
            { name: 'Cognac', hex: '#9a5324' },
        ],
        sizes: ['One Size'],
        badge: 'favourite',
        rating: 4.9,
        reviewCount: 93,
        description:
            'Hand-stitched from full-grain Italian leather. Structured enough to stand on its own, spacious enough for everyday essentials.',
        specs: [
            { label: 'Material', value: 'Full-Grain Italian Leather' },
            { label: 'Hardware', value: 'Gold-Plated Brass' },
            { label: 'Dimensions', value: '38cm × 28cm × 12cm' },
            { label: 'Lining', value: 'Suede Microfibre' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 'w5',
        slug: 'high-waist-silk-trousers',
        name: 'High-Waist Silk Trousers',
        category: 'women',
        subcategory: 'Bottoms',
        price: 420,
        images: IMG.womenTrousers,
        colors: [
            { name: 'Ivory', hex: '#fffff0' },
            { name: 'Midnight', hex: '#1a1a2e' },
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        rating: 4.6,
        reviewCount: 29,
        description:
            'Wide-leg palazzo trousers in pure silk. The high waist and floor-grazing length create an elongated, commanding silhouette.',
        specs: [
            { label: 'Fabric', value: '100% Silk Crepe' },
            { label: 'Care', value: 'Dry Clean Only' },
            { label: 'Fitting', value: 'High-Waist, Wide Leg' },
            { label: 'Rise', value: '32cm High Rise' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'w6',
        slug: 'midi-chelsea-boot',
        name: 'Midi Chelsea Boot',
        category: 'women',
        subcategory: 'Footwear',
        price: 510,
        images: IMG.boot,
        colors: [
            { name: 'Black', hex: '#111111' },
            { name: 'Cognac', hex: '#9a5324' },
        ],
        sizes: ['36', '37', '38', '39', '40', '41'],
        badge: 'new',
        rating: 4.8,
        reviewCount: 47,
        description:
            'A sleek Chelsea boot with a block heel and pointed toe. Crafted from supple calfskin leather for comfort and longevity.',
        specs: [
            { label: 'Upper', value: 'Calfskin Leather' },
            { label: 'Sole', value: 'Rubber with Leather Welt' },
            { label: 'Heel', value: '5cm Block Heel' },
            { label: 'Origin', value: 'Made in Spain' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'w7',
        slug: 'cashmere-turtleneck',
        name: 'Cashmere Turtleneck',
        category: 'women',
        subcategory: 'Tops',
        price: 275,
        images: IMG.cashmireTurtle,
        colors: [
            { name: 'Cream', hex: '#f9f4ec' },
            { name: 'Caramel', hex: '#c4a882' },
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        badge: 'new',
        rating: 4.9,
        reviewCount: 88,
        description:
            'The essential luxury layer. Fine cashmere ribbed turtleneck with a relaxed yet elegant drape. Season-less versatility.',
        specs: [
            { label: 'Fabric', value: '100% Cashmere' },
            { label: 'Gauge', value: '16-gauge fine knit' },
            { label: 'Care', value: 'Hand Wash or Dry Clean' },
            { label: 'Fitting', value: 'Relaxed Fit' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 'w8',
        slug: 'wool-skirt-midi',
        name: 'Straight Wool Midi Skirt',
        category: 'women',
        subcategory: 'Bottoms',
        price: 315,
        images: IMG.woolSkirt,
        colors: [
            { name: 'Oatmeal', hex: '#e3d5c1' },
            { name: 'Charcoal', hex: '#36454f' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.5,
        reviewCount: 33,
        description:
            'A perfectly weighted midi skirt in a textured wool boucle. Straight silhouette with a back vent for ease of movement.',
        specs: [
            { label: 'Fabric', value: '90% Wool, 10% Boucle' },
            { label: 'Length', value: 'Midi (65cm from waist)' },
            { label: 'Care', value: 'Dry Clean Only' },
            { label: 'Fitting', value: 'Straight, Mid-rise' },
        ],
        reviews: REVIEWS_BLAZER,
    },

    // ─── SKINCARE ───────────────────────────────────────────────────────────────
    {
        id: 's1',
        slug: 'brightening-vitamin-c-serum',
        name: 'Brightening Vitamin C Serum',
        category: 'skincare',
        subcategory: 'Serums',
        price: 127,
        images: IMG.serum,
        colors: [],
        sizes: ['30ml', '50ml'],
        badge: 'new',
        rating: 4.8,
        reviewCount: 204,
        description:
            'A high-potency 20% L-Ascorbic Acid serum stabilised with Vitamin E and Ferulic Acid. Visibly reduces dark spots and boosts radiance within 4 weeks.',
        specs: [
            { label: 'Active', value: '20% L-Ascorbic Acid' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'pH', value: '3.0 — 3.5' },
            { label: 'Cruelty', value: 'Cruelty Free, Vegan' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 's2',
        slug: 'barrier-repair-moisturiser',
        name: 'Barrier Repair Moisturiser',
        category: 'skincare',
        subcategory: 'Moisturisers',
        price: 98,
        images: IMG.moisturiser,
        colors: [],
        sizes: ['50ml'],
        rating: 4.9,
        reviewCount: 318,
        description:
            'A rich, occlusive moisturiser fortified with Ceramides NP, EOP & AP, Cholesterol, and Hyaluronic Acid. Restores the skin barrier overnight.',
        specs: [
            { label: 'Key Ingredients', value: 'Ceramides, Hyaluronic Acid' },
            { label: 'Skin Type', value: 'Dry, Sensitive' },
            { label: 'Fragrance', value: 'Fragrance Free' },
            { label: 'Cruelty', value: 'Cruelty Free' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 's3',
        slug: 'botanical-cleansing-oil',
        name: 'Botanical Cleansing Oil',
        category: 'skincare',
        subcategory: 'Cleansers',
        price: 78,
        images: IMG.cleanser,
        colors: [],
        sizes: ['150ml'],
        badge: 'new',
        rating: 4.7,
        reviewCount: 156,
        description:
            'A lightweight cleansing oil that emulsifies on contact with water. Infused with Squalane and Rosehip, leaving skin soft and balanced—never stripped.',
        specs: [
            { label: 'Key Ingredients', value: 'Squalane, Rosehip, Jojoba' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Texture', value: 'Lightweight Oil' },
            { label: 'Finish', value: 'Balanced, Non-Greasy' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 's4',
        slug: 'retinol-renewal-face-oil',
        name: 'Retinol Renewal Face Oil',
        category: 'skincare',
        subcategory: 'Serums',
        price: 142,
        images: IMG.faceoil,
        colors: [],
        sizes: ['30ml'],
        rating: 4.6,
        reviewCount: 89,
        description:
            'Encapsulated retinol in a luxurious facial oil base. Delivers controlled retinol release to minimise irritation while maximising renewal.',
        specs: [
            { label: 'Active', value: '0.5% Encapsulated Retinol' },
            { label: 'Skin Type', value: 'Normal, Combination' },
            { label: 'Use', value: 'PM Only' },
            { label: 'Cruelty', value: 'Cruelty Free' },
        ],
        reviews: REVIEWS_BLAZER,
        featured: true,
    },
    {
        id: 's5',
        slug: 'kaolin-brightening-mask',
        name: 'Kaolin Brightening Mask',
        category: 'skincare',
        subcategory: 'Treatments',
        price: 65,
        images: IMG.mask,
        colors: [],
        sizes: ['75ml'],
        badge: 'sale',
        rating: 4.7,
        reviewCount: 134,
        description:
            'A weekly treatment mask that deep-cleans pores with Kaolin clay while Niacinamide targets uneven skin tone for a visibly luminous complexion.',
        specs: [
            { label: 'Key Ingredients', value: 'Kaolin, Niacinamide' },
            { label: 'Skin Type', value: 'Oily, Combination' },
            { label: 'Use', value: '2× per week, 10 mins' },
            { label: 'Cruelty', value: 'Cruelty Free, Vegan' },
        ],
        reviews: REVIEWS_BLAZER,
    },
    {
        id: 's6',
        slug: 'mineral-spf50-fluid',
        name: 'Mineral SPF 50 Daily Fluid',
        category: 'skincare',
        subcategory: 'Protection',
        price: 52,
        images: IMG.spf,
        colors: [],
        sizes: ['50ml'],
        rating: 4.8,
        reviewCount: 267,
        description:
            'A lightweight, invisible mineral sunscreen with Zinc Oxide SPF 50. No white cast, no greasiness — just pure daily protection.',
        specs: [
            { label: 'SPF', value: 'SPF 50 / PA++++' },
            { label: 'Filter', value: '100% Mineral (Zinc Oxide)' },
            { label: 'Skin Type', value: 'All Skin Types' },
            { label: 'Finish', value: 'Matte, Invisible' },
        ],
        reviews: REVIEWS_BLAZER,
    },
];

export const getProductsByCategory = (category: ProductCategory) =>
    products.filter((p) => p.category === category);

export const getFeaturedProducts = () =>
    products.filter((p) => p.featured).slice(0, 5);

export const getProductBySlug = (slug: string) =>
    products.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product, limit = 4) =>
    products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, limit);

// Instagram section images (home page grid)
export const instagramImages = [
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80',
    'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=400&q=80',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
    'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&q=80',
];

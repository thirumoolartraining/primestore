import { Product } from '../types';
import { getProductImages } from '../utils/imageUtils';

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Geometry Box Set',
    slug: 'professional-geometry-box-set',
    category: 'geometry-boxes',
    description: 'Premium 8-piece geometry set with compass, divider, ruler, and protractor. Perfect for technical drawing and mathematics education.',
    features: [
      'Precision compass with extension bar',
      'Stainless steel construction',
      'Durable plastic case',
      'International quality standards',
      'Bulk packaging available'
    ],
    images: getProductImages('Professional Geometry Box Set'),
    pricing: [
      { minQuantity: 100, maxQuantity: 499, price: 680, currency: 'INR' },
      { minQuantity: 500, maxQuantity: 999, price: 624, currency: 'INR' },
      { minQuantity: 1000, price: 552, currency: 'INR' }
    ],
    moq: 100,
    orderIncrement: 50,
    material: 'Stainless Steel + ABS Plastic',
    customizable: true,
    specifications: {
      'Compass Length': '150mm',
      'Ruler Length': '150mm',
      'Protractor Size': '180°',
      'Case Dimensions': '180x90x25mm',
      'Weight': '120g'
    }
  },
  {
    id: '2',
    name: 'Premium Whiteboard Marker Set',
    slug: 'premium-whiteboard-marker-set',
    category: 'stationery',
    description: 'High-quality whiteboard markers with vibrant colors and long-lasting ink. Perfect for classrooms, offices, and training sessions.',
    features: [
      'Vibrant, low-odor ink',
      'Chisel tip for different line widths',
      'Quick-drying and non-toxic',
      'Erases cleanly without ghosting',
      'Set of 8 assorted colors'
    ],
    images: getProductImages('Premium Whiteboard Marker Set'),
    pricing: [
      { minQuantity: 100, maxQuantity: 499, price: 240, currency: 'INR' },
      { minQuantity: 500, maxQuantity: 1999, price: 216, currency: 'INR' },
      { minQuantity: 2000, price: 192, currency: 'INR' }
    ],
    moq: 100,
    orderIncrement: 50,
    material: 'Plastic + Fiber-tip',
    customizable: true,
    specifications: {
      'Tip Size': 'Chisel (2-5mm)',
      'Colors': 'Black, Blue, Red, Green, Purple, Brown, Orange, Pink',
      'Ink Volume': '2.5ml per marker',
      'Cap-off Time': 'Up to 24 hours',
      'Packaging': 'Plastic-free, recyclable'
    }
  },
  {
    id: '3',
    name: 'Precision Steel Ruler Set',
    slug: 'precision-steel-ruler-set',
    category: 'rulers',
    description: 'Professional grade stainless steel rulers in multiple lengths. Laser-etched measurements for maximum accuracy.',
    features: [
      'Laser-etched markings',
      'Corrosion resistant',
      'Multiple length options',
      'Professional grade',
      'Bulk quantity discounts'
    ],
    images: getProductImages('Precision Steel Ruler Set'),
    pricing: [
      { minQuantity: 500, maxQuantity: 1999, price: 224, currency: 'INR' },
      { minQuantity: 2000, maxQuantity: 9999, price: 192, currency: 'INR' },
      { minQuantity: 10000, price: 168, currency: 'INR' }
    ],
    moq: 100,
    orderIncrement: 50,
    material: 'Stainless Steel',
    customizable: true,
    specifications: {
      'Available Lengths': '15cm, 20cm, 30cm',
      'Thickness': '1.2mm',
      'Width': '25mm',
      'Measurement Units': 'mm/cm',
      'Accuracy': '±0.1mm'
    }
  },
  {
    id: '4',
    name: 'Professional Drawing Compass',
    slug: 'professional-drawing-compass',
    category: 'compasses',
    description: 'High-precision compass for technical drawing and mathematics. Features quick-set mechanism and extension bar.',
    features: [
      'Quick-set mechanism',
      'Extension bar included',
      'Pencil and pen attachments',
      'Professional quality',
      'Durable construction'
    ],
    images: getProductImages('Professional Drawing Compass'),
    pricing: [
      { minQuantity: 100, maxQuantity: 499, price: 1000, currency: 'INR' },
      { minQuantity: 500, maxQuantity: 1999, price: 896, currency: 'INR' },
      { minQuantity: 2000, price: 784, currency: 'INR' }
    ],
    moq: 100,
    orderIncrement: 50,
    material: 'Brass + Steel',
    customizable: false,
    specifications: {
      'Maximum Radius': '200mm',
      'Leg Length': '160mm',
      'Lead Diameter': '2mm',
      'Extension Bar': '100mm',
      'Weight': '95g'
    }
  },
  {
    id: '5',
    name: 'Scented Clipboard Collection',
    slug: 'scented-clipboard-collection',
    category: 'clipboards',
    description: 'Innovative scented clipboards available in multiple fragrances. Perfect for educational environments and promotional use.',
    features: [
      'Long-lasting fragrance',
      'Durable polypropylene',
      'Multiple scent options',
      'Bulk packaging',
      'Custom branding available'
    ],
    images: getProductImages('Scented Clipboard Collection'),
    pricing: [
      { minQuantity: 250, maxQuantity: 999, price: 544, currency: 'INR' },
      { minQuantity: 1000, maxQuantity: 4999, price: 472, currency: 'INR' },
      { minQuantity: 5000, price: 416, currency: 'INR' }
    ],
    moq: 100,
    orderIncrement: 50,
    material: 'Polypropylene',
    customizable: true,
    specifications: {
      'Size': 'A4 (297x210mm)',
      'Thickness': '3mm',
      'Clip Capacity': '50 sheets',
      'Available Scents': 'Lavender, Citrus, Apple, Vanilla',
      'Fragrance Duration': '6+ months'
    }
  },
  {
    id: '6',
    name: 'Customizable Book Cover Kit',
    slug: 'customizable-book-cover-kit',
    category: 'book-covers',
    description: 'Blank book covers ready for custom printing. High-quality material suitable for textbooks and notebooks.',
    features: [
      'Premium quality material',
      'Multiple size options',
      'Print-ready surface',
      'Tear-resistant',
      'Educational institution approved'
    ],
    images: getProductImages('Customizable Book Cover Kit'),
    pricing: [
      { minQuantity: 1000, maxQuantity: 4999, price: 68, currency: 'INR' },
      { minQuantity: 5000, maxQuantity: 19999, price: 58, currency: 'INR' },
      { minQuantity: 20000, price: 46, currency: 'INR' }
    ],
    moq: 100,
    orderIncrement: 50,
    material: 'Polypropylene Film',
    customizable: true,
    specifications: {
      'Standard Sizes': 'A4, A5, Letter',
      'Thickness': '0.15mm',
      'Print Compatibility': 'Offset, Digital, Screen',
      'Finish Options': 'Matte, Gloss',
      'Temperature Range': '-20°C to +60°C'
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'geometry-boxes', name: 'Geometry Boxes', count: products.filter(p => p.category === 'geometry-boxes').length },
  { id: 'math-sets', name: 'Math Sets', count: products.filter(p => p.category === 'math-sets').length },
  { id: 'rulers', name: 'Rulers', count: products.filter(p => p.category === 'rulers').length },
  { id: 'compasses', name: 'Compasses', count: products.filter(p => p.category === 'compasses').length },
  { id: 'clipboards', name: 'Clipboards', count: products.filter(p => p.category === 'clipboards').length },
  { id: 'book-covers', name: 'Book Covers', count: products.filter(p => p.category === 'book-covers').length }
];
/**
 * ============================================================================
 *  CAKE'S N CAFE — DEMO / EDITABLE BUSINESS DATA
 * ============================================================================
 *  Everything the cafe owner will want to change (contact details, prices,
 *  menu items, hours, reviews, gallery photos) lives in this single file.
 *  Swap the values below and the whole site updates — no need to hunt
 *  through components.
 *
 *  NOTE: phone numbers, address and reviews below are DEMO placeholders
 *  for prototype/sales purposes and must be replaced with real details
 *  before launch.
 * ============================================================================
 */

// Small helper so every photo request uses consistent, high-quality params.
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const business = {
  name: "Cake's N Cafe",
  shortName: "Cake's N Cafe",
  tagline: 'Treasure of happinesses.',
  // --- EDITABLE DEMO CONTACT INFO ---
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsappNumber: '919876543210', // digits only, country code first
  whatsappDisplay: '+91 98765 43210',
  addressLines: ['Shop No. 4, Sundarban Complex', 'MG Road, Nashik, Maharashtra 422001'],
  mapsUrl: 'https://maps.google.com/?q=Cakes+N+Cafe+Nashik',
  hoursLabel: 'Monday – Sunday',
  hoursTime: '10:00 AM – 10:00 PM',
  instagramUrl: 'https://instagram.com/', // placeholder — replace with real handle
  email: 'hello@cakesncafe.example',
}

// Real routes (multi-page site) — used identically by the desktop nav,
// mobile menu, and (plus Order) the footer via React Router's NavLink/Link.
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Cakes', to: '/cakes' },
  { label: 'Custom Cakes', to: '/custom-cakes' },
  { label: 'Cafe Menu', to: '/cafe-menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Why Us', to: '/why-bhabhare' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

// Footer shows everything the nav does, plus the Order page.
export const footerLinks = [...navLinks, { label: 'Order', to: '/order' }]

// Homepage hero carousel — each slide is its own clickable destination.
// Images are reused from elsewhere in this file's photo set (already
// verified, on-brand photography) rather than sourcing new ones.
export const heroSlides = [
  {
    image: unsplash('1578985545062-69928b1d9587', 1600),
    title: 'Chocolate Truffle Cake',
    description: 'Rich cocoa sponge layered with silky chocolate ganache.',
    cta: 'Explore Cakes',
    route: '/cakes',
  },
  {
    image: unsplash('1621303837174-89787a7d4729', 1600),
    title: 'Made For Your Celebrations',
    description: 'Birthdays, anniversaries or just because — a cake designed around you.',
    cta: 'Create Your Cake',
    route: '/custom-cakes',
  },
  {
    image: unsplash('1497636577773-f1231844b336', 1600),
    title: 'Good Cakes Deserve Good Coffee',
    description: 'Coffee, pastries and cafe favourites, made fresh every day.',
    cta: 'Explore Cafe Menu',
    route: '/cafe-menu',
  },
  {
    image: unsplash('1611293388250-580b08c4a145', 1600),
    title: 'A Cake For Every Occasion',
    description: 'From birthdays to anniversaries, freshly baked and beautifully finished.',
    cta: 'Browse Cakes',
    route: '/cakes',
  },
  {
    image: unsplash('1517433670267-08bbd4be890f', 1600),
    title: "Step Inside Cake's N Cafe",
    description: 'Drop by for a coffee, a pastry, or to plan your next celebration.',
    cta: 'Visit Us',
    route: '/contact',
  },
]

export const categoryStrip = [
  { label: 'Cakes', icon: 'Cake', to: '/cakes', image: unsplash('1578985545062-69928b1d9587', 200) },
  { label: 'Custom Cakes', icon: 'PartyPopper', to: '/custom-cakes', image: unsplash('1621303837174-89787a7d4729', 200) },
  { label: 'Pastries', icon: 'Croissant', to: '/cafe-menu', image: unsplash('1555507036-ab1f4038808a', 200) },
  { label: 'Desserts', icon: 'IceCreamCone', to: '/cafe-menu', image: unsplash('1551024506-0bccd828d307', 200) },
  { label: 'Coffee', icon: 'Coffee', to: '/cafe-menu', image: unsplash('1497636577773-f1231844b336', 200) },
  { label: 'Beverages', icon: 'CupSoda', to: '/cafe-menu', image: unsplash('1497534446932-c925b458314e', 200) },
  { label: 'Cafe Snacks', icon: 'Sandwich', to: '/cafe-menu', image: unsplash('1553909489-cd47e0907980', 200) },
]

export const products = [
  {
    id: 'choco-truffle',
    name: 'Chocolate Truffle Cake',
    category: 'Cakes',
    tag: 'Chocolate',
    description: 'Rich cocoa sponge layered with silky chocolate ganache.',
    price: 650,
    image: unsplash('1578985545062-69928b1d9587'),
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cake',
    category: 'Cakes',
    tag: 'Classic',
    description: 'Velvety cocoa sponge with cream cheese frosting.',
    price: 700,
    image: unsplash('1621303837174-89787a7d4729'),
  },
  {
    id: 'black-forest',
    name: 'Black Forest Cake',
    category: 'Cakes',
    tag: 'Chocolate',
    description: 'Classic dark chocolate sponge, whipped cream & cherries.',
    price: 600,
    image: unsplash('1602351447937-745cb720612f'),
  },
  {
    id: 'pineapple-cake',
    name: 'Pineapple Cake',
    category: 'Cakes',
    tag: 'Classic',
    description: 'Light vanilla sponge with fresh cream and fruit chunks.',
    price: 550,
    image: unsplash('1611293388250-580b08c4a145'),
  },
  {
    id: 'butterscotch',
    name: 'Butterscotch Cake',
    category: 'Cakes',
    tag: 'Classic',
    description: 'Caramelised butterscotch sponge with praline crunch.',
    price: 600,
    image: unsplash('1572897305697-f8adb93dae8f'),
  },
  {
    id: 'rasmalai-cake',
    name: 'Rasmalai Cake',
    category: 'Cakes',
    tag: 'Fusion',
    description: 'A fusion favourite — pale malai cream with a hint of cardamom.',
    price: 650,
    image: unsplash('1757519740947-eef07a74c4ab'),
  },
  {
    id: 'choco-pastry',
    name: 'Chocolate Pastry',
    category: 'Pastries',
    description: 'A generous slice of layered chocolate sponge & cream.',
    price: 120,
    image: unsplash('1571115177098-24ec42ed204d'),
  },
  {
    id: 'brownie',
    name: 'Brownie with Ice Cream',
    category: 'Desserts',
    description: 'Warm fudgy brownie, vanilla scoop & caramel drizzle.',
    price: 180,
    image: unsplash('1551024506-0bccd828d307'),
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    category: 'Coffee',
    description: 'Chilled and frothy, brewed fresh, just the right sweetness.',
    price: 150,
    image: unsplash('1461023058943-07fcbe16d735'),
  },
  {
    id: 'cafe-sandwich',
    name: 'Cafe Sandwich',
    category: 'Snacks',
    description: 'Grilled sandwich loaded with veggies, cheese & herbs.',
    price: 160,
    image: unsplash('1553909489-cd47e0907980'),
  },
]

export const customCakeCategories = [
  {
    id: 'birthday',
    label: 'Birthday Cakes',
    description: 'Fun, colourful and made to make someone’s day.',
    image: unsplash('1621303837174-89787a7d4729', 900),
  },
  {
    id: 'theme',
    label: 'Theme Cakes',
    description: 'From cartoons to cricket — any theme, any age.',
    image: unsplash('1571506165871-ee72a35bc9d4', 900),
  },
  {
    id: 'anniversary',
    label: 'Anniversary Cakes',
    description: 'Elegant designs for milestones worth celebrating.',
    image: unsplash('1565958011703-44f9829ba187', 900),
  },
  {
    id: 'custom',
    label: 'Custom Cakes',
    description: 'Your idea, your flavours — we bring it to life.',
    image: unsplash('1588195538326-c5b1e9f80a1b', 900),
  },
]

// Products shown in the "Customer Favourites" section — a curated subset of
// `products`, referenced by id so it always reflects the current data/prices.
export const bestsellerProductIds = [
  'choco-truffle',
  'red-velvet',
  'butterscotch',
  'black-forest',
  'choco-pastry',
  'cold-coffee',
]

// Cafe-menu highlights shown as a compact list (not priced product cards) in
// the "Stay For The Coffee" section.
export const cafeMenuHighlights = [
  { label: 'Coffee', icon: 'Coffee' },
  { label: 'Cold Coffee', icon: 'CupSoda' },
  { label: 'Sandwiches', icon: 'Sandwich' },
  { label: 'Pizza', icon: 'Pizza' },
  { label: 'Snacks', icon: 'Cookie' },
  { label: 'Desserts', icon: 'IceCreamCone' },
]

export const brandStory = {
  eyebrow: 'Our Story',
  heading: 'Made With Care',
  paragraphs: [
    "Cake's N Cafe is about freshly baked cakes, desserts and cafe favourites, made for everyday cravings and the moments worth celebrating.",
    'Every cake is baked to order and finished by hand — simple ingredients, done properly.',
  ],
  image: unsplash('1517686469429-8bdb88b9f907', 1100),
}

export const promoStrip = {
  heading: 'Planning a Celebration?',
  subtext: 'Order your custom cake in advance.',
  cta: 'Enquire Now',
}

export const occasionOptions = [
  'Birthday',
  'Anniversary',
  'Wedding',
  'Baby Shower',
  'Festive / Celebration',
  'Just Because',
  'Other',
]

export const cakeTypeOptions = [
  'Chocolate Truffle',
  'Red Velvet',
  'Black Forest',
  'Pineapple',
  'Butterscotch',
  'Fondant / Theme Cake',
  'Not Sure Yet — Suggest Something',
]

export const whyBhabhare = [
  {
    icon: 'Wheat',
    title: 'Freshly Baked',
    description: 'Baked in small batches so what you get is never left over.',
    image: unsplash('1517686469429-8bdb88b9f907', 900),
  },
  {
    icon: 'Flame',
    title: 'Quality Ingredients',
    description: 'Real butter, fresh cream and quality cocoa — every single time.',
    image: unsplash('1481391319762-47dff72954d9', 900),
  },
  {
    icon: 'PenTool',
    title: 'Custom Cakes',
    description: 'From simple to elaborate — we design around your vision.',
    image: unsplash('1588195538326-c5b1e9f80a1b', 900),
  },
  {
    icon: 'PartyPopper',
    title: 'Made For Celebrations',
    description: 'Birthdays, anniversaries, and everyday little wins.',
    image: unsplash('1621303837174-89787a7d4729', 900),
  },
]

// Large image for the "Stay For The Coffee" cafe section.
export const cafeSectionImage = unsplash('1521017432531-fbd92d768814', 1100)

export const galleryImages = [
  { image: unsplash('1464195244916-405fa0a82545', 800), alt: 'Freshly baked cookies in a basket', tall: false },
  { image: unsplash('1555507036-ab1f4038808a', 800), alt: 'Croissant dusted with sugar', tall: true },
  { image: unsplash('1486427944299-d1955d23e34d', 800), alt: 'Row of pastel frosted cupcakes', tall: false },
  { image: unsplash('1587248720327-8eb72564be1e', 800), alt: 'Fresh baked lattice pie', tall: true },
  { image: unsplash('1519869325930-281384150729', 800), alt: 'Cupcakes with rainbow sprinkles', tall: false },
  { image: unsplash('1481391319762-47dff72954d9', 800), alt: 'Assorted chocolate box', tall: false },
  { image: unsplash('1517686469429-8bdb88b9f907', 800), alt: 'Hands kneading fresh dough', tall: true },
  { image: unsplash('1495147466023-ac5c588e2e94', 800), alt: 'Fruit tarts arranged in a grid', tall: false },
  { image: unsplash('1470124182917-cc6e71b22ecc', 800), alt: 'Bowl of colourful macarons', tall: false },
  { image: unsplash('1497534446932-c925b458314e', 800), alt: 'Strawberry mint cooler', tall: true },
  { image: unsplash('1533134242443-d4fd215305ad', 800), alt: 'Blueberry cheesecake slice', tall: false },
  { image: unsplash('1626803775151-61d756612f97', 800), alt: 'Chocolate tart with fresh figs', tall: false },
]

export const instagramImages = [
  unsplash('1495474472287-4d71bcdd2085', 500),
  unsplash('1509785307050-d4066910ec1e', 500),
  unsplash('1550617931-e17a7b70dce2', 500),
  unsplash('1599785209707-a456fc1337bb', 500),
  unsplash('1524351199678-941a58a3df50', 500),
  unsplash('1519676867240-f03562e64548', 500),
]

export const testimonials = [
  {
    name: 'Priya',
    rating: 5,
    review: 'Absolutely loved the chocolate cake. Fresh, soft and beautifully decorated.',
  },
  {
    name: 'Rohan',
    rating: 5,
    review: 'Great place for coffee and desserts. The atmosphere is really nice.',
  },
  {
    name: 'Ayesha',
    rating: 5,
    review: 'The custom cake looked exactly like what we wanted. Very happy with how it turned out.',
  },
  {
    name: 'Karan',
    rating: 4,
    review: 'Good variety on the menu and quick service. The cold coffee is a personal favourite.',
  },
  {
    name: 'Meera',
    rating: 5,
    review: 'Ordered a last-minute birthday cake and they managed to deliver something lovely.',
  },
  {
    name: 'Devansh',
    rating: 5,
    review: 'Cosy little cafe, perfect for catching up with friends over pastries.',
  },
]

export const heroBadge = "CAKE'S N CAFE"

export const heroImages = {
  main: unsplash('1578985545062-69928b1d9587', 1100),
  floatingCard: unsplash('1587668178277-295251f900ce', 400),
}

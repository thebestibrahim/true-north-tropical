export type Post = {
  slug: string
  category: string
  title: string
  subtitle?: string
  excerpt: string
  image: string
  readTime: string
  date: string
  featured?: boolean
  body: Section[]
}

export type Section = {
  type: 'paragraph' | 'heading' | 'list' | 'divider'
  text?: string
  items?: string[]
}

export const posts: Post[] = [
  {
    slug: 'seed-scarification',
    category: 'Home Gardening',
    title: 'Seed Scarification: How to give your seeds a head start in Zone 5',
    excerpt:
      'Not all seeds should be treated the same way. Some are built for survival — thick shells, tough coats — designed to travel before they sprout. In a short growing season, that delay costs you weeks.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    readTime: '6 min read',
    date: 'March 2026',
    featured: true,
    body: [
      { type: 'paragraph', text: 'Every year around this time I pull out my seed trays, shake the dust off old packets and sort through what I saved from seasons past. It is one of my favourite rituals. There is something steadying about lining up seeds and thinking through what this land will grow next.' },
      { type: 'paragraph', text: 'But here is something I tell every new grower: Not all seeds should be treated the same way.' },
      { type: 'paragraph', text: 'Some seeds are easy. Give them soil and water and they are up in days. Others are built for survival. Thick outer coats. Tough shells. Designed to travel through birds and animals before they ever think about sprouting.' },
      { type: 'paragraph', text: 'That process makes perfect sense in the wild or in warmer climates with long growing seasons. In Zone 5 it can cost you weeks. And sometimes the harvest. In this climate every day matters. Time is the one thing we cannot afford to lose.' },
      { type: 'paragraph', text: 'So we step in to remove the delay. That process is called scarification.' },
      { type: 'heading', text: 'Why bother scarifying at all' },
      { type: 'paragraph', text: 'Hard coated seeds are designed to survive digestion, resist sprouting in cold soil and travel long distances before waking up. That outer shell slows water from getting in and until moisture penetrates nothing happens. Scarification simply helps water enter faster.' },
      { type: 'paragraph', text: 'Here are the methods I actually use on the farm and the crops I have tested them on.' },
      { type: 'heading', text: 'Sanding' },
      { type: 'paragraph', text: 'This is my go-to for larger hard seeds. Take a piece of medium grit sandpaper, an emery board or even smooth pavement. Rub the seed gently until you see a faint lighter spot underneath. Just enough to thin the coat. If the seeds are small, place a few between two sheets of sandpaper and rub lightly.' },
      { type: 'paragraph', text: 'This works well for:' },
      { type: 'list', items: ['Fio Fio', 'Bambara nut', 'Lima beans', 'Nasturtiums', 'Luffa'] },
      { type: 'paragraph', text: 'You are not trying to open the seed. Just weaken the coat.' },
      { type: 'heading', text: 'Nicking' },
      { type: 'paragraph', text: 'When sanding feels slow or the shell is extra thick I reach for nail clippers or scissors. Snip a very small piece off the edge of the seed coat. Stay away from the eye or embryo. This works well for:' },
      { type: 'list', items: ['Horned melon', 'Squash', 'Watermelon', 'Ugu / fluted pumpkin'] },
      { type: 'paragraph', text: 'It is fast and gives very even germination, especially when you need a strong uniform stand in the field.' },
      { type: 'heading', text: 'Soaking' },
      { type: 'paragraph', text: 'If you have more time than tools, soaking is simple and effective. Place the seeds in warm water and leave them for a few hours or overnight. They will swell slightly. That swelling tells you the seed is rehydrated and ready.' },
      { type: 'paragraph', text: 'I use this method for:' },
      { type: 'list', items: ['Maize', 'Pepper', 'Okra', 'Roselle', 'All bean types', 'Spinach'] },
      { type: 'paragraph', text: 'Soaking is especially helpful when direct seeding. It gives the seed a head start in cool soil. Keep the water warm not hot — under 66°C. Cooked seeds will not grow.' },
      { type: 'heading', text: 'Scalding' },
      { type: 'paragraph', text: 'This one makes people nervous but it works beautifully for small seeds with very tough shells. Bring water to a rolling boil. Pour it over the seeds and let them sit for two to five minutes. Remove them immediately, spread them out to dry and plant right away. Do not leave them long enough to cook.' },
      { type: 'paragraph', text: 'Jute responds well to a short scald. I have also achieved similar results during very hot Ontario summers by placing seeds in a sealed black bucket in direct sun for a couple of hours. The heat buildup inside mimics the scalding process.' },
      { type: 'heading', text: 'A few important tips' },
      { type: 'list', items: ['Scarify right before planting', 'Keep your growing medium consistently moist', 'Once the inner tissue is exposed, do not let seeds dry out'] },
      { type: 'paragraph', text: 'Scarified seeds germinate faster. They germinate more evenly. They reduce gaps in the bed. And in a short growing season, that head start makes the difference between harvest and disappointment.' },
      { type: 'paragraph', text: 'Seed starting is not just about putting something in soil and hoping. Nature designed these seeds to survive extremes. Our job as growers is to create the right conditions for them to thrive here.' },
    ],
  },
  {
    slug: 'african-seeds-abroad',
    category: 'Farm Story',
    title: 'Why it\'s so hard to find good African seeds abroad — and what we\'re doing about it',
    excerpt:
      'You search. You order. You wait. Then the seeds arrive and they don\'t grow, or what comes up doesn\'t taste like what you remember. It\'s frustrating. And it\'s more common than people think.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop&q=80',
    readTime: '5 min read',
    date: 'February 2026',
    featured: false,
    body: [
      { type: 'paragraph', text: 'If you\'ve ever tried to find proper African seeds outside home, you already know the struggle.' },
      { type: 'paragraph', text: 'You search. You order. You wait. Then the seeds come, and either they don\'t grow, or what comes up doesn\'t taste like what you remember. It\'s frustrating. And it\'s more common than people think.' },
      { type: 'heading', text: 'The supply problem' },
      { type: 'paragraph', text: 'Getting real, viable seeds from Africa isn\'t always straightforward. Delays happen. Storage conditions matter. Sometimes seeds sit too long before they reach you. By the time they arrive, they\'ve lost strength. That\'s why germination can be low or uneven.' },
      { type: 'heading', text: 'The climate gap' },
      { type: 'paragraph', text: 'Most of these crops were never designed for Canadian weather. Short summers. Cold nights. Late starts. So even when you get good seeds, they don\'t always perform the way they should. They need to be adapted.' },
      { type: 'heading', text: 'The authenticity issue' },
      { type: 'paragraph', text: 'Not everything labeled "African seed" is actually what you think it is. Some have been cross-bred. Some have lost their original traits. And when that happens, the flavour changes. The texture changes. The food doesn\'t feel like home anymore.' },
      { type: 'heading', text: 'Where we come in' },
      { type: 'paragraph', text: 'This is exactly why we do what we do at True North Tropical. We test everything in our own garden. We grow it here first. We make sure it can handle this climate before it ever gets to you. And we focus on keeping the original taste and purpose of each crop.' },
      { type: 'heading', text: 'Why this matters' },
      { type: 'paragraph', text: 'This isn\'t just about seeds. It\'s about food that connects you to something familiar. Meals that taste right. Crops that actually grow where you are.' },
      { type: 'paragraph', text: 'You shouldn\'t have to guess if your seeds will work. You should be able to plant, grow, and harvest with confidence. That\'s what we\'re here for.' },
    ],
  },
  {
    slug: 'medicinal-nigerian-plants',
    category: 'Ingredient Guide',
    title: 'From soil to wellness: the medicinal benefits of Nigerian plants',
    excerpt:
      'Bitter leaf, ewedu, scent leaf, tete. These plants aren\'t just ingredients — they\'re medicine. A look at the healing properties of the crops we grow and why they belong in your kitchen.',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=80',
    readTime: '5 min read',
    date: 'January 2026',
    featured: false,
    body: [
      { type: 'paragraph', text: 'The thrill of nurturing Nigerian plants is truly unmatched. As we dive into the world of these powerful herbs, we\'re not just planting seeds — we\'re sowing the promise of wellness.' },
      { type: 'paragraph', text: 'Imagine transforming your space into a vibrant, health-boosting haven with these incredible plants. Here\'s how these botanical treasures can enrich both your garden and your well-being.' },
      { type: 'heading', text: 'Bitter Leaves (Ewuro)' },
      { type: 'paragraph', text: 'Bitter Leaves, or Ewuro, may have a sharp taste, but they\'re loaded with natural compounds that help manage blood sugar levels and combat malaria. These leaves are often cooked into soups, where their bitterness is mellowed, but their health benefits shine through. A little bitterness goes a long way in promoting wellness.' },
      { type: 'heading', text: 'Ewedu (Jute)' },
      { type: 'paragraph', text: 'Ewedu, or jute leaves, are a staple in Nigerian cuisine, known for their slimy texture and rich nutritional profile. High in vitamins A and C, ewedu supports good eyesight and boosts the immune system. When cooked into soups, it not only enhances the dish but also provides a gentle digestive aid.' },
      { type: 'heading', text: 'Scent Leaf (African Basil)' },
      { type: 'paragraph', text: 'Known as "Efirin" in Nigeria, this plant is more than just a pretty smell. It\'s a natural remedy for respiratory infections, thanks to its antibacterial and antifungal qualities. Adding this fragrant herb to teas and stews not only uplifts the flavour but also supports respiratory health.' },
      { type: 'heading', text: 'Tete (African Spinach)' },
      { type: 'paragraph', text: 'Tete, or African Spinach, is the unsung hero of leafy greens. Rich in iron, calcium, and vitamins, it\'s a key player in traditional remedies for anaemia and overall health. Once these are growing, add them to everything from salads to stews for pure green goodness.' },
      { type: 'heading', text: 'Ose Nsukka (Cameroon Pepper)' },
      { type: 'paragraph', text: 'These tiny, potent peppers are famous for spicing up dishes and adding a health boost with capsaicin — known for its pain-relieving and metabolism-boosting properties.' },
      { type: 'heading', text: 'Shoko (Lagos Spinach)' },
      { type: 'paragraph', text: 'Shoko is another leafy vegetable rich in iron and calcium. It\'s used to boost the immune system, improve skin health, and treat anaemia. A versatile green that can be cooked into a variety of dishes, adding both flavour and nutrition.' },
      { type: 'heading', text: 'Zobo (Sorrel)' },
      { type: 'paragraph', text: 'With its vivid red hue, zobo is packed with antioxidants, making it great for reducing blood pressure and boosting liver health. It\'s also the secret ingredient for a classic, invigorating drink that delivers a significant health boost.' },
    ],
  },
  {
    slug: 'seed-starting-beginners',
    category: 'Home Gardening',
    title: 'Seed starting for beginners: what they don\'t tell you on the packet',
    excerpt:
      'There\'s always that moment. You get your seeds and suddenly want to plant everything at once. You look outside, see a bit of sun, and think — maybe it\'s time. It\'s not time.',
    image: 'https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=800&auto=format&fit=crop&q=80',
    readTime: '4 min read',
    date: 'December 2025',
    featured: false,
    body: [
      { type: 'paragraph', text: 'There\'s always that moment. You get your seeds, and suddenly you want to plant everything at once. You look outside, see a bit of sun, and think… maybe it\'s time.' },
      { type: 'paragraph', text: 'It\'s not time. And if you\'ve ever started too early, you already know how that story ends. Plants taking over your house like unexpected guests that refuse to leave.' },
      { type: 'heading', text: 'Timing matters more than excitement' },
      { type: 'paragraph', text: 'Seed packets usually tell you when to start. Four weeks before last frost means four weeks — not "I\'m feeling lucky today." In our area, that matters. Start too early and your plants outgrow your space. Start too late and you miss your harvest window.' },
      { type: 'heading', text: 'Containers don\'t need to be fancy' },
      { type: 'paragraph', text: 'You don\'t need to buy anything special. Old yogurt cups, coffee cups, reused containers all work. Just make sure they have drainage holes. Roots need air just as much as they need water.' },
      { type: 'heading', text: 'Soil matters more than the container' },
      { type: 'paragraph', text: 'Use a light seed-starting mix. Garden soil is too heavy and can carry disease. If seedlings suddenly fall over, that\'s usually why. Keep it light. Keep it clean.' },
      { type: 'heading', text: 'Light and temperature' },
      { type: 'paragraph', text: 'Seeds don\'t all need light to start, but once they sprout, they need it immediately. If your seedlings look long and stretched, they\'re asking for more light. If they\'re leaning hard, they\'re searching.' },
      { type: 'heading', text: 'Watering' },
      { type: 'paragraph', text: 'Keep soil moist, not soaked. Too dry, seeds won\'t start. Too wet, roots struggle. Bottom watering works best. Fill a tray, let the pot soak it up — don\'t pour from the top.' },
      { type: 'heading', text: 'Depth matters' },
      { type: 'paragraph', text: 'Some seeds barely need covering. Others need a bit more depth. If you\'re not sure, plant a few shallow and a few deeper. The seeds will tell you what works.' },
      { type: 'paragraph', text: 'Seed starting isn\'t complicated. It just feels that way at first. Once you understand timing, light, and moisture, everything becomes easier. Pick a few crops you actually want to eat. Start there.' },
    ],
  },
  {
    slug: 'seed-saving',
    category: 'Farm Story',
    title: 'Seed saving: why growing your own is an act of preservation',
    excerpt:
      'For those of us growing cultural crops like Egusi melon, Okra, Amaranth, and Ewedu, keeping these crops alive and saving their seeds is a small miracle — and kind of a flex.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    readTime: '6 min read',
    date: 'November 2025',
    featured: false,
    body: [
      { type: 'paragraph', text: 'For those of us growing cultural crops like Egusi melon, Okra, Amaranth, Ewedu (Jute / Molokhia), keeping these crops alive and saving their seeds is a small miracle — and kind of a flex.' },
      { type: 'heading', text: 'Why save seeds?' },
      { type: 'paragraph', text: 'Seed sovereignty is about owning your food future. With commercial seed suppliers dominating the market, saving your own seeds protects traditional crops and ensures cultural varieties continue to thrive. Plus, it keeps biodiversity strong — which is key for food security and preserving heritage. Whether it\'s Okra or Roselle (Zobo), seed saving ensures these gems are around for next year.' },
      { type: 'heading', text: 'Seed selection: only the best' },
      { type: 'paragraph', text: 'To save seeds, start with open-pollinated varieties. These are like the real MVPs of the seed world — they reproduce true to type, meaning next year\'s plants will be just as vibrant as this year\'s. Avoid hybrid seeds; while strong, they tend to play tricks and won\'t grow true to their parent traits.' },
      { type: 'paragraph', text: 'Save seeds from the healthiest and strongest plants. Don\'t eat your tomorrow today! That big, beautiful plant looks good, but saving its seeds means you\'ll have many more of that next season.' },
      { type: 'heading', text: 'Timing: let them age like fine wine' },
      { type: 'paragraph', text: 'You wouldn\'t eat your yam before it\'s cooked, right? The same applies to seeds. Let your plants mature fully — Okra, Amaranth, Eggplants, and the rest need time. Wait for the pods and fruits to dry completely on the plant. If you struggle with critters, snip the seed heads and dry them on racks or trays. The sun and wind do a great job of drying seeds.' },
      { type: 'heading', text: 'Storage: label everything' },
      { type: 'paragraph', text: 'Once you\'ve harvested your seeds, treat them like treasure. Dry them thoroughly, and store them in a cool, dark place — glass jars or paper envelopes work well. Don\'t forget to label. There\'s nothing worse than planting mystery crops in the wrong spot.' },
      { type: 'heading', text: 'Overcoming the challenges' },
      { type: 'paragraph', text: 'Yes, growing Roselle or Ewedu in Zone 5 might make you question your life choices — but relax, you\'ve got this. Start your seeds indoors early to give them a fighting chance. By extending the growing season, you\'ll ensure these tropical stars have time to mature. Trust me, those fresh Ewedu leaves are worth the extra effort.' },
      { type: 'heading', text: 'Share the seed love' },
      { type: 'paragraph', text: 'Now that you\'re a seed-saving guru, it\'s time to share. Seed saving is like party jollof — it\'s better with friends. Join a local seed-saving group or organise a seed swap with fellow growers in the diaspora. By growing and saving these seeds here, we\'re not just tending gardens; we\'re tending traditions.' },
    ],
  },
  {
    slug: 'joy-of-gardening',
    category: 'Farm Gist',
    title: 'Why being in the garden just feels right',
    excerpt:
      'There\'s something about being in the garden that shifts things. You step outside, touch the soil, and without trying too hard, your mind slows down. It\'s not just you.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
    readTime: '4 min read',
    date: 'October 2025',
    featured: false,
    body: [
      { type: 'paragraph', text: 'There\'s something about being in the garden that shifts things. You step outside, touch the soil, and without trying too hard, your mind slows down. It\'s not just you. Gardening does something real for both your body and your head.' },
      { type: 'heading', text: 'It gives your mind a break' },
      { type: 'paragraph', text: 'Life moves fast. Work, family, responsibilities — it adds up. But when you\'re in the garden, your focus changes. You\'re thinking about watering, spacing, what\'s growing well. Simple things. And somehow, that simplicity clears your mind. Even 20 minutes outside can reset your day.' },
      { type: 'heading', text: 'It gets your body moving' },
      { type: 'paragraph', text: 'You don\'t need a gym session to feel it. Digging, planting, carrying soil, bending, stretching — it all adds up. By the end of a good garden day, you\'ve worked your whole body without even thinking about it. And you sleep better too.' },
      { type: 'heading', text: 'It teaches patience without pressure' },
      { type: 'paragraph', text: 'Plants don\'t rush. You plant. You wait. You check. You adjust. Over time, you learn to slow down and trust the process. That lesson carries into everything else.' },
      { type: 'heading', text: 'And then there\'s the food' },
      { type: 'paragraph', text: 'When you grow something yourself, it hits different. The flavour is stronger. The connection is deeper. You\'re not just eating. You\'re enjoying something you took part in.' },
      { type: 'paragraph', text: 'Gardening doesn\'t need to be perfect. Even a few containers on your balcony or a small patch in your backyard can change how you feel day to day. Start small. One crop. One bed. One pot. You\'ll figure the rest out as you go.' },
    ],
  },
]

export const featuredPost = posts.find(p => p.featured)!
export const restPosts = posts.filter(p => !p.featured)

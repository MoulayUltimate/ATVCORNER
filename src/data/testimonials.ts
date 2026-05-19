// Customer testimonial roster.
// Localized 1-line quotes live in `reviews.quotes[i]` in each dictionary
// and are matched by array index. Dates are localized at render time.
export type Testimonial = {
  id: string;
  name: string;
  country: string;
  flag: string;
  /** Days ago — rendered as "X days ago" / "il y a X jours" / "vor X Tagen" */
  daysAgo: number;
};

export const testimonials: Testimonial[] = [
  { id: "t1",  name: "Marc D.",   country: "France",      flag: "🇫🇷", daysAgo: 2 },
  { id: "t2",  name: "Sophie L.", country: "Belgique",    flag: "🇧🇪", daysAgo: 3 },
  { id: "t3",  name: "Lukas M.",  country: "Deutschland", flag: "🇩🇪", daysAgo: 4 },
  { id: "t4",  name: "Anna K.",   country: "Österreich",  flag: "🇦🇹", daysAgo: 5 },
  { id: "t5",  name: "James R.",  country: "UK",          flag: "🇬🇧", daysAgo: 6 },
  { id: "t6",  name: "Daniel B.", country: "Suisse",      flag: "🇨🇭", daysAgo: 8 },
  { id: "t7",  name: "Mike T.",   country: "USA",         flag: "🇺🇸", daysAgo: 10 },
  { id: "t8",  name: "Julien P.", country: "Canada",      flag: "🇨🇦", daysAgo: 12 },
  { id: "t9",  name: "Sarah O.",  country: "Ireland",     flag: "🇮🇪", daysAgo: 14 },
  { id: "t10", name: "Marco F.",  country: "Italia",      flag: "🇮🇹", daysAgo: 18 },
  { id: "t11", name: "Carlos G.", country: "España",      flag: "🇪🇸", daysAgo: 21 },
  { id: "t12", name: "Hans V.",   country: "Nederland",   flag: "🇳🇱", daysAgo: 25 },
];

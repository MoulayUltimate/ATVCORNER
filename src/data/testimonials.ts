// Customer testimonial roster.
// The localized 1-line quotes live in dictionaries under `reviews.quotes[i]`
// and are matched by array index. Keep this list in sync with the dictionaries.
export type Testimonial = {
  id: string;
  name: string;
  country: string; // localized in component if needed; kept short here
  flag: string; // emoji
};

export const testimonials: Testimonial[] = [
  { id: "t1",  name: "Marc D.",     country: "France",      flag: "🇫🇷" },
  { id: "t2",  name: "Sophie L.",   country: "Belgique",    flag: "🇧🇪" },
  { id: "t3",  name: "Lukas M.",    country: "Deutschland", flag: "🇩🇪" },
  { id: "t4",  name: "Anna K.",     country: "Österreich",  flag: "🇦🇹" },
  { id: "t5",  name: "James R.",    country: "UK",          flag: "🇬🇧" },
  { id: "t6",  name: "Daniel B.",   country: "Suisse",      flag: "🇨🇭" },
  { id: "t7",  name: "Mike T.",     country: "USA",         flag: "🇺🇸" },
  { id: "t8",  name: "Julien P.",   country: "Canada",      flag: "🇨🇦" },
  { id: "t9",  name: "Sarah O.",    country: "Ireland",     flag: "🇮🇪" },
  { id: "t10", name: "Marco F.",    country: "Italia",      flag: "🇮🇹" },
  { id: "t11", name: "Carlos G.",   country: "España",      flag: "🇪🇸" },
  { id: "t12", name: "Hans V.",     country: "Nederland",   flag: "🇳🇱" },
];

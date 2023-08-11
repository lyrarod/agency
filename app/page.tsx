import {
  Blog,
  Hero,
  Team,
  About,
  Brands,
  Contact,
  Pricing,
  Services,
  CallToAction,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Contact />
      <Blog />
    </main>
  );
}

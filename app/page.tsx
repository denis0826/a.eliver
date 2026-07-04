import {
  Header,
  Hero,
  About,
  Products,
  WhyChooseUs,
  Contact,
  Footer,
  MessengerChat,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <MessengerChat />
    </>
  );
}

import {
  Navbar,
  Hero,
  PhonePreview,
  Features,
  VideoSection,
  FeatureCards,
  Footer,
} from "./components";

export default function AppPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhonePreview />
        <Features />
        <VideoSection />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}

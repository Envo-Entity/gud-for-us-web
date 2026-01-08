import {
  Navbar,
  Hero,
  PhoneScrollPreview,
  ScoresSection,
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
        <PhoneScrollPreview />
        <ScoresSection />
        <VideoSection />
        <FeatureCards />
      </main>
      <Footer />
    </>
  );
}

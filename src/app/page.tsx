
import { ProjectsSection } from './components/card-grid';
import { ExperienceSection } from './components/experience-grid';
import { Footer } from './components/footer';
import { HeroText } from './components/hero-text';
import { HeroTitle } from './components/hero-title';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroTitle />
      <HeroText />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
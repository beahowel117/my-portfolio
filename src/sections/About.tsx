import SectionNavigation from "../components/SectionNavigation";
import BubbleDetail from "../components/BubbleDetail";

interface AboutProps {
  onBack: () => void;
  onNext: () => void;
}

const About = ({ onBack, onNext }: AboutProps) => {
  return (
    <SectionNavigation onBack={onBack} onNext={onNext}>
        <div className="ocean-intro">
            <p className="ocean-eyebrow">A little about me</p>
            <h2>Curious by nature. Driven to build.</h2>
            <p>
            My background brings together software engineering, technical
            leadership, program delivery, and operations. I'm interested in using
            technology and thoughtful collaboration to make meaningful things happen.
            </p>
        </div>
  </SectionNavigation>
  );
};

export default About;
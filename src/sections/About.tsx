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
            My background brings together software engineering, technical leadership, program delivery, and operations. I enjoy solving complex problems, connecting people and ideas, and using technology to make a meaningful impact.

            I'm passionate about conservation, wildlife, and the relationship between people and the natural world. I believe technology, thoughtful leadership, and collective action can help create a more sustainable future.

            Outside of work, I love ballet, running, water sports, and spending time in nature.
            </p>
        </div>
  </SectionNavigation>
  );
};

export default About;
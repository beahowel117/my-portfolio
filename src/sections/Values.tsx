import { ArrowLeft, ArrowUp } from "lucide-react";

interface ValuesProps {
  onBack: () => void;
  isMobile: boolean;
}

const Values = ({ onBack, isMobile }: ValuesProps) => {
  return (
    <div className="values-content">
      {!isMobile && (
        <button
          className="project-back"
          onClick={onBack}
        >
          <ArrowLeft size={16} />
          Return to surface
        </button>
      )}

      <div className="ocean-intro">
        <p className="ocean-eyebrow">What matters</p>
        <h2>Purpose and perspective</h2>
        <p>We'll build this section later.</p>
      </div>

      {isMobile && (
        <button
          className="bubble-button"
          onClick={onBack}
        >
          <span>Return to surface</span>
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Values;

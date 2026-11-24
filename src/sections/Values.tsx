import { ArrowLeft, ArrowUp } from "lucide-react";

interface ValuesProps {
  onBack: () => void;
  isMobile: boolean;
}

const Values = ({ onBack}: ValuesProps) => {
  return (
    <div className="values-content">

      <div className="ocean-intro">
        <p className="ocean-eyebrow">What matters</p>
        <h2>Purpose and perspective</h2>
        <p>We'll build this section later.</p>
      </div>

      <button
          className="bubble-button"
          onClick={onBack}
        >
          <span>Return to surface</span>
          <ArrowUp size={20} />
      </button>
      
    </div>
  );
};

export default Values;

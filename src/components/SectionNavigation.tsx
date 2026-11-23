import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../styles/oceanNavigation.css";

interface SectionNavigationProps {
  children: ReactNode;
  onBack: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
}

function SectionNavigation({
  children,
  onBack,
  onNext,
  backLabel = "Return to surface",
  nextLabel = "Keep exploring",
}: SectionNavigationProps) {
  return (
    <div className="section-navigation">
      <button
        className="section-navigation_link"
        onClick={onBack}
      >
        <ArrowLeft size={17} />
        <span>{backLabel}</span>
      </button>
      {children}
      {onNext && (
        <button
          className="section-navigation_link"
          onClick={onNext}
        >
          <span>{nextLabel}</span>
          <ArrowRight size={17} />
        </button>
      )}
    </div>
  );
}

export default SectionNavigation;
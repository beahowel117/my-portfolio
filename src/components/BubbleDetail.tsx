import { ArrowLeft } from "lucide-react";

interface BubbleDetailProps {
    title: string;
    subtitle?: string;
    description?: string;
    img?: string;
    backLabel: string;
    onBack: () => void;
}

function BubbleDetail({
    title,
    subtitle,
    description,
    img,
    backLabel,
    onBack,
}: BubbleDetailProps) {
    return (
        <div className="portfolio-bubble-detail">
            <button className="portfolio-bubble-detail_back" onClick={onBack}>
                <ArrowLeft size={16} />
                {backLabel}
            </button>

            {subtitle && (
                <p className="portfolio-bubble-detail_subtitle">
                    {subtitle}
                </p>
            )}
            {/* {img &&(

            )} */}
            <h3>{title}</h3>

            <p className="portfolio-bubble-detail_description">
              {description}
            </p>
        </div>
    );
}

export default BubbleDetail
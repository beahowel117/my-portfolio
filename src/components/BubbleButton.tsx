import { ArrowRight, ArrowLeft } from 'lucide-react';

interface BubbleButtonProps {
    title: string,
    subtitle?:string;
    size?: string;
    onClick: () => void;
}

function BubbleButton({
    title,
    subtitle,
    onClick
}: BubbleButtonProps) {

    return (
        <button className="portfolio-bubble" onClick={onClick}>
            <span className="portfolio-bubble_title">
                {title}
            </span>
            {subtitle && (
                <small className="portfolio-bubble_subtitle">
                    {subtitle}
                </small>
            )}

            <span className="portfolio-bubble_hint">
                Dive Deeper <ArrowRight size={13} />
            </span>
        </button>
    );
};

export default BubbleButton
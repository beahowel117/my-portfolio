
// import { ArrowLeft } from "lucide-react";

// interface BubbleDetailProps {
//   title: string;
//   subtitle?: string;
//   description?: string;
//   img?: string | null;
//   backLabel: string;
//   onBack: () => void;
// }

// function BubbleDetail({
//   title,
//   subtitle,
//   description,
//   img,
//   backLabel,
//   onBack,
// }: BubbleDetailProps) {
//   return (
//     <div className="portfolio-bubble-detail">
//       {img && (
//         <img
//           className="portfolio-bubble-detail_image"
//           src={img}
//           alt={`${title} project screenshot`}
//         />
//       )}

//       {img && (
//         <div className="portfolio-bubble-detail_overlay" />
//       )}

//       <div className="portfolio-bubble-detail_content">
//         <button
//           className="portfolio-bubble-detail_back"
//           onClick={onBack}
//         >
//           <ArrowLeft size={16} />
//           {backLabel}
//         </button>

//         {subtitle && (
//           <p className="portfolio-bubble-detail_subtitle">
//             {subtitle}
//           </p>
//         )}

//         <h3>{title}</h3>

//         {description && (
//           <p className="portfolio-bubble-detail_description">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BubbleDetail;


import { useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import "../styles/bubbles.css";

interface BubbleDetailProps {
  title: string;
  subtitle?: string;
  description?: string;
  img?: string | null;
  backLabel?: string;
  onBack?: () => void;
  flippable?: boolean;
}

function BubbleDetail({
  title,
  subtitle,
  description,
  img,
  backLabel,
  onBack,
  flippable = false,
}: BubbleDetailProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="portfolio-bubble-detail">
     {/* {onBack && (
  <button
    className="portfolio-bubble-detail_back-button"
    onClick={onBack}
  >
    <ArrowLeft size={16} />
    {backLabel}
  </button>
)} */}

      <div className="portfolio-bubble-detail_flip-container">
      <button
            type="button"
            disabled={!flippable}
            className={`portfolio-bubble-detail_flipper ${
                isFlipped && flippable ? "is-flipped" : ""
            }`}
            onClick={() => {
                if (flippable) {
                setIsFlipped((prev) => !prev);
                }
            }}
            aria-label={
                isFlipped
                ? `Show details for ${title}`
                : `Show image for ${title}`
            }
            aria-pressed={flippable ? isFlipped : undefined}
        >
          {/* FRONT: Circular description */}
          <div className="portfolio-bubble-detail_front">
            <p className="portfolio-bubble-detail_subtitle">
              {subtitle}
            </p>

            <h3>{title}</h3>

            <p className="portfolio-bubble-detail_description">
              {description}
            </p>

            {flippable && <span className="portfolio-bubble-detail_flip-hint">
              <RotateCcw size={14} />
              Click to see project
            </span>}
          </div>

          {/* BACK: Square project image */}
          <div className="portfolio-bubble-detail_back-face">
            {img ? (
              <img
                src={img}
                alt={`${title} project screenshot`}
                className="portfolio-bubble-detail_image"
              />
            ) : (
              <div className="portfolio-bubble-detail_no-image">
                Image coming soon
              </div>
            )}

            <span className="portfolio-bubble-detail_image-hint">
              <RotateCcw size={14} />
              Click to return
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default BubbleDetail;
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Values = ({onBack}) => {
    return (
        <div className="project-content">
                <button
                    className="project-back"
                    onClick={onBack}
                >
                <ArrowLeft size={16} />
                Return to surface
                </button>
                <div className="ocean-intro">
                <p className="ocean-eyebrow">What matters</p>
                <h2>Purpose and perspective</h2>
                <p>We'll build this section later.</p>
                </div>
        </div>
      );
}

export default Values;

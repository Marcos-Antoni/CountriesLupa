import { useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./index.css";

export default function index({ text, previous }) {
  // use
  const navigater = useNavigate();
  const [arrayText] = useState(text.split(""));

  return (
    <div className="Loading center">
      <div>
        {arrayText.map((value, index) => (
          <samp
            style={{ animationDelay: `calc(${index} * 0.1s)` }}
            className="Loading_character"
            key={index}>
            {value}
          </samp>
        ))}
      </div>

      {previous && (
        <button className="Loading_btn btn" onClick={() => navigater(-1)}>
          Back
        </button>
      )}
    </div>
  );
}

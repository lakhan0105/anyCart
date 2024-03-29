import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title || "section title"}</h2>
    </div>
  );
}

export default SectionTitle;

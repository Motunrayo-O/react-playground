import React, { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [isComponentExpanded, setIsComponentExpanded] = useState(false);

  const handleClick = () => {
    setIsComponentExpanded(!isComponentExpanded);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  const displayText = isComponentExpanded
    ? children
    : children.slice(0, maxChars);

  return (
    <div>
      {displayText}...
      <button onClick={handleClick}>
        {isComponentExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;

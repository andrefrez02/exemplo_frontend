const HighlightText = ({ Text = "Stroke Text", Classname = "" }) => {
  return (
    <div className={`highlight-text-container ${Classname}`}>
      <svg width="100%" height="100%" style={{ overflow: "visible" }}>
        <text
          x="0"
          y="50%"
          dominantBaseline="central"
          textAnchor="start"
          fontSize="1em"
        >
          {Text}
        </text>
      </svg>
    </div>
  );
};

export default HighlightText;

function ScrollingText() {
  return (
    <>
    <div style={{textAlign : 'center',position : 'relative',top : '95px',left : '10px'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 384 512"
          color="rgb(51, 51, 51)"
          style={{userSelect: "none", width: "3%", height: "3%", display: "inline-block", fill: "rgb(51, 51, 51)", flexShrink: "0"}}
        >
          <path fill="#000000" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </div>
    <div className="scrolling">
      <svg
        className="scroll"
        style={{ width: "10%", height: "10%", transformOrigin: "center" }} // "width:100%;height:100%;transform-origin:center"
        viewBox="0 0 100 100"
        overflow="visible"
      >
        <path
          id="curve-wnxkz4"
          d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
          strokeWidth="none"
          fill="transparent"
        ></path>
        <text>
          <textPath
            href="#curve-wnxkz4"
            startOffset="0"
            dominantBaseline="Hanging"
            style={{
              letterSpacing: "1.7px",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "1em",
            }}
          >
            Scroll to explore · Scroll to explore ·{" "}
          </textPath>
        </text>
      </svg>
    </div>
    </>
  );
}

export default ScrollingText;

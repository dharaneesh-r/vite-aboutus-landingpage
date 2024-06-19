function Youtube() {
  return (
    <div>
      <iframe
        className="iframe"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/tliBTSLu_R0?si=9rQ18BY5_qB32J6j"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Youtube;

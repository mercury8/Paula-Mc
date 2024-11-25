export default function VideoComponent() {
  const src = "https://player.vimeo.com/video/1016467314?h=8fc1ba3502";

  return (
    <iframe
      src={src}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        border: "none",
        overflowX: "100%",
        overflowY: "100%",
      }}
      allowFullScreen
    />
  );
}

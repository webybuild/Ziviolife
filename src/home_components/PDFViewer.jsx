const PDFViewer = ({ fileId, title, onLoad }) => {
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="my-8 text-center">
      <iframe
        src={embedUrl}
        width="110%"
        height="350"
        style={{ border: "none" }}
        allow="autoplay"
        loading="lazy"
        title={title}
        onLoad={onLoad} // 👈 call parent when loaded
      ></iframe>

      <h3 className="text-lg font-semibold mt-2">{title}</h3>
    </div>
  );
};

export default PDFViewer;

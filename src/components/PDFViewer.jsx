// CatalogueViewer.jsx
const PDFViewer = ({ fileId, title }) => {
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  return (
    <div className="my-8">
      <iframe
        src={embedUrl}
        width="110%"
        height="350"
        style={{
          border: "none",
        }}
        allow="autoplay"
        loading="lazy"
        title={title}
      ></iframe>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
};

export default PDFViewer;

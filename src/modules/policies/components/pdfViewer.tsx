import styles from "../assets/pdfViewer.module.css"

interface PdfViewerProps {
    pdfUrl: string;
  }
  
  const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  
    return (
      <div className={styles.container}>
        <embed className={``} src={pdfUrl} type="application/pdf" width="100%" height="1024px"/>
      </div>
    );
  };



  export default PdfViewer;
import React, { useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import samplePDF from '/src/document.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={samplePDF}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={console.error}
    >
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
          width={window.innerWidth}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ),
      )}
    </Document>
  );
}
import { Document, Page } from 'react-pdf';
import CeceliaHeader from '../components/cecelia_header';
import DownloadLink from "react-download-link";
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages({ numPages });
    };
    return <div>
        <div className="body-wrapper">
            <CeceliaHeader selected="resume"/>
            <div className="text-center font-semibold m-2">

                <a className="underline border border-black p-2 hover:bg-rose-" href="/resume.pdf" download>Download Resume</a>
            </div>
            <div className="resume">
                <Document
                    file="resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={1000} />
                </Document>
            </div>
        </div>
    </div>
}

export default Resume;
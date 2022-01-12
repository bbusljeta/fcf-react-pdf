import admin from 'firebase-admin';
import { https } from 'firebase-functions';
import { generatePdfDoc } from './components/PdfDoc';
import { streamToBuffer } from './stream';

export const generatePdf = https.onCall(async (data) => {
    const pdfStream = await generatePdfDoc({ data: "Some String" });
    const pdfBuffer = await streamToBuffer(pdfStream);
    const fileName = `MyFile.pdf`;

    await admin
        .storage()
        .bucket()
        .file(fileName)
        .save(pdfBuffer)
});
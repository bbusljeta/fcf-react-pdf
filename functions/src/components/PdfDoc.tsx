import { Document, Page, renderToStream, View, Text } from '@react-pdf/renderer';
import React from 'react';

type Props = {
    data: string;
}

const PdfDocument: React.FC<Props> = ({ data }) => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>{data}</Text>
                </View>
            </Page>
        </Document>
    );
};

export const generatePdfDoc = async (props: Props) =>
    await renderToStream(<PdfDocument data={props.data} />);

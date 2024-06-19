export interface CVConfiguration {
    properties: PdfConfiguration;
    vars: Array<PdfVariableConfiguration>;
}
interface PdfConfiguration {
    format: string;
    margin: string;
}
interface PdfVariableConfiguration {
    key: string;
    value: Array<object> | string | object;
}
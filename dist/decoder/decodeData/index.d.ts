export interface Chunk {
    type: Mode;
    text: string;
}
export interface ByteChunk {
    type: Mode.Byte;
    bytes: number[];
}
export interface ECIChunk {
    type: Mode.ECI;
    assignmentNumber: number;
}
export declare type Chunks = Array<Chunk | ByteChunk | ECIChunk>;
export interface DecodedQR {
    text: string;
    bytes: number[];
    chunks: Chunks;
}
export declare enum Mode {
    Numeric = "numeric",
    Alphanumeric = "alphanumeric",
    Byte = "byte",
    ECI = "eci"
}
export declare function decode(data: Uint8ClampedArray, version: number): DecodedQR;

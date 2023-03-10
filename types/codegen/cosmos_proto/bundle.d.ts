import * as _117 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _117.ScalarType;
    scalarTypeToJSON(object: _117.ScalarType): string;
    ScalarType: typeof _117.ScalarType;
    ScalarTypeSDKType: typeof _117.ScalarType;
    InterfaceDescriptor: {
        encode(message: _117.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _117.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _117.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _117.ScalarType[];
        }): _117.ScalarDescriptor;
    };
};

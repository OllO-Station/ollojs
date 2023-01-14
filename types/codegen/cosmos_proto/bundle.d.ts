import * as _95 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _95.ScalarType;
    scalarTypeToJSON(object: _95.ScalarType): string;
    ScalarType: typeof _95.ScalarType;
    ScalarTypeSDKType: typeof _95.ScalarType;
    InterfaceDescriptor: {
        encode(message: _95.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _95.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _95.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _95.ScalarType[];
        }): _95.ScalarDescriptor;
    };
};

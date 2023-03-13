import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface NftPacketData {
    classId: string;
    nftIds: string[];
    sender: string;
    receiver: string;
}
export interface NftPacketDataSDKType {
    class_id: string;
    nft_ids: string[];
    sender: string;
    receiver: string;
}
export interface NftClassTrace {
    path: string;
    baseClassId: string;
}
export interface NftClassTraceSDKType {
    path: string;
    base_class_id: string;
}
export declare const NftPacketData: {
    encode(message: NftPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftPacketData;
    fromPartial(object: DeepPartial<NftPacketData>): NftPacketData;
};
export declare const NftClassTrace: {
    encode(message: NftClassTrace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftClassTrace;
    fromPartial(object: DeepPartial<NftClassTrace>): NftClassTrace;
};

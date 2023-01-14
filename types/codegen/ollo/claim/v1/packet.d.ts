import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ClaimPacketData {
    noData?: NoData;
}
export interface ClaimPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const ClaimPacketData: {
    encode(message: ClaimPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimPacketData;
    fromPartial(object: DeepPartial<ClaimPacketData>): ClaimPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};

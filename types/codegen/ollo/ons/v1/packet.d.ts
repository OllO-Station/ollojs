import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface OnsPacketData {
    noData?: NoData;
}
export interface OnsPacketDataSDKType {
    noData?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const OnsPacketData: {
    encode(message: OnsPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OnsPacketData;
    fromPartial(object: DeepPartial<OnsPacketData>): OnsPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};

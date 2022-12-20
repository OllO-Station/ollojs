import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export interface OraclePacketData {
    noData?: NoData;
}
export interface OraclePacketDataSDKType {
    noData?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const OraclePacketData: {
    encode(message: OraclePacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OraclePacketData;
    fromPartial(object: DeepPartial<OraclePacketData>): OraclePacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};

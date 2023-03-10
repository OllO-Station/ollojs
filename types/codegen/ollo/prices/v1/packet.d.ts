import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface PricesPacketData {
    noData?: NoData;
}
export interface PricesPacketDataSDKType {
    noData?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const PricesPacketData: {
    encode(message: PricesPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PricesPacketData;
    fromPartial(object: DeepPartial<PricesPacketData>): PricesPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};

import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface MarketPacketData {
    noData?: NoData;
}
export interface MarketPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const MarketPacketData: {
    encode(message: MarketPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketPacketData;
    fromPartial(object: DeepPartial<MarketPacketData>): MarketPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromPartial(_: DeepPartial<NoData>): NoData;
};

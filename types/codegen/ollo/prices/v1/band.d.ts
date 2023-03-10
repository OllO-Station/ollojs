import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BandPricesCallData {
    symbols: string[];
    multiplier: Long;
}
export interface BandPricesCallDataSDKType {
    symbols: string[];
    multiplier: Long;
}
export interface BandPricesResult {
    rates: Long[];
}
export interface BandPricesResultSDKType {
    rates: Long[];
}
export declare const BandPricesCallData: {
    encode(message: BandPricesCallData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BandPricesCallData;
    fromPartial(object: DeepPartial<BandPricesCallData>): BandPricesCallData;
};
export declare const BandPricesResult: {
    encode(message: BandPricesResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BandPricesResult;
    fromPartial(object: DeepPartial<BandPricesResult>): BandPricesResult;
};

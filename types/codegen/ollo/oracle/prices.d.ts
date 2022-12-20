import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PricesCallData {
    symbols: string[];
    multiplier: Long;
}
export interface PricesCallDataSDKType {
    symbols: string[];
    multiplier: Long;
}
export interface PricesResult {
    rates: Long[];
}
export interface PricesResultSDKType {
    rates: Long[];
}
export declare const PricesCallData: {
    encode(message: PricesCallData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PricesCallData;
    fromPartial(object: DeepPartial<PricesCallData>): PricesCallData;
};
export declare const PricesResult: {
    encode(message: PricesResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PricesResult;
    fromPartial(object: DeepPartial<PricesResult>): PricesResult;
};

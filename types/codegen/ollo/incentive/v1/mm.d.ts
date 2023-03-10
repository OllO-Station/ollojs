import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MarketMaker {
    address: string;
    pairId: Long;
    eligible: boolean;
}
export interface MarketMakerSDKType {
    address: string;
    pair_id: Long;
    eligible: boolean;
}
export interface MarketMakerIncl {
    address: string;
    pairId: Long;
}
export interface MarketMakerInclSDKType {
    address: string;
    pair_id: Long;
}
export declare const MarketMaker: {
    encode(message: MarketMaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketMaker;
    fromPartial(object: DeepPartial<MarketMaker>): MarketMaker;
};
export declare const MarketMakerIncl: {
    encode(message: MarketMakerIncl, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketMakerIncl;
    fromPartial(object: DeepPartial<MarketMakerIncl>): MarketMakerIncl;
};

import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface FeedMarket {
    marketId: string;
    baseAssetId: string;
    quoteAssetId: string;
    sources: string[];
    active: boolean;
}
export interface FeedMarketSDKType {
    market_id: string;
    base_asset_id: string;
    quote_asset_id: string;
    sources: string[];
    active: boolean;
}
export interface FeedPostedPrice {
    marketId: string;
    price: string;
    source: string;
    expiry?: Date;
}
export interface FeedPostedPriceSDKType {
    market_id: string;
    price: string;
    source: string;
    expiry?: Date;
}
export interface FeedCurrentPrice {
    marketId: string;
    price: string;
}
export interface FeedCurrentPriceSDKType {
    market_id: string;
    price: string;
}
export declare const FeedMarket: {
    encode(message: FeedMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedMarket;
    fromPartial(object: DeepPartial<FeedMarket>): FeedMarket;
};
export declare const FeedPostedPrice: {
    encode(message: FeedPostedPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedPostedPrice;
    fromPartial(object: DeepPartial<FeedPostedPrice>): FeedPostedPrice;
};
export declare const FeedCurrentPrice: {
    encode(message: FeedCurrentPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeedCurrentPrice;
    fromPartial(object: DeepPartial<FeedCurrentPrice>): FeedCurrentPrice;
};

import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum NftAuctionStatus {
    NFT_AUCTION_STATUS_UNSPECIFIED = 0,
    NFT_AUCTION_STATUS_INACTIVE = 1,
    NFT_AUCTION_STATUS_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const NftAuctionStatusSDKType: typeof NftAuctionStatus;
export declare function nftAuctionStatusFromJSON(object: any): NftAuctionStatus;
export declare function nftAuctionStatusToJSON(object: NftAuctionStatus): string;
export interface NftAuctionBid {
    auctionId: Long;
    bidder: string;
    amount?: Coin;
    time?: Date;
}
export interface NftAuctionBidSDKType {
    auction_id: Long;
    bidder: string;
    amount?: CoinSDKType;
    time?: Date;
}
export interface NftAuction {
    id: Long;
    nftId: string;
    denomId: string;
    owner: string;
    startPrice?: Coin;
    startTime?: Date;
    endTime?: Date;
}
export interface NftAuctionSDKType {
    id: Long;
    nft_id: string;
    denom_id: string;
    owner: string;
    start_price?: CoinSDKType;
    start_time?: Date;
    end_time?: Date;
}
export interface Market {
    id: string;
}
export interface MarketSDKType {
    id: string;
}
export declare const NftAuctionBid: {
    encode(message: NftAuctionBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftAuctionBid;
    fromPartial(object: DeepPartial<NftAuctionBid>): NftAuctionBid;
};
export declare const NftAuction: {
    encode(message: NftAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftAuction;
    fromPartial(object: DeepPartial<NftAuction>): NftAuction;
};
export declare const Market: {
    encode(message: Market, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Market;
    fromPartial(object: DeepPartial<Market>): Market;
};

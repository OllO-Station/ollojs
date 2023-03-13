import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventBuyNft {
    id: string;
    nftId: string;
    denomId: string;
    owner: string;
    buyer: string;
}
export interface EventBuyNftSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
    buyer: string;
}
export interface EventListNft {
    id: string;
    nftId: string;
    denomId: string;
    creator: string;
}
export interface EventListNftSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    creator: string;
}
export interface EventEditNftListing {
    id: string;
    nftId: string;
    denomId: string;
    creator: string;
}
export interface EventEditNftListingSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    creator: string;
}
export interface EventDelistNft {
    id: string;
    nftId: string;
    denomId: string;
    creator: string;
}
export interface EventDelistNftSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    creator: string;
}
export interface EventCreateNftAuction {
    id: string;
    nftId: string;
    denomId: string;
    creator: string;
    minPrice: string;
}
export interface EventCreateNftAuctionSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    creator: string;
    min_price: string;
}
export interface EventCancelNftAuction {
    auctionId: string;
    nftId: string;
    denomId: string;
    owner: string;
}
export interface EventCancelNftAuctionSDKType {
    auction_id: string;
    nft_id: string;
    denom_id: string;
    owner: string;
}
export interface EventNftAuctionPlaceBid {
    auctionId: string;
    nftId: string;
    denomId: string;
    bidder: string;
    amount: string;
}
export interface EventNftAuctionPlaceBidSDKType {
    auction_id: string;
    nft_id: string;
    denom_id: string;
    bidder: string;
    amount: string;
}
export declare const EventBuyNft: {
    encode(message: EventBuyNft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyNft;
    fromPartial(object: DeepPartial<EventBuyNft>): EventBuyNft;
};
export declare const EventListNft: {
    encode(message: EventListNft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventListNft;
    fromPartial(object: DeepPartial<EventListNft>): EventListNft;
};
export declare const EventEditNftListing: {
    encode(message: EventEditNftListing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEditNftListing;
    fromPartial(object: DeepPartial<EventEditNftListing>): EventEditNftListing;
};
export declare const EventDelistNft: {
    encode(message: EventDelistNft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDelistNft;
    fromPartial(object: DeepPartial<EventDelistNft>): EventDelistNft;
};
export declare const EventCreateNftAuction: {
    encode(message: EventCreateNftAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateNftAuction;
    fromPartial(object: DeepPartial<EventCreateNftAuction>): EventCreateNftAuction;
};
export declare const EventCancelNftAuction: {
    encode(message: EventCancelNftAuction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelNftAuction;
    fromPartial(object: DeepPartial<EventCancelNftAuction>): EventCancelNftAuction;
};
export declare const EventNftAuctionPlaceBid: {
    encode(message: EventNftAuctionPlaceBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventNftAuctionPlaceBid;
    fromPartial(object: DeepPartial<EventNftAuctionPlaceBid>): EventNftAuctionPlaceBid;
};

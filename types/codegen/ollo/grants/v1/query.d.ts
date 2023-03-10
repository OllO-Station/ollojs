import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { AllowedBidder, AllowedBidderSDKType, Bid, BidSDKType, VestingQueue, VestingQueueSDKType } from "./grants";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAuctionsRequest is request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequest {
    status: string;
    type: string;
    pagination?: PageRequest;
}
/** QueryAuctionsRequest is request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestSDKType {
    status: string;
    type: string;
    pagination?: PageRequestSDKType;
}
/** QueryAuctionsResponse is response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponse {
    /** auctions specifies the existing auctions */
    auctions: Any[];
    /** pagination defines the pagination in the response */
    pagination?: PageResponse;
}
/** QueryAuctionsResponse is response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseSDKType {
    auctions: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequest {
    /** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
    auctionId: Long;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestSDKType {
    auction_id: Long;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
    auction?: Any;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseSDKType {
    auction?: AnySDKType;
}
/**
 * QueryAllowedBidderRequest is the request type for the Query/AllowedBidder RPC
 * method.
 */
export interface QueryAllowedBidderRequest {
    auctionId: Long;
    bidder: string;
}
/**
 * QueryAllowedBidderRequest is the request type for the Query/AllowedBidder RPC
 * method.
 */
export interface QueryAllowedBidderRequestSDKType {
    auction_id: Long;
    bidder: string;
}
/**
 * QueryAllowedBidderResponse is the response type for the Query/AllowedBidder
 * RPC method.
 */
export interface QueryAllowedBidderResponse {
    allowedBidder?: AllowedBidder;
}
/**
 * QueryAllowedBidderResponse is the response type for the Query/AllowedBidder
 * RPC method.
 */
export interface QueryAllowedBidderResponseSDKType {
    allowed_bidder?: AllowedBidderSDKType;
}
/**
 * QueryAllowedBiddersRequest is the request type for the Query/AllowedBidders
 * RPC method.
 */
export interface QueryAllowedBiddersRequest {
    auctionId: Long;
    pagination?: PageRequest;
}
/**
 * QueryAllowedBiddersRequest is the request type for the Query/AllowedBidders
 * RPC method.
 */
export interface QueryAllowedBiddersRequestSDKType {
    auction_id: Long;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllowedBiddersResponse is the response type for the Query/AllowedBidders
 * RPC method.
 */
export interface QueryAllowedBiddersResponse {
    allowedBidders: AllowedBidder[];
    /** pagination defines the pagination in the response */
    pagination?: PageResponse;
}
/**
 * QueryAllowedBiddersResponse is the response type for the Query/AllowedBidders
 * RPC method.
 */
export interface QueryAllowedBiddersResponseSDKType {
    allowed_bidders: AllowedBidderSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method. */
export interface QueryBidsRequest {
    auctionId: Long;
    bidder: string;
    isMatched: string;
    pagination?: PageRequest;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method. */
export interface QueryBidsRequestSDKType {
    auction_id: Long;
    bidder: string;
    is_matched: string;
    pagination?: PageRequestSDKType;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method. */
export interface QueryBidsResponse {
    /** bids specifies the existing bids */
    bids: Bid[];
    /** pagination defines the pagination in the response */
    pagination?: PageResponse;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method. */
export interface QueryBidsResponseSDKType {
    bids: BidSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryBidRequest is the request type for the Query/Sequence RPC method. */
export interface QueryBidRequest {
    auctionId: Long;
    bidId: Long;
}
/** QueryBidRequest is the request type for the Query/Sequence RPC method. */
export interface QueryBidRequestSDKType {
    auction_id: Long;
    bid_id: Long;
}
/** QueryBidResponse is response type for the Query/Sequence RPC method. */
export interface QueryBidResponse {
    /** bid specifies specific bid */
    bid?: Bid;
}
/** QueryBidResponse is response type for the Query/Sequence RPC method. */
export interface QueryBidResponseSDKType {
    bid?: BidSDKType;
}
/** QueryVestingsRequest is request type for the Query/Vestings RPC method. */
export interface QueryVestingsRequest {
    /** QueryVestingsRequest is request type for the Query/Vestings RPC method. */
    auctionId: Long;
}
/** QueryVestingsRequest is request type for the Query/Vestings RPC method. */
export interface QueryVestingsRequestSDKType {
    auction_id: Long;
}
/** QueryVestingsResponse is response type for the Query/Vestings RPC method. */
export interface QueryVestingsResponse {
    /** vestings specifies the existing vestings */
    vestings: VestingQueue[];
}
/** QueryVestingsResponse is response type for the Query/Vestings RPC method. */
export interface QueryVestingsResponseSDKType {
    vestings: VestingQueueSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAuctionsRequest: {
    encode(message: QueryAuctionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsRequest;
    fromPartial(object: DeepPartial<QueryAuctionsRequest>): QueryAuctionsRequest;
};
export declare const QueryAuctionsResponse: {
    encode(message: QueryAuctionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsResponse;
    fromPartial(object: DeepPartial<QueryAuctionsResponse>): QueryAuctionsResponse;
};
export declare const QueryAuctionRequest: {
    encode(message: QueryAuctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionRequest;
    fromPartial(object: DeepPartial<QueryAuctionRequest>): QueryAuctionRequest;
};
export declare const QueryAuctionResponse: {
    encode(message: QueryAuctionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionResponse;
    fromPartial(object: DeepPartial<QueryAuctionResponse>): QueryAuctionResponse;
};
export declare const QueryAllowedBidderRequest: {
    encode(message: QueryAllowedBidderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBidderRequest;
    fromPartial(object: DeepPartial<QueryAllowedBidderRequest>): QueryAllowedBidderRequest;
};
export declare const QueryAllowedBidderResponse: {
    encode(message: QueryAllowedBidderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBidderResponse;
    fromPartial(object: DeepPartial<QueryAllowedBidderResponse>): QueryAllowedBidderResponse;
};
export declare const QueryAllowedBiddersRequest: {
    encode(message: QueryAllowedBiddersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBiddersRequest;
    fromPartial(object: DeepPartial<QueryAllowedBiddersRequest>): QueryAllowedBiddersRequest;
};
export declare const QueryAllowedBiddersResponse: {
    encode(message: QueryAllowedBiddersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBiddersResponse;
    fromPartial(object: DeepPartial<QueryAllowedBiddersResponse>): QueryAllowedBiddersResponse;
};
export declare const QueryBidsRequest: {
    encode(message: QueryBidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest;
    fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest;
};
export declare const QueryBidsResponse: {
    encode(message: QueryBidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse;
    fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse;
};
export declare const QueryBidRequest: {
    encode(message: QueryBidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest;
    fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest;
};
export declare const QueryBidResponse: {
    encode(message: QueryBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse;
    fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse;
};
export declare const QueryVestingsRequest: {
    encode(message: QueryVestingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingsRequest;
    fromPartial(object: DeepPartial<QueryVestingsRequest>): QueryVestingsRequest;
};
export declare const QueryVestingsResponse: {
    encode(message: QueryVestingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingsResponse;
    fromPartial(object: DeepPartial<QueryVestingsResponse>): QueryVestingsResponse;
};

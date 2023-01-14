import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAuctionsRequest, QueryAuctionsResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAllowedBidderRequest, QueryAllowedBidderResponse, QueryAllowedBiddersRequest, QueryAllowedBiddersResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryVestingsRequest, QueryVestingsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params returns parameters of the grants module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Auctions returns all auctions. */
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    /** Auction returns the specific auction. */
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    /** AllowedBidder returns the specific allowed bidder information. */
    allowedBidder(request: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponse>;
    /** AllowedBidders returns all allowed bidders for the auction. */
    allowedBidders(request: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponse>;
    /** Bids returns all bids. */
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    /** Bid returns the specific bid from the auction id and bid id. */
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    /** Vestings returns all vestings for the auction. */
    vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    allowedBidder(request: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponse>;
    allowedBidders(request: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponse>;
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    allowedBidder(request: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponse>;
    allowedBidders(request: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponse>;
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
    bid(request: QueryBidRequest): Promise<QueryBidResponse>;
    vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse>;
};

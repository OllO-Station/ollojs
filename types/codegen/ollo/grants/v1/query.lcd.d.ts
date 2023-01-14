import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryAuctionRequest, QueryAuctionResponseSDKType, QueryAllowedBidderRequest, QueryAllowedBidderResponseSDKType, QueryAllowedBiddersRequest, QueryAllowedBiddersResponseSDKType, QueryBidsRequest, QueryBidsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType, QueryVestingsRequest, QueryVestingsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    auctions(params: QueryAuctionsRequest): Promise<QueryAuctionsResponseSDKType>;
    auction(params: QueryAuctionRequest): Promise<QueryAuctionResponseSDKType>;
    allowedBidder(params: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponseSDKType>;
    allowedBidders(params: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponseSDKType>;
    bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType>;
    bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType>;
    vestings(params: QueryVestingsRequest): Promise<QueryVestingsResponseSDKType>;
}

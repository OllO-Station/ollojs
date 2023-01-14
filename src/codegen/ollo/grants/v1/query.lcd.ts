import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAuctionsRequest, QueryAuctionsResponseSDKType, QueryAuctionRequest, QueryAuctionResponseSDKType, QueryAllowedBidderRequest, QueryAllowedBidderResponseSDKType, QueryAllowedBiddersRequest, QueryAllowedBiddersResponseSDKType, QueryBidsRequest, QueryBidsResponseSDKType, QueryBidRequest, QueryBidResponseSDKType, QueryVestingsRequest, QueryVestingsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.auctions = this.auctions.bind(this);
    this.auction = this.auction.bind(this);
    this.allowedBidder = this.allowedBidder.bind(this);
    this.allowedBidders = this.allowedBidders.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.vestings = this.vestings.bind(this);
  }
  /* Params returns parameters of the grants module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/grants/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Auctions returns all auctions. */


  async auctions(params: QueryAuctionsRequest): Promise<QueryAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }

    if (typeof params?.type !== "undefined") {
      options.params.type = params.type;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/grants/v1/auctions`;
    return await this.req.get<QueryAuctionsResponseSDKType>(endpoint, options);
  }
  /* Auction returns the specific auction. */


  async auction(params: QueryAuctionRequest): Promise<QueryAuctionResponseSDKType> {
    const endpoint = `ollo/grants/v1/auctions/${params.auctionId}`;
    return await this.req.get<QueryAuctionResponseSDKType>(endpoint);
  }
  /* AllowedBidder returns the specific allowed bidder information. */


  async allowedBidder(params: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponseSDKType> {
    const endpoint = `ollo/grants/v1/auctions/${params.auctionId}/allowed_bidders/${params.bidder}`;
    return await this.req.get<QueryAllowedBidderResponseSDKType>(endpoint);
  }
  /* AllowedBidders returns all allowed bidders for the auction. */


  async allowedBidders(params: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/grants/v1/auctions/${params.auctionId}/allowed_bidders`;
    return await this.req.get<QueryAllowedBiddersResponseSDKType>(endpoint, options);
  }
  /* Bids returns all bids. */


  async bids(params: QueryBidsRequest): Promise<QueryBidsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.bidder !== "undefined") {
      options.params.bidder = params.bidder;
    }

    if (typeof params?.isMatched !== "undefined") {
      options.params.is_matched = params.isMatched;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/grants/v1/auctions/${params.auctionId}/bids`;
    return await this.req.get<QueryBidsResponseSDKType>(endpoint, options);
  }
  /* Bid returns the specific bid from the auction id and bid id. */


  async bid(params: QueryBidRequest): Promise<QueryBidResponseSDKType> {
    const endpoint = `ollo/grants/v1/auctions/${params.auctionId}/bids/${params.bidId}`;
    return await this.req.get<QueryBidResponseSDKType>(endpoint);
  }
  /* Vestings returns all vestings for the auction. */


  async vestings(params: QueryVestingsRequest): Promise<QueryVestingsResponseSDKType> {
    const endpoint = `ollo/grants/v1/auctions/${params.auctionId}/vestings`;
    return await this.req.get<QueryVestingsResponseSDKType>(endpoint);
  }

}
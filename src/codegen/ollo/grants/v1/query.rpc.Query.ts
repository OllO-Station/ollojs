import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.auctions = this.auctions.bind(this);
    this.auction = this.auction.bind(this);
    this.allowedBidder = this.allowedBidder.bind(this);
    this.allowedBidders = this.allowedBidders.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.vestings = this.vestings.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "Auctions", data);
    return promise.then(data => QueryAuctionsResponse.decode(new _m0.Reader(data)));
  }

  auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "Auction", data);
    return promise.then(data => QueryAuctionResponse.decode(new _m0.Reader(data)));
  }

  allowedBidder(request: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponse> {
    const data = QueryAllowedBidderRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "AllowedBidder", data);
    return promise.then(data => QueryAllowedBidderResponse.decode(new _m0.Reader(data)));
  }

  allowedBidders(request: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponse> {
    const data = QueryAllowedBiddersRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "AllowedBidders", data);
    return promise.then(data => QueryAllowedBiddersResponse.decode(new _m0.Reader(data)));
  }

  bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "Bids", data);
    return promise.then(data => QueryBidsResponse.decode(new _m0.Reader(data)));
  }

  bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "Bid", data);
    return promise.then(data => QueryBidResponse.decode(new _m0.Reader(data)));
  }

  vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse> {
    const data = QueryVestingsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.grants.v1.Query", "Vestings", data);
    return promise.then(data => QueryVestingsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
      return queryService.auctions(request);
    },

    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
      return queryService.auction(request);
    },

    allowedBidder(request: QueryAllowedBidderRequest): Promise<QueryAllowedBidderResponse> {
      return queryService.allowedBidder(request);
    },

    allowedBidders(request: QueryAllowedBiddersRequest): Promise<QueryAllowedBiddersResponse> {
      return queryService.allowedBidders(request);
    },

    bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
      return queryService.bids(request);
    },

    bid(request: QueryBidRequest): Promise<QueryBidResponse> {
      return queryService.bid(request);
    },

    vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse> {
      return queryService.vestings(request);
    }

  };
};
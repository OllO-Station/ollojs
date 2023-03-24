import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryNftListingRequest, QueryNftListingResponse, QueryNftListingsRequest, QueryNftListingsResponse, QueryNftListingsByOwnerRequest, QueryNftListingsByOwnerResponse, QueryNftListingsByDenomRequest, QueryNftListingsByDenomResponse, QueryNftListingByNftRequest, QueryNftListingByNftResponse, QueryNftAuctionRequest, QueryNftAuctionResponse, QueryNftAuctionsRequest, QueryNftAuctionsResponse, QueryNftAuctionsByOwnerRequest, QueryNftAuctionsByOwnerResponse, QueryNftAuctionsByDenomRequest, QueryNftAuctionsByDenomResponse, QueryNftAuctionByNftRequest, QueryNftAuctionByNftResponse, QueryNftAuctionBidsRequest, QueryNftAuctionBidsResponse, QueryNftAuctionBidRequest, QueryNftAuctionBidResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Order queries an order by id. */

  nftListing(request: QueryNftListingRequest): Promise<QueryNftListingResponse>;
  /** Listings queries orders by filters. */

  nftListings(request: QueryNftListingsRequest): Promise<QueryNftListingsResponse>;
  /** ListingsByOwner queries orders by owner. */

  nftListingsByOwner(request: QueryNftListingsByOwnerRequest): Promise<QueryNftListingsByOwnerResponse>;
  /** ListingsByDenom queries orders by denom. */

  nftListingsByDenom(request: QueryNftListingsByDenomRequest): Promise<QueryNftListingsByDenomResponse>;
  /** ListingsByNft queries orders by nft. */

  nftListingByNft(request: QueryNftListingByNftRequest): Promise<QueryNftListingByNftResponse>;
  /** NftAuction queries an auction by id. */

  nftAuction(request: QueryNftAuctionRequest): Promise<QueryNftAuctionResponse>;
  /** Auctions queries auctions by filters. */

  nftAuctions(request: QueryNftAuctionsRequest): Promise<QueryNftAuctionsResponse>;
  /** NftAuctionsByOwner queries auctions by owner. */

  nftAuctionsByOwner(request: QueryNftAuctionsByOwnerRequest): Promise<QueryNftAuctionsByOwnerResponse>;
  /** NftAuctionsByDenom queries auctions by denom. */

  nftAuctionsByDenom(request: QueryNftAuctionsByDenomRequest): Promise<QueryNftAuctionsByDenomResponse>;
  /** NftAuctionByNft queries auctions by nft. */

  nftAuctionByNft(request: QueryNftAuctionByNftRequest): Promise<QueryNftAuctionByNftResponse>;
  /** NftAuctionBids queries NFT auction bids. */

  nftAuctionBids(request: QueryNftAuctionBidsRequest): Promise<QueryNftAuctionBidsResponse>;
  /** NftAuctionBid queries a bid by id. */

  nftAuctionBid(request: QueryNftAuctionBidRequest): Promise<QueryNftAuctionBidResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.nftListing = this.nftListing.bind(this);
    this.nftListings = this.nftListings.bind(this);
    this.nftListingsByOwner = this.nftListingsByOwner.bind(this);
    this.nftListingsByDenom = this.nftListingsByDenom.bind(this);
    this.nftListingByNft = this.nftListingByNft.bind(this);
    this.nftAuction = this.nftAuction.bind(this);
    this.nftAuctions = this.nftAuctions.bind(this);
    this.nftAuctionsByOwner = this.nftAuctionsByOwner.bind(this);
    this.nftAuctionsByDenom = this.nftAuctionsByDenom.bind(this);
    this.nftAuctionByNft = this.nftAuctionByNft.bind(this);
    this.nftAuctionBids = this.nftAuctionBids.bind(this);
    this.nftAuctionBid = this.nftAuctionBid.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  nftListing(request: QueryNftListingRequest): Promise<QueryNftListingResponse> {
    const data = QueryNftListingRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftListing", data);
    return promise.then(data => QueryNftListingResponse.decode(new _m0.Reader(data)));
  }

  nftListings(request: QueryNftListingsRequest): Promise<QueryNftListingsResponse> {
    const data = QueryNftListingsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftListings", data);
    return promise.then(data => QueryNftListingsResponse.decode(new _m0.Reader(data)));
  }

  nftListingsByOwner(request: QueryNftListingsByOwnerRequest): Promise<QueryNftListingsByOwnerResponse> {
    const data = QueryNftListingsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftListingsByOwner", data);
    return promise.then(data => QueryNftListingsByOwnerResponse.decode(new _m0.Reader(data)));
  }

  nftListingsByDenom(request: QueryNftListingsByDenomRequest): Promise<QueryNftListingsByDenomResponse> {
    const data = QueryNftListingsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftListingsByDenom", data);
    return promise.then(data => QueryNftListingsByDenomResponse.decode(new _m0.Reader(data)));
  }

  nftListingByNft(request: QueryNftListingByNftRequest): Promise<QueryNftListingByNftResponse> {
    const data = QueryNftListingByNftRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftListingByNft", data);
    return promise.then(data => QueryNftListingByNftResponse.decode(new _m0.Reader(data)));
  }

  nftAuction(request: QueryNftAuctionRequest): Promise<QueryNftAuctionResponse> {
    const data = QueryNftAuctionRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuction", data);
    return promise.then(data => QueryNftAuctionResponse.decode(new _m0.Reader(data)));
  }

  nftAuctions(request: QueryNftAuctionsRequest): Promise<QueryNftAuctionsResponse> {
    const data = QueryNftAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuctions", data);
    return promise.then(data => QueryNftAuctionsResponse.decode(new _m0.Reader(data)));
  }

  nftAuctionsByOwner(request: QueryNftAuctionsByOwnerRequest): Promise<QueryNftAuctionsByOwnerResponse> {
    const data = QueryNftAuctionsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuctionsByOwner", data);
    return promise.then(data => QueryNftAuctionsByOwnerResponse.decode(new _m0.Reader(data)));
  }

  nftAuctionsByDenom(request: QueryNftAuctionsByDenomRequest): Promise<QueryNftAuctionsByDenomResponse> {
    const data = QueryNftAuctionsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuctionsByDenom", data);
    return promise.then(data => QueryNftAuctionsByDenomResponse.decode(new _m0.Reader(data)));
  }

  nftAuctionByNft(request: QueryNftAuctionByNftRequest): Promise<QueryNftAuctionByNftResponse> {
    const data = QueryNftAuctionByNftRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuctionByNft", data);
    return promise.then(data => QueryNftAuctionByNftResponse.decode(new _m0.Reader(data)));
  }

  nftAuctionBids(request: QueryNftAuctionBidsRequest): Promise<QueryNftAuctionBidsResponse> {
    const data = QueryNftAuctionBidsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuctionBids", data);
    return promise.then(data => QueryNftAuctionBidsResponse.decode(new _m0.Reader(data)));
  }

  nftAuctionBid(request: QueryNftAuctionBidRequest): Promise<QueryNftAuctionBidResponse> {
    const data = QueryNftAuctionBidRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.market.v1.Query", "NftAuctionBid", data);
    return promise.then(data => QueryNftAuctionBidResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    nftListing(request: QueryNftListingRequest): Promise<QueryNftListingResponse> {
      return queryService.nftListing(request);
    },

    nftListings(request: QueryNftListingsRequest): Promise<QueryNftListingsResponse> {
      return queryService.nftListings(request);
    },

    nftListingsByOwner(request: QueryNftListingsByOwnerRequest): Promise<QueryNftListingsByOwnerResponse> {
      return queryService.nftListingsByOwner(request);
    },

    nftListingsByDenom(request: QueryNftListingsByDenomRequest): Promise<QueryNftListingsByDenomResponse> {
      return queryService.nftListingsByDenom(request);
    },

    nftListingByNft(request: QueryNftListingByNftRequest): Promise<QueryNftListingByNftResponse> {
      return queryService.nftListingByNft(request);
    },

    nftAuction(request: QueryNftAuctionRequest): Promise<QueryNftAuctionResponse> {
      return queryService.nftAuction(request);
    },

    nftAuctions(request: QueryNftAuctionsRequest): Promise<QueryNftAuctionsResponse> {
      return queryService.nftAuctions(request);
    },

    nftAuctionsByOwner(request: QueryNftAuctionsByOwnerRequest): Promise<QueryNftAuctionsByOwnerResponse> {
      return queryService.nftAuctionsByOwner(request);
    },

    nftAuctionsByDenom(request: QueryNftAuctionsByDenomRequest): Promise<QueryNftAuctionsByDenomResponse> {
      return queryService.nftAuctionsByDenom(request);
    },

    nftAuctionByNft(request: QueryNftAuctionByNftRequest): Promise<QueryNftAuctionByNftResponse> {
      return queryService.nftAuctionByNft(request);
    },

    nftAuctionBids(request: QueryNftAuctionBidsRequest): Promise<QueryNftAuctionBidsResponse> {
      return queryService.nftAuctionBids(request);
    },

    nftAuctionBid(request: QueryNftAuctionBidRequest): Promise<QueryNftAuctionBidResponse> {
      return queryService.nftAuctionBid(request);
    }

  };
};
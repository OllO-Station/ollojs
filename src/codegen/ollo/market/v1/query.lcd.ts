import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryNftListingRequest, QueryNftListingResponseSDKType, QueryNftListingsRequest, QueryNftListingsResponseSDKType, QueryNftListingsByOwnerRequest, QueryNftListingsByOwnerResponseSDKType, QueryNftListingsByDenomRequest, QueryNftListingsByDenomResponseSDKType, QueryNftListingByNftRequest, QueryNftListingByNftResponseSDKType, QueryNftAuctionRequest, QueryNftAuctionResponseSDKType, QueryNftAuctionsRequest, QueryNftAuctionsResponseSDKType, QueryNftAuctionsByOwnerRequest, QueryNftAuctionsByOwnerResponseSDKType, QueryNftAuctionsByDenomRequest, QueryNftAuctionsByDenomResponseSDKType, QueryNftAuctionByNftRequest, QueryNftAuctionByNftResponseSDKType, QueryNftAuctionBidsRequest, QueryNftAuctionBidsResponseSDKType, QueryNftAuctionBidRequest, QueryNftAuctionBidResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/market/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Order queries an order by id. */


  async nftListing(params: QueryNftListingRequest): Promise<QueryNftListingResponseSDKType> {
    const endpoint = `ollo/market/v1/listings/nft/${params.id}`;
    return await this.req.get<QueryNftListingResponseSDKType>(endpoint);
  }
  /* Listings queries orders by filters. */


  async nftListings(params: QueryNftListingsRequest): Promise<QueryNftListingsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.nftId !== "undefined") {
      options.params.nft_id = params.nftId;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/listings/nft`;
    return await this.req.get<QueryNftListingsResponseSDKType>(endpoint, options);
  }
  /* ListingsByOwner queries orders by owner. */


  async nftListingsByOwner(params: QueryNftListingsByOwnerRequest): Promise<QueryNftListingsByOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/listings/nft/owner/${params.owner}`;
    return await this.req.get<QueryNftListingsByOwnerResponseSDKType>(endpoint, options);
  }
  /* ListingsByDenom queries orders by denom. */


  async nftListingsByDenom(params: QueryNftListingsByDenomRequest): Promise<QueryNftListingsByDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/listings/nft/denom/${params.denom}`;
    return await this.req.get<QueryNftListingsByDenomResponseSDKType>(endpoint, options);
  }
  /* ListingsByNft queries orders by nft. */


  async nftListingByNft(params: QueryNftListingByNftRequest): Promise<QueryNftListingByNftResponseSDKType> {
    const endpoint = `ollo/market/v1/listings/nft/nft/${params.nftId}`;
    return await this.req.get<QueryNftListingByNftResponseSDKType>(endpoint);
  }
  /* NftAuction queries an auction by id. */


  async nftAuction(params: QueryNftAuctionRequest): Promise<QueryNftAuctionResponseSDKType> {
    const endpoint = `ollo/market/v1/auctions/nft/${params.id}`;
    return await this.req.get<QueryNftAuctionResponseSDKType>(endpoint);
  }
  /* Auctions queries auctions by filters. */


  async nftAuctions(params: QueryNftAuctionsRequest): Promise<QueryNftAuctionsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/auctions/nft`;
    return await this.req.get<QueryNftAuctionsResponseSDKType>(endpoint, options);
  }
  /* NftAuctionsByOwner queries auctions by owner. */


  async nftAuctionsByOwner(params: QueryNftAuctionsByOwnerRequest): Promise<QueryNftAuctionsByOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/auctions/nft/owner/${params.owner}`;
    return await this.req.get<QueryNftAuctionsByOwnerResponseSDKType>(endpoint, options);
  }
  /* NftAuctionsByDenom queries auctions by denom. */


  async nftAuctionsByDenom(params: QueryNftAuctionsByDenomRequest): Promise<QueryNftAuctionsByDenomResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/auctions/nft/denom/${params.denom}`;
    return await this.req.get<QueryNftAuctionsByDenomResponseSDKType>(endpoint, options);
  }
  /* NftAuctionByNft queries auctions by nft. */


  async nftAuctionByNft(params: QueryNftAuctionByNftRequest): Promise<QueryNftAuctionByNftResponseSDKType> {
    const endpoint = `ollo/market/v1/auctions/nft/nft/${params.nftId}`;
    return await this.req.get<QueryNftAuctionByNftResponseSDKType>(endpoint);
  }
  /* NftAuctionBids queries NFT auction bids. */


  async nftAuctionBids(params: QueryNftAuctionBidsRequest): Promise<QueryNftAuctionBidsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.bidder !== "undefined") {
      options.params.bidder = params.bidder;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/market/v1/auctions/nft/bids`;
    return await this.req.get<QueryNftAuctionBidsResponseSDKType>(endpoint, options);
  }
  /* NftAuctionBid queries a bid by id. */


  async nftAuctionBid(params: QueryNftAuctionBidRequest): Promise<QueryNftAuctionBidResponseSDKType> {
    const endpoint = `ollo/market/v1/auctions/nft/bids/${params.id}`;
    return await this.req.get<QueryNftAuctionBidResponseSDKType>(endpoint);
  }

}
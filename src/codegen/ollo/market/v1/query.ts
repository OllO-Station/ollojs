import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { NftAuctionStatus, NftListing, NftListingSDKType, NftAuction, NftAuctionSDKType, NftAuctionBid, NftAuctionBidSDKType } from "./market";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryNftListingRequest is request type for the Query/Listing RPC method. */

export interface QueryNftListingRequest {
  id: string;
}
/** QueryNftListingRequest is request type for the Query/Listing RPC method. */

export interface QueryNftListingRequestSDKType {
  id: string;
}
/** QueryNftListingResponse is response type for the Query/Listing RPC method. */

export interface QueryNftListingResponse {
  listing?: NftListing;
}
/** QueryNftListingResponse is response type for the Query/Listing RPC method. */

export interface QueryNftListingResponseSDKType {
  listing?: NftListingSDKType;
}
/** QueryNftListingsRequest is request type for the Query/Listings RPC method. */

export interface QueryNftListingsRequest {
  owner: string;
  denom: string;
  nftId: string;
  pagination?: PageRequest;
}
/** QueryNftListingsRequest is request type for the Query/Listings RPC method. */

export interface QueryNftListingsRequestSDKType {
  owner: string;
  denom: string;
  nft_id: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftListingsResponse is response type for the Query/Listings RPC method. */

export interface QueryNftListingsResponse {
  listings: NftListing[];
  pagination?: PageResponse;
}
/** QueryNftListingsResponse is response type for the Query/Listings RPC method. */

export interface QueryNftListingsResponseSDKType {
  listings: NftListingSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNftListingsByOwnerRequest is request type for the Query/ListingsByOwner RPC method. */

export interface QueryNftListingsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
/** QueryNftListingsByOwnerRequest is request type for the Query/ListingsByOwner RPC method. */

export interface QueryNftListingsByOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftListingsByOwnerResponse is response type for the Query/ListingsByOwner RPC method. */

export interface QueryNftListingsByOwnerResponse {
  listings: NftListing[];
  pagination?: PageResponse;
}
/** QueryNftListingsByOwnerResponse is response type for the Query/ListingsByOwner RPC method. */

export interface QueryNftListingsByOwnerResponseSDKType {
  listings: NftListingSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNftListingsByDenomRequest is request type for the Query/ListingsByDenom RPC method. */

export interface QueryNftListingsByDenomRequest {
  denom: string;
  pagination?: PageRequest;
}
/** QueryNftListingsByDenomRequest is request type for the Query/ListingsByDenom RPC method. */

export interface QueryNftListingsByDenomRequestSDKType {
  denom: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftListingsByDenomResponse is response type for the Query/ListingsByDenom RPC method. */

export interface QueryNftListingsByDenomResponse {
  listings: NftListing[];
  pagination?: PageResponse;
}
/** QueryNftListingsByDenomResponse is response type for the Query/ListingsByDenom RPC method. */

export interface QueryNftListingsByDenomResponseSDKType {
  listings: NftListingSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNftListingByNftRequest is request type for the Query/ListingsByNft RPC method. */

export interface QueryNftListingByNftRequest {
  nftId: string;
}
/** QueryNftListingByNftRequest is request type for the Query/ListingsByNft RPC method. */

export interface QueryNftListingByNftRequestSDKType {
  nft_id: string;
}
/** QueryNftListingByNftResponse is response type for the Query/ListingsByNft RPC method. */

export interface QueryNftListingByNftResponse {
  listing?: NftListing;
}
/** QueryNftListingByNftResponse is response type for the Query/ListingsByNft RPC method. */

export interface QueryNftListingByNftResponseSDKType {
  listing?: NftListingSDKType;
}
/** QueryNftAuctionRequest is request type for the Query/NftAuction RPC method. */

export interface QueryNftAuctionRequest {
  id: Long;
}
/** QueryNftAuctionRequest is request type for the Query/NftAuction RPC method. */

export interface QueryNftAuctionRequestSDKType {
  id: Long;
}
/** QueryNftAuctionResponse is response type for the Query/NftAuction RPC method. */

export interface QueryNftAuctionResponse {
  auction?: NftAuction;
}
/** QueryNftAuctionResponse is response type for the Query/NftAuction RPC method. */

export interface QueryNftAuctionResponseSDKType {
  auction?: NftAuctionSDKType;
}
/** QueryNftAuctionsRequest is request type for the Query/NftAuctions RPC method. */

export interface QueryNftAuctionsRequest {
  status: NftAuctionStatus;
  owner: string;
  denom: string;
  pagination?: PageRequest;
}
/** QueryNftAuctionsRequest is request type for the Query/NftAuctions RPC method. */

export interface QueryNftAuctionsRequestSDKType {
  status: NftAuctionStatus;
  owner: string;
  denom: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftAuctionsResponse is response type for the Query/NftAuctions RPC method. */

export interface QueryNftAuctionsResponse {
  auctions: NftAuction[];
  pagination?: PageResponse;
}
/** QueryNftAuctionsResponse is response type for the Query/NftAuctions RPC method. */

export interface QueryNftAuctionsResponseSDKType {
  auctions: NftAuctionSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNftAuctionsByOwnerRequest is request type for the Query/NftAuctionsByOwner RPC method. */

export interface QueryNftAuctionsByOwnerRequest {
  owner: string;
  pagination?: PageRequest;
}
/** QueryNftAuctionsByOwnerRequest is request type for the Query/NftAuctionsByOwner RPC method. */

export interface QueryNftAuctionsByOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftAuctionsByOwnerResponse is response type for the Query/NftAuctionsByOwner RPC method. */

export interface QueryNftAuctionsByOwnerResponse {
  auctions: NftAuction[];
  pagination?: PageResponse;
}
/** QueryNftAuctionsByOwnerResponse is response type for the Query/NftAuctionsByOwner RPC method. */

export interface QueryNftAuctionsByOwnerResponseSDKType {
  auctions: NftAuctionSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNftAuctionsByDenomRequest is request type for the Query/NftAuctionsByDenom RPC method. */

export interface QueryNftAuctionsByDenomRequest {
  denom: string;
  pagination?: PageRequest;
}
/** QueryNftAuctionsByDenomRequest is request type for the Query/NftAuctionsByDenom RPC method. */

export interface QueryNftAuctionsByDenomRequestSDKType {
  denom: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftAuctionsByDenomResponse is response type for the Query/NftAuctionsByDenom RPC method. */

export interface QueryNftAuctionsByDenomResponse {
  auctions: NftAuction[];
  pagination?: PageResponse;
}
/** QueryNftAuctionsByDenomResponse is response type for the Query/NftAuctionsByDenom RPC method. */

export interface QueryNftAuctionsByDenomResponseSDKType {
  auctions: NftAuctionSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNftAuctionByNftRequest is request type for the Query/NftAuctionByNft RPC method. */

export interface QueryNftAuctionByNftRequest {
  nftId: string;
}
/** QueryNftAuctionByNftRequest is request type for the Query/NftAuctionByNft RPC method. */

export interface QueryNftAuctionByNftRequestSDKType {
  nft_id: string;
}
/** QueryNftAuctionByNftResponse is response type for the Query/NftAuctionByNft RPC method. */

export interface QueryNftAuctionByNftResponse {
  auctions?: NftAuction;
}
/** QueryNftAuctionByNftResponse is response type for the Query/NftAuctionByNft RPC method. */

export interface QueryNftAuctionByNftResponseSDKType {
  auctions?: NftAuctionSDKType;
}
/** QueryNftAuctionBidRequest is request type for the Query/NftAuctionBid RPC method. */

export interface QueryNftAuctionBidRequest {
  id: Long;
}
/** QueryNftAuctionBidRequest is request type for the Query/NftAuctionBid RPC method. */

export interface QueryNftAuctionBidRequestSDKType {
  id: Long;
}
/** QueryNftAuctionBidResponse is response type for the Query/NftAuctionBid RPC method. */

export interface QueryNftAuctionBidResponse {
  bid?: NftAuctionBid;
}
/** QueryNftAuctionBidResponse is response type for the Query/NftAuctionBid RPC method. */

export interface QueryNftAuctionBidResponseSDKType {
  bid?: NftAuctionBidSDKType;
}
/** QueryNftAuctionBidsRequest is request type for the Query/NftAuctionBids RPC method. */

export interface QueryNftAuctionBidsRequest {
  bidder: string;
  pagination?: PageRequest;
}
/** QueryNftAuctionBidsRequest is request type for the Query/NftAuctionBids RPC method. */

export interface QueryNftAuctionBidsRequestSDKType {
  bidder: string;
  pagination?: PageRequestSDKType;
}
/** QueryNftAuctionBidsResponse is response type for the Query/NftAuctionBids RPC method. */

export interface QueryNftAuctionBidsResponse {
  bids: NftAuctionBid[];
  pagination?: PageResponse;
}
/** QueryNftAuctionBidsResponse is response type for the Query/NftAuctionBids RPC method. */

export interface QueryNftAuctionBidsResponseSDKType {
  bids: NftAuctionBidSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryNftListingRequest(): QueryNftListingRequest {
  return {
    id: ""
  };
}

export const QueryNftListingRequest = {
  encode(message: QueryNftListingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingRequest>): QueryNftListingRequest {
    const message = createBaseQueryNftListingRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryNftListingResponse(): QueryNftListingResponse {
  return {
    listing: undefined
  };
}

export const QueryNftListingResponse = {
  encode(message: QueryNftListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      NftListing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listing = NftListing.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingResponse>): QueryNftListingResponse {
    const message = createBaseQueryNftListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? NftListing.fromPartial(object.listing) : undefined;
    return message;
  }

};

function createBaseQueryNftListingsRequest(): QueryNftListingsRequest {
  return {
    owner: "",
    denom: "",
    nftId: "",
    pagination: undefined
  };
}

export const QueryNftListingsRequest = {
  encode(message: QueryNftListingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.nftId = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingsRequest>): QueryNftListingsRequest {
    const message = createBaseQueryNftListingsRequest();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftListingsResponse(): QueryNftListingsResponse {
  return {
    listings: [],
    pagination: undefined
  };
}

export const QueryNftListingsResponse = {
  encode(message: QueryNftListingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      NftListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listings.push(NftListing.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingsResponse>): QueryNftListingsResponse {
    const message = createBaseQueryNftListingsResponse();
    message.listings = object.listings?.map(e => NftListing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftListingsByOwnerRequest(): QueryNftListingsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryNftListingsByOwnerRequest = {
  encode(message: QueryNftListingsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingsByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingsByOwnerRequest>): QueryNftListingsByOwnerRequest {
    const message = createBaseQueryNftListingsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftListingsByOwnerResponse(): QueryNftListingsByOwnerResponse {
  return {
    listings: [],
    pagination: undefined
  };
}

export const QueryNftListingsByOwnerResponse = {
  encode(message: QueryNftListingsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      NftListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingsByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listings.push(NftListing.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingsByOwnerResponse>): QueryNftListingsByOwnerResponse {
    const message = createBaseQueryNftListingsByOwnerResponse();
    message.listings = object.listings?.map(e => NftListing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftListingsByDenomRequest(): QueryNftListingsByDenomRequest {
  return {
    denom: "",
    pagination: undefined
  };
}

export const QueryNftListingsByDenomRequest = {
  encode(message: QueryNftListingsByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingsByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingsByDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingsByDenomRequest>): QueryNftListingsByDenomRequest {
    const message = createBaseQueryNftListingsByDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftListingsByDenomResponse(): QueryNftListingsByDenomResponse {
  return {
    listings: [],
    pagination: undefined
  };
}

export const QueryNftListingsByDenomResponse = {
  encode(message: QueryNftListingsByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listings) {
      NftListing.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingsByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingsByDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listings.push(NftListing.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingsByDenomResponse>): QueryNftListingsByDenomResponse {
    const message = createBaseQueryNftListingsByDenomResponse();
    message.listings = object.listings?.map(e => NftListing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftListingByNftRequest(): QueryNftListingByNftRequest {
  return {
    nftId: ""
  };
}

export const QueryNftListingByNftRequest = {
  encode(message: QueryNftListingByNftRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingByNftRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingByNftRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingByNftRequest>): QueryNftListingByNftRequest {
    const message = createBaseQueryNftListingByNftRequest();
    message.nftId = object.nftId ?? "";
    return message;
  }

};

function createBaseQueryNftListingByNftResponse(): QueryNftListingByNftResponse {
  return {
    listing: undefined
  };
}

export const QueryNftListingByNftResponse = {
  encode(message: QueryNftListingByNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      NftListing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftListingByNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftListingByNftResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.listing = NftListing.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftListingByNftResponse>): QueryNftListingByNftResponse {
    const message = createBaseQueryNftListingByNftResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? NftListing.fromPartial(object.listing) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionRequest(): QueryNftAuctionRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryNftAuctionRequest = {
  encode(message: QueryNftAuctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionRequest>): QueryNftAuctionRequest {
    const message = createBaseQueryNftAuctionRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryNftAuctionResponse(): QueryNftAuctionResponse {
  return {
    auction: undefined
  };
}

export const QueryNftAuctionResponse = {
  encode(message: QueryNftAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auction !== undefined) {
      NftAuction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auction = NftAuction.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionResponse>): QueryNftAuctionResponse {
    const message = createBaseQueryNftAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? NftAuction.fromPartial(object.auction) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionsRequest(): QueryNftAuctionsRequest {
  return {
    status: 0,
    owner: "",
    denom: "",
    pagination: undefined
  };
}

export const QueryNftAuctionsRequest = {
  encode(message: QueryNftAuctionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionsRequest>): QueryNftAuctionsRequest {
    const message = createBaseQueryNftAuctionsRequest();
    message.status = object.status ?? 0;
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionsResponse(): QueryNftAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}

export const QueryNftAuctionsResponse = {
  encode(message: QueryNftAuctionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      NftAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctions.push(NftAuction.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionsResponse>): QueryNftAuctionsResponse {
    const message = createBaseQueryNftAuctionsResponse();
    message.auctions = object.auctions?.map(e => NftAuction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionsByOwnerRequest(): QueryNftAuctionsByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryNftAuctionsByOwnerRequest = {
  encode(message: QueryNftAuctionsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionsByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionsByOwnerRequest>): QueryNftAuctionsByOwnerRequest {
    const message = createBaseQueryNftAuctionsByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionsByOwnerResponse(): QueryNftAuctionsByOwnerResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}

export const QueryNftAuctionsByOwnerResponse = {
  encode(message: QueryNftAuctionsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      NftAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionsByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctions.push(NftAuction.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionsByOwnerResponse>): QueryNftAuctionsByOwnerResponse {
    const message = createBaseQueryNftAuctionsByOwnerResponse();
    message.auctions = object.auctions?.map(e => NftAuction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionsByDenomRequest(): QueryNftAuctionsByDenomRequest {
  return {
    denom: "",
    pagination: undefined
  };
}

export const QueryNftAuctionsByDenomRequest = {
  encode(message: QueryNftAuctionsByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionsByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionsByDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionsByDenomRequest>): QueryNftAuctionsByDenomRequest {
    const message = createBaseQueryNftAuctionsByDenomRequest();
    message.denom = object.denom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionsByDenomResponse(): QueryNftAuctionsByDenomResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}

export const QueryNftAuctionsByDenomResponse = {
  encode(message: QueryNftAuctionsByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      NftAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionsByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionsByDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctions.push(NftAuction.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionsByDenomResponse>): QueryNftAuctionsByDenomResponse {
    const message = createBaseQueryNftAuctionsByDenomResponse();
    message.auctions = object.auctions?.map(e => NftAuction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionByNftRequest(): QueryNftAuctionByNftRequest {
  return {
    nftId: ""
  };
}

export const QueryNftAuctionByNftRequest = {
  encode(message: QueryNftAuctionByNftRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionByNftRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionByNftRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionByNftRequest>): QueryNftAuctionByNftRequest {
    const message = createBaseQueryNftAuctionByNftRequest();
    message.nftId = object.nftId ?? "";
    return message;
  }

};

function createBaseQueryNftAuctionByNftResponse(): QueryNftAuctionByNftResponse {
  return {
    auctions: undefined
  };
}

export const QueryNftAuctionByNftResponse = {
  encode(message: QueryNftAuctionByNftResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctions !== undefined) {
      NftAuction.encode(message.auctions, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionByNftResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionByNftResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctions = NftAuction.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionByNftResponse>): QueryNftAuctionByNftResponse {
    const message = createBaseQueryNftAuctionByNftResponse();
    message.auctions = object.auctions !== undefined && object.auctions !== null ? NftAuction.fromPartial(object.auctions) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionBidRequest(): QueryNftAuctionBidRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryNftAuctionBidRequest = {
  encode(message: QueryNftAuctionBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionBidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionBidRequest>): QueryNftAuctionBidRequest {
    const message = createBaseQueryNftAuctionBidRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryNftAuctionBidResponse(): QueryNftAuctionBidResponse {
  return {
    bid: undefined
  };
}

export const QueryNftAuctionBidResponse = {
  encode(message: QueryNftAuctionBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bid !== undefined) {
      NftAuctionBid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bid = NftAuctionBid.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionBidResponse>): QueryNftAuctionBidResponse {
    const message = createBaseQueryNftAuctionBidResponse();
    message.bid = object.bid !== undefined && object.bid !== null ? NftAuctionBid.fromPartial(object.bid) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionBidsRequest(): QueryNftAuctionBidsRequest {
  return {
    bidder: "",
    pagination: undefined
  };
}

export const QueryNftAuctionBidsRequest = {
  encode(message: QueryNftAuctionBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionBidsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionBidsRequest>): QueryNftAuctionBidsRequest {
    const message = createBaseQueryNftAuctionBidsRequest();
    message.bidder = object.bidder ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNftAuctionBidsResponse(): QueryNftAuctionBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}

export const QueryNftAuctionBidsResponse = {
  encode(message: QueryNftAuctionBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bids) {
      NftAuctionBid.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNftAuctionBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNftAuctionBidsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bids.push(NftAuctionBid.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNftAuctionBidsResponse>): QueryNftAuctionBidsResponse {
    const message = createBaseQueryNftAuctionBidsResponse();
    message.bids = object.bids?.map(e => NftAuctionBid.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
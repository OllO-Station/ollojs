import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { AllowedBidder, AllowedBidderSDKType, Bid, BidSDKType, VestingQueue, VestingQueueSDKType } from "./grants";
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

function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    status: "",
    type: "",
    pagination: undefined
  };
}

export const QueryAuctionsRequest = {
  encode(message: QueryAuctionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.status = object.status ?? "";
    message.type = object.type ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
    pagination: undefined
  };
}

export const QueryAuctionsResponse = {
  encode(message: QueryAuctionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Any.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAuctionsResponse>): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    auctionId: Long.UZERO
  };
}

export const QueryAuctionRequest = {
  encode(message: QueryAuctionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    auction: undefined
  };
}

export const QueryAuctionResponse = {
  encode(message: QueryAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auction !== undefined) {
      Any.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auction = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAuctionResponse>): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? Any.fromPartial(object.auction) : undefined;
    return message;
  }

};

function createBaseQueryAllowedBidderRequest(): QueryAllowedBidderRequest {
  return {
    auctionId: Long.UZERO,
    bidder: ""
  };
}

export const QueryAllowedBidderRequest = {
  encode(message: QueryAllowedBidderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBidderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedBidderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.bidder = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllowedBidderRequest>): QueryAllowedBidderRequest {
    const message = createBaseQueryAllowedBidderRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    return message;
  }

};

function createBaseQueryAllowedBidderResponse(): QueryAllowedBidderResponse {
  return {
    allowedBidder: undefined
  };
}

export const QueryAllowedBidderResponse = {
  encode(message: QueryAllowedBidderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowedBidder !== undefined) {
      AllowedBidder.encode(message.allowedBidder, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBidderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedBidderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowedBidder = AllowedBidder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllowedBidderResponse>): QueryAllowedBidderResponse {
    const message = createBaseQueryAllowedBidderResponse();
    message.allowedBidder = object.allowedBidder !== undefined && object.allowedBidder !== null ? AllowedBidder.fromPartial(object.allowedBidder) : undefined;
    return message;
  }

};

function createBaseQueryAllowedBiddersRequest(): QueryAllowedBiddersRequest {
  return {
    auctionId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryAllowedBiddersRequest = {
  encode(message: QueryAllowedBiddersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBiddersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedBiddersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<QueryAllowedBiddersRequest>): QueryAllowedBiddersRequest {
    const message = createBaseQueryAllowedBiddersRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllowedBiddersResponse(): QueryAllowedBiddersResponse {
  return {
    allowedBidders: [],
    pagination: undefined
  };
}

export const QueryAllowedBiddersResponse = {
  encode(message: QueryAllowedBiddersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedBidders) {
      AllowedBidder.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedBiddersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedBiddersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowedBidders.push(AllowedBidder.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllowedBiddersResponse>): QueryAllowedBiddersResponse {
    const message = createBaseQueryAllowedBiddersResponse();
    message.allowedBidders = object.allowedBidders?.map(e => AllowedBidder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBidsRequest(): QueryBidsRequest {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    isMatched: "",
    pagination: undefined
  };
}

export const QueryBidsRequest = {
  encode(message: QueryBidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    if (message.isMatched !== "") {
      writer.uint32(26).string(message.isMatched);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.bidder = reader.string();
          break;

        case 3:
          message.isMatched = reader.string();
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

  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = createBaseQueryBidsRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.isMatched = object.isMatched ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBidsResponse(): QueryBidsResponse {
  return {
    bids: [],
    pagination: undefined
  };
}

export const QueryBidsResponse = {
  encode(message: QueryBidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bid.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = createBaseQueryBidsResponse();
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryBidRequest(): QueryBidRequest {
  return {
    auctionId: Long.UZERO,
    bidId: Long.UZERO
  };
}

export const QueryBidRequest = {
  encode(message: QueryBidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (!message.bidId.isZero()) {
      writer.uint32(16).uint64(message.bidId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.bidId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = createBaseQueryBidRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidId = object.bidId !== undefined && object.bidId !== null ? Long.fromValue(object.bidId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryBidResponse(): QueryBidResponse {
  return {
    bid: undefined
  };
}

export const QueryBidResponse = {
  encode(message: QueryBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = createBaseQueryBidResponse();
    message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
    return message;
  }

};

function createBaseQueryVestingsRequest(): QueryVestingsRequest {
  return {
    auctionId: Long.UZERO
  };
}

export const QueryVestingsRequest = {
  encode(message: QueryVestingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVestingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVestingsRequest>): QueryVestingsRequest {
    const message = createBaseQueryVestingsRequest();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryVestingsResponse(): QueryVestingsResponse {
  return {
    vestings: []
  };
}

export const QueryVestingsResponse = {
  encode(message: QueryVestingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vestings) {
      VestingQueue.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVestingsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vestings.push(VestingQueue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVestingsResponse>): QueryVestingsResponse {
    const message = createBaseQueryVestingsResponse();
    message.vestings = object.vestings?.map(e => VestingQueue.fromPartial(e)) || [];
    return message;
  }

};
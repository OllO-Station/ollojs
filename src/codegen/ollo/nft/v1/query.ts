import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Owner, OwnerSDKType, Collection, CollectionSDKType, Denom, DenomSDKType, BaseNFT, BaseNFTSDKType } from "./nft";
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
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */

export interface QuerySupplyRequest {
  denomId: string;
  owner: string;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */

export interface QuerySupplyRequestSDKType {
  denom_id: string;
  owner: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */

export interface QuerySupplyResponse {
  /** QuerySupplyResponse is the response type for the Query/Supply RPC method */
  amount: Long;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */

export interface QuerySupplyResponseSDKType {
  amount: Long;
}
/**
 * QueryNFTsOfOwnerRequest is the request type for the Query/NFTsOfOwner RPC
 * method
 */

export interface QueryNFTsOfOwnerRequest {
  denomId: string;
  owner: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryNFTsOfOwnerRequest is the request type for the Query/NFTsOfOwner RPC
 * method
 */

export interface QueryNFTsOfOwnerRequestSDKType {
  denom_id: string;
  owner: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryNFTsOfOwnerResponse is the response type for the Query/NFTsOfOwner RPC
 * method
 */

export interface QueryNFTsOfOwnerResponse {
  owner?: Owner;
  pagination?: PageResponse;
}
/**
 * QueryNFTsOfOwnerResponse is the response type for the Query/NFTsOfOwner RPC
 * method
 */

export interface QueryNFTsOfOwnerResponseSDKType {
  owner?: OwnerSDKType;
  pagination?: PageResponseSDKType;
}
/**
 * QueryCollectionRequest is the request type for the Query/Collection RPC
 * method
 */

export interface QueryCollectionRequest {
  denomId: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryCollectionRequest is the request type for the Query/Collection RPC
 * method
 */

export interface QueryCollectionRequestSDKType {
  denom_id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryCollectionResponse is the response type for the Query/Collection RPC
 * method
 */

export interface QueryCollectionResponse {
  collection?: Collection;
  pagination?: PageResponse;
}
/**
 * QueryCollectionResponse is the response type for the Query/Collection RPC
 * method
 */

export interface QueryCollectionResponseSDKType {
  collection?: CollectionSDKType;
  pagination?: PageResponseSDKType;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */

export interface QueryDenomRequest {
  denomId: string;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */

export interface QueryDenomRequestSDKType {
  denom_id: string;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */

export interface QueryDenomResponse {
  /** QueryDenomResponse is the response type for the Query/Denom RPC method */
  denom?: Denom;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */

export interface QueryDenomResponseSDKType {
  denom?: DenomSDKType;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */

export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */

export interface QueryDenomsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */

export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination?: PageResponse;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */

export interface QueryDenomsResponseSDKType {
  denoms: DenomSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */

export interface QueryNFTRequest {
  denomId: string;
  tokenId: string;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */

export interface QueryNFTRequestSDKType {
  denom_id: string;
  token_id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */

export interface QueryNFTResponse {
  /** QueryNFTResponse is the response type for the Query/NFT RPC method */
  nft?: BaseNFT;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */

export interface QueryNFTResponseSDKType {
  nft?: BaseNFTSDKType;
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

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    denomId: "",
    owner: ""
  };
}

export const QuerySupplyRequest = {
  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: Long.UZERO
  };
}

export const QuerySupplyResponse = {
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseQueryNFTsOfOwnerRequest(): QueryNFTsOfOwnerRequest {
  return {
    denomId: "",
    owner: "",
    pagination: undefined
  };
}

export const QueryNFTsOfOwnerRequest = {
  encode(message: QueryNFTsOfOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsOfOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsOfOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;

        case 2:
          message.owner = reader.string();
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

  fromPartial(object: DeepPartial<QueryNFTsOfOwnerRequest>): QueryNFTsOfOwnerRequest {
    const message = createBaseQueryNFTsOfOwnerRequest();
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNFTsOfOwnerResponse(): QueryNFTsOfOwnerResponse {
  return {
    owner: undefined,
    pagination: undefined
  };
}

export const QueryNFTsOfOwnerResponse = {
  encode(message: QueryNFTsOfOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsOfOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsOfOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<QueryNFTsOfOwnerResponse>): QueryNFTsOfOwnerResponse {
    const message = createBaseQueryNFTsOfOwnerResponse();
    message.owner = object.owner !== undefined && object.owner !== null ? Owner.fromPartial(object.owner) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    denomId: "",
    pagination: undefined
  };
}

export const QueryCollectionRequest = {
  encode(message: QueryCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
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

  fromPartial(object: DeepPartial<QueryCollectionRequest>): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: undefined,
    pagination: undefined
  };
}

export const QueryCollectionResponse = {
  encode(message: QueryCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<QueryCollectionResponse>): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDenomRequest(): QueryDenomRequest {
  return {
    denomId: ""
  };
}

export const QueryDenomRequest = {
  encode(message: QueryDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomRequest>): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  }

};

function createBaseQueryDenomResponse(): QueryDenomResponse {
  return {
    denom: undefined
  };
}

export const QueryDenomResponse = {
  encode(message: QueryDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomResponse>): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    return message;
  }

};

function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {
    pagination: undefined
  };
}

export const QueryDenomsRequest = {
  encode(message: QueryDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomsRequest>): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return {
    denoms: [],
    pagination: undefined
  };
}

export const QueryDenomsResponse = {
  encode(message: QueryDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryDenomsResponse>): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    denomId: "",
    tokenId: ""
  };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }

    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;

        case 2:
          message.tokenId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.denomId = object.denomId ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  }

};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: undefined
  };
}

export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      BaseNFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nft = BaseNFT.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? BaseNFT.fromPartial(object.nft) : undefined;
    return message;
  }

};
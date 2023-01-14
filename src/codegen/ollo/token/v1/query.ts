import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryTokenRequest is request type for the Query/Token RPC method */

export interface QueryTokenRequest {
  /** QueryTokenRequest is request type for the Query/Token RPC method */
  denom: string;
}
/** QueryTokenRequest is request type for the Query/Token RPC method */

export interface QueryTokenRequestSDKType {
  denom: string;
}
/** QueryTokenResponse is response type for the Query/Token RPC method */

export interface QueryTokenResponse {
  Token?: Any;
}
/** QueryTokenResponse is response type for the Query/Token RPC method */

export interface QueryTokenResponseSDKType {
  Token?: AnySDKType;
}
/** QueryTokensRequest is request type for the Query/Tokens RPC method */

export interface QueryTokensRequest {
  owner: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryTokensRequest is request type for the Query/Tokens RPC method */

export interface QueryTokensRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/** QueryTokensResponse is response type for the Query/Tokens RPC method */

export interface QueryTokensResponse {
  Tokens: Any[];
  pagination?: PageResponse;
}
/** QueryTokensResponse is response type for the Query/Tokens RPC method */

export interface QueryTokensResponseSDKType {
  Tokens: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryFeesRequest is request type for the Query/Fees RPC method */

export interface QueryFeesRequest {
  /** QueryFeesRequest is request type for the Query/Fees RPC method */
  denom: string;
}
/** QueryFeesRequest is request type for the Query/Fees RPC method */

export interface QueryFeesRequestSDKType {
  denom: string;
}
/** QueryFeesResponse is response type for the Query/Fees RPC method */

export interface QueryFeesResponse {
  exist: boolean;
  issueFee?: Coin;
  mintFee?: Coin;
}
/** QueryFeesResponse is response type for the Query/Fees RPC method */

export interface QueryFeesResponseSDKType {
  exist: boolean;
  issue_fee?: CoinSDKType;
  mint_fee?: CoinSDKType;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */

export interface QueryParamsRequest {}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */

export interface QueryParamsRequestSDKType {}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */

export interface QueryParamsResponse {
  params?: Params;
  res?: PageResponse;
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
  res?: PageResponseSDKType;
}
/** QueryTokenRequest is request type for the Query/TotalBurn RPC method */

export interface QueryBurnRequest {}
/** QueryTokenRequest is request type for the Query/TotalBurn RPC method */

export interface QueryBurnRequestSDKType {}
/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */

export interface QueryBurnResponse {
  burnedCoins: Coin[];
}
/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */

export interface QueryBurnResponseSDKType {
  burned_coins: CoinSDKType[];
}

function createBaseQueryTokenRequest(): QueryTokenRequest {
  return {
    denom: ""
  };
}

export const QueryTokenRequest = {
  encode(message: QueryTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTokenRequest>): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryTokenResponse(): QueryTokenResponse {
  return {
    Token: undefined
  };
}

export const QueryTokenResponse = {
  encode(message: QueryTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Token !== undefined) {
      Any.encode(message.Token, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Token = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTokenResponse>): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.Token = object.Token !== undefined && object.Token !== null ? Any.fromPartial(object.Token) : undefined;
    return message;
  }

};

function createBaseQueryTokensRequest(): QueryTokensRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryTokensRequest = {
  encode(message: QueryTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();

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

  fromPartial(object: DeepPartial<QueryTokensRequest>): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryTokensResponse(): QueryTokensResponse {
  return {
    Tokens: [],
    pagination: undefined
  };
}

export const QueryTokensResponse = {
  encode(message: QueryTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Tokens) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Tokens.push(Any.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryTokensResponse>): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.Tokens = object.Tokens?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryFeesRequest(): QueryFeesRequest {
  return {
    denom: ""
  };
}

export const QueryFeesRequest = {
  encode(message: QueryFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeesRequest>): QueryFeesRequest {
    const message = createBaseQueryFeesRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryFeesResponse(): QueryFeesResponse {
  return {
    exist: false,
    issueFee: undefined,
    mintFee: undefined
  };
}

export const QueryFeesResponse = {
  encode(message: QueryFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist === true) {
      writer.uint32(8).bool(message.exist);
    }

    if (message.issueFee !== undefined) {
      Coin.encode(message.issueFee, writer.uint32(18).fork()).ldelim();
    }

    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exist = reader.bool();
          break;

        case 2:
          message.issueFee = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeesResponse>): QueryFeesResponse {
    const message = createBaseQueryFeesResponse();
    message.exist = object.exist ?? false;
    message.issueFee = object.issueFee !== undefined && object.issueFee !== null ? Coin.fromPartial(object.issueFee) : undefined;
    message.mintFee = object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    return message;
  }

};

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
    params: undefined,
    res: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.res !== undefined) {
      PageResponse.encode(message.res, writer.uint32(18).fork()).ldelim();
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

        case 2:
          message.res = PageResponse.decode(reader, reader.uint32());
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
    message.res = object.res !== undefined && object.res !== null ? PageResponse.fromPartial(object.res) : undefined;
    return message;
  }

};

function createBaseQueryBurnRequest(): QueryBurnRequest {
  return {};
}

export const QueryBurnRequest = {
  encode(_: QueryBurnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnRequest();

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

  fromPartial(_: DeepPartial<QueryBurnRequest>): QueryBurnRequest {
    const message = createBaseQueryBurnRequest();
    return message;
  }

};

function createBaseQueryBurnResponse(): QueryBurnResponse {
  return {
    burnedCoins: []
  };
}

export const QueryBurnResponse = {
  encode(message: QueryBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.burnedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.burnedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBurnResponse>): QueryBurnResponse {
    const message = createBaseQueryBurnResponse();
    message.burnedCoins = object.burnedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
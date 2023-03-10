import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { MarketMaker, MarketMakerSDKType } from "./mm";
import { Incentive, IncentiveSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryMarketMakersRequest {
  address: string;
  pairId: Long;
  eligible: string;
  pagination?: PageRequest;
}
export interface QueryMarketMakersRequestSDKType {
  address: string;
  pair_id: Long;
  eligible: string;
  pagination?: PageRequestSDKType;
}
export interface QueryMarketMakersResponse {
  marketMakers: MarketMaker[];
  pagination?: PageResponse;
}
export interface QueryMarketMakersResponseSDKType {
  market_makers: MarketMakerSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryIncentiveRequest {
  address: string;
}
export interface QueryIncentiveRequestSDKType {
  address: string;
}
export interface QueryIncentiveResponse {
  incentive?: Incentive;
}
export interface QueryIncentiveResponseSDKType {
  incentive?: IncentiveSDKType;
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

function createBaseQueryMarketMakersRequest(): QueryMarketMakersRequest {
  return {
    address: "",
    pairId: Long.UZERO,
    eligible: "",
    pagination: undefined
  };
}

export const QueryMarketMakersRequest = {
  encode(message: QueryMarketMakersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.eligible !== "") {
      writer.uint32(26).string(message.eligible);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMakersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMakersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.eligible = reader.string();
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

  fromPartial(object: DeepPartial<QueryMarketMakersRequest>): QueryMarketMakersRequest {
    const message = createBaseQueryMarketMakersRequest();
    message.address = object.address ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.eligible = object.eligible ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryMarketMakersResponse(): QueryMarketMakersResponse {
  return {
    marketMakers: [],
    pagination: undefined
  };
}

export const QueryMarketMakersResponse = {
  encode(message: QueryMarketMakersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.marketMakers) {
      MarketMaker.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketMakersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMakersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketMakers.push(MarketMaker.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryMarketMakersResponse>): QueryMarketMakersResponse {
    const message = createBaseQueryMarketMakersResponse();
    message.marketMakers = object.marketMakers?.map(e => MarketMaker.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryIncentiveRequest(): QueryIncentiveRequest {
  return {
    address: ""
  };
}

export const QueryIncentiveRequest = {
  encode(message: QueryIncentiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIncentiveRequest>): QueryIncentiveRequest {
    const message = createBaseQueryIncentiveRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryIncentiveResponse(): QueryIncentiveResponse {
  return {
    incentive: undefined
  };
}

export const QueryIncentiveResponse = {
  encode(message: QueryIncentiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentive !== undefined) {
      Incentive.encode(message.incentive, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentive = Incentive.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryIncentiveResponse>): QueryIncentiveResponse {
    const message = createBaseQueryIncentiveResponse();
    message.incentive = object.incentive !== undefined && object.incentive !== null ? Incentive.fromPartial(object.incentive) : undefined;
    return message;
  }

};
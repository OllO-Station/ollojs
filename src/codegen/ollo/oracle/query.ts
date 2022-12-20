import { Params, ParamsSDKType } from "./params";
import { PricesResult, PricesResultSDKType } from "./prices";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
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
export interface QueryPricesRequest {
  requestId: Long;
}
export interface QueryPricesRequestSDKType {
  request_id: Long;
}
export interface QueryPricesResponse {
  result?: PricesResult;
}
export interface QueryPricesResponseSDKType {
  result?: PricesResultSDKType;
}
export interface QueryLastPricesIdRequest {}
export interface QueryLastPricesIdRequestSDKType {}
export interface QueryLastPricesIdResponse {
  requestId: Long;
}
export interface QueryLastPricesIdResponseSDKType {
  request_id: Long;
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

function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {
    requestId: Long.ZERO
  };
}

export const QueryPricesRequest = {
  encode(message: QueryPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPricesRequest>): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.ZERO;
    return message;
  }

};

function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    result: undefined
  };
}

export const QueryPricesResponse = {
  encode(message: QueryPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      PricesResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = PricesResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPricesResponse>): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.result = object.result !== undefined && object.result !== null ? PricesResult.fromPartial(object.result) : undefined;
    return message;
  }

};

function createBaseQueryLastPricesIdRequest(): QueryLastPricesIdRequest {
  return {};
}

export const QueryLastPricesIdRequest = {
  encode(_: QueryLastPricesIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPricesIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPricesIdRequest();

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

  fromPartial(_: DeepPartial<QueryLastPricesIdRequest>): QueryLastPricesIdRequest {
    const message = createBaseQueryLastPricesIdRequest();
    return message;
  }

};

function createBaseQueryLastPricesIdResponse(): QueryLastPricesIdResponse {
  return {
    requestId: Long.ZERO
  };
}

export const QueryLastPricesIdResponse = {
  encode(message: QueryLastPricesIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPricesIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPricesIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLastPricesIdResponse>): QueryLastPricesIdResponse {
    const message = createBaseQueryLastPricesIdResponse();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.ZERO;
    return message;
  }

};
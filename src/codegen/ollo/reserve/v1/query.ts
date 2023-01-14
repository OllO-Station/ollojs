import { Params, ParamsSDKType } from "./params";
import { DenomWhitelist, DenomWhitelistSDKType } from "./reserve";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryDenomWhitelist.gRequest defines the request structure for the
 * DenomWhitelist.g gRPC query.
 */

export interface QueryGetDenomWhitelistRequest {
  denom: string;
}
/**
 * QueryDenomWhitelist.gRequest defines the request structure for the
 * DenomWhitelist.g gRPC query.
 */

export interface QueryGetDenomWhitelistRequestSDKType {
  denom: string;
}
/**
 * QueryDenomWhitelist.gResponse defines the response structure for the
 * DenomWhitelist.g gRPC query.
 */

export interface QueryGetDenomWhitelistResponse {
  whitelist?: DenomWhitelist;
}
/**
 * QueryDenomWhitelist.gResponse defines the response structure for the
 * DenomWhitelist.g gRPC query.
 */

export interface QueryGetDenomWhitelistResponseSDKType {
  whitelist?: DenomWhitelistSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorRequestSDKType {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorResponseSDKType {
  denoms: string[];
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */

export interface QueryGetDenomsRequest {}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */

export interface QueryGetDenomsRequestSDKType {}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */

export interface QueryGetDenomsResponse {
  /** params defines the parameters of the module. */
  denoms: string[];
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */

export interface QueryGetDenomsResponseSDKType {
  denoms: string[];
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */

export interface QueryGetDenomRequest {
  denom: string;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */

export interface QueryGetDenomRequestSDKType {
  denom: string;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */

export interface QueryGetDenomResponse {}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */

export interface QueryGetDenomResponseSDKType {}

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

function createBaseQueryGetDenomWhitelistRequest(): QueryGetDenomWhitelistRequest {
  return {
    denom: ""
  };
}

export const QueryGetDenomWhitelistRequest = {
  encode(message: QueryGetDenomWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomWhitelistRequest();

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

  fromPartial(object: DeepPartial<QueryGetDenomWhitelistRequest>): QueryGetDenomWhitelistRequest {
    const message = createBaseQueryGetDenomWhitelistRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetDenomWhitelistResponse(): QueryGetDenomWhitelistResponse {
  return {
    whitelist: undefined
  };
}

export const QueryGetDenomWhitelistResponse = {
  encode(message: QueryGetDenomWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelist !== undefined) {
      DenomWhitelist.encode(message.whitelist, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomWhitelistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.whitelist = DenomWhitelist.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetDenomWhitelistResponse>): QueryGetDenomWhitelistResponse {
    const message = createBaseQueryGetDenomWhitelistResponse();
    message.whitelist = object.whitelist !== undefined && object.whitelist !== null ? DenomWhitelist.fromPartial(object.whitelist) : undefined;
    return message;
  }

};

function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: ""
  };
}

export const QueryDenomsFromCreatorRequest = {
  encode(message: QueryDenomsFromCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: []
  };
}

export const QueryDenomsFromCreatorResponse = {
  encode(message: QueryDenomsFromCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryGetDenomsRequest(): QueryGetDenomsRequest {
  return {};
}

export const QueryGetDenomsRequest = {
  encode(_: QueryGetDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomsRequest();

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

  fromPartial(_: DeepPartial<QueryGetDenomsRequest>): QueryGetDenomsRequest {
    const message = createBaseQueryGetDenomsRequest();
    return message;
  }

};

function createBaseQueryGetDenomsResponse(): QueryGetDenomsResponse {
  return {
    denoms: []
  };
}

export const QueryGetDenomsResponse = {
  encode(message: QueryGetDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetDenomsResponse>): QueryGetDenomsResponse {
    const message = createBaseQueryGetDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryGetDenomRequest(): QueryGetDenomRequest {
  return {
    denom: ""
  };
}

export const QueryGetDenomRequest = {
  encode(message: QueryGetDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomRequest();

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

  fromPartial(object: DeepPartial<QueryGetDenomRequest>): QueryGetDenomRequest {
    const message = createBaseQueryGetDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryGetDenomResponse(): QueryGetDenomResponse {
  return {};
}

export const QueryGetDenomResponse = {
  encode(_: QueryGetDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomResponse();

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

  fromPartial(_: DeepPartial<QueryGetDenomResponse>): QueryGetDenomResponse {
    const message = createBaseQueryGetDenomResponse();
    return message;
  }

};
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Emission, EmissionSDKType } from "./emissions";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface QueryAllEmissionsRequest {
  pagination?: PageRequest;
}
export interface QueryAllEmissionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllEmissionsResponse {
  emissions: Emission[];
  pagination?: PageResponse;
}
export interface QueryAllEmissionsResponseSDKType {
  emissions: EmissionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryEmissionRequest {
  id: Long;
}
export interface QueryEmissionRequestSDKType {
  id: Long;
}
export interface QueryEmissionResponse {
  emissions?: Emission;
}
export interface QueryEmissionResponseSDKType {
  emissions?: EmissionSDKType;
}

function createBaseQueryAllEmissionsRequest(): QueryAllEmissionsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllEmissionsRequest = {
  encode(message: QueryAllEmissionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEmissionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEmissionsRequest();

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

  fromPartial(object: DeepPartial<QueryAllEmissionsRequest>): QueryAllEmissionsRequest {
    const message = createBaseQueryAllEmissionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllEmissionsResponse(): QueryAllEmissionsResponse {
  return {
    emissions: [],
    pagination: undefined
  };
}

export const QueryAllEmissionsResponse = {
  encode(message: QueryAllEmissionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.emissions) {
      Emission.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEmissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEmissionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.emissions.push(Emission.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllEmissionsResponse>): QueryAllEmissionsResponse {
    const message = createBaseQueryAllEmissionsResponse();
    message.emissions = object.emissions?.map(e => Emission.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryEmissionRequest(): QueryEmissionRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryEmissionRequest = {
  encode(message: QueryEmissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEmissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEmissionRequest();

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

  fromPartial(object: DeepPartial<QueryEmissionRequest>): QueryEmissionRequest {
    const message = createBaseQueryEmissionRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryEmissionResponse(): QueryEmissionResponse {
  return {
    emissions: undefined
  };
}

export const QueryEmissionResponse = {
  encode(message: QueryEmissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emissions !== undefined) {
      Emission.encode(message.emissions, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEmissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEmissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.emissions = Emission.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEmissionResponse>): QueryEmissionResponse {
    const message = createBaseQueryEmissionResponse();
    message.emissions = object.emissions !== undefined && object.emissions !== null ? Emission.fromPartial(object.emissions) : undefined;
    return message;
  }

};
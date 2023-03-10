import { Epoch, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * * message QueryParamsRequest {} *\/
 * **\/
 * * // QueryParamsResponse is response type for the Query/Params RPC method. *\/
 * * message QueryParamsResponse { *\/
 * *   // params holds all the parameters of this module. *\/
 * *   ollo.epoch.v1.Params params = 1 [ (gogoproto.nullable) = false ]; *\/
 * * } *\/
 */

export interface QueryEpochsRequest {}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * * message QueryParamsRequest {} *\/
 * **\/
 * * // QueryParamsResponse is response type for the Query/Params RPC method. *\/
 * * message QueryParamsResponse { *\/
 * *   // params holds all the parameters of this module. *\/
 * *   ollo.epoch.v1.Params params = 1 [ (gogoproto.nullable) = false ]; *\/
 * * } *\/
 */

export interface QueryEpochsRequestSDKType {}
export interface QueryEpochsResponse {
  epochs: Epoch[];
}
export interface QueryEpochsResponseSDKType {
  epochs: EpochSDKType[];
}
export interface QueryEpochRequest {
  id: string;
}
export interface QueryEpochRequestSDKType {
  id: string;
}
export interface QueryEpochResponse {
  epoch?: Epoch;
}
export interface QueryEpochResponseSDKType {
  epoch?: EpochSDKType;
}
export interface QueryCurrentEpochRequest {
  id: string;
}
export interface QueryCurrentEpochRequestSDKType {
  id: string;
}
export interface QueryCurrentEpochResponse {
  epoch?: Epoch;
}
export interface QueryCurrentEpochResponseSDKType {
  epoch?: EpochSDKType;
}

function createBaseQueryEpochsRequest(): QueryEpochsRequest {
  return {};
}

export const QueryEpochsRequest = {
  encode(_: QueryEpochsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsRequest();

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

  fromPartial(_: DeepPartial<QueryEpochsRequest>): QueryEpochsRequest {
    const message = createBaseQueryEpochsRequest();
    return message;
  }

};

function createBaseQueryEpochsResponse(): QueryEpochsResponse {
  return {
    epochs: []
  };
}

export const QueryEpochsResponse = {
  encode(message: QueryEpochsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      Epoch.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochs.push(Epoch.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEpochsResponse>): QueryEpochsResponse {
    const message = createBaseQueryEpochsResponse();
    message.epochs = object.epochs?.map(e => Epoch.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryEpochRequest(): QueryEpochRequest {
  return {
    id: ""
  };
}

export const QueryEpochRequest = {
  encode(message: QueryEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochRequest();

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

  fromPartial(object: DeepPartial<QueryEpochRequest>): QueryEpochRequest {
    const message = createBaseQueryEpochRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryEpochResponse(): QueryEpochResponse {
  return {
    epoch: undefined
  };
}

export const QueryEpochResponse = {
  encode(message: QueryEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epoch = Epoch.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryEpochResponse>): QueryEpochResponse {
    const message = createBaseQueryEpochResponse();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
    return message;
  }

};

function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    id: ""
  };
}

export const QueryCurrentEpochRequest = {
  encode(message: QueryCurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();

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

  fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    epoch: undefined
  };
}

export const QueryCurrentEpochResponse = {
  encode(message: QueryCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epoch = Epoch.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
    return message;
  }

};
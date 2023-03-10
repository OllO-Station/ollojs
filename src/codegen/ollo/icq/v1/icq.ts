import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface InterchainQuery {
  id: string;
  connectionId: string;
  chainId: string;
  queryType: string;
  request: Uint8Array;
  period: string;
  lastHeight: string;
  callbackId: string;
  ttl: Long;
  lastEmission: string;
}
export interface InterchainQuerySDKType {
  id: string;
  connection_id: string;
  chain_id: string;
  query_type: string;
  request: Uint8Array;
  period: string;
  last_height: string;
  callback_id: string;
  ttl: Long;
  last_emission: string;
}
export interface DataPoint {
  id: string;
  remoteHeight: Long;
  localHeight: string;
  value: Uint8Array;
}
export interface DataPointSDKType {
  id: string;
  remote_height: Long;
  local_height: string;
  value: Uint8Array;
}

function createBaseInterchainQuery(): InterchainQuery {
  return {
    id: "",
    connectionId: "",
    chainId: "",
    queryType: "",
    request: new Uint8Array(),
    period: "",
    lastHeight: "",
    callbackId: "",
    ttl: Long.UZERO,
    lastEmission: ""
  };
}

export const InterchainQuery = {
  encode(message: InterchainQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }

    if (message.queryType !== "") {
      writer.uint32(34).string(message.queryType);
    }

    if (message.request.length !== 0) {
      writer.uint32(42).bytes(message.request);
    }

    if (message.period !== "") {
      writer.uint32(50).string(message.period);
    }

    if (message.lastHeight !== "") {
      writer.uint32(58).string(message.lastHeight);
    }

    if (message.callbackId !== "") {
      writer.uint32(66).string(message.callbackId);
    }

    if (!message.ttl.isZero()) {
      writer.uint32(72).uint64(message.ttl);
    }

    if (message.lastEmission !== "") {
      writer.uint32(82).string(message.lastEmission);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        case 3:
          message.chainId = reader.string();
          break;

        case 4:
          message.queryType = reader.string();
          break;

        case 5:
          message.request = reader.bytes();
          break;

        case 6:
          message.period = reader.string();
          break;

        case 7:
          message.lastHeight = reader.string();
          break;

        case 8:
          message.callbackId = reader.string();
          break;

        case 9:
          message.ttl = (reader.uint64() as Long);
          break;

        case 10:
          message.lastEmission = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InterchainQuery>): InterchainQuery {
    const message = createBaseInterchainQuery();
    message.id = object.id ?? "";
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.queryType = object.queryType ?? "";
    message.request = object.request ?? new Uint8Array();
    message.period = object.period ?? "";
    message.lastHeight = object.lastHeight ?? "";
    message.callbackId = object.callbackId ?? "";
    message.ttl = object.ttl !== undefined && object.ttl !== null ? Long.fromValue(object.ttl) : Long.UZERO;
    message.lastEmission = object.lastEmission ?? "";
    return message;
  }

};

function createBaseDataPoint(): DataPoint {
  return {
    id: "",
    remoteHeight: Long.UZERO,
    localHeight: "",
    value: new Uint8Array()
  };
}

export const DataPoint = {
  encode(message: DataPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (!message.remoteHeight.isZero()) {
      writer.uint32(16).uint64(message.remoteHeight);
    }

    if (message.localHeight !== "") {
      writer.uint32(26).string(message.localHeight);
    }

    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataPoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.remoteHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.localHeight = reader.string();
          break;

        case 4:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DataPoint>): DataPoint {
    const message = createBaseDataPoint();
    message.id = object.id ?? "";
    message.remoteHeight = object.remoteHeight !== undefined && object.remoteHeight !== null ? Long.fromValue(object.remoteHeight) : Long.UZERO;
    message.localHeight = object.localHeight ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};
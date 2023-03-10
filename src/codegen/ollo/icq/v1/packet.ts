import { RequestQuery, RequestQuerySDKType } from "../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface InterchainQueryPacketData {
  data: Uint8Array;
  memo: string;
}
export interface InterchainQueryPacketDataSDKType {
  data: Uint8Array;
  memo: string;
}
export interface InterchainQueryPacketAck {
  data: Uint8Array;
}
export interface InterchainQueryPacketAckSDKType {
  data: Uint8Array;
}
export interface CosmosQuery {
  requests: RequestQuery[];
}
export interface CosmosQuerySDKType {
  requests: RequestQuerySDKType[];
}

function createBaseInterchainQueryPacketData(): InterchainQueryPacketData {
  return {
    data: new Uint8Array(),
    memo: ""
  };
}

export const InterchainQueryPacketData = {
  encode(message: InterchainQueryPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQueryPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.memo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InterchainQueryPacketData>): InterchainQueryPacketData {
    const message = createBaseInterchainQueryPacketData();
    message.data = object.data ?? new Uint8Array();
    message.memo = object.memo ?? "";
    return message;
  }

};

function createBaseInterchainQueryPacketAck(): InterchainQueryPacketAck {
  return {
    data: new Uint8Array()
  };
}

export const InterchainQueryPacketAck = {
  encode(message: InterchainQueryPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterchainQueryPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryPacketAck();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InterchainQueryPacketAck>): InterchainQueryPacketAck {
    const message = createBaseInterchainQueryPacketAck();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseCosmosQuery(): CosmosQuery {
  return {
    requests: []
  };
}

export const CosmosQuery = {
  encode(message: CosmosQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      RequestQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requests.push(RequestQuery.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CosmosQuery>): CosmosQuery {
    const message = createBaseCosmosQuery();
    message.requests = object.requests?.map(e => RequestQuery.fromPartial(e)) || [];
    return message;
  }

};
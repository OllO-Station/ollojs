import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventPlaceBid {
  id: string;
  creator: string;
}
export interface EventPlaceBidSDKType {
  id: string;
  creator: string;
}
export interface EventCancelBid {
  id: string;
  creator: string;
}
export interface EventCancelBidSDKType {
  id: string;
  creator: string;
}

function createBaseEventPlaceBid(): EventPlaceBid {
  return {
    id: "",
    creator: ""
  };
}

export const EventPlaceBid = {
  encode(message: EventPlaceBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPlaceBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventPlaceBid>): EventPlaceBid {
    const message = createBaseEventPlaceBid();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};

function createBaseEventCancelBid(): EventCancelBid {
  return {
    id: "",
    creator: ""
  };
}

export const EventCancelBid = {
  encode(message: EventCancelBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCancelBid>): EventCancelBid {
    const message = createBaseEventCancelBid();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};
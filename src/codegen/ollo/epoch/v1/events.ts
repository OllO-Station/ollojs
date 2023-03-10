import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventEpochStarted {
  epochId: Long;
}
export interface EventEpochStartedSDKType {
  epoch_id: Long;
}
export interface EventEpochEnded {
  epochId: Long;
}
export interface EventEpochEndedSDKType {
  epoch_id: Long;
}

function createBaseEventEpochStarted(): EventEpochStarted {
  return {
    epochId: Long.UZERO
  };
}

export const EventEpochStarted = {
  encode(message: EventEpochStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochId.isZero()) {
      writer.uint32(8).uint64(message.epochId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochStarted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventEpochStarted>): EventEpochStarted {
    const message = createBaseEventEpochStarted();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? Long.fromValue(object.epochId) : Long.UZERO;
    return message;
  }

};

function createBaseEventEpochEnded(): EventEpochEnded {
  return {
    epochId: Long.UZERO
  };
}

export const EventEpochEnded = {
  encode(message: EventEpochEnded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochId.isZero()) {
      writer.uint32(8).uint64(message.epochId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochEnded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEpochEnded();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.epochId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventEpochEnded>): EventEpochEnded {
    const message = createBaseEventEpochEnded();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? Long.fromValue(object.epochId) : Long.UZERO;
    return message;
  }

};
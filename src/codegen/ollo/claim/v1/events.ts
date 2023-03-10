import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventGoalCompleted {
  goalID: Long;
  address: string;
}
export interface EventGoalCompletedSDKType {
  goalID: Long;
  address: string;
}
export interface EventGoalClaimed {
  goalID: Long;
  claimer: string;
}
export interface EventGoalClaimedSDKType {
  goalID: Long;
  claimer: string;
}

function createBaseEventGoalCompleted(): EventGoalCompleted {
  return {
    goalID: Long.UZERO,
    address: ""
  };
}

export const EventGoalCompleted = {
  encode(message: EventGoalCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.goalID.isZero()) {
      writer.uint32(8).uint64(message.goalID);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGoalCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGoalCompleted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.goalID = (reader.uint64() as Long);
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventGoalCompleted>): EventGoalCompleted {
    const message = createBaseEventGoalCompleted();
    message.goalID = object.goalID !== undefined && object.goalID !== null ? Long.fromValue(object.goalID) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseEventGoalClaimed(): EventGoalClaimed {
  return {
    goalID: Long.UZERO,
    claimer: ""
  };
}

export const EventGoalClaimed = {
  encode(message: EventGoalClaimed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.goalID.isZero()) {
      writer.uint32(8).uint64(message.goalID);
    }

    if (message.claimer !== "") {
      writer.uint32(18).string(message.claimer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGoalClaimed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGoalClaimed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.goalID = (reader.uint64() as Long);
          break;

        case 2:
          message.claimer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventGoalClaimed>): EventGoalClaimed {
    const message = createBaseEventGoalClaimed();
    message.goalID = object.goalID !== undefined && object.goalID !== null ? Long.fromValue(object.goalID) : Long.UZERO;
    message.claimer = object.claimer ?? "";
    return message;
  }

};
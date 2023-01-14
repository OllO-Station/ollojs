import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventMissionCompleted {
  missionId: Long;
  address: string;
}
export interface EventMissionCompletedSDKType {
  mission_id: Long;
  address: string;
}
export interface EventMissionClaimed {
  missionId: Long;
  claimer: string;
}
export interface EventMissionClaimedSDKType {
  mission_id: Long;
  claimer: string;
}

function createBaseEventMissionCompleted(): EventMissionCompleted {
  return {
    missionId: Long.UZERO,
    address: ""
  };
}

export const EventMissionCompleted = {
  encode(message: EventMissionCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.missionId.isZero()) {
      writer.uint32(8).uint64(message.missionId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMissionCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMissionCompleted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.missionId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<EventMissionCompleted>): EventMissionCompleted {
    const message = createBaseEventMissionCompleted();
    message.missionId = object.missionId !== undefined && object.missionId !== null ? Long.fromValue(object.missionId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseEventMissionClaimed(): EventMissionClaimed {
  return {
    missionId: Long.UZERO,
    claimer: ""
  };
}

export const EventMissionClaimed = {
  encode(message: EventMissionClaimed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.missionId.isZero()) {
      writer.uint32(8).uint64(message.missionId);
    }

    if (message.claimer !== "") {
      writer.uint32(18).string(message.claimer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMissionClaimed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMissionClaimed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.missionId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<EventMissionClaimed>): EventMissionClaimed {
    const message = createBaseEventMissionClaimed();
    message.missionId = object.missionId !== undefined && object.missionId !== null ? Long.fromValue(object.missionId) : Long.UZERO;
    message.claimer = object.claimer ?? "";
    return message;
  }

};
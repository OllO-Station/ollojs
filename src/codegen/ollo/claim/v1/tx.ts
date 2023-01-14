import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaim {
  claimer: string;
  goalId: Long;
}
export interface MsgClaimSDKType {
  claimer: string;
  goal_id: Long;
}
export interface MsgClaimResponse {
  claimed: string;
}
export interface MsgClaimResponseSDKType {
  claimed: string;
}

function createBaseMsgClaim(): MsgClaim {
  return {
    claimer: "",
    goalId: Long.UZERO
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }

    if (!message.goalId.isZero()) {
      writer.uint32(16).uint64(message.goalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;

        case 2:
          message.goalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.claimer = object.claimer ?? "";
    message.goalId = object.goalId !== undefined && object.goalId !== null ? Long.fromValue(object.goalId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    claimed: ""
  };
}

export const MsgClaimResponse = {
  encode(message: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimed !== "") {
      writer.uint32(10).string(message.claimed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimed = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.claimed = object.claimed ?? "";
    return message;
  }

};
import { ConditionType } from "./claim";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaim {
  /** airdrop_id specifies index of the airdrop */
  airdropId: Long;
  /** recipient specifies the bech32-encoded address that is eligible to claim airdrop */

  recipient: string;
  /** condition_type specifies the condition type */

  conditionType: ConditionType;
}
export interface MsgClaimSDKType {
  airdrop_id: Long;
  recipient: string;
  condition_type: ConditionType;
}
export interface MsgClaimResponse {}
export interface MsgClaimResponseSDKType {}

function createBaseMsgClaim(): MsgClaim {
  return {
    airdropId: Long.UZERO,
    recipient: "",
    conditionType: 0
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.conditionType !== 0) {
      writer.uint32(24).int32(message.conditionType);
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
          message.airdropId = (reader.uint64() as Long);
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.conditionType = (reader.int32() as any);
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
    message.airdropId = object.airdropId !== undefined && object.airdropId !== null ? Long.fromValue(object.airdropId) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    message.conditionType = object.conditionType ?? 0;
    return message;
  }

};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}

export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();

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

  fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  }

};
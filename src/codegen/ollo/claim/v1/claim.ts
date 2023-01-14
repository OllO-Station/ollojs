import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface InitialClaim {
  enabled: boolean;
  goalId: Long;
}
export interface InitialClaimSDKType {
  enabled: boolean;
  goal_id: Long;
}
export interface ClaimRecord {
  address: string;
  claimable: string;
  completedGoals: Long[];
  claimedGoals: Long[];
}
export interface ClaimRecordSDKType {
  address: string;
  claimable: string;
  completed_goals: Long[];
  claimed_goals: Long[];
}

function createBaseInitialClaim(): InitialClaim {
  return {
    enabled: false,
    goalId: Long.UZERO
  };
}

export const InitialClaim = {
  encode(message: InitialClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }

    if (!message.goalId.isZero()) {
      writer.uint32(16).uint64(message.goalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitialClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitialClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
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

  fromPartial(object: DeepPartial<InitialClaim>): InitialClaim {
    const message = createBaseInitialClaim();
    message.enabled = object.enabled ?? false;
    message.goalId = object.goalId !== undefined && object.goalId !== null ? Long.fromValue(object.goalId) : Long.UZERO;
    return message;
  }

};

function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    claimable: "",
    completedGoals: [],
    claimedGoals: []
  };
}

export const ClaimRecord = {
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.claimable !== "") {
      writer.uint32(18).string(message.claimable);
    }

    writer.uint32(26).fork();

    for (const v of message.completedGoals) {
      writer.uint64(v);
    }

    writer.ldelim();
    writer.uint32(34).fork();

    for (const v of message.claimedGoals) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.claimable = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.completedGoals.push((reader.uint64() as Long));
            }
          } else {
            message.completedGoals.push((reader.uint64() as Long));
          }

          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.claimedGoals.push((reader.uint64() as Long));
            }
          } else {
            message.claimedGoals.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.claimable = object.claimable ?? "";
    message.completedGoals = object.completedGoals?.map(e => Long.fromValue(e)) || [];
    message.claimedGoals = object.claimedGoals?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};
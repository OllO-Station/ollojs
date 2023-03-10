import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ClaimAction {
  ClaimActionUnspecified = 0,
  ClaimActionInitialClaim = 1,
  ClaimActionStake = 2,
  ClaimActionCastVote = 3,
  ClaimActionDepositLiquidity = 4,
  ClaimActionLockLiquidity = 5,
  ClaimActionMintNft = 6,
  ClaimActionAuctionNft = 7,
  ClaimActionDepositExternalAsset = 8,
  ClaimActionSwap = 9,
  ClaimActionBorrow = 10,
  UNRECOGNIZED = -1,
}
export const ClaimActionSDKType = ClaimAction;
export function claimActionFromJSON(object: any): ClaimAction {
  switch (object) {
    case 0:
    case "ClaimActionUnspecified":
      return ClaimAction.ClaimActionUnspecified;

    case 1:
    case "ClaimActionInitialClaim":
      return ClaimAction.ClaimActionInitialClaim;

    case 2:
    case "ClaimActionStake":
      return ClaimAction.ClaimActionStake;

    case 3:
    case "ClaimActionCastVote":
      return ClaimAction.ClaimActionCastVote;

    case 4:
    case "ClaimActionDepositLiquidity":
      return ClaimAction.ClaimActionDepositLiquidity;

    case 5:
    case "ClaimActionLockLiquidity":
      return ClaimAction.ClaimActionLockLiquidity;

    case 6:
    case "ClaimActionMintNft":
      return ClaimAction.ClaimActionMintNft;

    case 7:
    case "ClaimActionAuctionNft":
      return ClaimAction.ClaimActionAuctionNft;

    case 8:
    case "ClaimActionDepositExternalAsset":
      return ClaimAction.ClaimActionDepositExternalAsset;

    case 9:
    case "ClaimActionSwap":
      return ClaimAction.ClaimActionSwap;

    case 10:
    case "ClaimActionBorrow":
      return ClaimAction.ClaimActionBorrow;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimAction.UNRECOGNIZED;
  }
}
export function claimActionToJSON(object: ClaimAction): string {
  switch (object) {
    case ClaimAction.ClaimActionUnspecified:
      return "ClaimActionUnspecified";

    case ClaimAction.ClaimActionInitialClaim:
      return "ClaimActionInitialClaim";

    case ClaimAction.ClaimActionStake:
      return "ClaimActionStake";

    case ClaimAction.ClaimActionCastVote:
      return "ClaimActionCastVote";

    case ClaimAction.ClaimActionDepositLiquidity:
      return "ClaimActionDepositLiquidity";

    case ClaimAction.ClaimActionLockLiquidity:
      return "ClaimActionLockLiquidity";

    case ClaimAction.ClaimActionMintNft:
      return "ClaimActionMintNft";

    case ClaimAction.ClaimActionAuctionNft:
      return "ClaimActionAuctionNft";

    case ClaimAction.ClaimActionDepositExternalAsset:
      return "ClaimActionDepositExternalAsset";

    case ClaimAction.ClaimActionSwap:
      return "ClaimActionSwap";

    case ClaimAction.ClaimActionBorrow:
      return "ClaimActionBorrow";

    case ClaimAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ClaimStatus {
  ClaimStatusUnspecified = 0,
  ClaimStatusPending = 1,
  ClaimStatusClaimed = 2,
  ClaimStatusActive = 3,
  ClaimStatusExpired = 4,
  UNRECOGNIZED = -1,
}
export const ClaimStatusSDKType = ClaimStatus;
export function claimStatusFromJSON(object: any): ClaimStatus {
  switch (object) {
    case 0:
    case "ClaimStatusUnspecified":
      return ClaimStatus.ClaimStatusUnspecified;

    case 1:
    case "ClaimStatusPending":
      return ClaimStatus.ClaimStatusPending;

    case 2:
    case "ClaimStatusClaimed":
      return ClaimStatus.ClaimStatusClaimed;

    case 3:
    case "ClaimStatusActive":
      return ClaimStatus.ClaimStatusActive;

    case 4:
    case "ClaimStatusExpired":
      return ClaimStatus.ClaimStatusExpired;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimStatus.UNRECOGNIZED;
  }
}
export function claimStatusToJSON(object: ClaimStatus): string {
  switch (object) {
    case ClaimStatus.ClaimStatusUnspecified:
      return "ClaimStatusUnspecified";

    case ClaimStatus.ClaimStatusPending:
      return "ClaimStatusPending";

    case ClaimStatus.ClaimStatusClaimed:
      return "ClaimStatusClaimed";

    case ClaimStatus.ClaimStatusActive:
      return "ClaimStatusActive";

    case ClaimStatus.ClaimStatusExpired:
      return "ClaimStatusExpired";

    case ClaimStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
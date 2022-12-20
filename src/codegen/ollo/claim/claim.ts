import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ConditionType defines the type of condition that a recipient must execute in order to receive a claimable amount. */

export enum ConditionType {
  /** CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED specifies an unknown condition type */
  CONDITION_TYPE_UNSPECIFIED = 0,

  /** CONDITION_TYPE_DEPOSIT - CONDITION_TYPE_DEPOSIT specifies deposit condition type */
  CONDITION_TYPE_DEPOSIT = 1,

  /** CONDITION_TYPE_SWAP - CONDITION_TYPE_SWAP specifies swap condition type */
  CONDITION_TYPE_SWAP = 2,

  /** CONDITION_TYPE_STAKE - CONDITION_TYPE_STAKE specifies staking condition */
  CONDITION_TYPE_STAKE = 3,

  /** CONDITION_TYPE_VOTE - CONDITION_TYPE_VOTE specifies governance vote condition type */
  CONDITION_TYPE_VOTE = 4,
  UNRECOGNIZED = -1,
}
export const ConditionTypeSDKType = ConditionType;
export function conditionTypeFromJSON(object: any): ConditionType {
  switch (object) {
    case 0:
    case "CONDITION_TYPE_UNSPECIFIED":
      return ConditionType.CONDITION_TYPE_UNSPECIFIED;

    case 1:
    case "CONDITION_TYPE_DEPOSIT":
      return ConditionType.CONDITION_TYPE_DEPOSIT;

    case 2:
    case "CONDITION_TYPE_SWAP":
      return ConditionType.CONDITION_TYPE_SWAP;

    case 3:
    case "CONDITION_TYPE_STAKE":
      return ConditionType.CONDITION_TYPE_STAKE;

    case 4:
    case "CONDITION_TYPE_VOTE":
      return ConditionType.CONDITION_TYPE_VOTE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ConditionType.UNRECOGNIZED;
  }
}
export function conditionTypeToJSON(object: ConditionType): string {
  switch (object) {
    case ConditionType.CONDITION_TYPE_UNSPECIFIED:
      return "CONDITION_TYPE_UNSPECIFIED";

    case ConditionType.CONDITION_TYPE_DEPOSIT:
      return "CONDITION_TYPE_DEPOSIT";

    case ConditionType.CONDITION_TYPE_SWAP:
      return "CONDITION_TYPE_SWAP";

    case ConditionType.CONDITION_TYPE_STAKE:
      return "CONDITION_TYPE_STAKE";

    case ConditionType.CONDITION_TYPE_VOTE:
      return "CONDITION_TYPE_VOTE";

    case ConditionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Airdrop defines airdrop information. */

export interface Airdrop {
  /** id specifies index of the airdrop */
  id: Long;
  /** source_address defines the bech32-encoded source address where the source of coins from */

  sourceAddress: string;
  /** conditions specifies a list of conditions */

  conditions: ConditionType[];
  /** start_time specifies the start time of the airdrop */

  startTime?: Date;
  /** end_time specifies the start time of the airdrop */

  endTime?: Date;
}
/** Airdrop defines airdrop information. */

export interface AirdropSDKType {
  id: Long;
  source_address: string;
  conditions: ConditionType[];
  start_time?: Date;
  end_time?: Date;
}
/** ClaimRecord defines claim record that corresponds to the airdrop. */

export interface ClaimRecord {
  /** airdrop_id specifies airdrop id */
  airdropId: Long;
  /** recipient specifies the bech32-encoded address that is eligible to claim airdrop */

  recipient: string;
  /** initial_claimable_coins specifies the initial claimable coins */

  initialClaimableCoins: Coin[];
  /** claimable_coins specifies the unclaimed claimable coins */

  claimableCoins: Coin[];
  /**
   * claimed_conditions specifies a list of condition types
   * initial values are empty and each condition type gets appended when claim is successfully executed
   */

  claimedConditions: ConditionType[];
}
/** ClaimRecord defines claim record that corresponds to the airdrop. */

export interface ClaimRecordSDKType {
  airdrop_id: Long;
  recipient: string;
  initial_claimable_coins: CoinSDKType[];
  claimable_coins: CoinSDKType[];
  claimed_conditions: ConditionType[];
}

function createBaseAirdrop(): Airdrop {
  return {
    id: Long.UZERO,
    sourceAddress: "",
    conditions: [],
    startTime: undefined,
    endTime: undefined
  };
}

export const Airdrop = {
  encode(message: Airdrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.sourceAddress !== "") {
      writer.uint32(18).string(message.sourceAddress);
    }

    writer.uint32(26).fork();

    for (const v of message.conditions) {
      writer.int32(v);
    }

    writer.ldelim();

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.sourceAddress = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.conditions.push((reader.int32() as any));
            }
          } else {
            message.conditions.push((reader.int32() as any));
          }

          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Airdrop>): Airdrop {
    const message = createBaseAirdrop();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sourceAddress = object.sourceAddress ?? "";
    message.conditions = object.conditions?.map(e => e) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  }

};

function createBaseClaimRecord(): ClaimRecord {
  return {
    airdropId: Long.UZERO,
    recipient: "",
    initialClaimableCoins: [],
    claimableCoins: [],
    claimedConditions: []
  };
}

export const ClaimRecord = {
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    for (const v of message.initialClaimableCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.claimableCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    writer.uint32(42).fork();

    for (const v of message.claimedConditions) {
      writer.int32(v);
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
          message.airdropId = (reader.uint64() as Long);
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.initialClaimableCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.claimableCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.claimedConditions.push((reader.int32() as any));
            }
          } else {
            message.claimedConditions.push((reader.int32() as any));
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
    message.airdropId = object.airdropId !== undefined && object.airdropId !== null ? Long.fromValue(object.airdropId) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    message.initialClaimableCoins = object.initialClaimableCoins?.map(e => Coin.fromPartial(e)) || [];
    message.claimableCoins = object.claimableCoins?.map(e => Coin.fromPartial(e)) || [];
    message.claimedConditions = object.claimedConditions?.map(e => e) || [];
    return message;
  }

};
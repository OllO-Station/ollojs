import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PlanType enumerates the valid types of a plan. */

export enum PlanType {
  /** PLAN_TYPE_UNSPECIFIED - PLAN_TYPE_UNSPECIFIED defines the default plan type. */
  PLAN_TYPE_UNSPECIFIED = 0,

  /** PLAN_TYPE_PUBLIC - PLAN_TYPE_PUBLIC defines the public plan type. */
  PLAN_TYPE_PUBLIC = 1,

  /** PLAN_TYPE_PRIVATE - PLAN_TYPE_PRIVATE defines the private plan type. */
  PLAN_TYPE_PRIVATE = 2,
  UNRECOGNIZED = -1,
}
export const PlanTypeSDKType = PlanType;
export function planTypeFromJSON(object: any): PlanType {
  switch (object) {
    case 0:
    case "PLAN_TYPE_UNSPECIFIED":
      return PlanType.PLAN_TYPE_UNSPECIFIED;

    case 1:
    case "PLAN_TYPE_PUBLIC":
      return PlanType.PLAN_TYPE_PUBLIC;

    case 2:
    case "PLAN_TYPE_PRIVATE":
      return PlanType.PLAN_TYPE_PRIVATE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PlanType.UNRECOGNIZED;
  }
}
export function planTypeToJSON(object: PlanType): string {
  switch (object) {
    case PlanType.PLAN_TYPE_UNSPECIFIED:
      return "PLAN_TYPE_UNSPECIFIED";

    case PlanType.PLAN_TYPE_PUBLIC:
      return "PLAN_TYPE_PUBLIC";

    case PlanType.PLAN_TYPE_PRIVATE:
      return "PLAN_TYPE_PRIVATE";

    case PlanType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** AddressType enumerates the available types of a address. */

export enum AddressType {
  /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
  ADDRESS_TYPE_32_BYTES = 0,

  /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
  ADDRESS_TYPE_20_BYTES = 1,
  UNRECOGNIZED = -1,
}
export const AddressTypeSDKType = AddressType;
export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case "ADDRESS_TYPE_32_BYTES":
      return AddressType.ADDRESS_TYPE_32_BYTES;

    case 1:
    case "ADDRESS_TYPE_20_BYTES":
      return AddressType.ADDRESS_TYPE_20_BYTES;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AddressType.UNRECOGNIZED;
  }
}
export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.ADDRESS_TYPE_32_BYTES:
      return "ADDRESS_TYPE_32_BYTES";

    case AddressType.ADDRESS_TYPE_20_BYTES:
      return "ADDRESS_TYPE_20_BYTES";

    case AddressType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BasePlan defines a base plan type and contains the required fields
 * for basic farming plan functionality. Any custom farming plan type must
 * extend this type for additional functionality (for example, fixed amount plan, ratio
 * plan).
 */

export interface BasePlan {
  /** id specifies index of the farming plan */
  id: Long;
  /** name specifies the name for the plan */

  name: string;
  /**
   * type specifies the plan type; type 0 is public and 1 is private
   * public plan must be created through governance proposal and private plan is
   * created by account
   */

  type: PlanType;
  /** farming_pool_address defines the bech32-encoded address of the farming pool */

  farmingPoolAddress: string;
  /**
   * termination_address defines the Bech32-encoded address that terminates the plan
   * when the plan ends after the end time, the balance of the farming pool address
   * is transferred to the termination address
   */

  terminationAddress: string;
  /** staking_coin_weights specifies the coin weights for the plan */

  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */

  startTime?: Date;
  /** end_time specifies the end time of the plan */

  endTime?: Date;
  /** terminated indicates whether the plan has been terminated or not */

  terminated: boolean;
  /** last_distribution_time specifies the last time a distribution occurred */

  lastDistributionTime?: Date;
  /** distributed_coins specifies the total coins distributed by this plan */

  distributedCoins: Coin[];
}
/**
 * BasePlan defines a base plan type and contains the required fields
 * for basic farming plan functionality. Any custom farming plan type must
 * extend this type for additional functionality (for example, fixed amount plan, ratio
 * plan).
 */

export interface BasePlanSDKType {
  id: Long;
  name: string;
  type: PlanType;
  farming_pool_address: string;
  termination_address: string;
  staking_coin_weights: DecCoinSDKType[];
  start_time?: Date;
  end_time?: Date;
  terminated: boolean;
  last_distribution_time?: Date;
  distributed_coins: CoinSDKType[];
}
/**
 * FixedAmountPlan defines a fixed amount plan that distributes a fixed amount
 * of coins for every epoch.
 */

export interface FixedAmountPlan {
  basePlan?: BasePlan;
  /** epoch_amount specifies the distributing amount for each epoch */

  epochAmount: Coin[];
}
/**
 * FixedAmountPlan defines a fixed amount plan that distributes a fixed amount
 * of coins for every epoch.
 */

export interface FixedAmountPlanSDKType {
  base_plan?: BasePlanSDKType;
  epoch_amount: CoinSDKType[];
}
/**
 * RatioPlan defines a plan that distributes to farmers by ratio
 * distribution for every epoch day.
 */

export interface RatioPlan {
  basePlan?: BasePlan;
  /** epoch_ratio specifies the distributing amount by ratio */

  epochRatio: string;
}
/**
 * RatioPlan defines a plan that distributes to farmers by ratio
 * distribution for every epoch day.
 */

export interface RatioPlanSDKType {
  base_plan?: BasePlanSDKType;
  epoch_ratio: string;
}
/** Staking defines a farmer's staking information. */

export interface Staking {
  amount: string;
  startingEpoch: Long;
}
/** Staking defines a farmer's staking information. */

export interface StakingSDKType {
  amount: string;
  starting_epoch: Long;
}
/** QueuedStaking defines staking that is waiting in a queue. */

export interface QueuedStaking {
  amount: string;
}
/** QueuedStaking defines staking that is waiting in a queue. */

export interface QueuedStakingSDKType {
  amount: string;
}
/** TotalStakings defines the total staking amount for a staking coin denom. */

export interface TotalStakings {
  amount: string;
}
/** TotalStakings defines the total staking amount for a staking coin denom. */

export interface TotalStakingsSDKType {
  amount: string;
}
/** HistoricalRewards defines the cumulative unit rewards for a given staking coin denom and an epoch number. */

export interface HistoricalRewards {
  cumulativeUnitRewards: DecCoin[];
}
/** HistoricalRewards defines the cumulative unit rewards for a given staking coin denom and an epoch number. */

export interface HistoricalRewardsSDKType {
  cumulative_unit_rewards: DecCoinSDKType[];
}
/**
 * OutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a staking coin denom.
 */

export interface OutstandingRewards {
  rewards: DecCoin[];
}
/**
 * OutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a staking coin denom.
 */

export interface OutstandingRewardsSDKType {
  rewards: DecCoinSDKType[];
}

function createBaseBasePlan(): BasePlan {
  return {
    id: Long.UZERO,
    name: "",
    type: 0,
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    terminated: false,
    lastDistributionTime: undefined,
    distributedCoins: []
  };
}

export const BasePlan = {
  encode(message: BasePlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }

    if (message.farmingPoolAddress !== "") {
      writer.uint32(34).string(message.farmingPoolAddress);
    }

    if (message.terminationAddress !== "") {
      writer.uint32(42).string(message.terminationAddress);
    }

    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(66).fork()).ldelim();
    }

    if (message.terminated === true) {
      writer.uint32(72).bool(message.terminated);
    }

    if (message.lastDistributionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastDistributionTime), writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.distributedCoins) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasePlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.type = (reader.int32() as any);
          break;

        case 4:
          message.farmingPoolAddress = reader.string();
          break;

        case 5:
          message.terminationAddress = reader.string();
          break;

        case 6:
          message.stakingCoinWeights.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 9:
          message.terminated = reader.bool();
          break;

        case 10:
          message.lastDistributionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 11:
          message.distributedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BasePlan>): BasePlan {
    const message = createBaseBasePlan();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinWeights = object.stakingCoinWeights?.map(e => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.terminated = object.terminated ?? false;
    message.lastDistributionTime = object.lastDistributionTime ?? undefined;
    message.distributedCoins = object.distributedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFixedAmountPlan(): FixedAmountPlan {
  return {
    basePlan: undefined,
    epochAmount: []
  };
}

export const FixedAmountPlan = {
  encode(message: FixedAmountPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basePlan !== undefined) {
      BasePlan.encode(message.basePlan, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FixedAmountPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixedAmountPlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basePlan = BasePlan.decode(reader, reader.uint32());
          break;

        case 2:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FixedAmountPlan>): FixedAmountPlan {
    const message = createBaseFixedAmountPlan();
    message.basePlan = object.basePlan !== undefined && object.basePlan !== null ? BasePlan.fromPartial(object.basePlan) : undefined;
    message.epochAmount = object.epochAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRatioPlan(): RatioPlan {
  return {
    basePlan: undefined,
    epochRatio: ""
  };
}

export const RatioPlan = {
  encode(message: RatioPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basePlan !== undefined) {
      BasePlan.encode(message.basePlan, writer.uint32(10).fork()).ldelim();
    }

    if (message.epochRatio !== "") {
      writer.uint32(18).string(message.epochRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RatioPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRatioPlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basePlan = BasePlan.decode(reader, reader.uint32());
          break;

        case 2:
          message.epochRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RatioPlan>): RatioPlan {
    const message = createBaseRatioPlan();
    message.basePlan = object.basePlan !== undefined && object.basePlan !== null ? BasePlan.fromPartial(object.basePlan) : undefined;
    message.epochRatio = object.epochRatio ?? "";
    return message;
  }

};

function createBaseStaking(): Staking {
  return {
    amount: "",
    startingEpoch: Long.UZERO
  };
}

export const Staking = {
  encode(message: Staking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    if (!message.startingEpoch.isZero()) {
      writer.uint32(16).uint64(message.startingEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        case 2:
          message.startingEpoch = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Staking>): Staking {
    const message = createBaseStaking();
    message.amount = object.amount ?? "";
    message.startingEpoch = object.startingEpoch !== undefined && object.startingEpoch !== null ? Long.fromValue(object.startingEpoch) : Long.UZERO;
    return message;
  }

};

function createBaseQueuedStaking(): QueuedStaking {
  return {
    amount: ""
  };
}

export const QueuedStaking = {
  encode(message: QueuedStaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedStaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedStaking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueuedStaking>): QueuedStaking {
    const message = createBaseQueuedStaking();
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseTotalStakings(): TotalStakings {
  return {
    amount: ""
  };
}

export const TotalStakings = {
  encode(message: TotalStakings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalStakings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalStakings();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TotalStakings>): TotalStakings {
    const message = createBaseTotalStakings();
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseHistoricalRewards(): HistoricalRewards {
  return {
    cumulativeUnitRewards: []
  };
}

export const HistoricalRewards = {
  encode(message: HistoricalRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cumulativeUnitRewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cumulativeUnitRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HistoricalRewards>): HistoricalRewards {
    const message = createBaseHistoricalRewards();
    message.cumulativeUnitRewards = object.cumulativeUnitRewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseOutstandingRewards(): OutstandingRewards {
  return {
    rewards: []
  };
}

export const OutstandingRewards = {
  encode(message: OutstandingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OutstandingRewards>): OutstandingRewards {
    const message = createBaseOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};
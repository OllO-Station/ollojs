import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Staking, StakingSDKType, QueuedStaking, QueuedStakingSDKType, HistoricalRewards, HistoricalRewardsSDKType, OutstandingRewards, OutstandingRewardsSDKType } from "./farming";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the farming module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters for the farming module */
  params?: Params;
  globalPlanId: Long;
  /** plan_records defines the plan records used for genesis state */

  planRecords: PlanRecord[];
  stakingRecords: StakingRecord[];
  queuedStakingRecords: QueuedStakingRecord[];
  historicalRewardsRecords: HistoricalRewardsRecord[];
  outstandingRewardsRecords: OutstandingRewardsRecord[];
  currentEpochRecords: CurrentEpochRecord[];
  totalStakingsRecords: TotalStakingsRecord[];
  /**
   * reward_pool_coins specifies balance of the reward pool to be distributed in
   * the plans this param is needed for import/export validation
   */

  rewardPoolCoins: Coin[];
  /** last_epoch_time specifies the last executed epoch time of the plans */

  lastEpochTime?: Date;
  /**
   * current_epoch_days specifies the epoch used when allocating farming rewards
   * in end blocker
   */

  currentEpochDays: number;
}
/** GenesisState defines the farming module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  global_plan_id: Long;
  plan_records: PlanRecordSDKType[];
  staking_records: StakingRecordSDKType[];
  queued_staking_records: QueuedStakingRecordSDKType[];
  historical_rewards_records: HistoricalRewardsRecordSDKType[];
  outstanding_rewards_records: OutstandingRewardsRecordSDKType[];
  current_epoch_records: CurrentEpochRecordSDKType[];
  total_stakings_records: TotalStakingsRecordSDKType[];
  reward_pool_coins: CoinSDKType[];
  last_epoch_time?: Date;
  current_epoch_days: number;
}
/** PlanRecord is used for import/export via genesis json. */

export interface PlanRecord {
  /** plan specifies the plan interface; it can be FixedAmountPlan or RatioPlan */
  plan?: Any;
  /**
   * farming_pool_coins specifies balance of the farming pool for the plan
   * this param is needed for import/export validation
   */

  farmingPoolCoins: Coin[];
}
/** PlanRecord is used for import/export via genesis json. */

export interface PlanRecordSDKType {
  plan?: AnySDKType;
  farming_pool_coins: CoinSDKType[];
}
/** StakingRecord is used for import/export via genesis json. */

export interface StakingRecord {
  stakingCoinDenom: string;
  farmer: string;
  staking?: Staking;
}
/** StakingRecord is used for import/export via genesis json. */

export interface StakingRecordSDKType {
  staking_coin_denom: string;
  farmer: string;
  staking?: StakingSDKType;
}
/** QueuedStakingRecord is used for import/export via genesis json. */

export interface QueuedStakingRecord {
  stakingCoinDenom: string;
  farmer: string;
  queuedStaking?: QueuedStaking;
}
/** QueuedStakingRecord is used for import/export via genesis json. */

export interface QueuedStakingRecordSDKType {
  staking_coin_denom: string;
  farmer: string;
  queued_staking?: QueuedStakingSDKType;
}
/** TotalStakingsRecord is used for import/export via genesis json. */

export interface TotalStakingsRecord {
  stakingCoinDenom: string;
  /**
   * amount specifies total amount of the staking for the staking coin denom
   * except queued staking
   */

  amount: string;
  /**
   * staking_reserve_coins specifies balance of the staking reserve account
   * where staking and queued staking for the staking coin denom is stored this
   * param is needed for import/export validation
   */

  stakingReserveCoins: Coin[];
}
/** TotalStakingsRecord is used for import/export via genesis json. */

export interface TotalStakingsRecordSDKType {
  staking_coin_denom: string;
  amount: string;
  staking_reserve_coins: CoinSDKType[];
}
/** HistoricalRewardsRecord is used for import/export via genesis json. */

export interface HistoricalRewardsRecord {
  stakingCoinDenom: string;
  epoch: Long;
  historicalRewards?: HistoricalRewards;
}
/** HistoricalRewardsRecord is used for import/export via genesis json. */

export interface HistoricalRewardsRecordSDKType {
  staking_coin_denom: string;
  epoch: Long;
  historical_rewards?: HistoricalRewardsSDKType;
}
/** OutstandingRewardsRecord is used for import/export via genesis json. */

export interface OutstandingRewardsRecord {
  stakingCoinDenom: string;
  outstandingRewards?: OutstandingRewards;
}
/** OutstandingRewardsRecord is used for import/export via genesis json. */

export interface OutstandingRewardsRecordSDKType {
  staking_coin_denom: string;
  outstanding_rewards?: OutstandingRewardsSDKType;
}
/** CurrentEpochRecord is used for import/export via genesis json. */

export interface CurrentEpochRecord {
  stakingCoinDenom: string;
  currentEpoch: Long;
}
/** CurrentEpochRecord is used for import/export via genesis json. */

export interface CurrentEpochRecordSDKType {
  staking_coin_denom: string;
  current_epoch: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    globalPlanId: Long.UZERO,
    planRecords: [],
    stakingRecords: [],
    queuedStakingRecords: [],
    historicalRewardsRecords: [],
    outstandingRewardsRecords: [],
    currentEpochRecords: [],
    totalStakingsRecords: [],
    rewardPoolCoins: [],
    lastEpochTime: undefined,
    currentEpochDays: 0
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.globalPlanId.isZero()) {
      writer.uint32(16).uint64(message.globalPlanId);
    }

    for (const v of message.planRecords) {
      PlanRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.stakingRecords) {
      StakingRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.queuedStakingRecords) {
      QueuedStakingRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.historicalRewardsRecords) {
      HistoricalRewardsRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.outstandingRewardsRecords) {
      OutstandingRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.currentEpochRecords) {
      CurrentEpochRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.totalStakingsRecords) {
      TotalStakingsRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.rewardPoolCoins) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (message.lastEpochTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastEpochTime), writer.uint32(90).fork()).ldelim();
    }

    if (message.currentEpochDays !== 0) {
      writer.uint32(96).uint32(message.currentEpochDays);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.globalPlanId = (reader.uint64() as Long);
          break;

        case 3:
          message.planRecords.push(PlanRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.stakingRecords.push(StakingRecord.decode(reader, reader.uint32()));
          break;

        case 5:
          message.queuedStakingRecords.push(QueuedStakingRecord.decode(reader, reader.uint32()));
          break;

        case 6:
          message.historicalRewardsRecords.push(HistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;

        case 7:
          message.outstandingRewardsRecords.push(OutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;

        case 8:
          message.currentEpochRecords.push(CurrentEpochRecord.decode(reader, reader.uint32()));
          break;

        case 9:
          message.totalStakingsRecords.push(TotalStakingsRecord.decode(reader, reader.uint32()));
          break;

        case 10:
          message.rewardPoolCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 11:
          message.lastEpochTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 12:
          message.currentEpochDays = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.globalPlanId = object.globalPlanId !== undefined && object.globalPlanId !== null ? Long.fromValue(object.globalPlanId) : Long.UZERO;
    message.planRecords = object.planRecords?.map(e => PlanRecord.fromPartial(e)) || [];
    message.stakingRecords = object.stakingRecords?.map(e => StakingRecord.fromPartial(e)) || [];
    message.queuedStakingRecords = object.queuedStakingRecords?.map(e => QueuedStakingRecord.fromPartial(e)) || [];
    message.historicalRewardsRecords = object.historicalRewardsRecords?.map(e => HistoricalRewardsRecord.fromPartial(e)) || [];
    message.outstandingRewardsRecords = object.outstandingRewardsRecords?.map(e => OutstandingRewardsRecord.fromPartial(e)) || [];
    message.currentEpochRecords = object.currentEpochRecords?.map(e => CurrentEpochRecord.fromPartial(e)) || [];
    message.totalStakingsRecords = object.totalStakingsRecords?.map(e => TotalStakingsRecord.fromPartial(e)) || [];
    message.rewardPoolCoins = object.rewardPoolCoins?.map(e => Coin.fromPartial(e)) || [];
    message.lastEpochTime = object.lastEpochTime ?? undefined;
    message.currentEpochDays = object.currentEpochDays ?? 0;
    return message;
  }

};

function createBasePlanRecord(): PlanRecord {
  return {
    plan: undefined,
    farmingPoolCoins: []
  };
}

export const PlanRecord = {
  encode(message: PlanRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Any.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.farmingPoolCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.plan = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.farmingPoolCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PlanRecord>): PlanRecord {
    const message = createBasePlanRecord();
    message.plan = object.plan !== undefined && object.plan !== null ? Any.fromPartial(object.plan) : undefined;
    message.farmingPoolCoins = object.farmingPoolCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseStakingRecord(): StakingRecord {
  return {
    stakingCoinDenom: "",
    farmer: "",
    staking: undefined
  };
}

export const StakingRecord = {
  encode(message: StakingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    if (message.farmer !== "") {
      writer.uint32(18).string(message.farmer);
    }

    if (message.staking !== undefined) {
      Staking.encode(message.staking, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        case 2:
          message.farmer = reader.string();
          break;

        case 3:
          message.staking = Staking.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StakingRecord>): StakingRecord {
    const message = createBaseStakingRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.farmer = object.farmer ?? "";
    message.staking = object.staking !== undefined && object.staking !== null ? Staking.fromPartial(object.staking) : undefined;
    return message;
  }

};

function createBaseQueuedStakingRecord(): QueuedStakingRecord {
  return {
    stakingCoinDenom: "",
    farmer: "",
    queuedStaking: undefined
  };
}

export const QueuedStakingRecord = {
  encode(message: QueuedStakingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    if (message.farmer !== "") {
      writer.uint32(18).string(message.farmer);
    }

    if (message.queuedStaking !== undefined) {
      QueuedStaking.encode(message.queuedStaking, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedStakingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedStakingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        case 2:
          message.farmer = reader.string();
          break;

        case 3:
          message.queuedStaking = QueuedStaking.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueuedStakingRecord>): QueuedStakingRecord {
    const message = createBaseQueuedStakingRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.farmer = object.farmer ?? "";
    message.queuedStaking = object.queuedStaking !== undefined && object.queuedStaking !== null ? QueuedStaking.fromPartial(object.queuedStaking) : undefined;
    return message;
  }

};

function createBaseTotalStakingsRecord(): TotalStakingsRecord {
  return {
    stakingCoinDenom: "",
    amount: "",
    stakingReserveCoins: []
  };
}

export const TotalStakingsRecord = {
  encode(message: TotalStakingsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    for (const v of message.stakingReserveCoins) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalStakingsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalStakingsRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 9:
          message.stakingReserveCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TotalStakingsRecord>): TotalStakingsRecord {
    const message = createBaseTotalStakingsRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.amount = object.amount ?? "";
    message.stakingReserveCoins = object.stakingReserveCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseHistoricalRewardsRecord(): HistoricalRewardsRecord {
  return {
    stakingCoinDenom: "",
    epoch: Long.UZERO,
    historicalRewards: undefined
  };
}

export const HistoricalRewardsRecord = {
  encode(message: HistoricalRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }

    if (message.historicalRewards !== undefined) {
      HistoricalRewards.encode(message.historicalRewards, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalRewardsRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        case 2:
          message.epoch = (reader.uint64() as Long);
          break;

        case 3:
          message.historicalRewards = HistoricalRewards.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<HistoricalRewardsRecord>): HistoricalRewardsRecord {
    const message = createBaseHistoricalRewardsRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.historicalRewards = object.historicalRewards !== undefined && object.historicalRewards !== null ? HistoricalRewards.fromPartial(object.historicalRewards) : undefined;
    return message;
  }

};

function createBaseOutstandingRewardsRecord(): OutstandingRewardsRecord {
  return {
    stakingCoinDenom: "",
    outstandingRewards: undefined
  };
}

export const OutstandingRewardsRecord = {
  encode(message: OutstandingRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    if (message.outstandingRewards !== undefined) {
      OutstandingRewards.encode(message.outstandingRewards, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingRewardsRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        case 2:
          message.outstandingRewards = OutstandingRewards.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OutstandingRewardsRecord>): OutstandingRewardsRecord {
    const message = createBaseOutstandingRewardsRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.outstandingRewards = object.outstandingRewards !== undefined && object.outstandingRewards !== null ? OutstandingRewards.fromPartial(object.outstandingRewards) : undefined;
    return message;
  }

};

function createBaseCurrentEpochRecord(): CurrentEpochRecord {
  return {
    stakingCoinDenom: "",
    currentEpoch: Long.UZERO
  };
}

export const CurrentEpochRecord = {
  encode(message: CurrentEpochRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    if (!message.currentEpoch.isZero()) {
      writer.uint32(16).uint64(message.currentEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentEpochRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentEpochRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        case 2:
          message.currentEpoch = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CurrentEpochRecord>): CurrentEpochRecord {
    const message = createBaseCurrentEpochRecord();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.UZERO;
    return message;
  }

};
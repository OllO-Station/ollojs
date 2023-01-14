import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Staking, StakingSDKType, QueuedStaking, QueuedStakingSDKType, HistoricalRewards, HistoricalRewardsSDKType, OutstandingRewards, OutstandingRewardsSDKType } from "./farming";
import { Long, DeepPartial } from "../../../helpers";
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
     * reward_pool_coins specifies balance of the reward pool to be distributed in the plans
     * this param is needed for import/export validation
     */
    rewardPoolCoins: Coin[];
    /** last_epoch_time specifies the last executed epoch time of the plans */
    lastEpochTime?: Date;
    /** current_epoch_days specifies the epoch used when allocating farming rewards in end blocker */
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
    /** amount specifies total amount of the staking for the staking coin denom except queued staking */
    amount: string;
    /**
     * staking_reserve_coins specifies balance of the staking reserve account where staking and queued staking for the
     * staking coin denom is stored this param is needed for import/export validation
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const PlanRecord: {
    encode(message: PlanRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlanRecord;
    fromPartial(object: DeepPartial<PlanRecord>): PlanRecord;
};
export declare const StakingRecord: {
    encode(message: StakingRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingRecord;
    fromPartial(object: DeepPartial<StakingRecord>): StakingRecord;
};
export declare const QueuedStakingRecord: {
    encode(message: QueuedStakingRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueuedStakingRecord;
    fromPartial(object: DeepPartial<QueuedStakingRecord>): QueuedStakingRecord;
};
export declare const TotalStakingsRecord: {
    encode(message: TotalStakingsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalStakingsRecord;
    fromPartial(object: DeepPartial<TotalStakingsRecord>): TotalStakingsRecord;
};
export declare const HistoricalRewardsRecord: {
    encode(message: HistoricalRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalRewardsRecord;
    fromPartial(object: DeepPartial<HistoricalRewardsRecord>): HistoricalRewardsRecord;
};
export declare const OutstandingRewardsRecord: {
    encode(message: OutstandingRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingRewardsRecord;
    fromPartial(object: DeepPartial<OutstandingRewardsRecord>): OutstandingRewardsRecord;
};
export declare const CurrentEpochRecord: {
    encode(message: CurrentEpochRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CurrentEpochRecord;
    fromPartial(object: DeepPartial<CurrentEpochRecord>): CurrentEpochRecord;
};

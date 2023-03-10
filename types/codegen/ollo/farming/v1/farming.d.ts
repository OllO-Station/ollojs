import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PlanType enumerates the valid types of a plan. */
export declare enum PlanType {
    /** PLAN_TYPE_UNSPECIFIED - PLAN_TYPE_UNSPECIFIED defines the default plan type. */
    PLAN_TYPE_UNSPECIFIED = 0,
    /** PLAN_TYPE_PUBLIC - PLAN_TYPE_PUBLIC defines the public plan type. */
    PLAN_TYPE_PUBLIC = 1,
    /** PLAN_TYPE_PRIVATE - PLAN_TYPE_PRIVATE defines the private plan type. */
    PLAN_TYPE_PRIVATE = 2,
    UNRECOGNIZED = -1
}
export declare const PlanTypeSDKType: typeof PlanType;
export declare function planTypeFromJSON(object: any): PlanType;
export declare function planTypeToJSON(object: PlanType): string;
/** AddressType enumerates the available types of a address. */
export declare enum AddressType {
    /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
    ADDRESS_TYPE_32_BYTES = 0,
    /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
    ADDRESS_TYPE_20_BYTES = 1,
    UNRECOGNIZED = -1
}
export declare const AddressTypeSDKType: typeof AddressType;
export declare function addressTypeFromJSON(object: any): AddressType;
export declare function addressTypeToJSON(object: AddressType): string;
/**
 * BasePlan defines a base plan type and contains the required fields
 * for basic farming plan functionality. Any custom farming plan type must
 * extend this type for additional functionality (for example, fixed amount
 * plan, ratio plan).
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
     * termination_address defines the Bech32-encoded address that terminates the
     * plan when the plan ends after the end time, the balance of the farming pool
     * address is transferred to the termination address
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
 * extend this type for additional functionality (for example, fixed amount
 * plan, ratio plan).
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
/**
 * HistoricalRewards defines the cumulative unit rewards for a given staking
 * coin denom and an epoch number.
 */
export interface HistoricalRewards {
    cumulativeUnitRewards: DecCoin[];
}
/**
 * HistoricalRewards defines the cumulative unit rewards for a given staking
 * coin denom and an epoch number.
 */
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
export declare const BasePlan: {
    encode(message: BasePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasePlan;
    fromPartial(object: DeepPartial<BasePlan>): BasePlan;
};
export declare const FixedAmountPlan: {
    encode(message: FixedAmountPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FixedAmountPlan;
    fromPartial(object: DeepPartial<FixedAmountPlan>): FixedAmountPlan;
};
export declare const RatioPlan: {
    encode(message: RatioPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RatioPlan;
    fromPartial(object: DeepPartial<RatioPlan>): RatioPlan;
};
export declare const Staking: {
    encode(message: Staking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Staking;
    fromPartial(object: DeepPartial<Staking>): Staking;
};
export declare const QueuedStaking: {
    encode(message: QueuedStaking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueuedStaking;
    fromPartial(object: DeepPartial<QueuedStaking>): QueuedStaking;
};
export declare const TotalStakings: {
    encode(message: TotalStakings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TotalStakings;
    fromPartial(object: DeepPartial<TotalStakings>): TotalStakings;
};
export declare const HistoricalRewards: {
    encode(message: HistoricalRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalRewards;
    fromPartial(object: DeepPartial<HistoricalRewards>): HistoricalRewards;
};
export declare const OutstandingRewards: {
    encode(message: OutstandingRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingRewards;
    fromPartial(object: DeepPartial<OutstandingRewards>): OutstandingRewards;
};

import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/**
 * MsgCreateFixedAmountPlan defines a SDK message for creating a new fixed
 * amount farming plan.
 */
export interface MsgCreateFixedAmountPlan {
    /** name specifies the name for the plan */
    name: string;
    /**
     * creator defines the bech32-encoded address of the creator for the private
     * plan, termination address is also set to this creator.
     */
    creator: string;
    /** staking_coin_weights specifies coins weight for the plan */
    stakingCoinWeights: DecCoin[];
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_time specifies the end time of the plan */
    endTime?: Date;
    /** epoch_amount specifies the distributing amount for each epoch */
    epochAmount: Coin[];
}
/**
 * MsgCreateFixedAmountPlan defines a SDK message for creating a new fixed
 * amount farming plan.
 */
export interface MsgCreateFixedAmountPlanSDKType {
    name: string;
    creator: string;
    staking_coin_weights: DecCoinSDKType[];
    start_time?: Date;
    end_time?: Date;
    epoch_amount: CoinSDKType[];
}
/**
 * MsgCreateFixedAmountPlanResponse defines the MsgCreateFixedAmountPlanResponse
 * response type.
 */
export interface MsgCreateFixedAmountPlanResponse {
}
/**
 * MsgCreateFixedAmountPlanResponse defines the MsgCreateFixedAmountPlanResponse
 * response type.
 */
export interface MsgCreateFixedAmountPlanResponseSDKType {
}
/**
 * MsgCreateRatioPlan defines a SDK message for creating a new ratio farming
 * plan.
 */
export interface MsgCreateRatioPlan {
    /** name specifies the name for the plan */
    name: string;
    /**
     * creator defines the bech32-encoded address of the creator for the private
     * plan, termination address is also set to this creator.
     */
    creator: string;
    /** staking_coin_weights specifies coins weight for the plan */
    stakingCoinWeights: DecCoin[];
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_time specifies the end time of the plan */
    endTime?: Date;
    /** epoch_ratio specifies the distributing amount by ratio */
    epochRatio: string;
}
/**
 * MsgCreateRatioPlan defines a SDK message for creating a new ratio farming
 * plan.
 */
export interface MsgCreateRatioPlanSDKType {
    name: string;
    creator: string;
    staking_coin_weights: DecCoinSDKType[];
    start_time?: Date;
    end_time?: Date;
    epoch_ratio: string;
}
/**
 * MsgCreateRatioPlanResponse  defines the Msg/MsgCreateRatioPlanResponse
 * response type.
 */
export interface MsgCreateRatioPlanResponse {
}
/**
 * MsgCreateRatioPlanResponse  defines the Msg/MsgCreateRatioPlanResponse
 * response type.
 */
export interface MsgCreateRatioPlanResponseSDKType {
}
/** MsgStake defines a SDK message for staking coins into the farming plan. */
export interface MsgStake {
    /** farmer defines the bech32-encoded address of the farmer */
    farmer: string;
    /** staking_coins specifies coins to stake */
    stakingCoins: Coin[];
}
/** MsgStake defines a SDK message for staking coins into the farming plan. */
export interface MsgStakeSDKType {
    farmer: string;
    staking_coins: CoinSDKType[];
}
/** MsgStakeResponse  defines the Msg/MsgStakeResponse response type. */
export interface MsgStakeResponse {
}
/** MsgStakeResponse  defines the Msg/MsgStakeResponse response type. */
export interface MsgStakeResponseSDKType {
}
/**
 * MsgUnstake defines a SDK message for performing unstaking of coins from the
 * farming plan.
 */
export interface MsgUnstake {
    /** farmer defines the bech32-encoded address of the farmer */
    farmer: string;
    /** unstaking_coins specifies coins to stake */
    unstakingCoins: Coin[];
}
/**
 * MsgUnstake defines a SDK message for performing unstaking of coins from the
 * farming plan.
 */
export interface MsgUnstakeSDKType {
    farmer: string;
    unstaking_coins: CoinSDKType[];
}
/** MsgUnstakeResponse defines the Msg/MsgUnstakeResponse response type. */
export interface MsgUnstakeResponse {
}
/** MsgUnstakeResponse defines the Msg/MsgUnstakeResponse response type. */
export interface MsgUnstakeResponseSDKType {
}
/** MsgHarvest defines a SDK message for claiming rewards from the farming plan. */
export interface MsgHarvest {
    /** farmer defines the bech32-encoded address of the farmer */
    farmer: string;
    /**
     * staking_coin_denoms is the set of denoms of staked coins as a source of the
     * reward for harvesting
     */
    stakingCoinDenoms: string[];
}
/** MsgHarvest defines a SDK message for claiming rewards from the farming plan. */
export interface MsgHarvestSDKType {
    farmer: string;
    staking_coin_denoms: string[];
}
/** MsgHarvestResponse defines the Msg/MsgHarvestResponse response type. */
export interface MsgHarvestResponse {
}
/** MsgHarvestResponse defines the Msg/MsgHarvestResponse response type. */
export interface MsgHarvestResponseSDKType {
}
/** MsgRemovePlan defines a message for removing a terminated plan. */
export interface MsgRemovePlan {
    creator: string;
    planId: Long;
}
/** MsgRemovePlan defines a message for removing a terminated plan. */
export interface MsgRemovePlanSDKType {
    creator: string;
    plan_id: Long;
}
/** MsgRemovePlanResponse defines the Msg/RemovePlan response type. */
export interface MsgRemovePlanResponse {
}
/** MsgRemovePlanResponse defines the Msg/RemovePlan response type. */
export interface MsgRemovePlanResponseSDKType {
}
/** MsgAdvanceEpoch defines a message to advance epoch by one. */
export interface MsgAdvanceEpoch {
    /** requester defines the bech32-encoded address of the requester */
    requester: string;
}
/** MsgAdvanceEpoch defines a message to advance epoch by one. */
export interface MsgAdvanceEpochSDKType {
    requester: string;
}
/** MsgAdvanceEpochResponse defines the Msg/AdvanceEpoch response type. */
export interface MsgAdvanceEpochResponse {
}
/** MsgAdvanceEpochResponse defines the Msg/AdvanceEpoch response type. */
export interface MsgAdvanceEpochResponseSDKType {
}
export declare const MsgCreateFixedAmountPlan: {
    encode(message: MsgCreateFixedAmountPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedAmountPlan;
    fromPartial(object: DeepPartial<MsgCreateFixedAmountPlan>): MsgCreateFixedAmountPlan;
};
export declare const MsgCreateFixedAmountPlanResponse: {
    encode(_: MsgCreateFixedAmountPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedAmountPlanResponse;
    fromPartial(_: DeepPartial<MsgCreateFixedAmountPlanResponse>): MsgCreateFixedAmountPlanResponse;
};
export declare const MsgCreateRatioPlan: {
    encode(message: MsgCreateRatioPlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRatioPlan;
    fromPartial(object: DeepPartial<MsgCreateRatioPlan>): MsgCreateRatioPlan;
};
export declare const MsgCreateRatioPlanResponse: {
    encode(_: MsgCreateRatioPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRatioPlanResponse;
    fromPartial(_: DeepPartial<MsgCreateRatioPlanResponse>): MsgCreateRatioPlanResponse;
};
export declare const MsgStake: {
    encode(message: MsgStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake;
    fromPartial(object: DeepPartial<MsgStake>): MsgStake;
};
export declare const MsgStakeResponse: {
    encode(_: MsgStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse;
    fromPartial(_: DeepPartial<MsgStakeResponse>): MsgStakeResponse;
};
export declare const MsgUnstake: {
    encode(message: MsgUnstake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake;
    fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake;
};
export declare const MsgUnstakeResponse: {
    encode(_: MsgUnstakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse;
    fromPartial(_: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse;
};
export declare const MsgHarvest: {
    encode(message: MsgHarvest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvest;
    fromPartial(object: DeepPartial<MsgHarvest>): MsgHarvest;
};
export declare const MsgHarvestResponse: {
    encode(_: MsgHarvestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvestResponse;
    fromPartial(_: DeepPartial<MsgHarvestResponse>): MsgHarvestResponse;
};
export declare const MsgRemovePlan: {
    encode(message: MsgRemovePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePlan;
    fromPartial(object: DeepPartial<MsgRemovePlan>): MsgRemovePlan;
};
export declare const MsgRemovePlanResponse: {
    encode(_: MsgRemovePlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePlanResponse;
    fromPartial(_: DeepPartial<MsgRemovePlanResponse>): MsgRemovePlanResponse;
};
export declare const MsgAdvanceEpoch: {
    encode(message: MsgAdvanceEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdvanceEpoch;
    fromPartial(object: DeepPartial<MsgAdvanceEpoch>): MsgAdvanceEpoch;
};
export declare const MsgAdvanceEpochResponse: {
    encode(_: MsgAdvanceEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdvanceEpochResponse;
    fromPartial(_: DeepPartial<MsgAdvanceEpochResponse>): MsgAdvanceEpochResponse;
};

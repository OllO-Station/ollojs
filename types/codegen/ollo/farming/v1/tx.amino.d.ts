import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateFixedAmountPlan, MsgCreateRatioPlan, MsgStake, MsgUnstake, MsgHarvest, MsgRemovePlan, MsgAdvanceEpoch } from "./tx";
export interface AminoMsgCreateFixedAmountPlan extends AminoMsg {
    type: "/ollo.farming.v1.MsgCreateFixedAmountPlan";
    value: {
        name: string;
        creator: string;
        staking_coin_weights: {
            denom: string;
            amount: string;
        }[];
        start_time: {
            seconds: string;
            nanos: number;
        };
        end_time: {
            seconds: string;
            nanos: number;
        };
        epoch_amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgCreateRatioPlan extends AminoMsg {
    type: "/ollo.farming.v1.MsgCreateRatioPlan";
    value: {
        name: string;
        creator: string;
        staking_coin_weights: {
            denom: string;
            amount: string;
        }[];
        start_time: {
            seconds: string;
            nanos: number;
        };
        end_time: {
            seconds: string;
            nanos: number;
        };
        epoch_ratio: string;
    };
}
export interface AminoMsgStake extends AminoMsg {
    type: "/ollo.farming.v1.MsgStake";
    value: {
        farmer: string;
        staking_coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgUnstake extends AminoMsg {
    type: "/ollo.farming.v1.MsgUnstake";
    value: {
        farmer: string;
        unstaking_coins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgHarvest extends AminoMsg {
    type: "/ollo.farming.v1.MsgHarvest";
    value: {
        farmer: string;
        staking_coin_denoms: string[];
    };
}
export interface AminoMsgRemovePlan extends AminoMsg {
    type: "/ollo.farming.v1.MsgRemovePlan";
    value: {
        creator: string;
        plan_id: string;
    };
}
export interface AminoMsgAdvanceEpoch extends AminoMsg {
    type: "/ollo.farming.v1.MsgAdvanceEpoch";
    value: {
        requester: string;
    };
}
export declare const AminoConverter: {
    "/ollo.farming.v1.MsgCreateFixedAmountPlan": {
        aminoType: string;
        toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochAmount }: MsgCreateFixedAmountPlan) => AminoMsgCreateFixedAmountPlan["value"];
        fromAmino: ({ name, creator, staking_coin_weights, start_time, end_time, epoch_amount }: AminoMsgCreateFixedAmountPlan["value"]) => MsgCreateFixedAmountPlan;
    };
    "/ollo.farming.v1.MsgCreateRatioPlan": {
        aminoType: string;
        toAmino: ({ name, creator, stakingCoinWeights, startTime, endTime, epochRatio }: MsgCreateRatioPlan) => AminoMsgCreateRatioPlan["value"];
        fromAmino: ({ name, creator, staking_coin_weights, start_time, end_time, epoch_ratio }: AminoMsgCreateRatioPlan["value"]) => MsgCreateRatioPlan;
    };
    "/ollo.farming.v1.MsgStake": {
        aminoType: string;
        toAmino: ({ farmer, stakingCoins }: MsgStake) => AminoMsgStake["value"];
        fromAmino: ({ farmer, staking_coins }: AminoMsgStake["value"]) => MsgStake;
    };
    "/ollo.farming.v1.MsgUnstake": {
        aminoType: string;
        toAmino: ({ farmer, unstakingCoins }: MsgUnstake) => AminoMsgUnstake["value"];
        fromAmino: ({ farmer, unstaking_coins }: AminoMsgUnstake["value"]) => MsgUnstake;
    };
    "/ollo.farming.v1.MsgHarvest": {
        aminoType: string;
        toAmino: ({ farmer, stakingCoinDenoms }: MsgHarvest) => AminoMsgHarvest["value"];
        fromAmino: ({ farmer, staking_coin_denoms }: AminoMsgHarvest["value"]) => MsgHarvest;
    };
    "/ollo.farming.v1.MsgRemovePlan": {
        aminoType: string;
        toAmino: ({ creator, planId }: MsgRemovePlan) => AminoMsgRemovePlan["value"];
        fromAmino: ({ creator, plan_id }: AminoMsgRemovePlan["value"]) => MsgRemovePlan;
    };
    "/ollo.farming.v1.MsgAdvanceEpoch": {
        aminoType: string;
        toAmino: ({ requester }: MsgAdvanceEpoch) => AminoMsgAdvanceEpoch["value"];
        fromAmino: ({ requester }: AminoMsgAdvanceEpoch["value"]) => MsgAdvanceEpoch;
    };
};

import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFixedAmountPlan, MsgCreateRatioPlan, MsgStake, MsgUnstake, MsgHarvest, MsgRemovePlan, MsgAdvanceEpoch } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createFixedAmountPlan(value: MsgCreateFixedAmountPlan): {
            typeUrl: string;
            value: Uint8Array;
        };
        createRatioPlan(value: MsgCreateRatioPlan): {
            typeUrl: string;
            value: Uint8Array;
        };
        stake(value: MsgStake): {
            typeUrl: string;
            value: Uint8Array;
        };
        unstake(value: MsgUnstake): {
            typeUrl: string;
            value: Uint8Array;
        };
        harvest(value: MsgHarvest): {
            typeUrl: string;
            value: Uint8Array;
        };
        removePlan(value: MsgRemovePlan): {
            typeUrl: string;
            value: Uint8Array;
        };
        advanceEpoch(value: MsgAdvanceEpoch): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createFixedAmountPlan(value: MsgCreateFixedAmountPlan): {
            typeUrl: string;
            value: MsgCreateFixedAmountPlan;
        };
        createRatioPlan(value: MsgCreateRatioPlan): {
            typeUrl: string;
            value: MsgCreateRatioPlan;
        };
        stake(value: MsgStake): {
            typeUrl: string;
            value: MsgStake;
        };
        unstake(value: MsgUnstake): {
            typeUrl: string;
            value: MsgUnstake;
        };
        harvest(value: MsgHarvest): {
            typeUrl: string;
            value: MsgHarvest;
        };
        removePlan(value: MsgRemovePlan): {
            typeUrl: string;
            value: MsgRemovePlan;
        };
        advanceEpoch(value: MsgAdvanceEpoch): {
            typeUrl: string;
            value: MsgAdvanceEpoch;
        };
    };
    fromPartial: {
        createFixedAmountPlan(value: MsgCreateFixedAmountPlan): {
            typeUrl: string;
            value: MsgCreateFixedAmountPlan;
        };
        createRatioPlan(value: MsgCreateRatioPlan): {
            typeUrl: string;
            value: MsgCreateRatioPlan;
        };
        stake(value: MsgStake): {
            typeUrl: string;
            value: MsgStake;
        };
        unstake(value: MsgUnstake): {
            typeUrl: string;
            value: MsgUnstake;
        };
        harvest(value: MsgHarvest): {
            typeUrl: string;
            value: MsgHarvest;
        };
        removePlan(value: MsgRemovePlan): {
            typeUrl: string;
            value: MsgRemovePlan;
        };
        advanceEpoch(value: MsgAdvanceEpoch): {
            typeUrl: string;
            value: MsgAdvanceEpoch;
        };
    };
};

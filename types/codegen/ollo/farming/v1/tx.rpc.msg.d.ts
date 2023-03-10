import { Rpc } from "../../../helpers";
import { MsgCreateFixedAmountPlan, MsgCreateFixedAmountPlanResponse, MsgCreateRatioPlan, MsgCreateRatioPlanResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgHarvest, MsgHarvestResponse, MsgRemovePlan, MsgRemovePlanResponse, MsgAdvanceEpoch, MsgAdvanceEpochResponse } from "./tx";
/** Msg defines the farming Msg service. */
export interface Msg {
    /**
     * CreateFixedAmountPlan defines a method for creating a new fixed amount
     * farming plan
     */
    createFixedAmountPlan(request: MsgCreateFixedAmountPlan): Promise<MsgCreateFixedAmountPlanResponse>;
    /** CreateRatioPlan defines a method for creating a new ratio farming plan */
    createRatioPlan(request: MsgCreateRatioPlan): Promise<MsgCreateRatioPlanResponse>;
    /** Stake defines a method for staking coins into the farming plan */
    stake(request: MsgStake): Promise<MsgStakeResponse>;
    /** Unstake defines a method for unstaking coins from the farming plan */
    unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
    /** Harvest defines a method for claiming farming rewards */
    harvest(request: MsgHarvest): Promise<MsgHarvestResponse>;
    /** RemovePlan defines a method for removing a terminated plan. */
    removePlan(request: MsgRemovePlan): Promise<MsgRemovePlanResponse>;
    /**
     * AdvanceEpoch defines a method for advancing epoch by one, just for testing
     * purpose and shouldn't be used in real world
     */
    advanceEpoch(request: MsgAdvanceEpoch): Promise<MsgAdvanceEpochResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createFixedAmountPlan(request: MsgCreateFixedAmountPlan): Promise<MsgCreateFixedAmountPlanResponse>;
    createRatioPlan(request: MsgCreateRatioPlan): Promise<MsgCreateRatioPlanResponse>;
    stake(request: MsgStake): Promise<MsgStakeResponse>;
    unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
    harvest(request: MsgHarvest): Promise<MsgHarvestResponse>;
    removePlan(request: MsgRemovePlan): Promise<MsgRemovePlanResponse>;
    advanceEpoch(request: MsgAdvanceEpoch): Promise<MsgAdvanceEpochResponse>;
}

import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/**
 * PublicPlanProposal defines a public farming plan governance proposal that
 * receives one of the following requests: A request that creates a public
 * farming plan, a request that updates the plan, and a request that deletes the
 * plan. For public plan creation, depending on which field is passed, either
 * epoch amount or epoch ratio, it creates a fixed amount plan or ratio plan.
 */
export interface PublicPlanProposal {
    /** title specifies the title of the plan */
    title: string;
    /** description specifies the description of the plan */
    description: string;
    /** add_plan_requests specifies AddPlanRequest object */
    addPlanRequests: AddPlanRequest[];
    /** modify_plan_requests specifies ModifyPlanRequest object */
    modifyPlanRequests: ModifyPlanRequest[];
    /** delete_plan_requests specifies DeletePlanRequest object */
    deletePlanRequests: DeletePlanRequest[];
}
/**
 * PublicPlanProposal defines a public farming plan governance proposal that
 * receives one of the following requests: A request that creates a public
 * farming plan, a request that updates the plan, and a request that deletes the
 * plan. For public plan creation, depending on which field is passed, either
 * epoch amount or epoch ratio, it creates a fixed amount plan or ratio plan.
 */
export interface PublicPlanProposalSDKType {
    title: string;
    description: string;
    add_plan_requests: AddPlanRequestSDKType[];
    modify_plan_requests: ModifyPlanRequestSDKType[];
    delete_plan_requests: DeletePlanRequestSDKType[];
}
/** AddPlanRequest details a proposal for creating a public plan. */
export interface AddPlanRequest {
    /** name specifies the plan name for display */
    name: string;
    /** farming_pool_address defines the bech32-encoded address of the farming pool */
    farmingPoolAddress: string;
    /**
     * termination_address defines the bech32-encoded address that terminates plan
     * when the plan ends after the end time, the balance of farming pool address
     * is transferred to the termination address
     */
    terminationAddress: string;
    /** staking_coin_weights specifies coin weights for the plan */
    stakingCoinWeights: DecCoin[];
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_time specifies the end time of the plan */
    endTime?: Date;
    /** epoch_amount specifies the distributing amount for each epoch */
    epochAmount: Coin[];
    /** epoch_ratio specifies the distributing amount by ratio */
    epochRatio: string;
}
/** AddPlanRequest details a proposal for creating a public plan. */
export interface AddPlanRequestSDKType {
    name: string;
    farming_pool_address: string;
    termination_address: string;
    staking_coin_weights: DecCoinSDKType[];
    start_time?: Date;
    end_time?: Date;
    epoch_amount: CoinSDKType[];
    epoch_ratio: string;
}
/** ModifyPlanRequest details a proposal for modifying the existing public plan. */
export interface ModifyPlanRequest {
    /** plan_id specifies index of the farming plan */
    planId: Long;
    /** name specifies the plan name for display */
    name: string;
    /** farming_pool_address defines the bech32-encoded address of the farming pool */
    farmingPoolAddress: string;
    /**
     * termination_address defines the bech32-encoded address that terminates plan
     * when the plan ends after the end time, the balance of farming pool address
     * is transferred to the termination address
     */
    terminationAddress: string;
    /** staking_coin_weights specifies coin weights for the plan */
    stakingCoinWeights: DecCoin[];
    /** start_time specifies the start time of the plan */
    startTime?: Date;
    /** end_time specifies the end time of the plan */
    endTime?: Date;
    /** epoch_amount specifies the distributing amount for each epoch */
    epochAmount: Coin[];
    /** epoch_ratio specifies the distributing amount by ratio */
    epochRatio: string;
}
/** ModifyPlanRequest details a proposal for modifying the existing public plan. */
export interface ModifyPlanRequestSDKType {
    plan_id: Long;
    name: string;
    farming_pool_address: string;
    termination_address: string;
    staking_coin_weights: DecCoinSDKType[];
    start_time?: Date;
    end_time?: Date;
    epoch_amount: CoinSDKType[];
    epoch_ratio: string;
}
/** DeletePlanRequest details a proposal for deleting an existing public plan. */
export interface DeletePlanRequest {
    /** plan_id specifies index of the farming plan */
    planId: Long;
}
/** DeletePlanRequest details a proposal for deleting an existing public plan. */
export interface DeletePlanRequestSDKType {
    plan_id: Long;
}
export declare const PublicPlanProposal: {
    encode(message: PublicPlanProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicPlanProposal;
    fromPartial(object: DeepPartial<PublicPlanProposal>): PublicPlanProposal;
};
export declare const AddPlanRequest: {
    encode(message: AddPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddPlanRequest;
    fromPartial(object: DeepPartial<AddPlanRequest>): AddPlanRequest;
};
export declare const ModifyPlanRequest: {
    encode(message: ModifyPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModifyPlanRequest;
    fromPartial(object: DeepPartial<ModifyPlanRequest>): ModifyPlanRequest;
};
export declare const DeletePlanRequest: {
    encode(message: DeletePlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlanRequest;
    fromPartial(object: DeepPartial<DeletePlanRequest>): DeletePlanRequest;
};

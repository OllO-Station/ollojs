import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the set of params for the farming module. */
export interface Params {
    /**
     * private_plan_creation_fee specifies the fee for plan creation
     * this fee prevents from spamming and is collected in the community pool
     */
    privatePlanCreationFee: Coin[];
    /**
     * next_epoch_days is the epoch length in number of days
     * it updates internal state called CurrentEpochDays that is used to process
     * staking and reward distribution in end blocker
     */
    nextEpochDays: number;
    /**
     * farming_fee_collector is the module account address to collect fees within
     * the farming module
     */
    farmingFeeCollector: string;
    /** delayed_staking_gas_fee is used to impose gas fee for the delayed staking */
    delayedStakingGasFee: Long;
    /** max_num_private_plans is the maximum number of active private plans */
    maxNumPrivatePlans: number;
}
/** Params defines the set of params for the farming module. */
export interface ParamsSDKType {
    private_plan_creation_fee: CoinSDKType[];
    next_epoch_days: number;
    farming_fee_collector: string;
    delayed_staking_gas_fee: Long;
    max_num_private_plans: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};

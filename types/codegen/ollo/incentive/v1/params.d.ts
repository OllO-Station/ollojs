import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { IncentiveProps, IncentivePropsSDKType, IncentivePair, IncentivePairSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the set of params for the marketmaker module. */
export interface Params {
    incentiveBudgetAddress: string;
    depositAmount: Coin[];
    props?: IncentiveProps;
    incentivePairs: IncentivePair[];
}
/** Params defines the set of params for the marketmaker module. */
export interface ParamsSDKType {
    incentive_budget_address: string;
    deposit_amount: CoinSDKType[];
    props?: IncentivePropsSDKType;
    incentive_pairs: IncentivePairSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};

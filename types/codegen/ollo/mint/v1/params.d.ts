import { DistributionProportions, DistributionProportionsSDKType, WeightedAddress, WeightedAddressSDKType } from "./mint";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** maximum annual change in inflation rate */
    inflationRateChange: string;
    /** maximum inflation rate */
    inflationMax: string;
    /** minimum inflation rate */
    inflationMin: string;
    /** goal of percent bonded coins */
    goalBonded: string;
    /**
     * expected blocks per year
     * TODO epochs
     */
    blocksPerYear: Long;
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions?: DistributionProportions;
    /** list of funded addresses */
    fundedAddresses: WeightedAddress[];
    reduceFactor: string;
    mintDistributionEpochStart: Long;
    genesisEpochProvisions: string;
    epochId: string;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    inflation_rate_change: string;
    inflation_max: string;
    inflation_min: string;
    goal_bonded: string;
    blocks_per_year: Long;
    distribution_proportions?: DistributionProportionsSDKType;
    funded_addresses: WeightedAddressSDKType[];
    reduce_factor: string;
    mint_distribution_epoch_start: Long;
    genesis_epoch_provisions: string;
    epoch_id: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};

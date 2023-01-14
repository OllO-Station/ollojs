import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    /** current annual expected provisions */
    annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    inflation: string;
    annual_provisions: string;
}
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    /**
     * staking defines the proportion of the minted minted_denom that is to be
     * allocated as staking rewards.
     */
    staking: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is
     * to be allocated to the community pool.
     */
    communityPool: string;
    /**
     * usage_incentive defines the proportion of the minted minted_denom that is
     * to be allocated as usage incentive.
     */
    poolIncentives: string;
    /**
     * grants_program defines the proportion of the minted minted_denom that is
     * to be allocated as grants.
     * NOTE: foundation?
     */
    grantsProgram: string;
    /**
     * developer_rewards defines the proportion of the minted minted_denom that is
     * to be allocated to developer rewards address.
     */
    developerRewards: string;
    /**
     * funded_addresses defines the proportion of the minted minted_denom that is
     * to the set of funded addresses.
     */
    fundedAddresses: string;
}
export interface DistributionProportionsSDKType {
    staking: string;
    community_pool: string;
    pool_incentives: string;
    grants_program: string;
    developer_rewards: string;
    funded_addresses: string;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
};

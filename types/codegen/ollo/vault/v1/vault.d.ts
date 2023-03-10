import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Vault {
    id: Long;
    owner: string;
    amountIn: string;
    amountOut: string;
    createdAt?: Date;
    interestAccumulated: string;
    closingFeeAccumulated: string;
    blockHeight: Long;
    blockTime?: Date;
}
export interface VaultSDKType {
    id: Long;
    owner: string;
    amount_in: string;
    amount_out: string;
    created_at?: Date;
    interest_accumulated: string;
    closing_fee_accumulated: string;
    block_height: Long;
    block_time?: Date;
}
export interface EmissionsVault {
    id: Long;
    amountIn: string;
    amountOut: string;
    createdAt?: Date;
}
export interface EmissionsVaultSDKType {
    id: Long;
    amount_in: string;
    amount_out: string;
    created_at?: Date;
}
export interface EmissionsVaultRewards {
    user: string;
    blockHeight: Long;
    amount: string;
}
export interface EmissionsVaultRewardsSDKType {
    user: string;
    block_height: Long;
    amount: string;
}
export declare const Vault: {
    encode(message: Vault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vault;
    fromPartial(object: DeepPartial<Vault>): Vault;
};
export declare const EmissionsVault: {
    encode(message: EmissionsVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmissionsVault;
    fromPartial(object: DeepPartial<EmissionsVault>): EmissionsVault;
};
export declare const EmissionsVaultRewards: {
    encode(message: EmissionsVaultRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmissionsVaultRewards;
    fromPartial(object: DeepPartial<EmissionsVaultRewards>): EmissionsVaultRewards;
};

import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Emission {
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
export interface EmissionSDKType {
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
export interface EmissionsEmission {
    id: Long;
    amountIn: string;
    amountOut: string;
    createdAt?: Date;
}
export interface EmissionsEmissionSDKType {
    id: Long;
    amount_in: string;
    amount_out: string;
    created_at?: Date;
}
export interface EmissionsEmissionRewards {
    user: string;
    blockHeight: Long;
    amount: string;
}
export interface EmissionsEmissionRewardsSDKType {
    user: string;
    block_height: Long;
    amount: string;
}
export declare const Emission: {
    encode(message: Emission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Emission;
    fromPartial(object: DeepPartial<Emission>): Emission;
};
export declare const EmissionsEmission: {
    encode(message: EmissionsEmission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmissionsEmission;
    fromPartial(object: DeepPartial<EmissionsEmission>): EmissionsEmission;
};
export declare const EmissionsEmissionRewards: {
    encode(message: EmissionsEmissionRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmissionsEmissionRewards;
    fromPartial(object: DeepPartial<EmissionsEmissionRewards>): EmissionsEmissionRewards;
};

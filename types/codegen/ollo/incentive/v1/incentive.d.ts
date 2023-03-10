import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface Incentive {
    address: string;
    claimable: Coin[];
}
export interface IncentiveSDKType {
    address: string;
    claimable: CoinSDKType[];
}
export interface IncentiveProps {
    minOpenRatio: string;
    minOpenDepthRatio: string;
    maxDowntime: number;
    maxTotalDowntime: number;
    minHours: number;
    minDays: number;
}
export interface IncentivePropsSDKType {
    min_open_ratio: string;
    min_open_depth_ratio: string;
    max_downtime: number;
    max_total_downtime: number;
    min_hours: number;
    min_days: number;
}
export interface IncentivePair {
    pairId: Long;
    updatedAt?: Date;
    incentiveWeight: string;
    maxSpread: string;
    minSpread: string;
    minDepth: string;
}
export interface IncentivePairSDKType {
    pair_id: Long;
    updated_at?: Date;
    incentive_weight: string;
    max_spread: string;
    min_spread: string;
    min_depth: string;
}
export interface IncentiveDistribution {
    address: string;
    pairId: Long;
    amount: Coin[];
}
export interface IncentiveDistributionSDKType {
    address: string;
    pair_id: Long;
    amount: CoinSDKType[];
}
export declare const Incentive: {
    encode(message: Incentive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Incentive;
    fromPartial(object: DeepPartial<Incentive>): Incentive;
};
export declare const IncentiveProps: {
    encode(message: IncentiveProps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentiveProps;
    fromPartial(object: DeepPartial<IncentiveProps>): IncentiveProps;
};
export declare const IncentivePair: {
    encode(message: IncentivePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentivePair;
    fromPartial(object: DeepPartial<IncentivePair>): IncentivePair;
};
export declare const IncentiveDistribution: {
    encode(message: IncentiveDistribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IncentiveDistribution;
    fromPartial(object: DeepPartial<IncentiveDistribution>): IncentiveDistribution;
};

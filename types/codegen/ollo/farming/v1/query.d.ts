import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryPlansRequest is the request type for the Query/Plans RPC method. */
export interface QueryPlansRequest {
    type: string;
    farmingPoolAddress: string;
    terminationAddress: string;
    stakingCoinDenom: string;
    terminated: string;
    pagination?: PageRequest;
}
/** QueryPlansRequest is the request type for the Query/Plans RPC method. */
export interface QueryPlansRequestSDKType {
    type: string;
    farming_pool_address: string;
    termination_address: string;
    staking_coin_denom: string;
    terminated: string;
    pagination?: PageRequestSDKType;
}
/** QueryPlansResponse is the response type for the Query/Plans RPC method. */
export interface QueryPlansResponse {
    /** plans are the existing plans */
    plans: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryPlansResponse is the response type for the Query/Plans RPC method. */
export interface QueryPlansResponseSDKType {
    plans: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryPlanRequest is the request type for the Query/Plan RPC method. */
export interface QueryPlanRequest {
    planId: Long;
}
/** QueryPlanRequest is the request type for the Query/Plan RPC method. */
export interface QueryPlanRequestSDKType {
    plan_id: Long;
}
/** QueryPlanResponse is the response type for the Query/Plan RPC method. */
export interface QueryPlanResponse {
    plan?: Any;
}
/** QueryPlanResponse is the response type for the Query/Plan RPC method. */
export interface QueryPlanResponseSDKType {
    plan?: AnySDKType;
}
/** QueryStakingsRequest is the request type for the Query/Stakings RPC method. */
export interface QueryStakingsRequest {
    farmer: string;
    stakingCoinDenom: string;
}
/** QueryStakingsRequest is the request type for the Query/Stakings RPC method. */
export interface QueryStakingsRequestSDKType {
    farmer: string;
    staking_coin_denom: string;
}
/** QueryStakingsResponse is the response type for the Query/Stakings RPC method. */
export interface QueryStakingsResponse {
    stakedCoins: Coin[];
    queuedCoins: Coin[];
}
/** QueryStakingsResponse is the response type for the Query/Stakings RPC method. */
export interface QueryStakingsResponseSDKType {
    staked_coins: CoinSDKType[];
    queued_coins: CoinSDKType[];
}
/** QueryTotalStakingsRequest is the request type for the Query/TotalStakings RPC method. */
export interface QueryTotalStakingsRequest {
    stakingCoinDenom: string;
}
/** QueryTotalStakingsRequest is the request type for the Query/TotalStakings RPC method. */
export interface QueryTotalStakingsRequestSDKType {
    staking_coin_denom: string;
}
/** QueryTotalStakingsResponse is the response type for the Query/TotalStakings RPC method. */
export interface QueryTotalStakingsResponse {
    amount: string;
}
/** QueryTotalStakingsResponse is the response type for the Query/TotalStakings RPC method. */
export interface QueryTotalStakingsResponseSDKType {
    amount: string;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequest {
    farmer: string;
    stakingCoinDenom: string;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */
export interface QueryRewardsRequestSDKType {
    farmer: string;
    staking_coin_denom: string;
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponse {
    rewards: Coin[];
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */
export interface QueryRewardsResponseSDKType {
    rewards: CoinSDKType[];
}
/** QueryCurrentEpochDaysRequest is the request type for the Query/CurrentEpochDays RPC method. */
export interface QueryCurrentEpochDaysRequest {
}
/** QueryCurrentEpochDaysRequest is the request type for the Query/CurrentEpochDays RPC method. */
export interface QueryCurrentEpochDaysRequestSDKType {
}
/** QuerCurrentEpochDaysResponse is the response type for the Query/CurrentEpochDays RPC method. */
export interface QueryCurrentEpochDaysResponse {
    currentEpochDays: number;
}
/** QuerCurrentEpochDaysResponse is the response type for the Query/CurrentEpochDays RPC method. */
export interface QueryCurrentEpochDaysResponseSDKType {
    current_epoch_days: number;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryPlansRequest: {
    encode(message: QueryPlansRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansRequest;
    fromPartial(object: DeepPartial<QueryPlansRequest>): QueryPlansRequest;
};
export declare const QueryPlansResponse: {
    encode(message: QueryPlansResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansResponse;
    fromPartial(object: DeepPartial<QueryPlansResponse>): QueryPlansResponse;
};
export declare const QueryPlanRequest: {
    encode(message: QueryPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanRequest;
    fromPartial(object: DeepPartial<QueryPlanRequest>): QueryPlanRequest;
};
export declare const QueryPlanResponse: {
    encode(message: QueryPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanResponse;
    fromPartial(object: DeepPartial<QueryPlanResponse>): QueryPlanResponse;
};
export declare const QueryStakingsRequest: {
    encode(message: QueryStakingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakingsRequest;
    fromPartial(object: DeepPartial<QueryStakingsRequest>): QueryStakingsRequest;
};
export declare const QueryStakingsResponse: {
    encode(message: QueryStakingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakingsResponse;
    fromPartial(object: DeepPartial<QueryStakingsResponse>): QueryStakingsResponse;
};
export declare const QueryTotalStakingsRequest: {
    encode(message: QueryTotalStakingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalStakingsRequest;
    fromPartial(object: DeepPartial<QueryTotalStakingsRequest>): QueryTotalStakingsRequest;
};
export declare const QueryTotalStakingsResponse: {
    encode(message: QueryTotalStakingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalStakingsResponse;
    fromPartial(object: DeepPartial<QueryTotalStakingsResponse>): QueryTotalStakingsResponse;
};
export declare const QueryRewardsRequest: {
    encode(message: QueryRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRequest;
    fromPartial(object: DeepPartial<QueryRewardsRequest>): QueryRewardsRequest;
};
export declare const QueryRewardsResponse: {
    encode(message: QueryRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsResponse;
    fromPartial(object: DeepPartial<QueryRewardsResponse>): QueryRewardsResponse;
};
export declare const QueryCurrentEpochDaysRequest: {
    encode(_: QueryCurrentEpochDaysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochDaysRequest;
    fromPartial(_: DeepPartial<QueryCurrentEpochDaysRequest>): QueryCurrentEpochDaysRequest;
};
export declare const QueryCurrentEpochDaysResponse: {
    encode(message: QueryCurrentEpochDaysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochDaysResponse;
    fromPartial(object: DeepPartial<QueryCurrentEpochDaysResponse>): QueryCurrentEpochDaysResponse;
};

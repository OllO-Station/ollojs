import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPlansRequest, QueryPlansResponse, QueryPlanRequest, QueryPlanResponse, QueryStakingsRequest, QueryStakingsResponse, QueryTotalStakingsRequest, QueryTotalStakingsResponse, QueryRewardsRequest, QueryRewardsResponse, QueryCurrentEpochDaysRequest, QueryCurrentEpochDaysResponse } from "./query";
/** Query defines the gRPC query service for the farming module. */
export interface Query {
    /** Params returns parameters of the farming module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Plans returns all plans. */
    plans(request: QueryPlansRequest): Promise<QueryPlansResponse>;
    /** Plan returns a specific plan. */
    plan(request: QueryPlanRequest): Promise<QueryPlanResponse>;
    /** Stakings returns all stakings by a farmer. */
    stakings(request: QueryStakingsRequest): Promise<QueryStakingsResponse>;
    /** TotalStakings returns total staking amount for a staking coin denom */
    totalStakings(request: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponse>;
    /** Rewards returns rewards for a farmer */
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
    /** CurrentEpochDays returns current epoch days. */
    currentEpochDays(request?: QueryCurrentEpochDaysRequest): Promise<QueryCurrentEpochDaysResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    plans(request: QueryPlansRequest): Promise<QueryPlansResponse>;
    plan(request: QueryPlanRequest): Promise<QueryPlanResponse>;
    stakings(request: QueryStakingsRequest): Promise<QueryStakingsResponse>;
    totalStakings(request: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponse>;
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
    currentEpochDays(request?: QueryCurrentEpochDaysRequest): Promise<QueryCurrentEpochDaysResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    plans(request: QueryPlansRequest): Promise<QueryPlansResponse>;
    plan(request: QueryPlanRequest): Promise<QueryPlanResponse>;
    stakings(request: QueryStakingsRequest): Promise<QueryStakingsResponse>;
    totalStakings(request: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponse>;
    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
    currentEpochDays(request?: QueryCurrentEpochDaysRequest): Promise<QueryCurrentEpochDaysResponse>;
};

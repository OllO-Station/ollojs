import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPlansRequest, QueryPlansResponseSDKType, QueryPlanRequest, QueryPlanResponseSDKType, QueryStakingsRequest, QueryStakingsResponseSDKType, QueryTotalStakingsRequest, QueryTotalStakingsResponseSDKType, QueryRewardsRequest, QueryRewardsResponseSDKType, QueryCurrentEpochDaysRequest, QueryCurrentEpochDaysResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    plans(params: QueryPlansRequest): Promise<QueryPlansResponseSDKType>;
    plan(params: QueryPlanRequest): Promise<QueryPlanResponseSDKType>;
    stakings(params: QueryStakingsRequest): Promise<QueryStakingsResponseSDKType>;
    totalStakings(params: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponseSDKType>;
    rewards(params: QueryRewardsRequest): Promise<QueryRewardsResponseSDKType>;
    currentEpochDays(_params?: QueryCurrentEpochDaysRequest): Promise<QueryCurrentEpochDaysResponseSDKType>;
}

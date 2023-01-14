import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetClaimRecordRequest, QueryGetClaimRecordResponseSDKType, QueryAllClaimRecordRequest, QueryAllClaimRecordResponseSDKType, QueryGetGoalRequest, QueryGetGoalResponseSDKType, QueryAllGoalRequest, QueryAllGoalResponseSDKType, QueryGetAirdropSupplyRequest, QueryGetAirdropSupplyResponseSDKType, QueryGetInitialClaimRequest, QueryGetInitialClaimResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    claimRecord(params: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponseSDKType>;
    claimRecordAll(params?: QueryAllClaimRecordRequest): Promise<QueryAllClaimRecordResponseSDKType>;
    goal(params: QueryGetGoalRequest): Promise<QueryGetGoalResponseSDKType>;
    goalAll(params?: QueryAllGoalRequest): Promise<QueryAllGoalResponseSDKType>;
    airdropSupply(_params?: QueryGetAirdropSupplyRequest): Promise<QueryGetAirdropSupplyResponseSDKType>;
    initialClaim(_params?: QueryGetInitialClaimRequest): Promise<QueryGetInitialClaimResponseSDKType>;
}

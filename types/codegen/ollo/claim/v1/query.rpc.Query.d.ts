import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetClaimRecordRequest, QueryGetClaimRecordResponse, QueryAllClaimRecordRequest, QueryAllClaimRecordResponse, QueryGetGoalRequest, QueryGetGoalResponse, QueryAllGoalRequest, QueryAllGoalResponse, QueryGetAirdropSupplyRequest, QueryGetAirdropSupplyResponse, QueryGetInitialClaimRequest, QueryGetInitialClaimResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a ClaimRecord by address. */
    claimRecord(request: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponse>;
    /** Queries a list of ClaimRecord items. */
    claimRecordAll(request?: QueryAllClaimRecordRequest): Promise<QueryAllClaimRecordResponse>;
    /** Queries a Goal by ID. */
    goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse>;
    /** Queries a list of Goal items. */
    goalAll(request?: QueryAllGoalRequest): Promise<QueryAllGoalResponse>;
    /** Queries a AirdropSupply by index. */
    airdropSupply(request?: QueryGetAirdropSupplyRequest): Promise<QueryGetAirdropSupplyResponse>;
    /** Queries a InitialClaim by index. */
    initialClaim(request?: QueryGetInitialClaimRequest): Promise<QueryGetInitialClaimResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponse>;
    claimRecordAll(request?: QueryAllClaimRecordRequest): Promise<QueryAllClaimRecordResponse>;
    goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse>;
    goalAll(request?: QueryAllGoalRequest): Promise<QueryAllGoalResponse>;
    airdropSupply(request?: QueryGetAirdropSupplyRequest): Promise<QueryGetAirdropSupplyResponse>;
    initialClaim(request?: QueryGetInitialClaimRequest): Promise<QueryGetInitialClaimResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimRecord(request: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponse>;
    claimRecordAll(request?: QueryAllClaimRecordRequest): Promise<QueryAllClaimRecordResponse>;
    goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse>;
    goalAll(request?: QueryAllGoalRequest): Promise<QueryAllGoalResponse>;
    airdropSupply(request?: QueryGetAirdropSupplyRequest): Promise<QueryGetAirdropSupplyResponse>;
    initialClaim(request?: QueryGetInitialClaimRequest): Promise<QueryGetInitialClaimResponse>;
};

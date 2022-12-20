import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAirdropsRequest, QueryAirdropsResponse, QueryAirdropRequest, QueryAirdropResponse, QueryClaimRecordRequest, QueryClaimRecordResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Airdrops returns all airdrops. */
    airdrops(request?: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
    /** Airdrop returns the specific airdrop. */
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    /** ClaimRecord returns the claim record for the recipient address. */
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    airdrops(request?: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    airdrops(request?: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
};

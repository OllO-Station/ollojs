import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLoansRequest, QueryGetLoansResponse, QueryAllLoansRequest, QueryAllLoansResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Loans by id. */
    loans(request: QueryGetLoansRequest): Promise<QueryGetLoansResponse>;
    /** Queries a list of Loans items. */
    loansAll(request?: QueryAllLoansRequest): Promise<QueryAllLoansResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    loans(request: QueryGetLoansRequest): Promise<QueryGetLoansResponse>;
    loansAll(request?: QueryAllLoansRequest): Promise<QueryAllLoansResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    loans(request: QueryGetLoansRequest): Promise<QueryGetLoansResponse>;
    loansAll(request?: QueryAllLoansRequest): Promise<QueryAllLoansResponse>;
};

import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLoanRequest, QueryGetLoanResponse, QueryAllLoanRequest, QueryAllLoanResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Loan items. */
    loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    loanAll(request?: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    loanAll(request?: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
    loanAll(request?: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
};

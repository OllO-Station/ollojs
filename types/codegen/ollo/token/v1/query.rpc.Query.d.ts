import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryFeesRequest, QueryFeesResponse, QueryParamsRequest, QueryParamsResponse, QueryBurnRequest, QueryBurnResponse } from "./query";
/** Query service defines a service with token info as endpoints */
export interface Query {
    /** Query token returns token info given denom */
    token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    /** Tokens endpoint returns the list of all defined tokens */
    tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    /** Fee returns the fees to issue or mint a token */
    fees(request: QueryFeesRequest): Promise<QueryFeesResponse>;
    /** Params returns the token module parameters */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Burn endpoint returns all coins that have been burned */
    burn(request?: QueryBurnRequest): Promise<QueryBurnResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    fees(request: QueryFeesRequest): Promise<QueryFeesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    burn(request?: QueryBurnRequest): Promise<QueryBurnResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
    fees(request: QueryFeesRequest): Promise<QueryFeesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    burn(request?: QueryBurnRequest): Promise<QueryBurnResponse>;
};

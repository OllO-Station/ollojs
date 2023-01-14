import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetDenomsRequest, QueryGetDenomsResponse, QueryGetDenomRequest, QueryGetDenomResponse, QueryGetDenomWhitelistRequest, QueryGetDenomWhitelistResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** GetDenoms returns all denoms under reserve */
    getDenoms(request?: QueryGetDenomsRequest): Promise<QueryGetDenomsResponse>;
    /** GetDenom returns info and metadata about a specific reserve denom */
    getDenom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    /**
     * DenomWhitelist.g defines a gRPC query method for fetching
     * DenomWhitelist.g for a particular denom.
     */
    getDenomWhitelist(request: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getDenoms(request?: QueryGetDenomsRequest): Promise<QueryGetDenomsResponse>;
    getDenom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    getDenomWhitelist(request: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getDenoms(request?: QueryGetDenomsRequest): Promise<QueryGetDenomsResponse>;
    getDenom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    getDenomWhitelist(request: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
};

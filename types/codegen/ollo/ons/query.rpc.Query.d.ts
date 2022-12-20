import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetWhoisRequest, QueryGetWhoisResponse, QueryAllWhoisRequest, QueryAllWhoisResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Whois by index. */
    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    /** Queries a list of Whois items. */
    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
};

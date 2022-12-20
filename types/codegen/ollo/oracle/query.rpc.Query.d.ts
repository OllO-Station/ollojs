import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPricesRequest, QueryPricesResponse, QueryLastPricesIdRequest, QueryLastPricesIdResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** PricesResult defines a rpc handler method for MsgPricesData. */
    pricesResult(request: QueryPricesRequest): Promise<QueryPricesResponse>;
    /** LastPricesId query the last Prices result id */
    lastPricesId(request?: QueryLastPricesIdRequest): Promise<QueryLastPricesIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pricesResult(request: QueryPricesRequest): Promise<QueryPricesResponse>;
    lastPricesId(request?: QueryLastPricesIdRequest): Promise<QueryLastPricesIdResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pricesResult(request: QueryPricesRequest): Promise<QueryPricesResponse>;
    lastPricesId(request?: QueryLastPricesIdRequest): Promise<QueryLastPricesIdResponse>;
};

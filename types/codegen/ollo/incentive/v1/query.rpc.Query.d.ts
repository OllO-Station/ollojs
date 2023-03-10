import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMarketMakersRequest, QueryMarketMakersResponse, QueryIncentiveRequest, QueryIncentiveResponse } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    marketMakers(request: QueryMarketMakersRequest): Promise<QueryMarketMakersResponse>;
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    marketMakers(request: QueryMarketMakersRequest): Promise<QueryMarketMakersResponse>;
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    marketMakers(request: QueryMarketMakersRequest): Promise<QueryMarketMakersResponse>;
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
};

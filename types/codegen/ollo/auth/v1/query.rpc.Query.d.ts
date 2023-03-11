import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInterchainAccountAddressRequest, QueryInterchainAccountAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** InterchainAccountAddress queries the interchain account address for given `connectionId` and `owner` */
    interchainAccountAddress(request: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    interchainAccountAddress(request: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    interchainAccountAddress(request: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponse>;
};

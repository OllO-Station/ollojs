import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEpochsRequest, QueryEpochsResponse, QueryEpochRequest, QueryEpochResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export interface Query {
    /** Epochs queries all historical epochs. */
    epochs(request?: QueryEpochsRequest): Promise<QueryEpochsResponse>;
    /** Epoch queries for info on a specific epoch given its number. */
    epoch(request: QueryEpochRequest): Promise<QueryEpochResponse>;
    /** CurrentEpoch queries for info on the active epoch. */
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    epochs(request?: QueryEpochsRequest): Promise<QueryEpochsResponse>;
    epoch(request: QueryEpochRequest): Promise<QueryEpochResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    epochs(request?: QueryEpochsRequest): Promise<QueryEpochsResponse>;
    epoch(request: QueryEpochRequest): Promise<QueryEpochResponse>;
    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
};

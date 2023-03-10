import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEmissionRequest, QueryEmissionResponse, QueryAllEmissionsRequest, QueryAllEmissionsResponse } from "./query";
export interface Query {
    queryEmission(request: QueryEmissionRequest): Promise<QueryEmissionResponse>;
    queryAllEmissions(request?: QueryAllEmissionsRequest): Promise<QueryAllEmissionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryEmission(request: QueryEmissionRequest): Promise<QueryEmissionResponse>;
    queryAllEmissions(request?: QueryAllEmissionsRequest): Promise<QueryAllEmissionsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryEmission(request: QueryEmissionRequest): Promise<QueryEmissionResponse>;
    queryAllEmissions(request?: QueryAllEmissionsRequest): Promise<QueryAllEmissionsResponse>;
};

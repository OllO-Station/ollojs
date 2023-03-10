import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryVaultRequest, QueryVaultResponse, QueryAllVaultsRequest, QueryAllVaultsResponse } from "./query";
export interface Query {
    queryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    queryAllVaults(request?: QueryAllVaultsRequest): Promise<QueryAllVaultsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    queryAllVaults(request?: QueryAllVaultsRequest): Promise<QueryAllVaultsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    queryAllVaults(request?: QueryAllVaultsRequest): Promise<QueryAllVaultsResponse>;
};

import { LCDClient } from "@osmonauts/lcd";
import { QueryVaultRequest, QueryVaultResponseSDKType, QueryAllVaultsRequest, QueryAllVaultsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryVault(params: QueryVaultRequest): Promise<QueryVaultResponseSDKType>;
    queryAllVaults(params?: QueryAllVaultsRequest): Promise<QueryAllVaultsResponseSDKType>;
}

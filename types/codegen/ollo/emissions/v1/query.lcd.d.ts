import { LCDClient } from "@osmonauts/lcd";
import { QueryEmissionRequest, QueryEmissionResponseSDKType, QueryAllEmissionsRequest, QueryAllEmissionsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryEmission(params: QueryEmissionRequest): Promise<QueryEmissionResponseSDKType>;
    queryAllEmissions(params?: QueryAllEmissionsRequest): Promise<QueryAllEmissionsResponseSDKType>;
}

import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsRequest, QueryEpochsResponseSDKType, QueryEpochRequest, QueryEpochResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    epochs(_params?: QueryEpochsRequest): Promise<QueryEpochsResponseSDKType>;
    epoch(params: QueryEpochRequest): Promise<QueryEpochResponseSDKType>;
    currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
}

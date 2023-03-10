import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBaseFeeRequest, QueryBaseFeeResponseSDKType, QueryBlockGasRequest, QueryBlockGasResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    baseFee(_params?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponseSDKType>;
    blockGas(_params?: QueryBlockGasRequest): Promise<QueryBlockGasResponseSDKType>;
}

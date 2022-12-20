import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType, QueryLastPricesIdRequest, QueryLastPricesIdResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    pricesResult(params: QueryPricesRequest): Promise<QueryPricesResponseSDKType>;
    lastPricesId(_params?: QueryLastPricesIdRequest): Promise<QueryLastPricesIdResponseSDKType>;
}

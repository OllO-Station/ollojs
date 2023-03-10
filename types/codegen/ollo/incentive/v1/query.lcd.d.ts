import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMarketMakersRequest, QueryMarketMakersResponseSDKType, QueryIncentiveRequest, QueryIncentiveResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    marketMakers(params: QueryMarketMakersRequest): Promise<QueryMarketMakersResponseSDKType>;
    incentive(params: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType>;
}

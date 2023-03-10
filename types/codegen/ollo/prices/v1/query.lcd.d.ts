import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBandPricesRequest, QueryBandPricesResponseSDKType, QueryLastBandPricesIdRequest, QueryLastBandPricesIdResponseSDKType, QueryRoundDataRequest, QueryRoundDataResponseSDKType, QueryLatestRoundDataRequest, QueryLatestRoundDataResponseSDKType, QueryModuleOwnerRequest, QueryModuleOwnerResponseSDKType, QueryFeedByIdRequest, QueryFeedByIdResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryFeedRewardAvailStrategiesRequest, QueryFeedRewardAvailStrategiesResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    bandPricesResult(params: QueryBandPricesRequest): Promise<QueryBandPricesResponseSDKType>;
    lastBandPricesId(_params?: QueryLastBandPricesIdRequest): Promise<QueryLastBandPricesIdResponseSDKType>;
    queryRoundData(params: QueryRoundDataRequest): Promise<QueryRoundDataResponseSDKType>;
    latestRoundData(params: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponseSDKType>;
    queryAllModuleOwner(_params?: QueryModuleOwnerRequest): Promise<QueryModuleOwnerResponseSDKType>;
    queryFeedByFeedId(params: QueryFeedByIdRequest): Promise<QueryFeedByIdResponseSDKType>;
    queryAccountInfo(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    queryFeedRewardAvailStrategy(_params?: QueryFeedRewardAvailStrategiesRequest): Promise<QueryFeedRewardAvailStrategiesResponseSDKType>;
}

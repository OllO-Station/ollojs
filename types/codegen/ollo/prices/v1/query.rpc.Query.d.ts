import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBandPricesRequest, QueryBandPricesResponse, QueryLastBandPricesIdRequest, QueryLastBandPricesIdResponse, QueryRoundDataRequest, QueryRoundDataResponse, QueryLatestRoundDataRequest, QueryLatestRoundDataResponse, QueryModuleOwnerRequest, QueryModuleOwnerResponse, QueryFeedByIdRequest, QueryFeedByIdResponse, QueryAccountRequest, QueryAccountResponse, QueryFeedRewardAvailStrategiesRequest, QueryFeedRewardAvailStrategiesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** BandPricesResult defines a rpc handler method for MsgBandPricesData. */
    bandPricesResult(request: QueryBandPricesRequest): Promise<QueryBandPricesResponse>;
    /** LastBandPricesId query the last BandPrices result id */
    lastBandPricesId(request?: QueryLastBandPricesIdRequest): Promise<QueryLastBandPricesIdResponse>;
    /** QueryRoundData fetches given feedId from given roundId */
    queryRoundData(request: QueryRoundDataRequest): Promise<QueryRoundDataResponse>;
    /** LatestRoundData fetches given feedId from last round */
    latestRoundData(request: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponse>;
    /** QueryAllModuleOwner fetches all module owners */
    queryAllModuleOwner(request?: QueryModuleOwnerRequest): Promise<QueryModuleOwnerResponse>;
    /** QueryFeedById fetches a feed from its ID */
    queryFeedByFeedId(request: QueryFeedByIdRequest): Promise<QueryFeedByIdResponse>;
    /** QueryAccountInfo fetches account info from an address */
    queryAccountInfo(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** QueryFeedRewardAvailStrategy returns the reward strategy for feeds */
    queryFeedRewardAvailStrategy(request?: QueryFeedRewardAvailStrategiesRequest): Promise<QueryFeedRewardAvailStrategiesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bandPricesResult(request: QueryBandPricesRequest): Promise<QueryBandPricesResponse>;
    lastBandPricesId(request?: QueryLastBandPricesIdRequest): Promise<QueryLastBandPricesIdResponse>;
    queryRoundData(request: QueryRoundDataRequest): Promise<QueryRoundDataResponse>;
    latestRoundData(request: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponse>;
    queryAllModuleOwner(request?: QueryModuleOwnerRequest): Promise<QueryModuleOwnerResponse>;
    queryFeedByFeedId(request: QueryFeedByIdRequest): Promise<QueryFeedByIdResponse>;
    queryAccountInfo(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    queryFeedRewardAvailStrategy(request?: QueryFeedRewardAvailStrategiesRequest): Promise<QueryFeedRewardAvailStrategiesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bandPricesResult(request: QueryBandPricesRequest): Promise<QueryBandPricesResponse>;
    lastBandPricesId(request?: QueryLastBandPricesIdRequest): Promise<QueryLastBandPricesIdResponse>;
    queryRoundData(request: QueryRoundDataRequest): Promise<QueryRoundDataResponse>;
    latestRoundData(request: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponse>;
    queryAllModuleOwner(request?: QueryModuleOwnerRequest): Promise<QueryModuleOwnerResponse>;
    queryFeedByFeedId(request: QueryFeedByIdRequest): Promise<QueryFeedByIdResponse>;
    queryAccountInfo(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    queryFeedRewardAvailStrategy(request?: QueryFeedRewardAvailStrategiesRequest): Promise<QueryFeedRewardAvailStrategiesResponse>;
};

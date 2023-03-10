import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryBandPricesRequest, QueryBandPricesResponseSDKType, QueryLastBandPricesIdRequest, QueryLastBandPricesIdResponseSDKType, QueryRoundDataRequest, QueryRoundDataResponseSDKType, QueryLatestRoundDataRequest, QueryLatestRoundDataResponseSDKType, QueryModuleOwnerRequest, QueryModuleOwnerResponseSDKType, QueryFeedByIdRequest, QueryFeedByIdResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryFeedRewardAvailStrategiesRequest, QueryFeedRewardAvailStrategiesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.bandPricesResult = this.bandPricesResult.bind(this);
    this.lastBandPricesId = this.lastBandPricesId.bind(this);
    this.queryRoundData = this.queryRoundData.bind(this);
    this.latestRoundData = this.latestRoundData.bind(this);
    this.queryAllModuleOwner = this.queryAllModuleOwner.bind(this);
    this.queryFeedByFeedId = this.queryFeedByFeedId.bind(this);
    this.queryAccountInfo = this.queryAccountInfo.bind(this);
    this.queryFeedRewardAvailStrategy = this.queryFeedRewardAvailStrategy.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/prices/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* BandPricesResult defines a rpc handler method for MsgBandPricesData. */


  async bandPricesResult(params: QueryBandPricesRequest): Promise<QueryBandPricesResponseSDKType> {
    const endpoint = `ollo/prices/v1/band/${params.requestId}`;
    return await this.req.get<QueryBandPricesResponseSDKType>(endpoint);
  }
  /* LastBandPricesId query the last BandPrices result id */


  async lastBandPricesId(_params: QueryLastBandPricesIdRequest = {}): Promise<QueryLastBandPricesIdResponseSDKType> {
    const endpoint = `ollo/prices/v1/band/last_price_id`;
    return await this.req.get<QueryLastBandPricesIdResponseSDKType>(endpoint);
  }
  /* QueryRoundData fetches given feedId from given roundId */


  async queryRoundData(params: QueryRoundDataRequest): Promise<QueryRoundDataResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/prices/v1/feed/${params.feedId}/${params.roundId}`;
    return await this.req.get<QueryRoundDataResponseSDKType>(endpoint, options);
  }
  /* LatestRoundData fetches given feedId from last round */


  async latestRoundData(params: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponseSDKType> {
    const endpoint = `ollo/prices/v1/feed/${params.feedId}/latest`;
    return await this.req.get<QueryLatestRoundDataResponseSDKType>(endpoint);
  }
  /* QueryAllModuleOwner fetches all module owners */


  async queryAllModuleOwner(_params: QueryModuleOwnerRequest = {}): Promise<QueryModuleOwnerResponseSDKType> {
    const endpoint = `ollo/prices/v1/owner`;
    return await this.req.get<QueryModuleOwnerResponseSDKType>(endpoint);
  }
  /* QueryFeedById fetches a feed from its ID */


  async queryFeedByFeedId(params: QueryFeedByIdRequest): Promise<QueryFeedByIdResponseSDKType> {
    const endpoint = `ollo/prices/v1/feed/${params.feedId}`;
    return await this.req.get<QueryFeedByIdResponseSDKType>(endpoint);
  }
  /* QueryAccountInfo fetches account info from an address */


  async queryAccountInfo(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> {
    const endpoint = `ollo/prices/v1/account/${params.accountAddress}`;
    return await this.req.get<QueryAccountResponseSDKType>(endpoint);
  }
  /* QueryFeedRewardAvailStrategy returns the reward strategy for feeds */


  async queryFeedRewardAvailStrategy(_params: QueryFeedRewardAvailStrategiesRequest = {}): Promise<QueryFeedRewardAvailStrategiesResponseSDKType> {
    const endpoint = `ollo/prices/v1/feed/reward/strategy`;
    return await this.req.get<QueryFeedRewardAvailStrategiesResponseSDKType>(endpoint);
  }

}
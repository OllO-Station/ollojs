import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
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

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  bandPricesResult(request: QueryBandPricesRequest): Promise<QueryBandPricesResponse> {
    const data = QueryBandPricesRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "BandPricesResult", data);
    return promise.then(data => QueryBandPricesResponse.decode(new _m0.Reader(data)));
  }

  lastBandPricesId(request: QueryLastBandPricesIdRequest = {}): Promise<QueryLastBandPricesIdResponse> {
    const data = QueryLastBandPricesIdRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "LastBandPricesId", data);
    return promise.then(data => QueryLastBandPricesIdResponse.decode(new _m0.Reader(data)));
  }

  queryRoundData(request: QueryRoundDataRequest): Promise<QueryRoundDataResponse> {
    const data = QueryRoundDataRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "QueryRoundData", data);
    return promise.then(data => QueryRoundDataResponse.decode(new _m0.Reader(data)));
  }

  latestRoundData(request: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponse> {
    const data = QueryLatestRoundDataRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "LatestRoundData", data);
    return promise.then(data => QueryLatestRoundDataResponse.decode(new _m0.Reader(data)));
  }

  queryAllModuleOwner(request: QueryModuleOwnerRequest = {}): Promise<QueryModuleOwnerResponse> {
    const data = QueryModuleOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "QueryAllModuleOwner", data);
    return promise.then(data => QueryModuleOwnerResponse.decode(new _m0.Reader(data)));
  }

  queryFeedByFeedId(request: QueryFeedByIdRequest): Promise<QueryFeedByIdResponse> {
    const data = QueryFeedByIdRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "QueryFeedByFeedId", data);
    return promise.then(data => QueryFeedByIdResponse.decode(new _m0.Reader(data)));
  }

  queryAccountInfo(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "QueryAccountInfo", data);
    return promise.then(data => QueryAccountResponse.decode(new _m0.Reader(data)));
  }

  queryFeedRewardAvailStrategy(request: QueryFeedRewardAvailStrategiesRequest = {}): Promise<QueryFeedRewardAvailStrategiesResponse> {
    const data = QueryFeedRewardAvailStrategiesRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Query", "QueryFeedRewardAvailStrategy", data);
    return promise.then(data => QueryFeedRewardAvailStrategiesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    bandPricesResult(request: QueryBandPricesRequest): Promise<QueryBandPricesResponse> {
      return queryService.bandPricesResult(request);
    },

    lastBandPricesId(request?: QueryLastBandPricesIdRequest): Promise<QueryLastBandPricesIdResponse> {
      return queryService.lastBandPricesId(request);
    },

    queryRoundData(request: QueryRoundDataRequest): Promise<QueryRoundDataResponse> {
      return queryService.queryRoundData(request);
    },

    latestRoundData(request: QueryLatestRoundDataRequest): Promise<QueryLatestRoundDataResponse> {
      return queryService.latestRoundData(request);
    },

    queryAllModuleOwner(request?: QueryModuleOwnerRequest): Promise<QueryModuleOwnerResponse> {
      return queryService.queryAllModuleOwner(request);
    },

    queryFeedByFeedId(request: QueryFeedByIdRequest): Promise<QueryFeedByIdResponse> {
      return queryService.queryFeedByFeedId(request);
    },

    queryAccountInfo(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.queryAccountInfo(request);
    },

    queryFeedRewardAvailStrategy(request?: QueryFeedRewardAvailStrategiesRequest): Promise<QueryFeedRewardAvailStrategiesResponse> {
      return queryService.queryFeedRewardAvailStrategy(request);
    }

  };
};
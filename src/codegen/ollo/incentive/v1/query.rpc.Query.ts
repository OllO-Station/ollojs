import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMarketMakersRequest, QueryMarketMakersResponse, QueryIncentiveRequest, QueryIncentiveResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  marketMakers(request: QueryMarketMakersRequest): Promise<QueryMarketMakersResponse>;
  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.marketMakers = this.marketMakers.bind(this);
    this.incentive = this.incentive.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.incentive.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  marketMakers(request: QueryMarketMakersRequest): Promise<QueryMarketMakersResponse> {
    const data = QueryMarketMakersRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.incentive.v1.Query", "MarketMakers", data);
    return promise.then(data => QueryMarketMakersResponse.decode(new _m0.Reader(data)));
  }

  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
    const data = QueryIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.incentive.v1.Query", "Incentive", data);
    return promise.then(data => QueryIncentiveResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    marketMakers(request: QueryMarketMakersRequest): Promise<QueryMarketMakersResponse> {
      return queryService.marketMakers(request);
    },

    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
      return queryService.incentive(request);
    }

  };
};
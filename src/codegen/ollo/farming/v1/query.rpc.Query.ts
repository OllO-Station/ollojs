import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPlansRequest, QueryPlansResponse, QueryPlanRequest, QueryPlanResponse, QueryStakingsRequest, QueryStakingsResponse, QueryTotalStakingsRequest, QueryTotalStakingsResponse, QueryRewardsRequest, QueryRewardsResponse, QueryCurrentEpochDaysRequest, QueryCurrentEpochDaysResponse } from "./query";
/** Query defines the gRPC query service for the farming module. */

export interface Query {
  /** Params returns parameters of the farming module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Plans returns all plans. */

  plans(request: QueryPlansRequest): Promise<QueryPlansResponse>;
  /** Plan returns a specific plan. */

  plan(request: QueryPlanRequest): Promise<QueryPlanResponse>;
  /** Stakings returns all stakings by a farmer. */

  stakings(request: QueryStakingsRequest): Promise<QueryStakingsResponse>;
  /** TotalStakings returns total staking amount for a staking coin denom */

  totalStakings(request: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponse>;
  /** Rewards returns rewards for a farmer */

  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse>;
  /** CurrentEpochDays returns current epoch days. */

  currentEpochDays(request?: QueryCurrentEpochDaysRequest): Promise<QueryCurrentEpochDaysResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.plans = this.plans.bind(this);
    this.plan = this.plan.bind(this);
    this.stakings = this.stakings.bind(this);
    this.totalStakings = this.totalStakings.bind(this);
    this.rewards = this.rewards.bind(this);
    this.currentEpochDays = this.currentEpochDays.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  plans(request: QueryPlansRequest): Promise<QueryPlansResponse> {
    const data = QueryPlansRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "Plans", data);
    return promise.then(data => QueryPlansResponse.decode(new _m0.Reader(data)));
  }

  plan(request: QueryPlanRequest): Promise<QueryPlanResponse> {
    const data = QueryPlanRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "Plan", data);
    return promise.then(data => QueryPlanResponse.decode(new _m0.Reader(data)));
  }

  stakings(request: QueryStakingsRequest): Promise<QueryStakingsResponse> {
    const data = QueryStakingsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "Stakings", data);
    return promise.then(data => QueryStakingsResponse.decode(new _m0.Reader(data)));
  }

  totalStakings(request: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponse> {
    const data = QueryTotalStakingsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "TotalStakings", data);
    return promise.then(data => QueryTotalStakingsResponse.decode(new _m0.Reader(data)));
  }

  rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
    const data = QueryRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "Rewards", data);
    return promise.then(data => QueryRewardsResponse.decode(new _m0.Reader(data)));
  }

  currentEpochDays(request: QueryCurrentEpochDaysRequest = {}): Promise<QueryCurrentEpochDaysResponse> {
    const data = QueryCurrentEpochDaysRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Query", "CurrentEpochDays", data);
    return promise.then(data => QueryCurrentEpochDaysResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    plans(request: QueryPlansRequest): Promise<QueryPlansResponse> {
      return queryService.plans(request);
    },

    plan(request: QueryPlanRequest): Promise<QueryPlanResponse> {
      return queryService.plan(request);
    },

    stakings(request: QueryStakingsRequest): Promise<QueryStakingsResponse> {
      return queryService.stakings(request);
    },

    totalStakings(request: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponse> {
      return queryService.totalStakings(request);
    },

    rewards(request: QueryRewardsRequest): Promise<QueryRewardsResponse> {
      return queryService.rewards(request);
    },

    currentEpochDays(request?: QueryCurrentEpochDaysRequest): Promise<QueryCurrentEpochDaysResponse> {
      return queryService.currentEpochDays(request);
    }

  };
};
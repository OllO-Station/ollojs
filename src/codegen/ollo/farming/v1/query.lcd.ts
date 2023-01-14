import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPlansRequest, QueryPlansResponseSDKType, QueryPlanRequest, QueryPlanResponseSDKType, QueryStakingsRequest, QueryStakingsResponseSDKType, QueryTotalStakingsRequest, QueryTotalStakingsResponseSDKType, QueryRewardsRequest, QueryRewardsResponseSDKType, QueryCurrentEpochDaysRequest, QueryCurrentEpochDaysResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.plans = this.plans.bind(this);
    this.plan = this.plan.bind(this);
    this.stakings = this.stakings.bind(this);
    this.totalStakings = this.totalStakings.bind(this);
    this.rewards = this.rewards.bind(this);
    this.currentEpochDays = this.currentEpochDays.bind(this);
  }
  /* Params returns parameters of the farming module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/farming/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Plans returns all plans. */


  async plans(params: QueryPlansRequest): Promise<QueryPlansResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.type !== "undefined") {
      options.params.type = params.type;
    }

    if (typeof params?.farmingPoolAddress !== "undefined") {
      options.params.farming_pool_address = params.farmingPoolAddress;
    }

    if (typeof params?.terminationAddress !== "undefined") {
      options.params.termination_address = params.terminationAddress;
    }

    if (typeof params?.stakingCoinDenom !== "undefined") {
      options.params.staking_coin_denom = params.stakingCoinDenom;
    }

    if (typeof params?.terminated !== "undefined") {
      options.params.terminated = params.terminated;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/farming/v1/plans`;
    return await this.req.get<QueryPlansResponseSDKType>(endpoint, options);
  }
  /* Plan returns a specific plan. */


  async plan(params: QueryPlanRequest): Promise<QueryPlanResponseSDKType> {
    const endpoint = `ollo/farming/v1/plans/${params.planId}`;
    return await this.req.get<QueryPlanResponseSDKType>(endpoint);
  }
  /* Stakings returns all stakings by a farmer. */


  async stakings(params: QueryStakingsRequest): Promise<QueryStakingsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.stakingCoinDenom !== "undefined") {
      options.params.staking_coin_denom = params.stakingCoinDenom;
    }

    const endpoint = `ollo/farming/v1/stakings/${params.farmer}`;
    return await this.req.get<QueryStakingsResponseSDKType>(endpoint, options);
  }
  /* TotalStakings returns total staking amount for a staking coin denom */


  async totalStakings(params: QueryTotalStakingsRequest): Promise<QueryTotalStakingsResponseSDKType> {
    const endpoint = `ollo/farming/v1/total_stakings/${params.stakingCoinDenom}`;
    return await this.req.get<QueryTotalStakingsResponseSDKType>(endpoint);
  }
  /* Rewards returns rewards for a farmer */


  async rewards(params: QueryRewardsRequest): Promise<QueryRewardsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.stakingCoinDenom !== "undefined") {
      options.params.staking_coin_denom = params.stakingCoinDenom;
    }

    const endpoint = `ollo/farming/v1/rewards/${params.farmer}`;
    return await this.req.get<QueryRewardsResponseSDKType>(endpoint, options);
  }
  /* CurrentEpochDays returns current epoch days. */


  async currentEpochDays(_params: QueryCurrentEpochDaysRequest = {}): Promise<QueryCurrentEpochDaysResponseSDKType> {
    const endpoint = `ollo/farming/v1/current_epoch_days`;
    return await this.req.get<QueryCurrentEpochDaysResponseSDKType>(endpoint);
  }

}
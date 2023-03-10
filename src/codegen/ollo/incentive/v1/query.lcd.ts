import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMarketMakersRequest, QueryMarketMakersResponseSDKType, QueryIncentiveRequest, QueryIncentiveResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.marketMakers = this.marketMakers.bind(this);
    this.incentive = this.incentive.bind(this);
  }
  /*  */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/incentive/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /*  */


  async marketMakers(params: QueryMarketMakersRequest): Promise<QueryMarketMakersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    if (typeof params?.pairId !== "undefined") {
      options.params.pair_id = params.pairId;
    }

    if (typeof params?.eligible !== "undefined") {
      options.params.eligible = params.eligible;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/incentive/v1/market_makers`;
    return await this.req.get<QueryMarketMakersResponseSDKType>(endpoint, options);
  }
  /*  */


  async incentive(params: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    const endpoint = `ollo/incentive/v1/incentive`;
    return await this.req.get<QueryIncentiveResponseSDKType>(endpoint, options);
  }

}
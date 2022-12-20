import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPricesRequest, QueryPricesResponseSDKType, QueryLastPricesIdRequest, QueryLastPricesIdResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.pricesResult = this.pricesResult.bind(this);
    this.lastPricesId = this.lastPricesId.bind(this);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/oracle/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* PricesResult defines a rpc handler method for MsgPricesData. */


  async pricesResult(params: QueryPricesRequest): Promise<QueryPricesResponseSDKType> {
    const endpoint = `ollo/oracle/prices_result/${params.requestId}`;
    return await this.req.get<QueryPricesResponseSDKType>(endpoint);
  }
  /* LastPricesId query the last Prices result id */


  async lastPricesId(_params: QueryLastPricesIdRequest = {}): Promise<QueryLastPricesIdResponseSDKType> {
    const endpoint = `ollo/oracle/last_prices_id`;
    return await this.req.get<QueryLastPricesIdResponseSDKType>(endpoint);
  }

}
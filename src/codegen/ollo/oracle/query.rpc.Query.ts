import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPricesRequest, QueryPricesResponse, QueryLastPricesIdRequest, QueryLastPricesIdResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** PricesResult defines a rpc handler method for MsgPricesData. */

  pricesResult(request: QueryPricesRequest): Promise<QueryPricesResponse>;
  /** LastPricesId query the last Prices result id */

  lastPricesId(request?: QueryLastPricesIdRequest): Promise<QueryLastPricesIdResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pricesResult = this.pricesResult.bind(this);
    this.lastPricesId = this.lastPricesId.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.oracle.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  pricesResult(request: QueryPricesRequest): Promise<QueryPricesResponse> {
    const data = QueryPricesRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.oracle.Query", "PricesResult", data);
    return promise.then(data => QueryPricesResponse.decode(new _m0.Reader(data)));
  }

  lastPricesId(request: QueryLastPricesIdRequest = {}): Promise<QueryLastPricesIdResponse> {
    const data = QueryLastPricesIdRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.oracle.Query", "LastPricesId", data);
    return promise.then(data => QueryLastPricesIdResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    pricesResult(request: QueryPricesRequest): Promise<QueryPricesResponse> {
      return queryService.pricesResult(request);
    },

    lastPricesId(request?: QueryLastPricesIdRequest): Promise<QueryLastPricesIdResponse> {
      return queryService.lastPricesId(request);
    }

  };
};
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryDistributionRequest, QueryDistributionResponse, QueryLastBlockTimeRequest, QueryLastBlockTimeResponse } from "./query";
/** Query provides defines the gRPC querier service. */

export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */

  inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */

  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
  /** Distribution returns distribution breakdown of current minting */

  distribution(request?: QueryDistributionRequest): Promise<QueryDistributionResponse>;
  /** LastBlockTime returns last block time */

  lastBlockTime(request?: QueryLastBlockTimeRequest): Promise<QueryLastBlockTimeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
    this.distribution = this.distribution.bind(this);
    this.lastBlockTime = this.lastBlockTime.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.mint.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  inflation(request: QueryInflationRequest = {}): Promise<QueryInflationResponse> {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.mint.v1.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new _m0.Reader(data)));
  }

  annualProvisions(request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.mint.v1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new _m0.Reader(data)));
  }

  distribution(request: QueryDistributionRequest = {}): Promise<QueryDistributionResponse> {
    const data = QueryDistributionRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.mint.v1.Query", "Distribution", data);
    return promise.then(data => QueryDistributionResponse.decode(new _m0.Reader(data)));
  }

  lastBlockTime(request: QueryLastBlockTimeRequest = {}): Promise<QueryLastBlockTimeResponse> {
    const data = QueryLastBlockTimeRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.mint.v1.Query", "LastBlockTime", data);
    return promise.then(data => QueryLastBlockTimeResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse> {
      return queryService.inflation(request);
    },

    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
      return queryService.annualProvisions(request);
    },

    distribution(request?: QueryDistributionRequest): Promise<QueryDistributionResponse> {
      return queryService.distribution(request);
    },

    lastBlockTime(request?: QueryLastBlockTimeRequest): Promise<QueryLastBlockTimeResponse> {
      return queryService.lastBlockTime(request);
    }

  };
};
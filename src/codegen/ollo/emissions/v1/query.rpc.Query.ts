import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEmissionRequest, QueryEmissionResponse, QueryAllEmissionsRequest, QueryAllEmissionsResponse } from "./query";
export interface Query {
  queryEmission(request: QueryEmissionRequest): Promise<QueryEmissionResponse>;
  queryAllEmissions(request?: QueryAllEmissionsRequest): Promise<QueryAllEmissionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryEmission = this.queryEmission.bind(this);
    this.queryAllEmissions = this.queryAllEmissions.bind(this);
  }

  queryEmission(request: QueryEmissionRequest): Promise<QueryEmissionResponse> {
    const data = QueryEmissionRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.emissions.v1.Query", "QueryEmission", data);
    return promise.then(data => QueryEmissionResponse.decode(new _m0.Reader(data)));
  }

  queryAllEmissions(request: QueryAllEmissionsRequest = {
    pagination: undefined
  }): Promise<QueryAllEmissionsResponse> {
    const data = QueryAllEmissionsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.emissions.v1.Query", "QueryAllEmissions", data);
    return promise.then(data => QueryAllEmissionsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryEmission(request: QueryEmissionRequest): Promise<QueryEmissionResponse> {
      return queryService.queryEmission(request);
    },

    queryAllEmissions(request?: QueryAllEmissionsRequest): Promise<QueryAllEmissionsResponse> {
      return queryService.queryAllEmissions(request);
    }

  };
};
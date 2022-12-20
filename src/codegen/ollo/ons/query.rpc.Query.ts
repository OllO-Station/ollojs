import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetWhoisRequest, QueryGetWhoisResponse, QueryAllWhoisRequest, QueryAllWhoisResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Whois by index. */

  whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
  /** Queries a list of Whois items. */

  whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.whois = this.whois.bind(this);
    this.whoisAll = this.whoisAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
    const data = QueryGetWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Query", "Whois", data);
    return promise.then(data => QueryGetWhoisResponse.decode(new _m0.Reader(data)));
  }

  whoisAll(request: QueryAllWhoisRequest = {
    pagination: undefined
  }): Promise<QueryAllWhoisResponse> {
    const data = QueryAllWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Query", "WhoisAll", data);
    return promise.then(data => QueryAllWhoisResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
      return queryService.whois(request);
    },

    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse> {
      return queryService.whoisAll(request);
    }

  };
};
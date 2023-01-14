import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetDenomsRequest, QueryGetDenomsResponse, QueryGetDenomRequest, QueryGetDenomResponse, QueryGetDenomWhitelistRequest, QueryGetDenomWhitelistResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** GetDenoms returns all denoms under reserve */

  getDenoms(request?: QueryGetDenomsRequest): Promise<QueryGetDenomsResponse>;
  /** GetDenom returns info and metadata about a specific reserve denom */

  getDenom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
  /**
   * DenomWhitelist.g defines a gRPC query method for fetching
   * DenomWhitelist.g for a particular denom.
   */

  getDenomWhitelist(request: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponse>;
  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */

  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getDenoms = this.getDenoms.bind(this);
    this.getDenom = this.getDenom.bind(this);
    this.getDenomWhitelist = this.getDenomWhitelist.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  getDenoms(request: QueryGetDenomsRequest = {}): Promise<QueryGetDenomsResponse> {
    const data = QueryGetDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Query", "GetDenoms", data);
    return promise.then(data => QueryGetDenomsResponse.decode(new _m0.Reader(data)));
  }

  getDenom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse> {
    const data = QueryGetDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Query", "GetDenom", data);
    return promise.then(data => QueryGetDenomResponse.decode(new _m0.Reader(data)));
  }

  getDenomWhitelist(request: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponse> {
    const data = QueryGetDenomWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Query", "GetDenomWhitelist", data);
    return promise.then(data => QueryGetDenomWhitelistResponse.decode(new _m0.Reader(data)));
  }

  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.reserve.v1.Query", "DenomsFromCreator", data);
    return promise.then(data => QueryDenomsFromCreatorResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    getDenoms(request?: QueryGetDenomsRequest): Promise<QueryGetDenomsResponse> {
      return queryService.getDenoms(request);
    },

    getDenom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse> {
      return queryService.getDenom(request);
    },

    getDenomWhitelist(request: QueryGetDenomWhitelistRequest): Promise<QueryGetDenomWhitelistResponse> {
      return queryService.getDenomWhitelist(request);
    },

    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
      return queryService.denomsFromCreator(request);
    }

  };
};
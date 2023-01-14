import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTokenRequest, QueryTokenResponse, QueryTokensRequest, QueryTokensResponse, QueryFeesRequest, QueryFeesResponse, QueryParamsRequest, QueryParamsResponse, QueryBurnRequest, QueryBurnResponse } from "./query";
/** Query service defines a service with token info as endpoints */

export interface Query {
  /** Query token returns token info given denom */
  token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /** Tokens endpoint returns the list of all defined tokens */

  tokens(request: QueryTokensRequest): Promise<QueryTokensResponse>;
  /** Fee returns the fees to issue or mint a token */

  fees(request: QueryFeesRequest): Promise<QueryFeesResponse>;
  /** Params returns the token module parameters */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Burn endpoint returns all coins that have been burned */

  burn(request?: QueryBurnRequest): Promise<QueryBurnResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.token = this.token.bind(this);
    this.tokens = this.tokens.bind(this);
    this.fees = this.fees.bind(this);
    this.params = this.params.bind(this);
    this.burn = this.burn.bind(this);
  }

  token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Query", "Token", data);
    return promise.then(data => QueryTokenResponse.decode(new _m0.Reader(data)));
  }

  tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
    const data = QueryTokensRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Query", "Tokens", data);
    return promise.then(data => QueryTokensResponse.decode(new _m0.Reader(data)));
  }

  fees(request: QueryFeesRequest): Promise<QueryFeesResponse> {
    const data = QueryFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Query", "Fees", data);
    return promise.then(data => QueryFeesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  burn(request: QueryBurnRequest = {}): Promise<QueryBurnResponse> {
    const data = QueryBurnRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.token.v1.Query", "Burn", data);
    return promise.then(data => QueryBurnResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
      return queryService.token(request);
    },

    tokens(request: QueryTokensRequest): Promise<QueryTokensResponse> {
      return queryService.tokens(request);
    },

    fees(request: QueryFeesRequest): Promise<QueryFeesResponse> {
      return queryService.fees(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    burn(request?: QueryBurnRequest): Promise<QueryBurnResponse> {
      return queryService.burn(request);
    }

  };
};
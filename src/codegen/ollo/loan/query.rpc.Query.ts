import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLoansRequest, QueryGetLoansResponse, QueryAllLoansRequest, QueryAllLoansResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Loans by id. */

  loans(request: QueryGetLoansRequest): Promise<QueryGetLoansResponse>;
  /** Queries a list of Loans items. */

  loansAll(request?: QueryAllLoansRequest): Promise<QueryAllLoansResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.loans = this.loans.bind(this);
    this.loansAll = this.loansAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  loans(request: QueryGetLoansRequest): Promise<QueryGetLoansResponse> {
    const data = QueryGetLoansRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.Query", "Loans", data);
    return promise.then(data => QueryGetLoansResponse.decode(new _m0.Reader(data)));
  }

  loansAll(request: QueryAllLoansRequest = {
    pagination: undefined
  }): Promise<QueryAllLoansResponse> {
    const data = QueryAllLoansRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.loan.Query", "LoansAll", data);
    return promise.then(data => QueryAllLoansResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    loans(request: QueryGetLoansRequest): Promise<QueryGetLoansResponse> {
      return queryService.loans(request);
    },

    loansAll(request?: QueryAllLoansRequest): Promise<QueryAllLoansResponse> {
      return queryService.loansAll(request);
    }

  };
};
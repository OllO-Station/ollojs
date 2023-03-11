import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLoanRequest, QueryGetLoanResponse, QueryAllLoanRequest, QueryAllLoanResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Loan items. */

  loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse>;
  loanAll(request?: QueryAllLoanRequest): Promise<QueryAllLoanResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.loan = this.loan.bind(this);
    this.loanAll = this.loanAll.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lend.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse> {
    const data = QueryGetLoanRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lend.v1.Query", "Loan", data);
    return promise.then(data => QueryGetLoanResponse.decode(new _m0.Reader(data)));
  }

  loanAll(request: QueryAllLoanRequest = {
    pagination: undefined
  }): Promise<QueryAllLoanResponse> {
    const data = QueryAllLoanRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lend.v1.Query", "LoanAll", data);
    return promise.then(data => QueryAllLoanResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    loan(request: QueryGetLoanRequest): Promise<QueryGetLoanResponse> {
      return queryService.loan(request);
    },

    loanAll(request?: QueryAllLoanRequest): Promise<QueryAllLoanResponse> {
      return queryService.loanAll(request);
    }

  };
};
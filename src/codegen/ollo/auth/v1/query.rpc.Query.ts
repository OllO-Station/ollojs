import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInterchainAccountAddressRequest, QueryInterchainAccountAddressResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** InterchainAccountAddress queries the interchain account address for given `connectionId` and `owner` */

  interchainAccountAddress(request: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.interchainAccountAddress = this.interchainAccountAddress.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.auth.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  interchainAccountAddress(request: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponse> {
    const data = QueryInterchainAccountAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.auth.v1.Query", "InterchainAccountAddress", data);
    return promise.then(data => QueryInterchainAccountAddressResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    interchainAccountAddress(request: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponse> {
      return queryService.interchainAccountAddress(request);
    }

  };
};
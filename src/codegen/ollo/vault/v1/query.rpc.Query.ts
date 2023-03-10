import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryVaultRequest, QueryVaultResponse, QueryAllVaultsRequest, QueryAllVaultsResponse } from "./query";
export interface Query {
  queryVault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
  queryAllVaults(request?: QueryAllVaultsRequest): Promise<QueryAllVaultsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryVault = this.queryVault.bind(this);
    this.queryAllVaults = this.queryAllVaults.bind(this);
  }

  queryVault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
    const data = QueryVaultRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Query", "QueryVault", data);
    return promise.then(data => QueryVaultResponse.decode(new _m0.Reader(data)));
  }

  queryAllVaults(request: QueryAllVaultsRequest = {
    pagination: undefined
  }): Promise<QueryAllVaultsResponse> {
    const data = QueryAllVaultsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.vault.v1.Query", "QueryAllVaults", data);
    return promise.then(data => QueryAllVaultsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryVault(request: QueryVaultRequest): Promise<QueryVaultResponse> {
      return queryService.queryVault(request);
    },

    queryAllVaults(request?: QueryAllVaultsRequest): Promise<QueryAllVaultsResponse> {
      return queryService.queryAllVaults(request);
    }

  };
};
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAirdropsRequest, QueryAirdropsResponse, QueryAirdropRequest, QueryAirdropResponse, QueryClaimRecordRequest, QueryClaimRecordResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Airdrops returns all airdrops. */

  airdrops(request?: QueryAirdropsRequest): Promise<QueryAirdropsResponse>;
  /** Airdrop returns the specific airdrop. */

  airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse>;
  /** ClaimRecord returns the claim record for the recipient address. */

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.airdrops = this.airdrops.bind(this);
    this.airdrop = this.airdrop.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  airdrops(request: QueryAirdropsRequest = {
    pagination: undefined
  }): Promise<QueryAirdropsResponse> {
    const data = QueryAirdropsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.Query", "Airdrops", data);
    return promise.then(data => QueryAirdropsResponse.decode(new _m0.Reader(data)));
  }

  airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
    const data = QueryAirdropRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.Query", "Airdrop", data);
    return promise.then(data => QueryAirdropResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    airdrops(request?: QueryAirdropsRequest): Promise<QueryAirdropsResponse> {
      return queryService.airdrops(request);
    },

    airdrop(request: QueryAirdropRequest): Promise<QueryAirdropResponse> {
      return queryService.airdrop(request);
    },

    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
      return queryService.claimRecord(request);
    }

  };
};
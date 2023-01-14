import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetClaimRecordRequest, QueryGetClaimRecordResponse, QueryAllClaimRecordRequest, QueryAllClaimRecordResponse, QueryGetGoalRequest, QueryGetGoalResponse, QueryAllGoalRequest, QueryAllGoalResponse, QueryGetAirdropSupplyRequest, QueryGetAirdropSupplyResponse, QueryGetInitialClaimRequest, QueryGetInitialClaimResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a ClaimRecord by address. */

  claimRecord(request: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponse>;
  /** Queries a list of ClaimRecord items. */

  claimRecordAll(request?: QueryAllClaimRecordRequest): Promise<QueryAllClaimRecordResponse>;
  /** Queries a Goal by ID. */

  goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse>;
  /** Queries a list of Goal items. */

  goalAll(request?: QueryAllGoalRequest): Promise<QueryAllGoalResponse>;
  /** Queries a AirdropSupply by index. */

  airdropSupply(request?: QueryGetAirdropSupplyRequest): Promise<QueryGetAirdropSupplyResponse>;
  /** Queries a InitialClaim by index. */

  initialClaim(request?: QueryGetInitialClaimRequest): Promise<QueryGetInitialClaimResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimRecordAll = this.claimRecordAll.bind(this);
    this.goal = this.goal.bind(this);
    this.goalAll = this.goalAll.bind(this);
    this.airdropSupply = this.airdropSupply.bind(this);
    this.initialClaim = this.initialClaim.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponse> {
    const data = QueryGetClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "ClaimRecord", data);
    return promise.then(data => QueryGetClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  claimRecordAll(request: QueryAllClaimRecordRequest = {
    pagination: undefined
  }): Promise<QueryAllClaimRecordResponse> {
    const data = QueryAllClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "ClaimRecordAll", data);
    return promise.then(data => QueryAllClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse> {
    const data = QueryGetGoalRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "Goal", data);
    return promise.then(data => QueryGetGoalResponse.decode(new _m0.Reader(data)));
  }

  goalAll(request: QueryAllGoalRequest = {
    pagination: undefined
  }): Promise<QueryAllGoalResponse> {
    const data = QueryAllGoalRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "GoalAll", data);
    return promise.then(data => QueryAllGoalResponse.decode(new _m0.Reader(data)));
  }

  airdropSupply(request: QueryGetAirdropSupplyRequest = {}): Promise<QueryGetAirdropSupplyResponse> {
    const data = QueryGetAirdropSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "AirdropSupply", data);
    return promise.then(data => QueryGetAirdropSupplyResponse.decode(new _m0.Reader(data)));
  }

  initialClaim(request: QueryGetInitialClaimRequest = {}): Promise<QueryGetInitialClaimResponse> {
    const data = QueryGetInitialClaimRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.claim.v1.Query", "InitialClaim", data);
    return promise.then(data => QueryGetInitialClaimResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    claimRecord(request: QueryGetClaimRecordRequest): Promise<QueryGetClaimRecordResponse> {
      return queryService.claimRecord(request);
    },

    claimRecordAll(request?: QueryAllClaimRecordRequest): Promise<QueryAllClaimRecordResponse> {
      return queryService.claimRecordAll(request);
    },

    goal(request: QueryGetGoalRequest): Promise<QueryGetGoalResponse> {
      return queryService.goal(request);
    },

    goalAll(request?: QueryAllGoalRequest): Promise<QueryAllGoalResponse> {
      return queryService.goalAll(request);
    },

    airdropSupply(request?: QueryGetAirdropSupplyRequest): Promise<QueryGetAirdropSupplyResponse> {
      return queryService.airdropSupply(request);
    },

    initialClaim(request?: QueryGetInitialClaimRequest): Promise<QueryGetInitialClaimResponse> {
      return queryService.initialClaim(request);
    }

  };
};
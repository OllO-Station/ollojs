import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorsRequest, QueryValidatorsResponse, QueryVotingPowerRequest, QueryVotingPowerResponse, QueryStateRequest, QueryStateResponse } from "./query";
export interface Query {
  /** Params queries all parameters of the staking module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Validator queries validator info for given validator address. */

  validators(request?: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */

  votingPower(request: QueryVotingPowerRequest): Promise<QueryVotingPowerResponse>;
  /** State queries the state of the staking module. */

  state(request?: QueryStateRequest): Promise<QueryStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.votingPower = this.votingPower.bind(this);
    this.state = this.state.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lstaking.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  validators(request: QueryValidatorsRequest = {}): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lstaking.v1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  votingPower(request: QueryVotingPowerRequest): Promise<QueryVotingPowerResponse> {
    const data = QueryVotingPowerRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lstaking.v1.Query", "VotingPower", data);
    return promise.then(data => QueryVotingPowerResponse.decode(new _m0.Reader(data)));
  }

  state(request: QueryStateRequest = {}): Promise<QueryStateResponse> {
    const data = QueryStateRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.lstaking.v1.Query", "State", data);
    return promise.then(data => QueryStateResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    validators(request?: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
      return queryService.validators(request);
    },

    votingPower(request: QueryVotingPowerRequest): Promise<QueryVotingPowerResponse> {
      return queryService.votingPower(request);
    },

    state(request?: QueryStateRequest): Promise<QueryStateResponse> {
      return queryService.state(request);
    }

  };
};
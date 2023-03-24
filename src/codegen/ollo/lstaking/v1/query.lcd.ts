import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryValidatorsRequest, QueryValidatorsResponseSDKType, QueryVotingPowerRequest, QueryVotingPowerResponseSDKType, QueryStateRequest, QueryStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.validators = this.validators.bind(this);
    this.votingPower = this.votingPower.bind(this);
    this.state = this.state.bind(this);
  }
  /* Params queries all parameters of the staking module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/lstaking/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Validator queries validator info for given validator address. */


  async validators(_params: QueryValidatorsRequest = {}): Promise<QueryValidatorsResponseSDKType> {
    const endpoint = `ollo/lstaking/v1/validators`;
    return await this.req.get<QueryValidatorsResponseSDKType>(endpoint);
  }
  /* Validator queries validator info for given validator address. */


  async votingPower(params: QueryVotingPowerRequest): Promise<QueryVotingPowerResponseSDKType> {
    const endpoint = `ollo/lstaking/v1/voting_power/${params.voter}`;
    return await this.req.get<QueryVotingPowerResponseSDKType>(endpoint);
  }
  /* State queries the state of the staking module. */


  async state(_params: QueryStateRequest = {}): Promise<QueryStateResponseSDKType> {
    const endpoint = `ollo/lstaking/v1/state`;
    return await this.req.get<QueryStateResponseSDKType>(endpoint);
  }

}
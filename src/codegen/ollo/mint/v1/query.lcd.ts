import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType, QueryDistributionRequest, QueryDistributionResponseSDKType, QueryLastBlockTimeRequest, QueryLastBlockTimeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
    this.distribution = this.distribution.bind(this);
    this.lastBlockTime = this.lastBlockTime.bind(this);
  }
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/mint/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Inflation returns the current minting inflation value. */


  async inflation(_params: QueryInflationRequest = {}): Promise<QueryInflationResponseSDKType> {
    const endpoint = `ollo/mint/v1/inflation`;
    return await this.req.get<QueryInflationResponseSDKType>(endpoint);
  }
  /* AnnualProvisions current minting annual provisions value. */


  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const endpoint = `ollo/mint/v1/annual_provisions`;
    return await this.req.get<QueryAnnualProvisionsResponseSDKType>(endpoint);
  }
  /* Distribution returns distribution breakdown of current minting */


  async distribution(_params: QueryDistributionRequest = {}): Promise<QueryDistributionResponseSDKType> {
    const endpoint = `ollo/mint/v1/distribution`;
    return await this.req.get<QueryDistributionResponseSDKType>(endpoint);
  }
  /* LastBlockTime returns last block time */


  async lastBlockTime(_params: QueryLastBlockTimeRequest = {}): Promise<QueryLastBlockTimeResponseSDKType> {
    const endpoint = `ollo/mint/v1/last_block_time`;
    return await this.req.get<QueryLastBlockTimeResponseSDKType>(endpoint);
  }

}
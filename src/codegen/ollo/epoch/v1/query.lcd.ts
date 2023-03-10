import { LCDClient } from "@osmonauts/lcd";
import { QueryEpochsRequest, QueryEpochsResponseSDKType, QueryEpochRequest, QueryEpochResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.epochs = this.epochs.bind(this);
    this.epoch = this.epoch.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  /* Epochs queries all historical epochs. */


  async epochs(_params: QueryEpochsRequest = {}): Promise<QueryEpochsResponseSDKType> {
    const endpoint = `ollo/epoch/v1/epochs`;
    return await this.req.get<QueryEpochsResponseSDKType>(endpoint);
  }
  /* Epoch queries for info on a specific epoch given its number. */


  async epoch(params: QueryEpochRequest): Promise<QueryEpochResponseSDKType> {
    const endpoint = `ollo/epoch/v1/epochs/${params.id}`;
    return await this.req.get<QueryEpochResponseSDKType>(endpoint);
  }
  /* CurrentEpoch queries for info on the active epoch. */


  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `ollo/epoch/v1/current`;
    return await this.req.get<QueryCurrentEpochResponseSDKType>(endpoint, options);
  }

}
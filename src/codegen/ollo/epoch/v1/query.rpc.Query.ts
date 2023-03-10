import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEpochsRequest, QueryEpochsResponse, QueryEpochRequest, QueryEpochResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export interface Query {
  /** Epochs queries all historical epochs. */
  epochs(request?: QueryEpochsRequest): Promise<QueryEpochsResponse>;
  /** Epoch queries for info on a specific epoch given its number. */

  epoch(request: QueryEpochRequest): Promise<QueryEpochResponse>;
  /** CurrentEpoch queries for info on the active epoch. */

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochs = this.epochs.bind(this);
    this.epoch = this.epoch.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }

  epochs(request: QueryEpochsRequest = {}): Promise<QueryEpochsResponse> {
    const data = QueryEpochsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.epoch.v1.Query", "Epochs", data);
    return promise.then(data => QueryEpochsResponse.decode(new _m0.Reader(data)));
  }

  epoch(request: QueryEpochRequest): Promise<QueryEpochResponse> {
    const data = QueryEpochRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.epoch.v1.Query", "Epoch", data);
    return promise.then(data => QueryEpochResponse.decode(new _m0.Reader(data)));
  }

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.epoch.v1.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epochs(request?: QueryEpochsRequest): Promise<QueryEpochsResponse> {
      return queryService.epochs(request);
    },

    epoch(request: QueryEpochRequest): Promise<QueryEpochResponse> {
      return queryService.epoch(request);
    },

    currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
      return queryService.currentEpoch(request);
    }

  };
};
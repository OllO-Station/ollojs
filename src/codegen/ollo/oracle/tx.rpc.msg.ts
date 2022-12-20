import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgPricesData, MsgPricesDataResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  pricesData(request: MsgPricesData): Promise<MsgPricesDataResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pricesData = this.pricesData.bind(this);
  }

  pricesData(request: MsgPricesData): Promise<MsgPricesDataResponse> {
    const data = MsgPricesData.encode(request).finish();
    const promise = this.rpc.request("ollo.oracle.Msg", "PricesData", data);
    return promise.then(data => MsgPricesDataResponse.decode(new _m0.Reader(data)));
  }

}
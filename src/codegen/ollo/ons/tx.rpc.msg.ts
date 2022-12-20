import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgBuyName, MsgBuyNameResponse, MsgSellName, MsgSellNameResponse, MsgSetName, MsgSetNameResponse, MsgDeleteName, MsgDeleteNameResponse, MsgAddThread, MsgAddThreadResponse, MsgDeleteThread, MsgDeleteThreadResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  buyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
  sellName(request: MsgSellName): Promise<MsgSellNameResponse>;
  setName(request: MsgSetName): Promise<MsgSetNameResponse>;
  deleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
  addThread(request: MsgAddThread): Promise<MsgAddThreadResponse>;
  deleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.buyName = this.buyName.bind(this);
    this.sellName = this.sellName.bind(this);
    this.setName = this.setName.bind(this);
    this.deleteName = this.deleteName.bind(this);
    this.addThread = this.addThread.bind(this);
    this.deleteThread = this.deleteThread.bind(this);
  }

  buyName(request: MsgBuyName): Promise<MsgBuyNameResponse> {
    const data = MsgBuyName.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Msg", "BuyName", data);
    return promise.then(data => MsgBuyNameResponse.decode(new _m0.Reader(data)));
  }

  sellName(request: MsgSellName): Promise<MsgSellNameResponse> {
    const data = MsgSellName.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Msg", "SellName", data);
    return promise.then(data => MsgSellNameResponse.decode(new _m0.Reader(data)));
  }

  setName(request: MsgSetName): Promise<MsgSetNameResponse> {
    const data = MsgSetName.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Msg", "SetName", data);
    return promise.then(data => MsgSetNameResponse.decode(new _m0.Reader(data)));
  }

  deleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse> {
    const data = MsgDeleteName.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Msg", "DeleteName", data);
    return promise.then(data => MsgDeleteNameResponse.decode(new _m0.Reader(data)));
  }

  addThread(request: MsgAddThread): Promise<MsgAddThreadResponse> {
    const data = MsgAddThread.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Msg", "AddThread", data);
    return promise.then(data => MsgAddThreadResponse.decode(new _m0.Reader(data)));
  }

  deleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse> {
    const data = MsgDeleteThread.encode(request).finish();
    const promise = this.rpc.request("ollo.ons.Msg", "DeleteThread", data);
    return promise.then(data => MsgDeleteThreadResponse.decode(new _m0.Reader(data)));
  }

}
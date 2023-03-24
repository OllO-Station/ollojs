import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgLiquidStake, MsgLiquidStakeResponse, MsgLiquidUnstake, MsgLiquidUnstakeResponse } from "./tx";
export interface Msg {
  /** Delegate coins to a liquid validator */
  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse>;
  /** Unbond coins from a liquid validator */

  liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidStake = this.liquidStake.bind(this);
    this.liquidUnstake = this.liquidUnstake.bind(this);
  }

  liquidStake(request: MsgLiquidStake): Promise<MsgLiquidStakeResponse> {
    const data = MsgLiquidStake.encode(request).finish();
    const promise = this.rpc.request("ollo.lstaking.v1.Msg", "LiquidStake", data);
    return promise.then(data => MsgLiquidStakeResponse.decode(new _m0.Reader(data)));
  }

  liquidUnstake(request: MsgLiquidUnstake): Promise<MsgLiquidUnstakeResponse> {
    const data = MsgLiquidUnstake.encode(request).finish();
    const promise = this.rpc.request("ollo.lstaking.v1.Msg", "LiquidUnstake", data);
    return promise.then(data => MsgLiquidUnstakeResponse.decode(new _m0.Reader(data)));
  }

}
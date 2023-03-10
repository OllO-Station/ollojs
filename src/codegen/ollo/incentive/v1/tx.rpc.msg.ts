import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgApplyMarketMaker, MsgApplyMarketMakerResponse, MsgClaimIncentive, MsgClaimIncentiveResponse } from "./tx";
export interface Msg {
  applyMarketMaker(request: MsgApplyMarketMaker): Promise<MsgApplyMarketMakerResponse>;
  claimIncentive(request: MsgClaimIncentive): Promise<MsgClaimIncentiveResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.applyMarketMaker = this.applyMarketMaker.bind(this);
    this.claimIncentive = this.claimIncentive.bind(this);
  }

  applyMarketMaker(request: MsgApplyMarketMaker): Promise<MsgApplyMarketMakerResponse> {
    const data = MsgApplyMarketMaker.encode(request).finish();
    const promise = this.rpc.request("ollo.incentive.v1.Msg", "ApplyMarketMaker", data);
    return promise.then(data => MsgApplyMarketMakerResponse.decode(new _m0.Reader(data)));
  }

  claimIncentive(request: MsgClaimIncentive): Promise<MsgClaimIncentiveResponse> {
    const data = MsgClaimIncentive.encode(request).finish();
    const promise = this.rpc.request("ollo.incentive.v1.Msg", "ClaimIncentive", data);
    return promise.then(data => MsgClaimIncentiveResponse.decode(new _m0.Reader(data)));
  }

}
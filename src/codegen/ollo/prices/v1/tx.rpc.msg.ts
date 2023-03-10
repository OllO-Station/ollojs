import { MsgModuleOwner } from "./prices";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgBandPricesData, MsgBandPricesDataResponse, MsgFeedData, MsgResponse, MsgModuleOwnershipTransfer, MsgFeed, MsgAddDataProvider, MsgRemoveDataProvider, MsgSetSubmissionCount, MsgSetHeartbeatTrigger, MsgSetDeviationThresholdTrigger, MsgSetFeedReward, MsgRequestNewRound, MsgFeedOwnershipTransfer, MsgAccount, MsgEditAccount } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  bandPricesData(request: MsgBandPricesData): Promise<MsgBandPricesDataResponse>;
  submitFeedDataTx(request: MsgFeedData): Promise<MsgResponse>;
  addModuleOwnerTx(request: MsgModuleOwner): Promise<MsgResponse>;
  moduleOwnershipTransferTx(request: MsgModuleOwnershipTransfer): Promise<MsgResponse>;
  addFeedTx(request: MsgFeed): Promise<MsgResponse>;
  addDataProviderTx(request: MsgAddDataProvider): Promise<MsgResponse>;
  removeDataProviderTx(request: MsgRemoveDataProvider): Promise<MsgResponse>;
  setSubmissionCountTx(request: MsgSetSubmissionCount): Promise<MsgResponse>;
  setHeartbeatTriggerTx(request: MsgSetHeartbeatTrigger): Promise<MsgResponse>;
  setDeviationThresholdTriggerTx(request: MsgSetDeviationThresholdTrigger): Promise<MsgResponse>;
  setFeedRewardTx(request: MsgSetFeedReward): Promise<MsgResponse>;
  requestNewRoundTx(request: MsgRequestNewRound): Promise<MsgResponse>;
  feedOwnershipTransferTx(request: MsgFeedOwnershipTransfer): Promise<MsgResponse>;
  addAccountTx(request: MsgAccount): Promise<MsgResponse>;
  editAccountTx(request: MsgEditAccount): Promise<MsgResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bandPricesData = this.bandPricesData.bind(this);
    this.submitFeedDataTx = this.submitFeedDataTx.bind(this);
    this.addModuleOwnerTx = this.addModuleOwnerTx.bind(this);
    this.moduleOwnershipTransferTx = this.moduleOwnershipTransferTx.bind(this);
    this.addFeedTx = this.addFeedTx.bind(this);
    this.addDataProviderTx = this.addDataProviderTx.bind(this);
    this.removeDataProviderTx = this.removeDataProviderTx.bind(this);
    this.setSubmissionCountTx = this.setSubmissionCountTx.bind(this);
    this.setHeartbeatTriggerTx = this.setHeartbeatTriggerTx.bind(this);
    this.setDeviationThresholdTriggerTx = this.setDeviationThresholdTriggerTx.bind(this);
    this.setFeedRewardTx = this.setFeedRewardTx.bind(this);
    this.requestNewRoundTx = this.requestNewRoundTx.bind(this);
    this.feedOwnershipTransferTx = this.feedOwnershipTransferTx.bind(this);
    this.addAccountTx = this.addAccountTx.bind(this);
    this.editAccountTx = this.editAccountTx.bind(this);
  }

  bandPricesData(request: MsgBandPricesData): Promise<MsgBandPricesDataResponse> {
    const data = MsgBandPricesData.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "BandPricesData", data);
    return promise.then(data => MsgBandPricesDataResponse.decode(new _m0.Reader(data)));
  }

  submitFeedDataTx(request: MsgFeedData): Promise<MsgResponse> {
    const data = MsgFeedData.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "SubmitFeedDataTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  addModuleOwnerTx(request: MsgModuleOwner): Promise<MsgResponse> {
    const data = MsgModuleOwner.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "AddModuleOwnerTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  moduleOwnershipTransferTx(request: MsgModuleOwnershipTransfer): Promise<MsgResponse> {
    const data = MsgModuleOwnershipTransfer.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "ModuleOwnershipTransferTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  addFeedTx(request: MsgFeed): Promise<MsgResponse> {
    const data = MsgFeed.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "AddFeedTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  addDataProviderTx(request: MsgAddDataProvider): Promise<MsgResponse> {
    const data = MsgAddDataProvider.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "AddDataProviderTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  removeDataProviderTx(request: MsgRemoveDataProvider): Promise<MsgResponse> {
    const data = MsgRemoveDataProvider.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "RemoveDataProviderTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  setSubmissionCountTx(request: MsgSetSubmissionCount): Promise<MsgResponse> {
    const data = MsgSetSubmissionCount.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "SetSubmissionCountTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  setHeartbeatTriggerTx(request: MsgSetHeartbeatTrigger): Promise<MsgResponse> {
    const data = MsgSetHeartbeatTrigger.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "SetHeartbeatTriggerTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  setDeviationThresholdTriggerTx(request: MsgSetDeviationThresholdTrigger): Promise<MsgResponse> {
    const data = MsgSetDeviationThresholdTrigger.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "SetDeviationThresholdTriggerTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  setFeedRewardTx(request: MsgSetFeedReward): Promise<MsgResponse> {
    const data = MsgSetFeedReward.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "SetFeedRewardTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  requestNewRoundTx(request: MsgRequestNewRound): Promise<MsgResponse> {
    const data = MsgRequestNewRound.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "RequestNewRoundTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  feedOwnershipTransferTx(request: MsgFeedOwnershipTransfer): Promise<MsgResponse> {
    const data = MsgFeedOwnershipTransfer.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "FeedOwnershipTransferTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  addAccountTx(request: MsgAccount): Promise<MsgResponse> {
    const data = MsgAccount.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "AddAccountTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

  editAccountTx(request: MsgEditAccount): Promise<MsgResponse> {
    const data = MsgEditAccount.encode(request).finish();
    const promise = this.rpc.request("ollo.prices.v1.Msg", "EditAccountTx", data);
    return promise.then(data => MsgResponse.decode(new _m0.Reader(data)));
  }

}
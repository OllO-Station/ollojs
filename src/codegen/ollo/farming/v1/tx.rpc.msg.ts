import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateFixedAmountPlan, MsgCreateFixedAmountPlanResponse, MsgCreateRatioPlan, MsgCreateRatioPlanResponse, MsgStake, MsgStakeResponse, MsgUnstake, MsgUnstakeResponse, MsgHarvest, MsgHarvestResponse, MsgRemovePlan, MsgRemovePlanResponse, MsgAdvanceEpoch, MsgAdvanceEpochResponse } from "./tx";
/** Msg defines the farming Msg service. */

export interface Msg {
  /**
   * CreateFixedAmountPlan defines a method for creating a new fixed amount
   * farming plan
   */
  createFixedAmountPlan(request: MsgCreateFixedAmountPlan): Promise<MsgCreateFixedAmountPlanResponse>;
  /** CreateRatioPlan defines a method for creating a new ratio farming plan */

  createRatioPlan(request: MsgCreateRatioPlan): Promise<MsgCreateRatioPlanResponse>;
  /** Stake defines a method for staking coins into the farming plan */

  stake(request: MsgStake): Promise<MsgStakeResponse>;
  /** Unstake defines a method for unstaking coins from the farming plan */

  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
  /** Harvest defines a method for claiming farming rewards */

  harvest(request: MsgHarvest): Promise<MsgHarvestResponse>;
  /** RemovePlan defines a method for removing a terminated plan. */

  removePlan(request: MsgRemovePlan): Promise<MsgRemovePlanResponse>;
  /**
   * AdvanceEpoch defines a method for advancing epoch by one, just for testing purpose
   * and shouldn't be used in real world
   */

  advanceEpoch(request: MsgAdvanceEpoch): Promise<MsgAdvanceEpochResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createFixedAmountPlan = this.createFixedAmountPlan.bind(this);
    this.createRatioPlan = this.createRatioPlan.bind(this);
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.harvest = this.harvest.bind(this);
    this.removePlan = this.removePlan.bind(this);
    this.advanceEpoch = this.advanceEpoch.bind(this);
  }

  createFixedAmountPlan(request: MsgCreateFixedAmountPlan): Promise<MsgCreateFixedAmountPlanResponse> {
    const data = MsgCreateFixedAmountPlan.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "CreateFixedAmountPlan", data);
    return promise.then(data => MsgCreateFixedAmountPlanResponse.decode(new _m0.Reader(data)));
  }

  createRatioPlan(request: MsgCreateRatioPlan): Promise<MsgCreateRatioPlanResponse> {
    const data = MsgCreateRatioPlan.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "CreateRatioPlan", data);
    return promise.then(data => MsgCreateRatioPlanResponse.decode(new _m0.Reader(data)));
  }

  stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new _m0.Reader(data)));
  }

  unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new _m0.Reader(data)));
  }

  harvest(request: MsgHarvest): Promise<MsgHarvestResponse> {
    const data = MsgHarvest.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "Harvest", data);
    return promise.then(data => MsgHarvestResponse.decode(new _m0.Reader(data)));
  }

  removePlan(request: MsgRemovePlan): Promise<MsgRemovePlanResponse> {
    const data = MsgRemovePlan.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "RemovePlan", data);
    return promise.then(data => MsgRemovePlanResponse.decode(new _m0.Reader(data)));
  }

  advanceEpoch(request: MsgAdvanceEpoch): Promise<MsgAdvanceEpochResponse> {
    const data = MsgAdvanceEpoch.encode(request).finish();
    const promise = this.rpc.request("ollo.farming.v1.Msg", "AdvanceEpoch", data);
    return promise.then(data => MsgAdvanceEpochResponse.decode(new _m0.Reader(data)));
  }

}
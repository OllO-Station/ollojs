import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp, Long } from "../../../helpers";
/**
 * PublicPlanProposal defines a public farming plan governance proposal that receives one of the following requests:
 * A request that creates a public farming plan, a request that updates the plan, and a request that deletes the plan.
 * For public plan creation, depending on which field is passed, either epoch amount or epoch ratio, it creates a fixed
 * amount plan or ratio plan.
 */

export interface PublicPlanProposal {
  /** title specifies the title of the plan */
  title: string;
  /** description specifies the description of the plan */

  description: string;
  /** add_plan_requests specifies AddPlanRequest object */

  addPlanRequests: AddPlanRequest[];
  /** modify_plan_requests specifies ModifyPlanRequest object */

  modifyPlanRequests: ModifyPlanRequest[];
  /** delete_plan_requests specifies DeletePlanRequest object */

  deletePlanRequests: DeletePlanRequest[];
}
/**
 * PublicPlanProposal defines a public farming plan governance proposal that receives one of the following requests:
 * A request that creates a public farming plan, a request that updates the plan, and a request that deletes the plan.
 * For public plan creation, depending on which field is passed, either epoch amount or epoch ratio, it creates a fixed
 * amount plan or ratio plan.
 */

export interface PublicPlanProposalSDKType {
  title: string;
  description: string;
  add_plan_requests: AddPlanRequestSDKType[];
  modify_plan_requests: ModifyPlanRequestSDKType[];
  delete_plan_requests: DeletePlanRequestSDKType[];
}
/** AddPlanRequest details a proposal for creating a public plan. */

export interface AddPlanRequest {
  /** name specifies the plan name for display */
  name: string;
  /** farming_pool_address defines the bech32-encoded address of the farming pool */

  farmingPoolAddress: string;
  /**
   * termination_address defines the bech32-encoded address that terminates plan
   * when the plan ends after the end time, the balance of farming pool address
   * is transferred to the termination address
   */

  terminationAddress: string;
  /** staking_coin_weights specifies coin weights for the plan */

  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */

  startTime?: Date;
  /** end_time specifies the end time of the plan */

  endTime?: Date;
  /** epoch_amount specifies the distributing amount for each epoch */

  epochAmount: Coin[];
  /** epoch_ratio specifies the distributing amount by ratio */

  epochRatio: string;
}
/** AddPlanRequest details a proposal for creating a public plan. */

export interface AddPlanRequestSDKType {
  name: string;
  farming_pool_address: string;
  termination_address: string;
  staking_coin_weights: DecCoinSDKType[];
  start_time?: Date;
  end_time?: Date;
  epoch_amount: CoinSDKType[];
  epoch_ratio: string;
}
/** ModifyPlanRequest details a proposal for modifying the existing public plan. */

export interface ModifyPlanRequest {
  /** plan_id specifies index of the farming plan */
  planId: Long;
  /** name specifies the plan name for display */

  name: string;
  /** farming_pool_address defines the bech32-encoded address of the farming pool */

  farmingPoolAddress: string;
  /**
   * termination_address defines the bech32-encoded address that terminates plan
   * when the plan ends after the end time, the balance of farming pool address
   * is transferred to the termination address
   */

  terminationAddress: string;
  /** staking_coin_weights specifies coin weights for the plan */

  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */

  startTime?: Date;
  /** end_time specifies the end time of the plan */

  endTime?: Date;
  /** epoch_amount specifies the distributing amount for each epoch */

  epochAmount: Coin[];
  /** epoch_ratio specifies the distributing amount by ratio */

  epochRatio: string;
}
/** ModifyPlanRequest details a proposal for modifying the existing public plan. */

export interface ModifyPlanRequestSDKType {
  plan_id: Long;
  name: string;
  farming_pool_address: string;
  termination_address: string;
  staking_coin_weights: DecCoinSDKType[];
  start_time?: Date;
  end_time?: Date;
  epoch_amount: CoinSDKType[];
  epoch_ratio: string;
}
/** DeletePlanRequest details a proposal for deleting an existing public plan. */

export interface DeletePlanRequest {
  /** plan_id specifies index of the farming plan */
  planId: Long;
}
/** DeletePlanRequest details a proposal for deleting an existing public plan. */

export interface DeletePlanRequestSDKType {
  plan_id: Long;
}

function createBasePublicPlanProposal(): PublicPlanProposal {
  return {
    title: "",
    description: "",
    addPlanRequests: [],
    modifyPlanRequests: [],
    deletePlanRequests: []
  };
}

export const PublicPlanProposal = {
  encode(message: PublicPlanProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.addPlanRequests) {
      AddPlanRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.modifyPlanRequests) {
      ModifyPlanRequest.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.deletePlanRequests) {
      DeletePlanRequest.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicPlanProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicPlanProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.addPlanRequests.push(AddPlanRequest.decode(reader, reader.uint32()));
          break;

        case 4:
          message.modifyPlanRequests.push(ModifyPlanRequest.decode(reader, reader.uint32()));
          break;

        case 5:
          message.deletePlanRequests.push(DeletePlanRequest.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PublicPlanProposal>): PublicPlanProposal {
    const message = createBasePublicPlanProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addPlanRequests = object.addPlanRequests?.map(e => AddPlanRequest.fromPartial(e)) || [];
    message.modifyPlanRequests = object.modifyPlanRequests?.map(e => ModifyPlanRequest.fromPartial(e)) || [];
    message.deletePlanRequests = object.deletePlanRequests?.map(e => DeletePlanRequest.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAddPlanRequest(): AddPlanRequest {
  return {
    name: "",
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochAmount: [],
    epochRatio: ""
  };
}

export const AddPlanRequest = {
  encode(message: AddPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.farmingPoolAddress !== "") {
      writer.uint32(18).string(message.farmingPoolAddress);
    }

    if (message.terminationAddress !== "") {
      writer.uint32(26).string(message.terminationAddress);
    }

    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.epochRatio !== "") {
      writer.uint32(66).string(message.epochRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPlanRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.farmingPoolAddress = reader.string();
          break;

        case 3:
          message.terminationAddress = reader.string();
          break;

        case 4:
          message.stakingCoinWeights.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.epochRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddPlanRequest>): AddPlanRequest {
    const message = createBaseAddPlanRequest();
    message.name = object.name ?? "";
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinWeights = object.stakingCoinWeights?.map(e => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochAmount = object.epochAmount?.map(e => Coin.fromPartial(e)) || [];
    message.epochRatio = object.epochRatio ?? "";
    return message;
  }

};

function createBaseModifyPlanRequest(): ModifyPlanRequest {
  return {
    planId: Long.UZERO,
    name: "",
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochAmount: [],
    epochRatio: ""
  };
}

export const ModifyPlanRequest = {
  encode(message: ModifyPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.planId.isZero()) {
      writer.uint32(8).uint64(message.planId);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.farmingPoolAddress !== "") {
      writer.uint32(26).string(message.farmingPoolAddress);
    }

    if (message.terminationAddress !== "") {
      writer.uint32(34).string(message.terminationAddress);
    }

    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.epochRatio !== "") {
      writer.uint32(74).string(message.epochRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModifyPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModifyPlanRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.planId = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.farmingPoolAddress = reader.string();
          break;

        case 4:
          message.terminationAddress = reader.string();
          break;

        case 5:
          message.stakingCoinWeights.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 8:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 9:
          message.epochRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ModifyPlanRequest>): ModifyPlanRequest {
    const message = createBaseModifyPlanRequest();
    message.planId = object.planId !== undefined && object.planId !== null ? Long.fromValue(object.planId) : Long.UZERO;
    message.name = object.name ?? "";
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinWeights = object.stakingCoinWeights?.map(e => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochAmount = object.epochAmount?.map(e => Coin.fromPartial(e)) || [];
    message.epochRatio = object.epochRatio ?? "";
    return message;
  }

};

function createBaseDeletePlanRequest(): DeletePlanRequest {
  return {
    planId: Long.UZERO
  };
}

export const DeletePlanRequest = {
  encode(message: DeletePlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.planId.isZero()) {
      writer.uint32(8).uint64(message.planId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlanRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.planId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DeletePlanRequest>): DeletePlanRequest {
    const message = createBaseDeletePlanRequest();
    message.planId = object.planId !== undefined && object.planId !== null ? Long.fromValue(object.planId) : Long.UZERO;
    return message;
  }

};
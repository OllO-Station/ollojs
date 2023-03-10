import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial, Long } from "../../../helpers";
/**
 * MsgCreateFixedAmountPlan defines a SDK message for creating a new fixed
 * amount farming plan.
 */

export interface MsgCreateFixedAmountPlan {
  /** name specifies the name for the plan */
  name: string;
  /**
   * creator defines the bech32-encoded address of the creator for the private
   * plan, termination address is also set to this creator.
   */

  creator: string;
  /** staking_coin_weights specifies coins weight for the plan */

  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */

  startTime?: Date;
  /** end_time specifies the end time of the plan */

  endTime?: Date;
  /** epoch_amount specifies the distributing amount for each epoch */

  epochAmount: Coin[];
}
/**
 * MsgCreateFixedAmountPlan defines a SDK message for creating a new fixed
 * amount farming plan.
 */

export interface MsgCreateFixedAmountPlanSDKType {
  name: string;
  creator: string;
  staking_coin_weights: DecCoinSDKType[];
  start_time?: Date;
  end_time?: Date;
  epoch_amount: CoinSDKType[];
}
/**
 * MsgCreateFixedAmountPlanResponse defines the MsgCreateFixedAmountPlanResponse
 * response type.
 */

export interface MsgCreateFixedAmountPlanResponse {}
/**
 * MsgCreateFixedAmountPlanResponse defines the MsgCreateFixedAmountPlanResponse
 * response type.
 */

export interface MsgCreateFixedAmountPlanResponseSDKType {}
/**
 * MsgCreateRatioPlan defines a SDK message for creating a new ratio farming
 * plan.
 */

export interface MsgCreateRatioPlan {
  /** name specifies the name for the plan */
  name: string;
  /**
   * creator defines the bech32-encoded address of the creator for the private
   * plan, termination address is also set to this creator.
   */

  creator: string;
  /** staking_coin_weights specifies coins weight for the plan */

  stakingCoinWeights: DecCoin[];
  /** start_time specifies the start time of the plan */

  startTime?: Date;
  /** end_time specifies the end time of the plan */

  endTime?: Date;
  /** epoch_ratio specifies the distributing amount by ratio */

  epochRatio: string;
}
/**
 * MsgCreateRatioPlan defines a SDK message for creating a new ratio farming
 * plan.
 */

export interface MsgCreateRatioPlanSDKType {
  name: string;
  creator: string;
  staking_coin_weights: DecCoinSDKType[];
  start_time?: Date;
  end_time?: Date;
  epoch_ratio: string;
}
/**
 * MsgCreateRatioPlanResponse  defines the Msg/MsgCreateRatioPlanResponse
 * response type.
 */

export interface MsgCreateRatioPlanResponse {}
/**
 * MsgCreateRatioPlanResponse  defines the Msg/MsgCreateRatioPlanResponse
 * response type.
 */

export interface MsgCreateRatioPlanResponseSDKType {}
/** MsgStake defines a SDK message for staking coins into the farming plan. */

export interface MsgStake {
  /** farmer defines the bech32-encoded address of the farmer */
  farmer: string;
  /** staking_coins specifies coins to stake */

  stakingCoins: Coin[];
}
/** MsgStake defines a SDK message for staking coins into the farming plan. */

export interface MsgStakeSDKType {
  farmer: string;
  staking_coins: CoinSDKType[];
}
/** MsgStakeResponse  defines the Msg/MsgStakeResponse response type. */

export interface MsgStakeResponse {}
/** MsgStakeResponse  defines the Msg/MsgStakeResponse response type. */

export interface MsgStakeResponseSDKType {}
/**
 * MsgUnstake defines a SDK message for performing unstaking of coins from the
 * farming plan.
 */

export interface MsgUnstake {
  /** farmer defines the bech32-encoded address of the farmer */
  farmer: string;
  /** unstaking_coins specifies coins to stake */

  unstakingCoins: Coin[];
}
/**
 * MsgUnstake defines a SDK message for performing unstaking of coins from the
 * farming plan.
 */

export interface MsgUnstakeSDKType {
  farmer: string;
  unstaking_coins: CoinSDKType[];
}
/** MsgUnstakeResponse defines the Msg/MsgUnstakeResponse response type. */

export interface MsgUnstakeResponse {}
/** MsgUnstakeResponse defines the Msg/MsgUnstakeResponse response type. */

export interface MsgUnstakeResponseSDKType {}
/** MsgHarvest defines a SDK message for claiming rewards from the farming plan. */

export interface MsgHarvest {
  /** farmer defines the bech32-encoded address of the farmer */
  farmer: string;
  /**
   * staking_coin_denoms is the set of denoms of staked coins as a source of the
   * reward for harvesting
   */

  stakingCoinDenoms: string[];
}
/** MsgHarvest defines a SDK message for claiming rewards from the farming plan. */

export interface MsgHarvestSDKType {
  farmer: string;
  staking_coin_denoms: string[];
}
/** MsgHarvestResponse defines the Msg/MsgHarvestResponse response type. */

export interface MsgHarvestResponse {}
/** MsgHarvestResponse defines the Msg/MsgHarvestResponse response type. */

export interface MsgHarvestResponseSDKType {}
/** MsgRemovePlan defines a message for removing a terminated plan. */

export interface MsgRemovePlan {
  creator: string;
  planId: Long;
}
/** MsgRemovePlan defines a message for removing a terminated plan. */

export interface MsgRemovePlanSDKType {
  creator: string;
  plan_id: Long;
}
/** MsgRemovePlanResponse defines the Msg/RemovePlan response type. */

export interface MsgRemovePlanResponse {}
/** MsgRemovePlanResponse defines the Msg/RemovePlan response type. */

export interface MsgRemovePlanResponseSDKType {}
/** MsgAdvanceEpoch defines a message to advance epoch by one. */

export interface MsgAdvanceEpoch {
  /** requester defines the bech32-encoded address of the requester */
  requester: string;
}
/** MsgAdvanceEpoch defines a message to advance epoch by one. */

export interface MsgAdvanceEpochSDKType {
  requester: string;
}
/** MsgAdvanceEpochResponse defines the Msg/AdvanceEpoch response type. */

export interface MsgAdvanceEpochResponse {}
/** MsgAdvanceEpochResponse defines the Msg/AdvanceEpoch response type. */

export interface MsgAdvanceEpochResponseSDKType {}

function createBaseMsgCreateFixedAmountPlan(): MsgCreateFixedAmountPlan {
  return {
    name: "",
    creator: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochAmount: []
  };
}

export const MsgCreateFixedAmountPlan = {
  encode(message: MsgCreateFixedAmountPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.epochAmount) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedAmountPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFixedAmountPlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.stakingCoinWeights.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateFixedAmountPlan>): MsgCreateFixedAmountPlan {
    const message = createBaseMsgCreateFixedAmountPlan();
    message.name = object.name ?? "";
    message.creator = object.creator ?? "";
    message.stakingCoinWeights = object.stakingCoinWeights?.map(e => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochAmount = object.epochAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreateFixedAmountPlanResponse(): MsgCreateFixedAmountPlanResponse {
  return {};
}

export const MsgCreateFixedAmountPlanResponse = {
  encode(_: MsgCreateFixedAmountPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFixedAmountPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFixedAmountPlanResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateFixedAmountPlanResponse>): MsgCreateFixedAmountPlanResponse {
    const message = createBaseMsgCreateFixedAmountPlanResponse();
    return message;
  }

};

function createBaseMsgCreateRatioPlan(): MsgCreateRatioPlan {
  return {
    name: "",
    creator: "",
    stakingCoinWeights: [],
    startTime: undefined,
    endTime: undefined,
    epochRatio: ""
  };
}

export const MsgCreateRatioPlan = {
  encode(message: MsgCreateRatioPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.epochRatio !== "") {
      writer.uint32(50).string(message.epochRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRatioPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRatioPlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.stakingCoinWeights.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.epochRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateRatioPlan>): MsgCreateRatioPlan {
    const message = createBaseMsgCreateRatioPlan();
    message.name = object.name ?? "";
    message.creator = object.creator ?? "";
    message.stakingCoinWeights = object.stakingCoinWeights?.map(e => DecCoin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.epochRatio = object.epochRatio ?? "";
    return message;
  }

};

function createBaseMsgCreateRatioPlanResponse(): MsgCreateRatioPlanResponse {
  return {};
}

export const MsgCreateRatioPlanResponse = {
  encode(_: MsgCreateRatioPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRatioPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRatioPlanResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCreateRatioPlanResponse>): MsgCreateRatioPlanResponse {
    const message = createBaseMsgCreateRatioPlanResponse();
    return message;
  }

};

function createBaseMsgStake(): MsgStake {
  return {
    farmer: "",
    stakingCoins: []
  };
}

export const MsgStake = {
  encode(message: MsgStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    for (const v of message.stakingCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        case 2:
          message.stakingCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.farmer = object.farmer ?? "";
    message.stakingCoins = object.stakingCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {};
}

export const MsgStakeResponse = {
  encode(_: MsgStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    return message;
  }

};

function createBaseMsgUnstake(): MsgUnstake {
  return {
    farmer: "",
    unstakingCoins: []
  };
}

export const MsgUnstake = {
  encode(message: MsgUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    for (const v of message.unstakingCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        case 2:
          message.unstakingCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.farmer = object.farmer ?? "";
    message.unstakingCoins = object.unstakingCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {};
}

export const MsgUnstakeResponse = {
  encode(_: MsgUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    return message;
  }

};

function createBaseMsgHarvest(): MsgHarvest {
  return {
    farmer: "",
    stakingCoinDenoms: []
  };
}

export const MsgHarvest = {
  encode(message: MsgHarvest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    for (const v of message.stakingCoinDenoms) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHarvest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        case 2:
          message.stakingCoinDenoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgHarvest>): MsgHarvest {
    const message = createBaseMsgHarvest();
    message.farmer = object.farmer ?? "";
    message.stakingCoinDenoms = object.stakingCoinDenoms?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgHarvestResponse(): MsgHarvestResponse {
  return {};
}

export const MsgHarvestResponse = {
  encode(_: MsgHarvestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHarvestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHarvestResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgHarvestResponse>): MsgHarvestResponse {
    const message = createBaseMsgHarvestResponse();
    return message;
  }

};

function createBaseMsgRemovePlan(): MsgRemovePlan {
  return {
    creator: "",
    planId: Long.UZERO
  };
}

export const MsgRemovePlan = {
  encode(message: MsgRemovePlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.planId.isZero()) {
      writer.uint32(16).uint64(message.planId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePlan();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.planId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRemovePlan>): MsgRemovePlan {
    const message = createBaseMsgRemovePlan();
    message.creator = object.creator ?? "";
    message.planId = object.planId !== undefined && object.planId !== null ? Long.fromValue(object.planId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgRemovePlanResponse(): MsgRemovePlanResponse {
  return {};
}

export const MsgRemovePlanResponse = {
  encode(_: MsgRemovePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemovePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePlanResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRemovePlanResponse>): MsgRemovePlanResponse {
    const message = createBaseMsgRemovePlanResponse();
    return message;
  }

};

function createBaseMsgAdvanceEpoch(): MsgAdvanceEpoch {
  return {
    requester: ""
  };
}

export const MsgAdvanceEpoch = {
  encode(message: MsgAdvanceEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdvanceEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdvanceEpoch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAdvanceEpoch>): MsgAdvanceEpoch {
    const message = createBaseMsgAdvanceEpoch();
    message.requester = object.requester ?? "";
    return message;
  }

};

function createBaseMsgAdvanceEpochResponse(): MsgAdvanceEpochResponse {
  return {};
}

export const MsgAdvanceEpochResponse = {
  encode(_: MsgAdvanceEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAdvanceEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAdvanceEpochResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgAdvanceEpochResponse>): MsgAdvanceEpochResponse {
    const message = createBaseMsgAdvanceEpochResponse();
    return message;
  }

};
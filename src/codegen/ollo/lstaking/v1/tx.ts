import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/** MsgLiquidStake defines a message to begin staking with a liquid validator */

export interface MsgLiquidStake {
  /** delegator address */
  delegatorAddress: string;
  /** amount to delegate */

  amount?: Coin;
}
/** MsgLiquidStake defines a message to begin staking with a liquid validator */

export interface MsgLiquidStakeSDKType {
  delegator_address: string;
  amount?: CoinSDKType;
}
/** MsgLiquidStakeResponse defines the Msg/LiquidStake response type. */

export interface MsgLiquidStakeResponse {}
/** MsgLiquidStakeResponse defines the Msg/LiquidStake response type. */

export interface MsgLiquidStakeResponseSDKType {}
/** MsgLiquidUnstake defines a message to begin unstaking with a liquid validator */

export interface MsgLiquidUnstake {
  /** delegator address */
  delegatorAddress: string;
  /** amount to delegate */

  amount?: Coin;
}
/** MsgLiquidUnstake defines a message to begin unstaking with a liquid validator */

export interface MsgLiquidUnstakeSDKType {
  delegator_address: string;
  amount?: CoinSDKType;
}
/** MsgLiquidUnstakeResponse defines the Msg/LiquidUnstake response type. */

export interface MsgLiquidUnstakeResponse {
  /** completion_time is the time at which the unbonding will complete */
  completionTime?: Date;
}
/** MsgLiquidUnstakeResponse defines the Msg/LiquidUnstake response type. */

export interface MsgLiquidUnstakeResponseSDKType {
  completion_time?: Date;
}

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return {
    delegatorAddress: "",
    amount: undefined
  };
}

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgLiquidStakeResponse(): MsgLiquidStakeResponse {
  return {};
}

export const MsgLiquidStakeResponse = {
  encode(_: MsgLiquidStakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeResponse();

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

  fromPartial(_: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse {
    const message = createBaseMsgLiquidStakeResponse();
    return message;
  }

};

function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return {
    delegatorAddress: "",
    amount: undefined
  };
}

export const MsgLiquidUnstake = {
  encode(message: MsgLiquidUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidUnstake>): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgLiquidUnstakeResponse(): MsgLiquidUnstakeResponse {
  return {
    completionTime: undefined
  };
}

export const MsgLiquidUnstakeResponse = {
  encode(message: MsgLiquidUnstakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstakeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgLiquidUnstakeResponse>): MsgLiquidUnstakeResponse {
    const message = createBaseMsgLiquidUnstakeResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }

};
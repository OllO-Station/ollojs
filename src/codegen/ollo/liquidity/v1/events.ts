import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventDepositLiquidity {}
export interface EventDepositLiquiditySDKType {}
export interface EventWithdrawLiquidity {}
export interface EventWithdrawLiquiditySDKType {}
export interface EventCreatePool {}
export interface EventCreatePoolSDKType {}
export interface EventCreatePair {}
export interface EventCreatePairSDKType {}

function createBaseEventDepositLiquidity(): EventDepositLiquidity {
  return {};
}

export const EventDepositLiquidity = {
  encode(_: EventDepositLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositLiquidity();

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

  fromPartial(_: DeepPartial<EventDepositLiquidity>): EventDepositLiquidity {
    const message = createBaseEventDepositLiquidity();
    return message;
  }

};

function createBaseEventWithdrawLiquidity(): EventWithdrawLiquidity {
  return {};
}

export const EventWithdrawLiquidity = {
  encode(_: EventWithdrawLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawLiquidity();

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

  fromPartial(_: DeepPartial<EventWithdrawLiquidity>): EventWithdrawLiquidity {
    const message = createBaseEventWithdrawLiquidity();
    return message;
  }

};

function createBaseEventCreatePool(): EventCreatePool {
  return {};
}

export const EventCreatePool = {
  encode(_: EventCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePool();

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

  fromPartial(_: DeepPartial<EventCreatePool>): EventCreatePool {
    const message = createBaseEventCreatePool();
    return message;
  }

};

function createBaseEventCreatePair(): EventCreatePair {
  return {};
}

export const EventCreatePair = {
  encode(_: EventCreatePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePair();

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

  fromPartial(_: DeepPartial<EventCreatePair>): EventCreatePair {
    const message = createBaseEventCreatePair();
    return message;
  }

};
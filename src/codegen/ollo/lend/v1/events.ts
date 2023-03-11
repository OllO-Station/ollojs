import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventLoanCreated {}
export interface EventLoanCreatedSDKType {}
export interface EventLoanLiquidated {}
export interface EventLoanLiquidatedSDKType {}
export interface EventLoanRepaid {}
export interface EventLoanRepaidSDKType {}

function createBaseEventLoanCreated(): EventLoanCreated {
  return {};
}

export const EventLoanCreated = {
  encode(_: EventLoanCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLoanCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLoanCreated();

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

  fromPartial(_: DeepPartial<EventLoanCreated>): EventLoanCreated {
    const message = createBaseEventLoanCreated();
    return message;
  }

};

function createBaseEventLoanLiquidated(): EventLoanLiquidated {
  return {};
}

export const EventLoanLiquidated = {
  encode(_: EventLoanLiquidated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLoanLiquidated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLoanLiquidated();

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

  fromPartial(_: DeepPartial<EventLoanLiquidated>): EventLoanLiquidated {
    const message = createBaseEventLoanLiquidated();
    return message;
  }

};

function createBaseEventLoanRepaid(): EventLoanRepaid {
  return {};
}

export const EventLoanRepaid = {
  encode(_: EventLoanRepaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLoanRepaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLoanRepaid();

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

  fromPartial(_: DeepPartial<EventLoanRepaid>): EventLoanRepaid {
    const message = createBaseEventLoanRepaid();
    return message;
  }

};
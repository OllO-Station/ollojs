import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventDenomBurned {
  denom: string;
  amount: string;
}
export interface EventDenomBurnedSDKType {
  denom: string;
  amount: string;
}
export interface EventDenomMinted {
  denom: string;
  amount: string;
}
export interface EventDenomMintedSDKType {
  denom: string;
  amount: string;
}

function createBaseEventDenomBurned(): EventDenomBurned {
  return {
    denom: "",
    amount: ""
  };
}

export const EventDenomBurned = {
  encode(message: EventDenomBurned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDenomBurned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDenomBurned();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDenomBurned>): EventDenomBurned {
    const message = createBaseEventDenomBurned();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseEventDenomMinted(): EventDenomMinted {
  return {
    denom: "",
    amount: ""
  };
}

export const EventDenomMinted = {
  encode(message: EventDenomMinted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDenomMinted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDenomMinted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDenomMinted>): EventDenomMinted {
    const message = createBaseEventDenomMinted();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};
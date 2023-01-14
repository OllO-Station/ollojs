import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** EventMint is emitted when new coins are minted by the minter */

export interface EventMint {
  bondedRatio: string;
  inflation: string;
  annualProvisions: string;
  amount: string;
}
/** EventMint is emitted when new coins are minted by the minter */

export interface EventMintSDKType {
  bondedRatio: string;
  inflation: string;
  annualProvisions: string;
  amount: string;
}

function createBaseEventMint(): EventMint {
  return {
    bondedRatio: "",
    inflation: "",
    annualProvisions: "",
    amount: ""
  };
}

export const EventMint = {
  encode(message: EventMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondedRatio !== "") {
      writer.uint32(10).string(message.bondedRatio);
    }

    if (message.inflation !== "") {
      writer.uint32(18).string(message.inflation);
    }

    if (message.annualProvisions !== "") {
      writer.uint32(26).string(message.annualProvisions);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bondedRatio = reader.string();
          break;

        case 2:
          message.inflation = reader.string();
          break;

        case 3:
          message.annualProvisions = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.bondedRatio = object.bondedRatio ?? "";
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};
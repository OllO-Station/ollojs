import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** RedelegationEntry defines an entry in a redelegation */

export interface Redelegation {
  /** Delegator address */
  delegator: string;
  /** Validator source operator address */

  valFromAddress: string;
  /** Validator destination operator address */

  valToAddress: string;
  /** Amount to redelegate */

  amount: string;
  last: boolean;
  error: string;
}
/** RedelegationEntry defines an entry in a redelegation */

export interface RedelegationSDKType {
  delegator: string;
  val_from_address: string;
  val_to_address: string;
  amount: string;
  last: boolean;
  error: string;
}

function createBaseRedelegation(): Redelegation {
  return {
    delegator: "",
    valFromAddress: "",
    valToAddress: "",
    amount: "",
    last: false,
    error: ""
  };
}

export const Redelegation = {
  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    if (message.valFromAddress !== "") {
      writer.uint32(18).string(message.valFromAddress);
    }

    if (message.valToAddress !== "") {
      writer.uint32(26).string(message.valToAddress);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.last === true) {
      writer.uint32(40).bool(message.last);
    }

    if (message.error !== "") {
      writer.uint32(50).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        case 2:
          message.valFromAddress = reader.string();
          break;

        case 3:
          message.valToAddress = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.last = reader.bool();
          break;

        case 6:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegator = object.delegator ?? "";
    message.valFromAddress = object.valFromAddress ?? "";
    message.valToAddress = object.valToAddress ?? "";
    message.amount = object.amount ?? "";
    message.last = object.last ?? false;
    message.error = object.error ?? "";
    return message;
  }

};
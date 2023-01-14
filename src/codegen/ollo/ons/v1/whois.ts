import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Whois {
  index: string;
  name: string;
  value: string;
  price: string;
  ownerAddr: string;
}
export interface WhoisSDKType {
  index: string;
  name: string;
  value: string;
  price: string;
  ownerAddr: string;
}

function createBaseWhois(): Whois {
  return {
    index: "",
    name: "",
    value: "",
    price: "",
    ownerAddr: ""
  };
}

export const Whois = {
  encode(message: Whois, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }

    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }

    if (message.ownerAddr !== "") {
      writer.uint32(42).string(message.ownerAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Whois {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhois();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.value = reader.string();
          break;

        case 4:
          message.price = reader.string();
          break;

        case 5:
          message.ownerAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Whois>): Whois {
    const message = createBaseWhois();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.price = object.price ?? "";
    message.ownerAddr = object.ownerAddr ?? "";
    return message;
  }

};
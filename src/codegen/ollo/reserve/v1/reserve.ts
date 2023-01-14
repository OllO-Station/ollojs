import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface DenomWhitelist {
  denom: string;
  /** repeat */

  addresses: string[];
}
export interface DenomWhitelistSDKType {
  denom: string;
  addresses: string[];
}

function createBaseDenomWhitelist(): DenomWhitelist {
  return {
    denom: "",
    addresses: []
  };
}

export const DenomWhitelist = {
  encode(message: DenomWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomWhitelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomWhitelist();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DenomWhitelist>): DenomWhitelist {
    const message = createBaseDenomWhitelist();
    message.denom = object.denom ?? "";
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  }

};
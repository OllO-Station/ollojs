import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface RangedPool {
  id: string;
}
export interface RangedPoolSDKType {
  id: string;
}

function createBaseRangedPool(): RangedPool {
  return {
    id: ""
  };
}

export const RangedPool = {
  encode(message: RangedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RangedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRangedPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RangedPool>): RangedPool {
    const message = createBaseRangedPool();
    message.id = object.id ?? "";
    return message;
  }

};
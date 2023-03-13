import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface MsgCreateIcq {
  id: string;
}
export interface MsgCreateIcqSDKType {
  id: string;
}

function createBaseMsgCreateIcq(): MsgCreateIcq {
  return {
    id: ""
  };
}

export const MsgCreateIcq = {
  encode(message: MsgCreateIcq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIcq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIcq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateIcq>): MsgCreateIcq {
    const message = createBaseMsgCreateIcq();
    message.id = object.id ?? "";
    return message;
  }

};
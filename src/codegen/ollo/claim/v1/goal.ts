import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Goal {
  id: Long;
  description: string;
  weight: string;
}
export interface GoalSDKType {
  id: Long;
  description: string;
  weight: string;
}

function createBaseGoal(): Goal {
  return {
    id: Long.UZERO,
    description: "",
    weight: ""
  };
}

export const Goal = {
  encode(message: Goal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Goal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Goal>): Goal {
    const message = createBaseGoal();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.description = object.description ?? "";
    message.weight = object.weight ?? "";
    return message;
  }

};
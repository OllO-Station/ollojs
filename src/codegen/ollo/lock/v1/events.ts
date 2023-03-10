import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventCreateLock {
  id: string;
}
export interface EventCreateLockSDKType {
  id: string;
}

function createBaseEventCreateLock(): EventCreateLock {
  return {
    id: ""
  };
}

export const EventCreateLock = {
  encode(message: EventCreateLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateLock();

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

  fromPartial(object: DeepPartial<EventCreateLock>): EventCreateLock {
    const message = createBaseEventCreateLock();
    message.id = object.id ?? "";
    return message;
  }

};
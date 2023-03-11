import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventRegisterAccount {}
export interface EventRegisterAccountSDKType {}

function createBaseEventRegisterAccount(): EventRegisterAccount {
  return {};
}

export const EventRegisterAccount = {
  encode(_: EventRegisterAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterAccount();

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

  fromPartial(_: DeepPartial<EventRegisterAccount>): EventRegisterAccount {
    const message = createBaseEventRegisterAccount();
    return message;
  }

};
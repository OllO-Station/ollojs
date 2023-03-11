import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Account {}
export interface AccountSDKType {}

function createBaseAccount(): Account {
  return {};
}

export const Account = {
  encode(_: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();

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

  fromPartial(_: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    return message;
  }

};
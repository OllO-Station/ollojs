import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProprosalSetName {}
export interface ProprosalSetNameSDKType {}

function createBaseProprosalSetName(): ProprosalSetName {
  return {};
}

export const ProprosalSetName = {
  encode(_: ProprosalSetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalSetName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProprosalSetName();

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

  fromPartial(_: DeepPartial<ProprosalSetName>): ProprosalSetName {
    const message = createBaseProprosalSetName();
    return message;
  }

};
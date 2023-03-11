import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProprosalSetLendingFee {}
export interface ProprosalSetLendingFeeSDKType {}

function createBaseProprosalSetLendingFee(): ProprosalSetLendingFee {
  return {};
}

export const ProprosalSetLendingFee = {
  encode(_: ProprosalSetLendingFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalSetLendingFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProprosalSetLendingFee();

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

  fromPartial(_: DeepPartial<ProprosalSetLendingFee>): ProprosalSetLendingFee {
    const message = createBaseProprosalSetLendingFee();
    return message;
  }

};
import { FeeToken, FeeTokenSDKType } from "./fees";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
  baseDenom: string;
  feeTokens: FeeToken[];
}
export interface GenesisStateSDKType {
  base_denom: string;
  fee_tokens: FeeTokenSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    baseDenom: "",
    feeTokens: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }

    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;

        case 2:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.baseDenom = object.baseDenom ?? "";
    message.feeTokens = object.feeTokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  }

};
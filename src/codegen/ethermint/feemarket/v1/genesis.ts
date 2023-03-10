import { Params, ParamsSDKType } from "./feemarket";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the feemarket module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters of the feemarket module. */
  params?: Params;
  /**
   * block_gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   */

  blockGas: Long;
}
/** GenesisState defines the feemarket module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  block_gas: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    blockGas: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockGas.isZero()) {
      writer.uint32(24).uint64(message.blockGas);
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 3:
          message.blockGas = (reader.uint64() as Long);
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.blockGas = object.blockGas !== undefined && object.blockGas !== null ? Long.fromValue(object.blockGas) : Long.UZERO;
    return message;
  }

};
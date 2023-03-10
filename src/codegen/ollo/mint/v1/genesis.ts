import { Minter, MinterSDKType } from "./mint";
import { Params, ParamsSDKType } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the inflation module's genesis state. */

export interface GenesisState {
  /** minter is a space for holding current inflation information. */
  minter?: Minter;
  /** params defines all the paramaters of the module. */

  params?: Params;
  /** this line is used by starport scaffolding # genesis/proto/state */

  lastBlockTime?: Date;
  lastEpochReduction: Long;
}
/** GenesisState defines the inflation module's genesis state. */

export interface GenesisStateSDKType {
  minter?: MinterSDKType;
  params?: ParamsSDKType;
  last_block_time?: Date;
  last_epoch_reduction: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    minter: undefined,
    params: undefined,
    lastBlockTime: undefined,
    lastEpochReduction: Long.ZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(26).fork()).ldelim();
    }

    if (!message.lastEpochReduction.isZero()) {
      writer.uint32(32).int64(message.lastEpochReduction);
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
          message.minter = Minter.decode(reader, reader.uint32());
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 3:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.lastEpochReduction = (reader.int64() as Long);
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
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    message.lastEpochReduction = object.lastEpochReduction !== undefined && object.lastEpochReduction !== null ? Long.fromValue(object.lastEpochReduction) : Long.ZERO;
    return message;
  }

};
import { Params, ParamsSDKType } from "./params";
import { Lock, LockSDKType } from "./lock";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
  params?: Params;
  locks: Lock[];
  lastLockId: Long;
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  locks: LockSDKType[];
  last_lock_id: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    locks: [],
    lastLockId: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.locks) {
      Lock.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.lastLockId.isZero()) {
      writer.uint32(24).uint64(message.lastLockId);
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

        case 2:
          message.locks.push(Lock.decode(reader, reader.uint32()));
          break;

        case 3:
          message.lastLockId = (reader.uint64() as Long);
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
    message.locks = object.locks?.map(e => Lock.fromPartial(e)) || [];
    message.lastLockId = object.lastLockId !== undefined && object.lastLockId !== null ? Long.fromValue(object.lastLockId) : Long.UZERO;
    return message;
  }

};
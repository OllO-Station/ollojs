import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Epoch {
  id: string;
  start?: Date;
  duration?: Duration;
  currentEpochNumber: Long;
  currentEpochStart?: Date;
  epochStarted: boolean;
  currentEpochStartHeight: Long;
}
export interface EpochSDKType {
  id: string;
  start?: Date;
  duration?: DurationSDKType;
  current_epoch_number: Long;
  current_epoch_start?: Date;
  epoch_started: boolean;
  current_epoch_start_height: Long;
}

function createBaseEpoch(): Epoch {
  return {
    id: "",
    start: undefined,
    duration: undefined,
    currentEpochNumber: Long.UZERO,
    currentEpochStart: undefined,
    epochStarted: false,
    currentEpochStartHeight: Long.UZERO
  };
}

export const Epoch = {
  encode(message: Epoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.start !== undefined) {
      Timestamp.encode(toTimestamp(message.start), writer.uint32(18).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (!message.currentEpochNumber.isZero()) {
      writer.uint32(32).uint64(message.currentEpochNumber);
    }

    if (message.currentEpochStart !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStart), writer.uint32(42).fork()).ldelim();
    }

    if (message.epochStarted === true) {
      writer.uint32(48).bool(message.epochStarted);
    }

    if (!message.currentEpochStartHeight.isZero()) {
      writer.uint32(64).uint64(message.currentEpochStartHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Epoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpoch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.currentEpochNumber = (reader.uint64() as Long);
          break;

        case 5:
          message.currentEpochStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.epochStarted = reader.bool();
          break;

        case 8:
          message.currentEpochStartHeight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Epoch>): Epoch {
    const message = createBaseEpoch();
    message.id = object.id ?? "";
    message.start = object.start ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.currentEpochNumber = object.currentEpochNumber !== undefined && object.currentEpochNumber !== null ? Long.fromValue(object.currentEpochNumber) : Long.UZERO;
    message.currentEpochStart = object.currentEpochStart ?? undefined;
    message.epochStarted = object.epochStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? Long.fromValue(object.currentEpochStartHeight) : Long.UZERO;
    return message;
  }

};
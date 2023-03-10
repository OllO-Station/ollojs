import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, toTimestamp, fromTimestamp, Long } from "../../../helpers";
export interface DurationQuery {
  denom: string;
  duration?: Duration;
}
export interface DurationQuerySDKType {
  denom: string;
  duration?: DurationSDKType;
}
export interface TimeQuery {
  denom: string;
  time?: Date;
}
export interface TimeQuerySDKType {
  denom: string;
  time?: Date;
}
export interface DurationLock {
  id: Long;
  depositor: string;
  duration?: Duration;
  durationEnd?: Date;
  coins: Coin[];
}
export interface DurationLockSDKType {
  id: Long;
  depositor: string;
  duration?: DurationSDKType;
  duration_end?: Date;
  coins: CoinSDKType[];
}
export interface Lock {
  id: Long;
  depositor: string;
  balance: string;
  createdAt?: Date;
  locked: boolean;
  blockHeight: Long;
  blockTime?: Date;
  returnsAccumulated: string;
}
export interface LockSDKType {
  id: Long;
  depositor: string;
  balance: string;
  created_at?: Date;
  locked: boolean;
  block_height: Long;
  block_time?: Date;
  returns_accumulated: string;
}

function createBaseDurationQuery(): DurationQuery {
  return {
    denom: "",
    duration: undefined
  };
}

export const DurationQuery = {
  encode(message: DurationQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DurationQuery>): DurationQuery {
    const message = createBaseDurationQuery();
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  }

};

function createBaseTimeQuery(): TimeQuery {
  return {
    denom: "",
    time: undefined
  };
}

export const TimeQuery = {
  encode(message: TimeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TimeQuery>): TimeQuery {
    const message = createBaseTimeQuery();
    message.denom = object.denom ?? "";
    message.time = object.time ?? undefined;
    return message;
  }

};

function createBaseDurationLock(): DurationLock {
  return {
    id: Long.UZERO,
    depositor: "",
    duration: undefined,
    durationEnd: undefined,
    coins: []
  };
}

export const DurationLock = {
  encode(message: DurationLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (message.durationEnd !== undefined) {
      Timestamp.encode(toTimestamp(message.durationEnd), writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationLock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.durationEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DurationLock>): DurationLock {
    const message = createBaseDurationLock();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.durationEnd = object.durationEnd ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseLock(): Lock {
  return {
    id: Long.UZERO,
    depositor: "",
    balance: "",
    createdAt: undefined,
    locked: false,
    blockHeight: Long.ZERO,
    blockTime: undefined,
    returnsAccumulated: ""
  };
}

export const Lock = {
  encode(message: Lock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }

    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }

    if (message.locked === true) {
      writer.uint32(48).bool(message.locked);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(56).int64(message.blockHeight);
    }

    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(66).fork()).ldelim();
    }

    if (message.returnsAccumulated !== "") {
      writer.uint32(74).string(message.returnsAccumulated);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.balance = reader.string();
          break;

        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.locked = reader.bool();
          break;

        case 7:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 8:
          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 9:
          message.returnsAccumulated = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Lock>): Lock {
    const message = createBaseLock();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.balance = object.balance ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.locked = object.locked ?? false;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    message.returnsAccumulated = object.returnsAccumulated ?? "";
    return message;
  }

};
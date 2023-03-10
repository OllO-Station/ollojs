import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, toTimestamp, fromTimestamp } from "../../../helpers";
export interface Incentive {
  address: string;
  claimable: Coin[];
}
export interface IncentiveSDKType {
  address: string;
  claimable: CoinSDKType[];
}
export interface IncentiveProps {
  minOpenRatio: string;
  minOpenDepthRatio: string;
  maxDowntime: number;
  maxTotalDowntime: number;
  minHours: number;
  minDays: number;
}
export interface IncentivePropsSDKType {
  min_open_ratio: string;
  min_open_depth_ratio: string;
  max_downtime: number;
  max_total_downtime: number;
  min_hours: number;
  min_days: number;
}
export interface IncentivePair {
  pairId: Long;
  updatedAt?: Date;
  incentiveWeight: string;
  maxSpread: string;
  minSpread: string;
  minDepth: string;
}
export interface IncentivePairSDKType {
  pair_id: Long;
  updated_at?: Date;
  incentive_weight: string;
  max_spread: string;
  min_spread: string;
  min_depth: string;
}
export interface IncentiveDistribution {
  address: string;
  pairId: Long;
  amount: Coin[];
}
export interface IncentiveDistributionSDKType {
  address: string;
  pair_id: Long;
  amount: CoinSDKType[];
}

function createBaseIncentive(): Incentive {
  return {
    address: "",
    claimable: []
  };
}

export const Incentive = {
  encode(message: Incentive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.claimable) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Incentive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentive();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.claimable.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Incentive>): Incentive {
    const message = createBaseIncentive();
    message.address = object.address ?? "";
    message.claimable = object.claimable?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseIncentiveProps(): IncentiveProps {
  return {
    minOpenRatio: "",
    minOpenDepthRatio: "",
    maxDowntime: 0,
    maxTotalDowntime: 0,
    minHours: 0,
    minDays: 0
  };
}

export const IncentiveProps = {
  encode(message: IncentiveProps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minOpenRatio !== "") {
      writer.uint32(10).string(message.minOpenRatio);
    }

    if (message.minOpenDepthRatio !== "") {
      writer.uint32(18).string(message.minOpenDepthRatio);
    }

    if (message.maxDowntime !== 0) {
      writer.uint32(24).uint32(message.maxDowntime);
    }

    if (message.maxTotalDowntime !== 0) {
      writer.uint32(32).uint32(message.maxTotalDowntime);
    }

    if (message.minHours !== 0) {
      writer.uint32(40).uint32(message.minHours);
    }

    if (message.minDays !== 0) {
      writer.uint32(48).uint32(message.minDays);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentiveProps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveProps();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minOpenRatio = reader.string();
          break;

        case 2:
          message.minOpenDepthRatio = reader.string();
          break;

        case 3:
          message.maxDowntime = reader.uint32();
          break;

        case 4:
          message.maxTotalDowntime = reader.uint32();
          break;

        case 5:
          message.minHours = reader.uint32();
          break;

        case 6:
          message.minDays = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IncentiveProps>): IncentiveProps {
    const message = createBaseIncentiveProps();
    message.minOpenRatio = object.minOpenRatio ?? "";
    message.minOpenDepthRatio = object.minOpenDepthRatio ?? "";
    message.maxDowntime = object.maxDowntime ?? 0;
    message.maxTotalDowntime = object.maxTotalDowntime ?? 0;
    message.minHours = object.minHours ?? 0;
    message.minDays = object.minDays ?? 0;
    return message;
  }

};

function createBaseIncentivePair(): IncentivePair {
  return {
    pairId: Long.UZERO,
    updatedAt: undefined,
    incentiveWeight: "",
    maxSpread: "",
    minSpread: "",
    minDepth: ""
  };
}

export const IncentivePair = {
  encode(message: IncentivePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(18).fork()).ldelim();
    }

    if (message.incentiveWeight !== "") {
      writer.uint32(26).string(message.incentiveWeight);
    }

    if (message.maxSpread !== "") {
      writer.uint32(34).string(message.maxSpread);
    }

    if (message.minSpread !== "") {
      writer.uint32(42).string(message.minSpread);
    }

    if (message.minDepth !== "") {
      writer.uint32(50).string(message.minDepth);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivePair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        case 2:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.incentiveWeight = reader.string();
          break;

        case 4:
          message.maxSpread = reader.string();
          break;

        case 5:
          message.minSpread = reader.string();
          break;

        case 6:
          message.minDepth = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IncentivePair>): IncentivePair {
    const message = createBaseIncentivePair();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.updatedAt = object.updatedAt ?? undefined;
    message.incentiveWeight = object.incentiveWeight ?? "";
    message.maxSpread = object.maxSpread ?? "";
    message.minSpread = object.minSpread ?? "";
    message.minDepth = object.minDepth ?? "";
    return message;
  }

};

function createBaseIncentiveDistribution(): IncentiveDistribution {
  return {
    address: "",
    pairId: Long.UZERO,
    amount: []
  };
}

export const IncentiveDistribution = {
  encode(message: IncentiveDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentiveDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveDistribution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IncentiveDistribution>): IncentiveDistribution {
    const message = createBaseIncentiveDistribution();
    message.address = object.address ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
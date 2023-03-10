import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MarketMaker {
  address: string;
  pairId: Long;
  eligible: boolean;
}
export interface MarketMakerSDKType {
  address: string;
  pair_id: Long;
  eligible: boolean;
}
export interface MarketMakerIncl {
  address: string;
  pairId: Long;
}
export interface MarketMakerInclSDKType {
  address: string;
  pair_id: Long;
}

function createBaseMarketMaker(): MarketMaker {
  return {
    address: "",
    pairId: Long.UZERO,
    eligible: false
  };
}

export const MarketMaker = {
  encode(message: MarketMaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.eligible === true) {
      writer.uint32(24).bool(message.eligible);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketMaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMaker();

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
          message.eligible = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketMaker>): MarketMaker {
    const message = createBaseMarketMaker();
    message.address = object.address ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.eligible = object.eligible ?? false;
    return message;
  }

};

function createBaseMarketMakerIncl(): MarketMakerIncl {
  return {
    address: "",
    pairId: Long.UZERO
  };
}

export const MarketMakerIncl = {
  encode(message: MarketMakerIncl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketMakerIncl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMakerIncl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketMakerIncl>): MarketMakerIncl {
    const message = createBaseMarketMakerIncl();
    message.address = object.address ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    return message;
  }

};
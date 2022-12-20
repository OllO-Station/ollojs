import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PricesCallData {
  symbols: string[];
  multiplier: Long;
}
export interface PricesCallDataSDKType {
  symbols: string[];
  multiplier: Long;
}
export interface PricesResult {
  rates: Long[];
}
export interface PricesResultSDKType {
  rates: Long[];
}

function createBasePricesCallData(): PricesCallData {
  return {
    symbols: [],
    multiplier: Long.UZERO
  };
}

export const PricesCallData = {
  encode(message: PricesCallData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.symbols) {
      writer.uint32(10).string(v!);
    }

    if (!message.multiplier.isZero()) {
      writer.uint32(16).uint64(message.multiplier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricesCallData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricesCallData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbols.push(reader.string());
          break;

        case 2:
          message.multiplier = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PricesCallData>): PricesCallData {
    const message = createBasePricesCallData();
    message.symbols = object.symbols?.map(e => e) || [];
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? Long.fromValue(object.multiplier) : Long.UZERO;
    return message;
  }

};

function createBasePricesResult(): PricesResult {
  return {
    rates: []
  };
}

export const PricesResult = {
  encode(message: PricesResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.rates) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PricesResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricesResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.rates.push((reader.uint64() as Long));
            }
          } else {
            message.rates.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PricesResult>): PricesResult {
    const message = createBasePricesResult();
    message.rates = object.rates?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};
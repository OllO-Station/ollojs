import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Pair defines a coin pair. */

export interface Pair {
  id: Long;
  baseCoinDenom: string;
  quoteCoinDenom: string;
  escrowAddress: string;
  lastOrderId: Long;
  lastPrice: string;
  currentBatchId: Long;
}
/** Pair defines a coin pair. */

export interface PairSDKType {
  id: Long;
  base_coin_denom: string;
  quote_coin_denom: string;
  escrow_address: string;
  last_order_id: Long;
  last_price: string;
  current_batch_id: Long;
}

function createBasePair(): Pair {
  return {
    id: Long.UZERO,
    baseCoinDenom: "",
    quoteCoinDenom: "",
    escrowAddress: "",
    lastOrderId: Long.UZERO,
    lastPrice: "",
    currentBatchId: Long.UZERO
  };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.baseCoinDenom !== "") {
      writer.uint32(18).string(message.baseCoinDenom);
    }

    if (message.quoteCoinDenom !== "") {
      writer.uint32(26).string(message.quoteCoinDenom);
    }

    if (message.escrowAddress !== "") {
      writer.uint32(34).string(message.escrowAddress);
    }

    if (!message.lastOrderId.isZero()) {
      writer.uint32(40).uint64(message.lastOrderId);
    }

    if (message.lastPrice !== "") {
      writer.uint32(50).string(message.lastPrice);
    }

    if (!message.currentBatchId.isZero()) {
      writer.uint32(56).uint64(message.currentBatchId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.baseCoinDenom = reader.string();
          break;

        case 3:
          message.quoteCoinDenom = reader.string();
          break;

        case 4:
          message.escrowAddress = reader.string();
          break;

        case 5:
          message.lastOrderId = (reader.uint64() as Long);
          break;

        case 6:
          message.lastPrice = reader.string();
          break;

        case 7:
          message.currentBatchId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = createBasePair();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.baseCoinDenom = object.baseCoinDenom ?? "";
    message.quoteCoinDenom = object.quoteCoinDenom ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.lastOrderId = object.lastOrderId !== undefined && object.lastOrderId !== null ? Long.fromValue(object.lastOrderId) : Long.UZERO;
    message.lastPrice = object.lastPrice ?? "";
    message.currentBatchId = object.currentBatchId !== undefined && object.currentBatchId !== null ? Long.fromValue(object.currentBatchId) : Long.UZERO;
    return message;
  }

};
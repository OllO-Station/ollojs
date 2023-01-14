import { PoolType, PoolTypeSDKType } from "./liquidity";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolA {
  type?: PoolType;
  id: Long;
  pairId: Long;
  creator: string;
  reserveAddress: string;
  poolCoinDenom: string;
  minPrice: string;
  maxPrice: string;
  lastDepositRequestId: Long;
  lastWithdrawRequestId: Long;
  disabled: boolean;
}
export interface PoolASDKType {
  type?: PoolTypeSDKType;
  id: Long;
  pair_id: Long;
  creator: string;
  reserve_address: string;
  pool_coin_denom: string;
  min_price: string;
  max_price: string;
  last_deposit_request_id: Long;
  last_withdraw_request_id: Long;
  disabled: boolean;
}

function createBasePoolA(): PoolA {
  return {
    type: undefined,
    id: Long.UZERO,
    pairId: Long.UZERO,
    creator: "",
    reserveAddress: "",
    poolCoinDenom: "",
    minPrice: "",
    maxPrice: "",
    lastDepositRequestId: Long.UZERO,
    lastWithdrawRequestId: Long.UZERO,
    disabled: false
  };
}

export const PoolA = {
  encode(message: PoolA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      PoolType.encode(message.type, writer.uint32(10).fork()).ldelim();
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    if (message.reserveAddress !== "") {
      writer.uint32(42).string(message.reserveAddress);
    }

    if (message.poolCoinDenom !== "") {
      writer.uint32(50).string(message.poolCoinDenom);
    }

    if (message.minPrice !== "") {
      writer.uint32(58).string(message.minPrice);
    }

    if (message.maxPrice !== "") {
      writer.uint32(66).string(message.maxPrice);
    }

    if (!message.lastDepositRequestId.isZero()) {
      writer.uint32(72).uint64(message.lastDepositRequestId);
    }

    if (!message.lastWithdrawRequestId.isZero()) {
      writer.uint32(80).uint64(message.lastWithdrawRequestId);
    }

    if (message.disabled === true) {
      writer.uint32(88).bool(message.disabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolA();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = PoolType.decode(reader, reader.uint32());
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.pairId = (reader.uint64() as Long);
          break;

        case 4:
          message.creator = reader.string();
          break;

        case 5:
          message.reserveAddress = reader.string();
          break;

        case 6:
          message.poolCoinDenom = reader.string();
          break;

        case 7:
          message.minPrice = reader.string();
          break;

        case 8:
          message.maxPrice = reader.string();
          break;

        case 9:
          message.lastDepositRequestId = (reader.uint64() as Long);
          break;

        case 10:
          message.lastWithdrawRequestId = (reader.uint64() as Long);
          break;

        case 11:
          message.disabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolA>): PoolA {
    const message = createBasePoolA();
    message.type = object.type !== undefined && object.type !== null ? PoolType.fromPartial(object.type) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.lastDepositRequestId = object.lastDepositRequestId !== undefined && object.lastDepositRequestId !== null ? Long.fromValue(object.lastDepositRequestId) : Long.UZERO;
    message.lastWithdrawRequestId = object.lastWithdrawRequestId !== undefined && object.lastWithdrawRequestId !== null ? Long.fromValue(object.lastWithdrawRequestId) : Long.UZERO;
    message.disabled = object.disabled ?? false;
    return message;
  }

};
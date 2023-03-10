import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolType enumerates pool types. */

export enum PoolType {
  /** POOL_TYPE_UNSPECIFIED - POOL_TYPE_UNSPECIFIED specifies unknown pool type */
  POOL_TYPE_UNSPECIFIED = 0,

  /** POOL_TYPE_BASIC - POOL_TYPE_BASIC specifies the basic pool type */
  POOL_TYPE_BASIC = 1,

  /** POOL_TYPE_RANGED - POOL_TYPE_RANGED specifies the ranged pool type */
  POOL_TYPE_RANGED = 2,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "POOL_TYPE_UNSPECIFIED":
      return PoolType.POOL_TYPE_UNSPECIFIED;

    case 1:
    case "POOL_TYPE_BASIC":
      return PoolType.POOL_TYPE_BASIC;

    case 2:
    case "POOL_TYPE_RANGED":
      return PoolType.POOL_TYPE_RANGED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.POOL_TYPE_UNSPECIFIED:
      return "POOL_TYPE_UNSPECIFIED";

    case PoolType.POOL_TYPE_BASIC:
      return "POOL_TYPE_BASIC";

    case PoolType.POOL_TYPE_RANGED:
      return "POOL_TYPE_RANGED";

    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Pool defines generic liquidity pool object which can be either a basic pool or a
 * ranged pool.
 */

export interface Pool {
  type: PoolType;
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
/**
 * Pool defines generic liquidity pool object which can be either a basic pool or a
 * ranged pool.
 */

export interface PoolSDKType {
  type: PoolType;
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

function createBasePool(): Pool {
  return {
    type: 0,
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

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
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

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.type = object.type ?? 0;
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
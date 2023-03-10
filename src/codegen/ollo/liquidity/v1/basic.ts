import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BasicPool {
  poolId: string;
  pairId: Long;
  poolCoinDenom: string;
  reserveAccountAddress: string;
}
export interface BasicPoolSDKType {
  pool_id: string;
  pair_id: Long;
  pool_coin_denom: string;
  reserve_account_address: string;
}

function createBaseBasicPool(): BasicPool {
  return {
    poolId: "",
    pairId: Long.UZERO,
    poolCoinDenom: "",
    reserveAccountAddress: ""
  };
}

export const BasicPool = {
  encode(message: BasicPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.poolCoinDenom !== "") {
      writer.uint32(26).string(message.poolCoinDenom);
    }

    if (message.reserveAccountAddress !== "") {
      writer.uint32(34).string(message.reserveAccountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.poolCoinDenom = reader.string();
          break;

        case 4:
          message.reserveAccountAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BasicPool>): BasicPool {
    const message = createBaseBasicPool();
    message.poolId = object.poolId ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.reserveAccountAddress = object.reserveAccountAddress ?? "";
    return message;
  }

};
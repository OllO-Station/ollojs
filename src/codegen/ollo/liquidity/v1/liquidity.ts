import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RequestStatus } from "./order";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** DepositRequest defines a deposit request. */

export interface DepositRequest {
  /** id specifies the id for the request */
  id: Long;
  /** pool_id specifies the pool id */

  poolId: Long;
  /** msg_height specifies the block height when the request is stored for the batch execution */

  msgHeight: Long;
  /** depositor specifies the bech32-encoded address that makes a deposit to the pool */

  depositor: string;
  /** deposit_coins specifies the amount of coins to deposit. */

  depositCoins: Coin[];
  /** accepted_coins specifies the amount of coins that are accepted. */

  acceptedCoins: Coin[];
  mintedPoolCoin?: Coin;
  status: RequestStatus;
}
/** DepositRequest defines a deposit request. */

export interface DepositRequestSDKType {
  id: Long;
  pool_id: Long;
  msg_height: Long;
  depositor: string;
  deposit_coins: CoinSDKType[];
  accepted_coins: CoinSDKType[];
  minted_pool_coin?: CoinSDKType;
  status: RequestStatus;
}
/** WithdrawRequest defines a withdraw request. */

export interface WithdrawRequest {
  /** id specifies the id for the request */
  id: Long;
  /** pool_id specifies the pool id */

  poolId: Long;
  /** msg_height specifies the block height when the request is stored for the batch execution */

  msgHeight: Long;
  /** withdrawer specifies the bech32-encoded address that withdraws pool coin from the pool */

  withdrawer: string;
  /** pool_coin specifies the pool coin that is a proof of liquidity provider for the pool */

  poolCoin?: Coin;
  /** withdrawn_coins specifies the amount of coins that are withdrawn. */

  withdrawnCoins: Coin[];
  status: RequestStatus;
}
/** WithdrawRequest defines a withdraw request. */

export interface WithdrawRequestSDKType {
  id: Long;
  pool_id: Long;
  msg_height: Long;
  withdrawer: string;
  pool_coin?: CoinSDKType;
  withdrawn_coins: CoinSDKType[];
  status: RequestStatus;
}

function createBaseDepositRequest(): DepositRequest {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    msgHeight: Long.ZERO,
    depositor: "",
    depositCoins: [],
    acceptedCoins: [],
    mintedPoolCoin: undefined,
    status: 0
  };
}

export const DepositRequest = {
  encode(message: DepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (!message.msgHeight.isZero()) {
      writer.uint32(24).int64(message.msgHeight);
    }

    if (message.depositor !== "") {
      writer.uint32(34).string(message.depositor);
    }

    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.acceptedCoins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.mintedPoolCoin !== undefined) {
      Coin.encode(message.mintedPoolCoin, writer.uint32(58).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.msgHeight = (reader.int64() as Long);
          break;

        case 4:
          message.depositor = reader.string();
          break;

        case 5:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.acceptedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.mintedPoolCoin = Coin.decode(reader, reader.uint32());
          break;

        case 8:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DepositRequest>): DepositRequest {
    const message = createBaseDepositRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? Long.fromValue(object.msgHeight) : Long.ZERO;
    message.depositor = object.depositor ?? "";
    message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
    message.acceptedCoins = object.acceptedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.mintedPoolCoin = object.mintedPoolCoin !== undefined && object.mintedPoolCoin !== null ? Coin.fromPartial(object.mintedPoolCoin) : undefined;
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseWithdrawRequest(): WithdrawRequest {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    msgHeight: Long.ZERO,
    withdrawer: "",
    poolCoin: undefined,
    withdrawnCoins: [],
    status: 0
  };
}

export const WithdrawRequest = {
  encode(message: WithdrawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (!message.msgHeight.isZero()) {
      writer.uint32(24).int64(message.msgHeight);
    }

    if (message.withdrawer !== "") {
      writer.uint32(34).string(message.withdrawer);
    }

    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.withdrawnCoins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.msgHeight = (reader.int64() as Long);
          break;

        case 4:
          message.withdrawer = reader.string();
          break;

        case 5:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.withdrawnCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WithdrawRequest>): WithdrawRequest {
    const message = createBaseWithdrawRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? Long.fromValue(object.msgHeight) : Long.ZERO;
    message.withdrawer = object.withdrawer ?? "";
    message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? Coin.fromPartial(object.poolCoin) : undefined;
    message.withdrawnCoins = object.withdrawnCoins?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    return message;
  }

};
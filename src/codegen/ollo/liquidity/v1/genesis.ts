import { Params, ParamsSDKType } from "./params";
import { Pair, PairSDKType } from "./pair";
import { Pool, PoolSDKType } from "./pool";
import { DepositRequest, DepositRequestSDKType, WithdrawRequest, WithdrawRequestSDKType } from "./liquidity";
import { Order, OrderSDKType } from "./order";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the liquidity module's genesis state. */

export interface GenesisState {
  params?: Params;
  lastPairId: Long;
  lastPoolId: Long;
  pairs: Pair[];
  pools: Pool[];
  depositRequests: DepositRequest[];
  withdrawRequests: WithdrawRequest[];
  orders: Order[];
  numMarketMakingOrdersRecords: NumMMOrdersRecord[];
}
/** GenesisState defines the liquidity module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  last_pair_id: Long;
  last_pool_id: Long;
  pairs: PairSDKType[];
  pools: PoolSDKType[];
  deposit_requests: DepositRequestSDKType[];
  withdraw_requests: WithdrawRequestSDKType[];
  orders: OrderSDKType[];
  num_market_making_orders_records: NumMMOrdersRecordSDKType[];
}
/**
 * NumMMOrdersRecord holds information about how many MM orders an orderer
 * ordered per pair.
 */

export interface NumMMOrdersRecord {
  orderer: string;
  pairId: Long;
  numMarketMakingOrders: number;
}
/**
 * NumMMOrdersRecord holds information about how many MM orders an orderer
 * ordered per pair.
 */

export interface NumMMOrdersRecordSDKType {
  orderer: string;
  pair_id: Long;
  num_market_making_orders: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastPairId: Long.UZERO,
    lastPoolId: Long.UZERO,
    pairs: [],
    pools: [],
    depositRequests: [],
    withdrawRequests: [],
    orders: [],
    numMarketMakingOrdersRecords: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.lastPairId.isZero()) {
      writer.uint32(16).uint64(message.lastPairId);
    }

    if (!message.lastPoolId.isZero()) {
      writer.uint32(24).uint64(message.lastPoolId);
    }

    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.depositRequests) {
      DepositRequest.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.withdrawRequests) {
      WithdrawRequest.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.numMarketMakingOrdersRecords) {
      NumMMOrdersRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastPairId = (reader.uint64() as Long);
          break;

        case 3:
          message.lastPoolId = (reader.uint64() as Long);
          break;

        case 4:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;

        case 5:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;

        case 6:
          message.depositRequests.push(DepositRequest.decode(reader, reader.uint32()));
          break;

        case 7:
          message.withdrawRequests.push(WithdrawRequest.decode(reader, reader.uint32()));
          break;

        case 8:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;

        case 9:
          message.numMarketMakingOrdersRecords.push(NumMMOrdersRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastPairId = object.lastPairId !== undefined && object.lastPairId !== null ? Long.fromValue(object.lastPairId) : Long.UZERO;
    message.lastPoolId = object.lastPoolId !== undefined && object.lastPoolId !== null ? Long.fromValue(object.lastPoolId) : Long.UZERO;
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.depositRequests = object.depositRequests?.map(e => DepositRequest.fromPartial(e)) || [];
    message.withdrawRequests = object.withdrawRequests?.map(e => WithdrawRequest.fromPartial(e)) || [];
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.numMarketMakingOrdersRecords = object.numMarketMakingOrdersRecords?.map(e => NumMMOrdersRecord.fromPartial(e)) || [];
    return message;
  }

};

function createBaseNumMMOrdersRecord(): NumMMOrdersRecord {
  return {
    orderer: "",
    pairId: Long.UZERO,
    numMarketMakingOrders: 0
  };
}

export const NumMMOrdersRecord = {
  encode(message: NumMMOrdersRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.numMarketMakingOrders !== 0) {
      writer.uint32(24).uint32(message.numMarketMakingOrders);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NumMMOrdersRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumMMOrdersRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.numMarketMakingOrders = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NumMMOrdersRecord>): NumMMOrdersRecord {
    const message = createBaseNumMMOrdersRecord();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.numMarketMakingOrders = object.numMarketMakingOrders ?? 0;
    return message;
  }

};
import { Params, ParamsSDKType } from "./params";
import { Pair, PairSDKType, Pool, PoolSDKType, Order, OrderSDKType, RequestDeposit, RequestDepositSDKType, RequestWithdraw, RequestWithdrawSDKType, MarketMakingOrderId, MarketMakingOrderIdSDKType } from "./liquidity";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the liquidity module's genesis state. */

export interface GenesisState {
  params?: Params;
  pairs: Pair[];
  pools: Pool[];
  requests?: GenesisRequestsState;
  prevPoolId: Long;
  prevPairId: Long;
}
/** GenesisState defines the liquidity module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  pairs: PairSDKType[];
  pools: PoolSDKType[];
  requests?: GenesisRequestsStateSDKType;
  prev_pool_id: Long;
  prev_pair_id: Long;
}
export interface GenesisRequestsState {
  orders: Order[];
  deposits: RequestDeposit[];
  withdrawals: RequestWithdraw[];
  marketMakingOrderIds: MarketMakingOrderId[];
}
export interface GenesisRequestsStateSDKType {
  orders: OrderSDKType[];
  deposits: RequestDepositSDKType[];
  withdrawals: RequestWithdrawSDKType[];
  market_making_order_ids: MarketMakingOrderIdSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    pairs: [],
    pools: [],
    requests: undefined,
    prevPoolId: Long.UZERO,
    prevPairId: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.requests !== undefined) {
      GenesisRequestsState.encode(message.requests, writer.uint32(34).fork()).ldelim();
    }

    if (!message.prevPoolId.isZero()) {
      writer.uint32(40).uint64(message.prevPoolId);
    }

    if (!message.prevPairId.isZero()) {
      writer.uint32(48).uint64(message.prevPairId);
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
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;

        case 4:
          message.requests = GenesisRequestsState.decode(reader, reader.uint32());
          break;

        case 5:
          message.prevPoolId = (reader.uint64() as Long);
          break;

        case 6:
          message.prevPairId = (reader.uint64() as Long);
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
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.requests = object.requests !== undefined && object.requests !== null ? GenesisRequestsState.fromPartial(object.requests) : undefined;
    message.prevPoolId = object.prevPoolId !== undefined && object.prevPoolId !== null ? Long.fromValue(object.prevPoolId) : Long.UZERO;
    message.prevPairId = object.prevPairId !== undefined && object.prevPairId !== null ? Long.fromValue(object.prevPairId) : Long.UZERO;
    return message;
  }

};

function createBaseGenesisRequestsState(): GenesisRequestsState {
  return {
    orders: [],
    deposits: [],
    withdrawals: [],
    marketMakingOrderIds: []
  };
}

export const GenesisRequestsState = {
  encode(message: GenesisRequestsState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.deposits) {
      RequestDeposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.withdrawals) {
      RequestWithdraw.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.marketMakingOrderIds) {
      MarketMakingOrderId.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisRequestsState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisRequestsState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;

        case 2:
          message.deposits.push(RequestDeposit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.withdrawals.push(RequestWithdraw.decode(reader, reader.uint32()));
          break;

        case 4:
          message.marketMakingOrderIds.push(MarketMakingOrderId.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisRequestsState>): GenesisRequestsState {
    const message = createBaseGenesisRequestsState();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => RequestDeposit.fromPartial(e)) || [];
    message.withdrawals = object.withdrawals?.map(e => RequestWithdraw.fromPartial(e)) || [];
    message.marketMakingOrderIds = object.marketMakingOrderIds?.map(e => MarketMakingOrderId.fromPartial(e)) || [];
    return message;
  }

};
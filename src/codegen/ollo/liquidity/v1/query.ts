import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Pair, PairSDKType } from "./pair";
import { DepositRequest, DepositRequestSDKType, WithdrawRequest, WithdrawRequestSDKType } from "./liquidity";
import { Order, OrderSDKType } from "./order";
import { PoolType } from "./pool";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryPoolsRequest is request type for the Query/Pools RPC method. */

export interface QueryPoolsRequest {
  pairId: Long;
  disabled: string;
  pagination?: PageRequest;
}
/** QueryPoolsRequest is request type for the Query/Pools RPC method. */

export interface QueryPoolsRequestSDKType {
  pair_id: Long;
  disabled: string;
  pagination?: PageRequestSDKType;
}
/** QueryPoolsResponse is response type for the Query/Pools RPC method. */

export interface QueryPoolsResponse {
  pools: PoolResponse[];
  pagination?: PageResponse;
}
/** QueryPoolsResponse is response type for the Query/Pools RPC method. */

export interface QueryPoolsResponseSDKType {
  pools: PoolResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */

export interface QueryPoolRequest {
  poolId: Long;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */

export interface QueryPoolRequestSDKType {
  pool_id: Long;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */

export interface QueryPoolResponse {
  pool?: PoolResponse;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */

export interface QueryPoolResponseSDKType {
  pool?: PoolResponseSDKType;
}
/** QueryPoolByReserveAddressRequest is request type for the Query/PoolByReserveAddress RPC method. */

export interface QueryPoolByReserveAddressRequest {
  reserveAddress: string;
}
/** QueryPoolByReserveAddressRequest is request type for the Query/PoolByReserveAddress RPC method. */

export interface QueryPoolByReserveAddressRequestSDKType {
  reserve_address: string;
}
/** QueryPoolByPoolCoinDenomRequest is request type for the Query/PoolByPoolCoinDenom RPC method. */

export interface QueryPoolByPoolCoinDenomRequest {
  poolCoinDenom: string;
}
/** QueryPoolByPoolCoinDenomRequest is request type for the Query/PoolByPoolCoinDenom RPC method. */

export interface QueryPoolByPoolCoinDenomRequestSDKType {
  pool_coin_denom: string;
}
/** QueryPairsRequest is request type for the Query/Pairs RPC method. */

export interface QueryPairsRequest {
  denoms: string[];
  pagination?: PageRequest;
}
/** QueryPairsRequest is request type for the Query/Pairs RPC method. */

export interface QueryPairsRequestSDKType {
  denoms: string[];
  pagination?: PageRequestSDKType;
}
/** QueryPairsResponse is response type for the Query/Pairs RPC method. */

export interface QueryPairsResponse {
  pairs: Pair[];
  pagination?: PageResponse;
}
/** QueryPairsResponse is response type for the Query/Pairs RPC method. */

export interface QueryPairsResponseSDKType {
  pairs: PairSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryPairRequest is request type for the Query/Pair RPC method. */

export interface QueryPairRequest {
  pairId: Long;
}
/** QueryPairRequest is request type for the Query/Pair RPC method. */

export interface QueryPairRequestSDKType {
  pair_id: Long;
}
/** QueryPairResponse is response type for the Query/Pair RPC method. */

export interface QueryPairResponse {
  pair?: Pair;
}
/** QueryPairResponse is response type for the Query/Pair RPC method. */

export interface QueryPairResponseSDKType {
  pair?: PairSDKType;
}
/** QueryDepositRequestsRequest is request type for the Query/DepositRequests RPC method. */

export interface QueryDepositRequestsRequest {
  poolId: Long;
  pagination?: PageRequest;
}
/** QueryDepositRequestsRequest is request type for the Query/DepositRequests RPC method. */

export interface QueryDepositRequestsRequestSDKType {
  pool_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryDepositRequestsResponse is response type for the Query/DepositRequests RPC method. */

export interface QueryDepositRequestsResponse {
  depositRequests: DepositRequest[];
  pagination?: PageResponse;
}
/** QueryDepositRequestsResponse is response type for the Query/DepositRequests RPC method. */

export interface QueryDepositRequestsResponseSDKType {
  deposit_requests: DepositRequestSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDepositRequestRequest is request type for the Query/DepositRequest RPC method. */

export interface QueryDepositRequestRequest {
  poolId: Long;
  id: Long;
}
/** QueryDepositRequestRequest is request type for the Query/DepositRequest RPC method. */

export interface QueryDepositRequestRequestSDKType {
  pool_id: Long;
  id: Long;
}
/** QueryDepositRequestResponse is response type for the Query/DepositRequest RPC method. */

export interface QueryDepositRequestResponse {
  depositRequest?: DepositRequest;
}
/** QueryDepositRequestResponse is response type for the Query/DepositRequest RPC method. */

export interface QueryDepositRequestResponseSDKType {
  deposit_request?: DepositRequestSDKType;
}
/** QueryWithdrawRequestsRequest is request type for the Query/WithdrawRequests RPC method. */

export interface QueryWithdrawRequestsRequest {
  poolId: Long;
  pagination?: PageRequest;
}
/** QueryWithdrawRequestsRequest is request type for the Query/WithdrawRequests RPC method. */

export interface QueryWithdrawRequestsRequestSDKType {
  pool_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryWithdrawRequestsResponse is response type for the Query/WithdrawRequests RPC method. */

export interface QueryWithdrawRequestsResponse {
  withdrawRequests: WithdrawRequest[];
  pagination?: PageResponse;
}
/** QueryWithdrawRequestsResponse is response type for the Query/WithdrawRequests RPC method. */

export interface QueryWithdrawRequestsResponseSDKType {
  withdraw_requests: WithdrawRequestSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryWithdrawRequestRequest is request type for the Query/WithdrawRequest RPC method. */

export interface QueryWithdrawRequestRequest {
  poolId: Long;
  id: Long;
}
/** QueryWithdrawRequestRequest is request type for the Query/WithdrawRequest RPC method. */

export interface QueryWithdrawRequestRequestSDKType {
  pool_id: Long;
  id: Long;
}
/** QueryWithdrawRequestResponse is response type for the Query/WithdrawRequest RPC method. */

export interface QueryWithdrawRequestResponse {
  withdrawRequest?: WithdrawRequest;
}
/** QueryWithdrawRequestResponse is response type for the Query/WithdrawRequest RPC method. */

export interface QueryWithdrawRequestResponseSDKType {
  withdraw_request?: WithdrawRequestSDKType;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method. */

export interface QueryOrdersRequest {
  pairId: Long;
  pagination?: PageRequest;
}
/** QueryOrdersRequest is request type for the Query/Orders RPC method. */

export interface QueryOrdersRequestSDKType {
  pair_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method. */

export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method. */

export interface QueryOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryOrderRequest is request type for the Query/Order RPC method. */

export interface QueryOrderRequest {
  pairId: Long;
  id: Long;
}
/** QueryOrderRequest is request type for the Query/Order RPC method. */

export interface QueryOrderRequestSDKType {
  pair_id: Long;
  id: Long;
}
/** QueryOrderResponse is response type for the Query/Order RPC method. */

export interface QueryOrderResponse {
  order?: Order;
}
/** QueryOrderResponse is response type for the Query/Order RPC method. */

export interface QueryOrderResponseSDKType {
  order?: OrderSDKType;
}
/** QueryOrdersByOrdererRequest is request type for the Query/OrdersByOrderer RPC method. */

export interface QueryOrdersByOrdererRequest {
  orderer: string;
  pairId: Long;
  pagination?: PageRequest;
}
/** QueryOrdersByOrdererRequest is request type for the Query/OrdersByOrderer RPC method. */

export interface QueryOrdersByOrdererRequestSDKType {
  orderer: string;
  pair_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryOrderBooksRequest is request type for the Query/OrderBooks RPC method. */

export interface QueryOrderBooksRequest {
  pairIds: Long[];
  priceUnitPowers: number[];
  numTicks: number;
}
/** QueryOrderBooksRequest is request type for the Query/OrderBooks RPC method. */

export interface QueryOrderBooksRequestSDKType {
  pair_ids: Long[];
  price_unit_powers: number[];
  num_ticks: number;
}
/** QueryOrderBooksResponse is response type for Query/OrderBooks RPC method. */

export interface QueryOrderBooksResponse {
  pairs: OrderBookPairResponse[];
}
/** QueryOrderBooksResponse is response type for Query/OrderBooks RPC method. */

export interface QueryOrderBooksResponseSDKType {
  pairs: OrderBookPairResponseSDKType[];
}
export interface QueryNumMMOrdersRequest {
  orderer: string;
  pairId: Long;
}
export interface QueryNumMMOrdersRequestSDKType {
  orderer: string;
  pair_id: Long;
}
export interface QueryNumMMOrdersResponse {
  numMarketMakingOrders: number;
}
export interface QueryNumMMOrdersResponseSDKType {
  num_market_making_orders: number;
}
/** PoolResponse defines a custom pool response message. */

export interface PoolResponse {
  type: PoolType;
  id: Long;
  pairId: Long;
  creator: string;
  reserveAddress: string;
  poolCoinDenom: string;
  poolCoinSupply: string;
  minPrice: string;
  maxPrice: string;
  price: string;
  balances?: PoolBalances;
  lastDepositRequestId: Long;
  lastWithdrawRequestId: Long;
  disabled: boolean;
}
/** PoolResponse defines a custom pool response message. */

export interface PoolResponseSDKType {
  type: PoolType;
  id: Long;
  pair_id: Long;
  creator: string;
  reserve_address: string;
  pool_coin_denom: string;
  pool_coin_supply: string;
  min_price: string;
  max_price: string;
  price: string;
  balances?: PoolBalancesSDKType;
  last_deposit_request_id: Long;
  last_withdraw_request_id: Long;
  disabled: boolean;
}
export interface PoolBalances {
  baseCoin?: Coin;
  quoteCoin?: Coin;
}
export interface PoolBalancesSDKType {
  base_coin?: CoinSDKType;
  quote_coin?: CoinSDKType;
}
export interface OrderBookPairResponse {
  pairId: Long;
  basePrice: string;
  orderBooks: OrderBookResponse[];
}
export interface OrderBookPairResponseSDKType {
  pair_id: Long;
  base_price: string;
  order_books: OrderBookResponseSDKType[];
}
export interface OrderBookResponse {
  priceUnit: string;
  sells: OrderBookTickResponse[];
  buys: OrderBookTickResponse[];
}
export interface OrderBookResponseSDKType {
  price_unit: string;
  sells: OrderBookTickResponseSDKType[];
  buys: OrderBookTickResponseSDKType[];
}
export interface OrderBookTickResponse {
  price: string;
  userOrderAmount: string;
  poolOrderAmount: string;
}
export interface OrderBookTickResponseSDKType {
  price: string;
  user_order_amount: string;
  pool_order_amount: string;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pairId: Long.UZERO,
    disabled: "",
    pagination: undefined
  };
}

export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    if (message.disabled !== "") {
      writer.uint32(18).string(message.disabled);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        case 2:
          message.disabled = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.disabled = object.disabled ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}

export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => PoolResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: Long.UZERO
  };
}

export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = PoolResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? PoolResponse.fromPartial(object.pool) : undefined;
    return message;
  }

};

function createBaseQueryPoolByReserveAddressRequest(): QueryPoolByReserveAddressRequest {
  return {
    reserveAddress: ""
  };
}

export const QueryPoolByReserveAddressRequest = {
  encode(message: QueryPoolByReserveAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveAddress !== "") {
      writer.uint32(10).string(message.reserveAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolByReserveAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByReserveAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reserveAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolByReserveAddressRequest>): QueryPoolByReserveAddressRequest {
    const message = createBaseQueryPoolByReserveAddressRequest();
    message.reserveAddress = object.reserveAddress ?? "";
    return message;
  }

};

function createBaseQueryPoolByPoolCoinDenomRequest(): QueryPoolByPoolCoinDenomRequest {
  return {
    poolCoinDenom: ""
  };
}

export const QueryPoolByPoolCoinDenomRequest = {
  encode(message: QueryPoolByPoolCoinDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolCoinDenom !== "") {
      writer.uint32(10).string(message.poolCoinDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolByPoolCoinDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByPoolCoinDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolCoinDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPoolByPoolCoinDenomRequest>): QueryPoolByPoolCoinDenomRequest {
    const message = createBaseQueryPoolByPoolCoinDenomRequest();
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    return message;
  }

};

function createBaseQueryPairsRequest(): QueryPairsRequest {
  return {
    denoms: [],
    pagination: undefined
  };
}

export const QueryPairsRequest = {
  encode(message: QueryPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPairsRequest>): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    message.denoms = object.denoms?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPairsResponse(): QueryPairsResponse {
  return {
    pairs: [],
    pagination: undefined
  };
}

export const QueryPairsResponse = {
  encode(message: QueryPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPairsResponse>): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPairRequest(): QueryPairRequest {
  return {
    pairId: Long.UZERO
  };
}

export const QueryPairRequest = {
  encode(message: QueryPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPairRequest>): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPairResponse(): QueryPairResponse {
  return {
    pair: undefined
  };
}

export const QueryPairResponse = {
  encode(message: QueryPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPairResponse>): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
    return message;
  }

};

function createBaseQueryDepositRequestsRequest(): QueryDepositRequestsRequest {
  return {
    poolId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryDepositRequestsRequest = {
  encode(message: QueryDepositRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositRequestsRequest>): QueryDepositRequestsRequest {
    const message = createBaseQueryDepositRequestsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositRequestsResponse(): QueryDepositRequestsResponse {
  return {
    depositRequests: [],
    pagination: undefined
  };
}

export const QueryDepositRequestsResponse = {
  encode(message: QueryDepositRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.depositRequests) {
      DepositRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositRequests.push(DepositRequest.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositRequestsResponse>): QueryDepositRequestsResponse {
    const message = createBaseQueryDepositRequestsResponse();
    message.depositRequests = object.depositRequests?.map(e => DepositRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositRequestRequest(): QueryDepositRequestRequest {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO
  };
}

export const QueryDepositRequestRequest = {
  encode(message: QueryDepositRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositRequestRequest>): QueryDepositRequestRequest {
    const message = createBaseQueryDepositRequestRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryDepositRequestResponse(): QueryDepositRequestResponse {
  return {
    depositRequest: undefined
  };
}

export const QueryDepositRequestResponse = {
  encode(message: QueryDepositRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositRequest !== undefined) {
      DepositRequest.encode(message.depositRequest, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositRequest = DepositRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositRequestResponse>): QueryDepositRequestResponse {
    const message = createBaseQueryDepositRequestResponse();
    message.depositRequest = object.depositRequest !== undefined && object.depositRequest !== null ? DepositRequest.fromPartial(object.depositRequest) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawRequestsRequest(): QueryWithdrawRequestsRequest {
  return {
    poolId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryWithdrawRequestsRequest = {
  encode(message: QueryWithdrawRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryWithdrawRequestsRequest>): QueryWithdrawRequestsRequest {
    const message = createBaseQueryWithdrawRequestsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawRequestsResponse(): QueryWithdrawRequestsResponse {
  return {
    withdrawRequests: [],
    pagination: undefined
  };
}

export const QueryWithdrawRequestsResponse = {
  encode(message: QueryWithdrawRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawRequests) {
      WithdrawRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawRequests.push(WithdrawRequest.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryWithdrawRequestsResponse>): QueryWithdrawRequestsResponse {
    const message = createBaseQueryWithdrawRequestsResponse();
    message.withdrawRequests = object.withdrawRequests?.map(e => WithdrawRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawRequestRequest(): QueryWithdrawRequestRequest {
  return {
    poolId: Long.UZERO,
    id: Long.UZERO
  };
}

export const QueryWithdrawRequestRequest = {
  encode(message: QueryWithdrawRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryWithdrawRequestRequest>): QueryWithdrawRequestRequest {
    const message = createBaseQueryWithdrawRequestRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryWithdrawRequestResponse(): QueryWithdrawRequestResponse {
  return {
    withdrawRequest: undefined
  };
}

export const QueryWithdrawRequestResponse = {
  encode(message: QueryWithdrawRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawRequest !== undefined) {
      WithdrawRequest.encode(message.withdrawRequest, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawRequest = WithdrawRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryWithdrawRequestResponse>): QueryWithdrawRequestResponse {
    const message = createBaseQueryWithdrawRequestResponse();
    message.withdrawRequest = object.withdrawRequest !== undefined && object.withdrawRequest !== null ? WithdrawRequest.fromPartial(object.withdrawRequest) : undefined;
    return message;
  }

};

function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return {
    pairId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryOrdersRequest = {
  encode(message: QueryOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}

export const QueryOrdersResponse = {
  encode(message: QueryOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    pairId: Long.UZERO,
    id: Long.UZERO
  };
}

export const QueryOrderRequest = {
  encode(message: QueryOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: undefined
  };
}

export const QueryOrderResponse = {
  encode(message: QueryOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseQueryOrdersByOrdererRequest(): QueryOrdersByOrdererRequest {
  return {
    orderer: "",
    pairId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryOrdersByOrdererRequest = {
  encode(message: QueryOrdersByOrdererRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersByOrdererRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersByOrdererRequest();

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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrdersByOrdererRequest>): QueryOrdersByOrdererRequest {
    const message = createBaseQueryOrdersByOrdererRequest();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryOrderBooksRequest(): QueryOrderBooksRequest {
  return {
    pairIds: [],
    priceUnitPowers: [],
    numTicks: 0
  };
}

export const QueryOrderBooksRequest = {
  encode(message: QueryOrderBooksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.pairIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    writer.uint32(18).fork();

    for (const v of message.priceUnitPowers) {
      writer.uint32(v);
    }

    writer.ldelim();

    if (message.numTicks !== 0) {
      writer.uint32(24).uint32(message.numTicks);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBooksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBooksRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.pairIds.push((reader.uint64() as Long));
            }
          } else {
            message.pairIds.push((reader.uint64() as Long));
          }

          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.priceUnitPowers.push(reader.uint32());
            }
          } else {
            message.priceUnitPowers.push(reader.uint32());
          }

          break;

        case 3:
          message.numTicks = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrderBooksRequest>): QueryOrderBooksRequest {
    const message = createBaseQueryOrderBooksRequest();
    message.pairIds = object.pairIds?.map(e => Long.fromValue(e)) || [];
    message.priceUnitPowers = object.priceUnitPowers?.map(e => e) || [];
    message.numTicks = object.numTicks ?? 0;
    return message;
  }

};

function createBaseQueryOrderBooksResponse(): QueryOrderBooksResponse {
  return {
    pairs: []
  };
}

export const QueryOrderBooksResponse = {
  encode(message: QueryOrderBooksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      OrderBookPairResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBooksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBooksResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.pairs.push(OrderBookPairResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrderBooksResponse>): QueryOrderBooksResponse {
    const message = createBaseQueryOrderBooksResponse();
    message.pairs = object.pairs?.map(e => OrderBookPairResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryNumMMOrdersRequest(): QueryNumMMOrdersRequest {
  return {
    orderer: "",
    pairId: Long.UZERO
  };
}

export const QueryNumMMOrdersRequest = {
  encode(message: QueryNumMMOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumMMOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumMMOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
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

  fromPartial(object: DeepPartial<QueryNumMMOrdersRequest>): QueryNumMMOrdersRequest {
    const message = createBaseQueryNumMMOrdersRequest();
    message.orderer = object.orderer ?? "";
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryNumMMOrdersResponse(): QueryNumMMOrdersResponse {
  return {
    numMarketMakingOrders: 0
  };
}

export const QueryNumMMOrdersResponse = {
  encode(message: QueryNumMMOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numMarketMakingOrders !== 0) {
      writer.uint32(8).uint32(message.numMarketMakingOrders);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumMMOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumMMOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numMarketMakingOrders = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNumMMOrdersResponse>): QueryNumMMOrdersResponse {
    const message = createBaseQueryNumMMOrdersResponse();
    message.numMarketMakingOrders = object.numMarketMakingOrders ?? 0;
    return message;
  }

};

function createBasePoolResponse(): PoolResponse {
  return {
    type: 0,
    id: Long.UZERO,
    pairId: Long.UZERO,
    creator: "",
    reserveAddress: "",
    poolCoinDenom: "",
    poolCoinSupply: "",
    minPrice: "",
    maxPrice: "",
    price: "",
    balances: undefined,
    lastDepositRequestId: Long.UZERO,
    lastWithdrawRequestId: Long.UZERO,
    disabled: false
  };
}

export const PoolResponse = {
  encode(message: PoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.poolCoinSupply !== "") {
      writer.uint32(58).string(message.poolCoinSupply);
    }

    if (message.minPrice !== "") {
      writer.uint32(66).string(message.minPrice);
    }

    if (message.maxPrice !== "") {
      writer.uint32(74).string(message.maxPrice);
    }

    if (message.price !== "") {
      writer.uint32(82).string(message.price);
    }

    if (message.balances !== undefined) {
      PoolBalances.encode(message.balances, writer.uint32(90).fork()).ldelim();
    }

    if (!message.lastDepositRequestId.isZero()) {
      writer.uint32(96).uint64(message.lastDepositRequestId);
    }

    if (!message.lastWithdrawRequestId.isZero()) {
      writer.uint32(104).uint64(message.lastWithdrawRequestId);
    }

    if (message.disabled === true) {
      writer.uint32(112).bool(message.disabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();

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
          message.poolCoinSupply = reader.string();
          break;

        case 8:
          message.minPrice = reader.string();
          break;

        case 9:
          message.maxPrice = reader.string();
          break;

        case 10:
          message.price = reader.string();
          break;

        case 11:
          message.balances = PoolBalances.decode(reader, reader.uint32());
          break;

        case 12:
          message.lastDepositRequestId = (reader.uint64() as Long);
          break;

        case 13:
          message.lastWithdrawRequestId = (reader.uint64() as Long);
          break;

        case 14:
          message.disabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.type = object.type ?? 0;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.poolCoinSupply = object.poolCoinSupply ?? "";
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.price = object.price ?? "";
    message.balances = object.balances !== undefined && object.balances !== null ? PoolBalances.fromPartial(object.balances) : undefined;
    message.lastDepositRequestId = object.lastDepositRequestId !== undefined && object.lastDepositRequestId !== null ? Long.fromValue(object.lastDepositRequestId) : Long.UZERO;
    message.lastWithdrawRequestId = object.lastWithdrawRequestId !== undefined && object.lastWithdrawRequestId !== null ? Long.fromValue(object.lastWithdrawRequestId) : Long.UZERO;
    message.disabled = object.disabled ?? false;
    return message;
  }

};

function createBasePoolBalances(): PoolBalances {
  return {
    baseCoin: undefined,
    quoteCoin: undefined
  };
}

export const PoolBalances = {
  encode(message: PoolBalances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseCoin !== undefined) {
      Coin.encode(message.baseCoin, writer.uint32(10).fork()).ldelim();
    }

    if (message.quoteCoin !== undefined) {
      Coin.encode(message.quoteCoin, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolBalances {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolBalances();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseCoin = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.quoteCoin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolBalances>): PoolBalances {
    const message = createBasePoolBalances();
    message.baseCoin = object.baseCoin !== undefined && object.baseCoin !== null ? Coin.fromPartial(object.baseCoin) : undefined;
    message.quoteCoin = object.quoteCoin !== undefined && object.quoteCoin !== null ? Coin.fromPartial(object.quoteCoin) : undefined;
    return message;
  }

};

function createBaseOrderBookPairResponse(): OrderBookPairResponse {
  return {
    pairId: Long.UZERO,
    basePrice: "",
    orderBooks: []
  };
}

export const OrderBookPairResponse = {
  encode(message: OrderBookPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    if (message.basePrice !== "") {
      writer.uint32(18).string(message.basePrice);
    }

    for (const v of message.orderBooks) {
      OrderBookResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookPairResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        case 2:
          message.basePrice = reader.string();
          break;

        case 3:
          message.orderBooks.push(OrderBookResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderBookPairResponse>): OrderBookPairResponse {
    const message = createBaseOrderBookPairResponse();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.basePrice = object.basePrice ?? "";
    message.orderBooks = object.orderBooks?.map(e => OrderBookResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseOrderBookResponse(): OrderBookResponse {
  return {
    priceUnit: "",
    sells: [],
    buys: []
  };
}

export const OrderBookResponse = {
  encode(message: OrderBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceUnit !== "") {
      writer.uint32(10).string(message.priceUnit);
    }

    for (const v of message.sells) {
      OrderBookTickResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.buys) {
      OrderBookTickResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceUnit = reader.string();
          break;

        case 2:
          message.sells.push(OrderBookTickResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.buys.push(OrderBookTickResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderBookResponse>): OrderBookResponse {
    const message = createBaseOrderBookResponse();
    message.priceUnit = object.priceUnit ?? "";
    message.sells = object.sells?.map(e => OrderBookTickResponse.fromPartial(e)) || [];
    message.buys = object.buys?.map(e => OrderBookTickResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseOrderBookTickResponse(): OrderBookTickResponse {
  return {
    price: "",
    userOrderAmount: "",
    poolOrderAmount: ""
  };
}

export const OrderBookTickResponse = {
  encode(message: OrderBookTickResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.userOrderAmount !== "") {
      writer.uint32(18).string(message.userOrderAmount);
    }

    if (message.poolOrderAmount !== "") {
      writer.uint32(26).string(message.poolOrderAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookTickResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookTickResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.userOrderAmount = reader.string();
          break;

        case 3:
          message.poolOrderAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderBookTickResponse>): OrderBookTickResponse {
    const message = createBaseOrderBookTickResponse();
    message.price = object.price ?? "";
    message.userOrderAmount = object.userOrderAmount ?? "";
    message.poolOrderAmount = object.poolOrderAmount ?? "";
    return message;
  }

};
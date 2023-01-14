import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos_proto/pagination";
import { Params, ParamsSDKType } from "./params";
import { Pair, PairSDKType, RequestDeposit, RequestDepositSDKType, RequestWithdraw, RequestWithdrawSDKType, Order, OrderSDKType } from "./liquidity";
import { Coin, CoinSDKType } from "../../../cosmos_proto/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * the request type for the QueryLiquidityPool RPC method. requestable specified
 * pool_id.
 */
export interface QueryLiquidityPoolRequest {
    poolId: Long;
}
/**
 * the request type for the QueryLiquidityPool RPC method. requestable specified
 * pool_id.
 */
export interface QueryLiquidityPoolRequestSDKType {
    pool_id: Long;
}
/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the
 * liquidity pool that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolResponse {
    pool?: PoolResponse;
}
/**
 * the response type for the QueryLiquidityPoolResponse RPC method. Returns the
 * liquidity pool that corresponds to the requested pool_id.
 */
export interface QueryLiquidityPoolResponseSDKType {
    pool?: PoolResponseSDKType;
}
/**
 * the request type for the QueryLiquidityByPoolCoinDenomPool RPC method.
 * Requestable specified pool_coin_denom.
 */
export interface QueryLiquidityPoolByPoolCoinDenomRequest {
    poolCoinDenom: string;
}
/**
 * the request type for the QueryLiquidityByPoolCoinDenomPool RPC method.
 * Requestable specified pool_coin_denom.
 */
export interface QueryLiquidityPoolByPoolCoinDenomRequestSDKType {
    pool_coin_denom: string;
}
/**
 * the request type for the QueryLiquidityByReserveAcc RPC method. Requestable
 * specified reserve_acc.
 */
export interface QueryLiquidityPoolByReserveAccRequest {
    reserveAcc: string;
}
/**
 * the request type for the QueryLiquidityByReserveAcc RPC method. Requestable
 * specified reserve_acc.
 */
export interface QueryLiquidityPoolByReserveAccRequestSDKType {
    reserve_acc: string;
}
/**
 * the request type for the QueryLiquidityPools RPC method. Requestable
 * including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pairId: Long;
    inactive: string;
    pagination?: PageRequest;
}
/**
 * the request type for the QueryLiquidityPools RPC method. Requestable
 * including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequestSDKType {
    pair_id: Long;
    inactive: string;
    pagination?: PageRequestSDKType;
}
/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This
 * includes a list of all existing liquidity pools and paging results that
 * contain next_key and total count.
 */
export interface QueryLiquidityPoolsResponse {
    pools: PoolResponse[];
    /**
     * pagination defines the pagination in the response. not working on this
     * version.
     */
    pagination?: PageResponse;
}
/**
 * the response type for the QueryLiquidityPoolsResponse RPC method. This
 * includes a list of all existing liquidity pools and paging results that
 * contain next_key and total count.
 */
export interface QueryLiquidityPoolsResponseSDKType {
    pools: PoolResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequestSDKType {
}
/**
 * the response type for the QueryParamsResponse RPC method. This includes
 * current parameter of the liquidity module.
 */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/**
 * the response type for the QueryParamsResponse RPC method. This includes
 * current parameter of the liquidity module.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryPairsRequest is request type for the Query/v1/pairs RPC method. */
export interface QueryPairsRequest {
    denoms: string[];
    pagination?: PageRequest;
}
/** QueryPairsRequest is request type for the Query/v1/pairs RPC method. */
export interface QueryPairsRequestSDKType {
    denoms: string[];
    pagination?: PageRequestSDKType;
}
/** QueryPairsResponse is response type for the Query/v1/pairs RPC method. */
export interface QueryPairsResponse {
    pairs: Pair[];
    pagination?: PageResponse;
}
/** QueryPairsResponse is response type for the Query/v1/pairs RPC method. */
export interface QueryPairsResponseSDKType {
    pairs: PairSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryPairRequest is request type for the Query/v1/pair RPC method. */
export interface QueryPairRequest {
    pairId: Long;
}
/** QueryPairRequest is request type for the Query/v1/pair RPC method. */
export interface QueryPairRequestSDKType {
    pair_id: Long;
}
/** QueryPairResponse is response type for the Query/v1/pair RPC method. */
export interface QueryPairResponse {
    pair?: Pair;
}
/** QueryPairResponse is response type for the Query/v1/pair RPC method. */
export interface QueryPairResponseSDKType {
    pair?: PairSDKType;
}
/**
 * QueryDepositRequestsRequest is request type for the Query/DepositRequests RPC
 * method.
 */
export interface QueryDepositRequestsRequest {
    poolId: Long;
    pagination?: PageRequest;
}
/**
 * QueryDepositRequestsRequest is request type for the Query/DepositRequests RPC
 * method.
 */
export interface QueryDepositRequestsRequestSDKType {
    pool_id: Long;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDepositRequestsResponse is response type for the Query/DepositRequests
 * RPC method.
 */
export interface QueryDepositRequestsResponse {
    depositRequests: RequestDeposit[];
    pagination?: PageResponse;
}
/**
 * QueryDepositRequestsResponse is response type for the Query/DepositRequests
 * RPC method.
 */
export interface QueryDepositRequestsResponseSDKType {
    deposit_requests: RequestDepositSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryDepositRequestRequest is request type for the Query/DepositRequest RPC
 * method.
 */
export interface QueryDepositRequestRequest {
    poolId: Long;
    id: Long;
}
/**
 * QueryDepositRequestRequest is request type for the Query/DepositRequest RPC
 * method.
 */
export interface QueryDepositRequestRequestSDKType {
    pool_id: Long;
    id: Long;
}
/**
 * QueryDepositRequestResponse is response type for the Query/DepositRequest RPC
 * method.
 */
export interface QueryDepositRequestResponse {
    depositRequest?: RequestDeposit;
}
/**
 * QueryDepositRequestResponse is response type for the Query/DepositRequest RPC
 * method.
 */
export interface QueryDepositRequestResponseSDKType {
    deposit_request?: RequestDepositSDKType;
}
/**
 * QueryWithdrawRequestsRequest is request type for the Query/WithdrawRequests
 * RPC method.
 */
export interface QueryWithdrawRequestsRequest {
    poolId: Long;
    pagination?: PageRequest;
}
/**
 * QueryWithdrawRequestsRequest is request type for the Query/WithdrawRequests
 * RPC method.
 */
export interface QueryWithdrawRequestsRequestSDKType {
    pool_id: Long;
    pagination?: PageRequestSDKType;
}
/**
 * QueryWithdrawRequestsResponse is response type for the Query/WithdrawRequests
 * RPC method.
 */
export interface QueryWithdrawRequestsResponse {
    withdrawRequests: RequestWithdraw[];
    pagination?: PageResponse;
}
/**
 * QueryWithdrawRequestsResponse is response type for the Query/WithdrawRequests
 * RPC method.
 */
export interface QueryWithdrawRequestsResponseSDKType {
    withdraw_requests: RequestWithdrawSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryWithdrawRequestRequest is request type for the Query/WithdrawRequest RPC
 * method.
 */
export interface QueryWithdrawRequestRequest {
    poolId: Long;
    id: Long;
}
/**
 * QueryWithdrawRequestRequest is request type for the Query/WithdrawRequest RPC
 * method.
 */
export interface QueryWithdrawRequestRequestSDKType {
    pool_id: Long;
    id: Long;
}
/**
 * QueryWithdrawRequestResponse is response type for the Query/WithdrawRequest
 * RPC method.
 */
export interface QueryWithdrawRequestResponse {
    withdrawRequest?: RequestWithdraw;
}
/**
 * QueryWithdrawRequestResponse is response type for the Query/WithdrawRequest
 * RPC method.
 */
export interface QueryWithdrawRequestResponseSDKType {
    withdraw_request?: RequestWithdrawSDKType;
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
    /** QueryOrderResponse is response type for the Query/Order RPC method. */
    order?: Order;
}
/** QueryOrderResponse is response type for the Query/Order RPC method. */
export interface QueryOrderResponseSDKType {
    order?: OrderSDKType;
}
/**
 * QueryOrdersByOrdererRequest is request type for the Query/OrdersByOrderer RPC
 * method.
 */
export interface QueryOrdersByOrdererRequest {
    orderer: string;
    pairId: Long;
    pagination?: PageRequest;
}
/**
 * QueryOrdersByOrdererRequest is request type for the Query/OrdersByOrderer RPC
 * method.
 */
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
/** PoolResponse defines a custom pool response message. */
export interface PoolResponse {
    id: Long;
    typeId: Long;
    pairId: Long;
    creator: string;
    reserveAddress: string;
    poolCoinDenom: string;
    poolCoinSupply: string;
    minPrice: string;
    maxPrice: string;
    price: string;
    balances?: PoolBalances;
    prevDepositRequestId: Long;
    prevWithdrawRequestId: Long;
    inactive: boolean;
}
/** PoolResponse defines a custom pool response message. */
export interface PoolResponseSDKType {
    id: Long;
    type_id: Long;
    pair_id: Long;
    creator: string;
    reserve_address: string;
    pool_coin_denom: string;
    pool_coin_supply: string;
    min_price: string;
    max_price: string;
    price: string;
    balances?: PoolBalancesSDKType;
    prev_deposit_request_id: Long;
    prev_withdraw_request_id: Long;
    inactive: boolean;
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
export declare const QueryLiquidityPoolRequest: {
    encode(message: QueryLiquidityPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolRequest;
    fromPartial(object: DeepPartial<QueryLiquidityPoolRequest>): QueryLiquidityPoolRequest;
};
export declare const QueryLiquidityPoolResponse: {
    encode(message: QueryLiquidityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolResponse;
    fromPartial(object: DeepPartial<QueryLiquidityPoolResponse>): QueryLiquidityPoolResponse;
};
export declare const QueryLiquidityPoolByPoolCoinDenomRequest: {
    encode(message: QueryLiquidityPoolByPoolCoinDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolByPoolCoinDenomRequest;
    fromPartial(object: DeepPartial<QueryLiquidityPoolByPoolCoinDenomRequest>): QueryLiquidityPoolByPoolCoinDenomRequest;
};
export declare const QueryLiquidityPoolByReserveAccRequest: {
    encode(message: QueryLiquidityPoolByReserveAccRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolByReserveAccRequest;
    fromPartial(object: DeepPartial<QueryLiquidityPoolByReserveAccRequest>): QueryLiquidityPoolByReserveAccRequest;
};
export declare const QueryLiquidityPoolsRequest: {
    encode(message: QueryLiquidityPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolsRequest;
    fromPartial(object: DeepPartial<QueryLiquidityPoolsRequest>): QueryLiquidityPoolsRequest;
};
export declare const QueryLiquidityPoolsResponse: {
    encode(message: QueryLiquidityPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityPoolsResponse;
    fromPartial(object: DeepPartial<QueryLiquidityPoolsResponse>): QueryLiquidityPoolsResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryPairsRequest: {
    encode(message: QueryPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest;
    fromPartial(object: DeepPartial<QueryPairsRequest>): QueryPairsRequest;
};
export declare const QueryPairsResponse: {
    encode(message: QueryPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse;
    fromPartial(object: DeepPartial<QueryPairsResponse>): QueryPairsResponse;
};
export declare const QueryPairRequest: {
    encode(message: QueryPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest;
    fromPartial(object: DeepPartial<QueryPairRequest>): QueryPairRequest;
};
export declare const QueryPairResponse: {
    encode(message: QueryPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse;
    fromPartial(object: DeepPartial<QueryPairResponse>): QueryPairResponse;
};
export declare const QueryDepositRequestsRequest: {
    encode(message: QueryDepositRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestsRequest;
    fromPartial(object: DeepPartial<QueryDepositRequestsRequest>): QueryDepositRequestsRequest;
};
export declare const QueryDepositRequestsResponse: {
    encode(message: QueryDepositRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestsResponse;
    fromPartial(object: DeepPartial<QueryDepositRequestsResponse>): QueryDepositRequestsResponse;
};
export declare const QueryDepositRequestRequest: {
    encode(message: QueryDepositRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestRequest;
    fromPartial(object: DeepPartial<QueryDepositRequestRequest>): QueryDepositRequestRequest;
};
export declare const QueryDepositRequestResponse: {
    encode(message: QueryDepositRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequestResponse;
    fromPartial(object: DeepPartial<QueryDepositRequestResponse>): QueryDepositRequestResponse;
};
export declare const QueryWithdrawRequestsRequest: {
    encode(message: QueryWithdrawRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestsRequest;
    fromPartial(object: DeepPartial<QueryWithdrawRequestsRequest>): QueryWithdrawRequestsRequest;
};
export declare const QueryWithdrawRequestsResponse: {
    encode(message: QueryWithdrawRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestsResponse;
    fromPartial(object: DeepPartial<QueryWithdrawRequestsResponse>): QueryWithdrawRequestsResponse;
};
export declare const QueryWithdrawRequestRequest: {
    encode(message: QueryWithdrawRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestRequest;
    fromPartial(object: DeepPartial<QueryWithdrawRequestRequest>): QueryWithdrawRequestRequest;
};
export declare const QueryWithdrawRequestResponse: {
    encode(message: QueryWithdrawRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRequestResponse;
    fromPartial(object: DeepPartial<QueryWithdrawRequestResponse>): QueryWithdrawRequestResponse;
};
export declare const QueryOrdersRequest: {
    encode(message: QueryOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest;
    fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest;
};
export declare const QueryOrdersResponse: {
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse;
    fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse;
};
export declare const QueryOrderRequest: {
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest;
    fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse;
    fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse;
};
export declare const QueryOrdersByOrdererRequest: {
    encode(message: QueryOrdersByOrdererRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersByOrdererRequest;
    fromPartial(object: DeepPartial<QueryOrdersByOrdererRequest>): QueryOrdersByOrdererRequest;
};
export declare const QueryOrderBooksRequest: {
    encode(message: QueryOrderBooksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBooksRequest;
    fromPartial(object: DeepPartial<QueryOrderBooksRequest>): QueryOrderBooksRequest;
};
export declare const QueryOrderBooksResponse: {
    encode(message: QueryOrderBooksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBooksResponse;
    fromPartial(object: DeepPartial<QueryOrderBooksResponse>): QueryOrderBooksResponse;
};
export declare const PoolResponse: {
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse;
    fromPartial(object: DeepPartial<PoolResponse>): PoolResponse;
};
export declare const PoolBalances: {
    encode(message: PoolBalances, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolBalances;
    fromPartial(object: DeepPartial<PoolBalances>): PoolBalances;
};
export declare const OrderBookPairResponse: {
    encode(message: OrderBookPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookPairResponse;
    fromPartial(object: DeepPartial<OrderBookPairResponse>): OrderBookPairResponse;
};
export declare const OrderBookResponse: {
    encode(message: OrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookResponse;
    fromPartial(object: DeepPartial<OrderBookResponse>): OrderBookResponse;
};
export declare const OrderBookTickResponse: {
    encode(message: OrderBookTickResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookTickResponse;
    fromPartial(object: DeepPartial<OrderBookTickResponse>): OrderBookTickResponse;
};

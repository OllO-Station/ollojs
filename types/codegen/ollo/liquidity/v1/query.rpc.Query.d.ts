import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryLiquidityPoolsRequest, QueryLiquidityPoolsResponse, QueryLiquidityPoolRequest, QueryLiquidityPoolResponse, QueryLiquidityPoolByPoolCoinDenomRequest, QueryLiquidityPoolByReserveAccRequest, QueryPairsRequest, QueryPairsResponse, QueryPairRequest, QueryPairResponse, QueryDepositRequestsRequest, QueryDepositRequestsResponse, QueryDepositRequestRequest, QueryDepositRequestResponse, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponse, QueryWithdrawRequestRequest, QueryWithdrawRequestResponse, QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC query service for the liquidity module. */
export interface Query {
    /** "Returns a list of all liquidity pools with pagination */
    liquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    /** Returns the liquidity pool that corresponds to the pool_id." */
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get specific liquidity pool corresponding to the pool_coin_denom. */
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get specific liquidity pool corresponding to the reserve account. */
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    /** Pairs returns all liquidity pairs. */
    pairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
    /** Pair returns the specific pair. */
    pair(request: QueryPairRequest): Promise<QueryPairResponse>;
    /** DepositRequests returns all deposit requests. */
    depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse>;
    /** DepositRequest returns the specific deposit request. */
    depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse>;
    /** WithdrawRequests returns all withdraw requests. */
    withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse>;
    /** WithdrawRequest returns the specific withdraw request. */
    withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse>;
    /** Orders returns all orders within the pair. */
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    /** Order returns the specific order. */
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    /** OrdersByOrderer returns orders made by an orderer. */
    ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse>;
    /** Get all order books of the liquidity module. */
    orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
    /** Get all parameters of the liquidity module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    liquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    pairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
    pair(request: QueryPairRequest): Promise<QueryPairResponse>;
    depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse>;
    depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse>;
    withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse>;
    withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse>;
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse>;
    orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    liquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    pairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
    pair(request: QueryPairRequest): Promise<QueryPairResponse>;
    depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse>;
    depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse>;
    withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse>;
    withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse>;
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse>;
    orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};

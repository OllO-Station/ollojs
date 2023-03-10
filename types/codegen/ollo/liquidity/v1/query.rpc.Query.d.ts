import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByReserveAddressRequest, QueryPoolByPoolCoinDenomRequest, QueryPairsRequest, QueryPairsResponse, QueryPairRequest, QueryPairResponse, QueryDepositRequestsRequest, QueryDepositRequestsResponse, QueryDepositRequestRequest, QueryDepositRequestResponse, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponse, QueryWithdrawRequestRequest, QueryWithdrawRequestResponse, QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponse, QueryNumMMOrdersRequest, QueryNumMMOrdersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params returns parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Pools returns all liquidity pools. */
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Pool returns the specific liquidity pool. */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** PoolByReserveAddress returns all pools that correspond to the reserve account. */
    poolByReserveAddress(request: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponse>;
    /** PoolByPoolCoinDenom returns all pools that correspond to the pool coin denom. */
    poolByPoolCoinDenom(request: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponse>;
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
    /** OrderBooks returns an order book representation of orders. */
    orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
    /** NumMMOrders returns the number of active market making orders. */
    numMMOrders(request: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByReserveAddress(request: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponse>;
    poolByPoolCoinDenom(request: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponse>;
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
    numMMOrders(request: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByReserveAddress(request: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponse>;
    poolByPoolCoinDenom(request: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponse>;
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
    numMMOrders(request: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponse>;
};

import { LCDClient } from "@osmonauts/lcd";
import { QueryLiquidityPoolsRequest, QueryLiquidityPoolsResponseSDKType, QueryLiquidityPoolRequest, QueryLiquidityPoolResponseSDKType, QueryLiquidityPoolByPoolCoinDenomRequest, QueryLiquidityPoolByReserveAccRequest, QueryPairsRequest, QueryPairsResponseSDKType, QueryPairRequest, QueryPairResponseSDKType, QueryDepositRequestsRequest, QueryDepositRequestsResponseSDKType, QueryDepositRequestRequest, QueryDepositRequestResponseSDKType, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponseSDKType, QueryWithdrawRequestRequest, QueryWithdrawRequestResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    liquidityPools(params: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponseSDKType>;
    liquidityPool(params: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponseSDKType>;
    liquidityPoolByPoolCoinDenom(params: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponseSDKType>;
    liquidityPoolByReserveAcc(params: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponseSDKType>;
    pairs(params: QueryPairsRequest): Promise<QueryPairsResponseSDKType>;
    pair(params: QueryPairRequest): Promise<QueryPairResponseSDKType>;
    depositRequests(params: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponseSDKType>;
    depositRequest(params: QueryDepositRequestRequest): Promise<QueryDepositRequestResponseSDKType>;
    withdrawRequests(params: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponseSDKType>;
    withdrawRequest(params: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponseSDKType>;
    orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType>;
    order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType>;
    ordersByOrderer(params: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponseSDKType>;
    orderBooks(params: QueryOrderBooksRequest): Promise<QueryOrderBooksResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}

import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolByReserveAddressRequest, QueryPoolByPoolCoinDenomRequest, QueryPairsRequest, QueryPairsResponseSDKType, QueryPairRequest, QueryPairResponseSDKType, QueryDepositRequestsRequest, QueryDepositRequestsResponseSDKType, QueryDepositRequestRequest, QueryDepositRequestResponseSDKType, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponseSDKType, QueryWithdrawRequestRequest, QueryWithdrawRequestResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponseSDKType, QueryNumMMOrdersRequest, QueryNumMMOrdersResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    pools(params: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    poolByReserveAddress(params: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponseSDKType>;
    poolByPoolCoinDenom(params: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponseSDKType>;
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
    numMMOrders(params: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponseSDKType>;
}

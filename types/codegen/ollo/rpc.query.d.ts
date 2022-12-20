import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    ollo: {
        claim: {
            params(request?: import("./claim/query").QueryParamsRequest): Promise<import("./claim/query").QueryParamsResponse>;
            airdrops(request?: import("./claim/query").QueryAirdropsRequest): Promise<import("./claim/query").QueryAirdropsResponse>;
            airdrop(request: import("./claim/query").QueryAirdropRequest): Promise<import("./claim/query").QueryAirdropResponse>;
            claimRecord(request: import("./claim/query").QueryClaimRecordRequest): Promise<import("./claim/query").QueryClaimRecordResponse>;
        };
        inflation: {
            params(request?: import("./inflation/query").QueryParamsRequest): Promise<import("./inflation/query").QueryParamsResponse>;
        };
        liquidity: {
            liquidityPools(request: import("./liquidity/query").QueryLiquidityPoolsRequest): Promise<import("./liquidity/query").QueryLiquidityPoolsResponse>;
            liquidityPool(request: import("./liquidity/query").QueryLiquidityPoolRequest): Promise<import("./liquidity/query").QueryLiquidityPoolResponse>;
            liquidityPoolByPoolCoinDenom(request: import("./liquidity/query").QueryLiquidityPoolByPoolCoinDenomRequest): Promise<import("./liquidity/query").QueryLiquidityPoolResponse>;
            liquidityPoolByReserveAcc(request: import("./liquidity/query").QueryLiquidityPoolByReserveAccRequest): Promise<import("./liquidity/query").QueryLiquidityPoolResponse>;
            pairs(request: import("./liquidity/query").QueryPairsRequest): Promise<import("./liquidity/query").QueryPairsResponse>;
            pair(request: import("./liquidity/query").QueryPairRequest): Promise<import("./liquidity/query").QueryPairResponse>;
            depositRequests(request: import("./liquidity/query").QueryDepositRequestsRequest): Promise<import("./liquidity/query").QueryDepositRequestsResponse>;
            depositRequest(request: import("./liquidity/query").QueryDepositRequestRequest): Promise<import("./liquidity/query").QueryDepositRequestResponse>;
            withdrawRequests(request: import("./liquidity/query").QueryWithdrawRequestsRequest): Promise<import("./liquidity/query").QueryWithdrawRequestsResponse>;
            withdrawRequest(request: import("./liquidity/query").QueryWithdrawRequestRequest): Promise<import("./liquidity/query").QueryWithdrawRequestResponse>;
            orders(request: import("./liquidity/query").QueryOrdersRequest): Promise<import("./liquidity/query").QueryOrdersResponse>;
            order(request: import("./liquidity/query").QueryOrderRequest): Promise<import("./liquidity/query").QueryOrderResponse>;
            ordersByOrderer(request: import("./liquidity/query").QueryOrdersByOrdererRequest): Promise<import("./liquidity/query").QueryOrdersResponse>;
            orderBooks(request: import("./liquidity/query").QueryOrderBooksRequest): Promise<import("./liquidity/query").QueryOrderBooksResponse>;
            params(request?: import("./liquidity/query").QueryParamsRequest): Promise<import("./liquidity/query").QueryParamsResponse>;
        };
        loan: {
            params(request?: import("./loan/query").QueryParamsRequest): Promise<import("./loan/query").QueryParamsResponse>;
            loans(request: import("./loan/query").QueryGetLoansRequest): Promise<import("./loan/query").QueryGetLoansResponse>;
            loansAll(request?: import("./loan/query").QueryAllLoansRequest): Promise<import("./loan/query").QueryAllLoansResponse>;
        };
        market: {
            params(request?: import("./market/query").QueryParamsRequest): Promise<import("./market/query").QueryParamsResponse>;
        };
        ons: {
            params(request?: import("./ons/query").QueryParamsRequest): Promise<import("./ons/query").QueryParamsResponse>;
            whois(request: import("./ons/query").QueryGetWhoisRequest): Promise<import("./ons/query").QueryGetWhoisResponse>;
            whoisAll(request?: import("./ons/query").QueryAllWhoisRequest): Promise<import("./ons/query").QueryAllWhoisResponse>;
        };
        oracle: {
            params(request?: import("./oracle/query").QueryParamsRequest): Promise<import("./oracle/query").QueryParamsResponse>;
            pricesResult(request: import("./oracle/query").QueryPricesRequest): Promise<import("./oracle/query").QueryPricesResponse>;
            lastPricesId(request?: import("./oracle/query").QueryLastPricesIdRequest): Promise<import("./oracle/query").QueryLastPricesIdResponse>;
        };
        reserve: {
            params(request?: import("./reserve/query").QueryParamsRequest): Promise<import("./reserve/query").QueryParamsResponse>;
        };
    };
}>;

export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    ollo: {
        claim: import("./claim/query.lcd").LCDQueryClient;
        inflation: import("./inflation/query.lcd").LCDQueryClient;
        liquidity: import("./liquidity/query.lcd").LCDQueryClient;
        loan: import("./loan/query.lcd").LCDQueryClient;
        market: import("./market/query.lcd").LCDQueryClient;
        ons: import("./ons/query.lcd").LCDQueryClient;
        oracle: import("./oracle/query.lcd").LCDQueryClient;
        reserve: import("./reserve/query.lcd").LCDQueryClient;
    };
}>;

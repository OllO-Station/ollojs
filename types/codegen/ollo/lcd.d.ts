export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        base: {
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
            };
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        group: {
            v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    ollo: {
        claim: {
            v1: import("./claim/v1/query.lcd").LCDQueryClient;
        };
        farming: {
            v1: import("./farming/v1/query.lcd").LCDQueryClient;
        };
        grants: {
            v1: import("./grants/v1/query.lcd").LCDQueryClient;
        };
        liquidity: {
            v1: import("./liquidity/v1/query.lcd").LCDQueryClient;
        };
        loan: {
            v1: import("./loan/v1/query.lcd").LCDQueryClient;
        };
        market: {
            v1: import("./market/v1/query.lcd").LCDQueryClient;
        };
        mint: {
            v1: import("./mint/v1/query.lcd").LCDQueryClient;
        };
        nft: {
            v1: import("./nft/v1/query.lcd").LCDQueryClient;
        };
        ons: {
            v1: import("./ons/v1/query.lcd").LCDQueryClient;
        };
        reserve: {
            v1: import("./reserve/v1/query.lcd").LCDQueryClient;
        };
        token: {
            v1: import("./token/v1/query.lcd").LCDQueryClient;
        };
    };
}>;

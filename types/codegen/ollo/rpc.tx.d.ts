import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        consensus: {
            v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
    ollo: {
        auth: {
            v1: import("./auth/v1/tx.rpc.msg").MsgClientImpl;
        };
        claim: {
            v1: import("./claim/v1/tx.rpc.msg").MsgClientImpl;
        };
        emissions: {
            v1: import("./emissions/v1/tx.rpc.msg").MsgClientImpl;
        };
        farming: {
            v1: import("./farming/v1/tx.rpc.msg").MsgClientImpl;
        };
        grants: {
            v1: import("./grants/v1/tx.rpc.msg").MsgClientImpl;
        };
        incentive: {
            v1: import("./incentive/v1/tx.rpc.msg").MsgClientImpl;
        };
        lend: {
            v1: import("./lend/v1/tx.rpc.msg").MsgClientImpl;
        };
        liquidity: {
            v1: import("./liquidity/v1/tx.rpc.msg").MsgClientImpl;
        };
        lock: {
            v1: import("./lock/v1/tx.rpc.msg").MsgClientImpl;
        };
        nft: {
            v1: import("./nft/v1/tx.rpc.msg").MsgClientImpl;
        };
        ons: {
            v1: import("./ons/v1/tx.rpc.msg").MsgClientImpl;
        };
        prices: {
            v1: import("./prices/v1/tx.rpc.msg").MsgClientImpl;
        };
        reserve: {
            v1: import("./reserve/v1/tx.rpc.msg").MsgClientImpl;
        };
        token: {
            v1: import("./token/v1/tx.rpc.msg").MsgClientImpl;
        };
        vault: {
            v1: import("./vault/v1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;

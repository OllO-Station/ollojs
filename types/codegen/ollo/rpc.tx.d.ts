import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    ollo: {
        claim: import("./claim/tx.rpc.msg").MsgClientImpl;
        liquidity: import("./liquidity/tx.rpc.msg").MsgClientImpl;
        loan: import("./loan/tx.rpc.msg").MsgClientImpl;
        ons: import("./ons/tx.rpc.msg").MsgClientImpl;
        oracle: import("./oracle/tx.rpc.msg").MsgClientImpl;
    };
}>;

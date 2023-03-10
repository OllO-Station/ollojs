import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePair, MsgCreatePool, MsgCreateRangedPool, MsgDeposit, MsgWithdraw, MsgLimitOrder, MsgMarketOrder, MsgMMOrder, MsgCancelOrder, MsgCancelAllOrders } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPair(value: MsgCreatePair): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        createRangedPool(value: MsgCreateRangedPool): {
            typeUrl: string;
            value: Uint8Array;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        limitOrder(value: MsgLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        marketOrder(value: MsgMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        mMOrder(value: MsgMMOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelAllOrders(value: MsgCancelAllOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPair(value: MsgCreatePair): {
            typeUrl: string;
            value: MsgCreatePair;
        };
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        createRangedPool(value: MsgCreateRangedPool): {
            typeUrl: string;
            value: MsgCreateRangedPool;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        limitOrder(value: MsgLimitOrder): {
            typeUrl: string;
            value: MsgLimitOrder;
        };
        marketOrder(value: MsgMarketOrder): {
            typeUrl: string;
            value: MsgMarketOrder;
        };
        mMOrder(value: MsgMMOrder): {
            typeUrl: string;
            value: MsgMMOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelAllOrders(value: MsgCancelAllOrders): {
            typeUrl: string;
            value: MsgCancelAllOrders;
        };
    };
    fromPartial: {
        createPair(value: MsgCreatePair): {
            typeUrl: string;
            value: MsgCreatePair;
        };
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        createRangedPool(value: MsgCreateRangedPool): {
            typeUrl: string;
            value: MsgCreateRangedPool;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        limitOrder(value: MsgLimitOrder): {
            typeUrl: string;
            value: MsgLimitOrder;
        };
        marketOrder(value: MsgMarketOrder): {
            typeUrl: string;
            value: MsgMarketOrder;
        };
        mMOrder(value: MsgMMOrder): {
            typeUrl: string;
            value: MsgMMOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelAllOrders(value: MsgCancelAllOrders): {
            typeUrl: string;
            value: MsgCancelAllOrders;
        };
    };
};

import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgCreatePair, MsgCreatePoolCapped, MsgDeposit, MsgWithdraw, MsgOrderLimit, MsgOrderMarket, MsgOrderMarketMaking, MsgCancelOrder, MsgCancelAllOrders, MsgCancelMarketMakingOrder } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPair(value: MsgCreatePair): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPoolCapped(value: MsgCreatePoolCapped): {
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
        orderLimit(value: MsgOrderLimit): {
            typeUrl: string;
            value: Uint8Array;
        };
        orderMarket(value: MsgOrderMarket): {
            typeUrl: string;
            value: Uint8Array;
        };
        orderMarketMaking(value: MsgOrderMarketMaking): {
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
        cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        createPair(value: MsgCreatePair): {
            typeUrl: string;
            value: MsgCreatePair;
        };
        createPoolCapped(value: MsgCreatePoolCapped): {
            typeUrl: string;
            value: MsgCreatePoolCapped;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        orderLimit(value: MsgOrderLimit): {
            typeUrl: string;
            value: MsgOrderLimit;
        };
        orderMarket(value: MsgOrderMarket): {
            typeUrl: string;
            value: MsgOrderMarket;
        };
        orderMarketMaking(value: MsgOrderMarketMaking): {
            typeUrl: string;
            value: MsgOrderMarketMaking;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelAllOrders(value: MsgCancelAllOrders): {
            typeUrl: string;
            value: MsgCancelAllOrders;
        };
        cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder): {
            typeUrl: string;
            value: MsgCancelMarketMakingOrder;
        };
    };
    fromPartial: {
        createPool(value: MsgCreatePool): {
            typeUrl: string;
            value: MsgCreatePool;
        };
        createPair(value: MsgCreatePair): {
            typeUrl: string;
            value: MsgCreatePair;
        };
        createPoolCapped(value: MsgCreatePoolCapped): {
            typeUrl: string;
            value: MsgCreatePoolCapped;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        orderLimit(value: MsgOrderLimit): {
            typeUrl: string;
            value: MsgOrderLimit;
        };
        orderMarket(value: MsgOrderMarket): {
            typeUrl: string;
            value: MsgOrderMarket;
        };
        orderMarketMaking(value: MsgOrderMarketMaking): {
            typeUrl: string;
            value: MsgOrderMarketMaking;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelAllOrders(value: MsgCancelAllOrders): {
            typeUrl: string;
            value: MsgCancelAllOrders;
        };
        cancelMarketMakingOrder(value: MsgCancelMarketMakingOrder): {
            typeUrl: string;
            value: MsgCancelMarketMakingOrder;
        };
    };
};

import { Rpc } from "../../helpers";
import { MsgCreatePool, MsgCreatePoolResponse, MsgCreatePair, MsgCreatePairResponse, MsgCreatePoolCapped, MsgCreatePoolCappedResponse, MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgOrderLimit, MsgOrderLimitResponse, MsgOrderMarket, MsgOrderMarketResponse, MsgOrderMarketMaking, MsgOrderMarketMakingResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgCancelAllOrders, MsgCancelAllOrdersResponse, MsgCancelMarketMakingOrder, MsgCancelMarketMakingOrderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** CreatePool defines a method for creating a pool */
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /** CreatePair defines a method for creating a pair */
    createPair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    /** CreatePool defines a method for creating a capped (ranged) pool */
    createPoolCapped(request: MsgCreatePoolCapped): Promise<MsgCreatePoolCappedResponse>;
    /** Deposit defines a method for depositing coins to a pool */
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    /** Withdraw defines a method for withdrawing coins from a pool */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    /** OrderLimit creates a new limit order type */
    orderLimit(request: MsgOrderLimit): Promise<MsgOrderLimitResponse>;
    /** OrderMarket creates a new market order type */
    orderMarket(request: MsgOrderMarket): Promise<MsgOrderMarketResponse>;
    /** OrderMarketMaking creates a new market making order type */
    orderMarketMaking(request: MsgOrderMarketMaking): Promise<MsgOrderMarketMakingResponse>;
    /** CancelOrder cancels an existing order */
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    /** CancelOrder cancels all existing orders */
    cancelAllOrders(request: MsgCancelAllOrders): Promise<MsgCancelAllOrdersResponse>;
    /** CancelMarketMakingOrder cancels an existing market making order */
    cancelMarketMakingOrder(request: MsgCancelMarketMakingOrder): Promise<MsgCancelMarketMakingOrderResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    createPair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    createPoolCapped(request: MsgCreatePoolCapped): Promise<MsgCreatePoolCappedResponse>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    orderLimit(request: MsgOrderLimit): Promise<MsgOrderLimitResponse>;
    orderMarket(request: MsgOrderMarket): Promise<MsgOrderMarketResponse>;
    orderMarketMaking(request: MsgOrderMarketMaking): Promise<MsgOrderMarketMakingResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    cancelAllOrders(request: MsgCancelAllOrders): Promise<MsgCancelAllOrdersResponse>;
    cancelMarketMakingOrder(request: MsgCancelMarketMakingOrder): Promise<MsgCancelMarketMakingOrderResponse>;
}

import { Rpc } from "../../../helpers";
import { MsgCreatePair, MsgCreatePairResponse, MsgCreatePool, MsgCreatePoolResponse, MsgCreateRangedPool, MsgCreateRangedPoolResponse, MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgLimitOrder, MsgLimitOrderResponse, MsgMarketOrder, MsgMarketOrderResponse, MsgMMOrder, MsgMMOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgCancelAllOrders, MsgCancelAllOrdersResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** CreatePair defines a method for creating a pair */
    createPair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    /** CreatePool defines a method for creating a pool */
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /** CreateRangePool defines a method for creating a ranged pool */
    createRangedPool(request: MsgCreateRangedPool): Promise<MsgCreateRangedPoolResponse>;
    /** Deposit defines a method for depositing coins to the pool */
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    /** Withdraw defines a method for withdrawing pool coin from the pool */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    /** LimitOrder defines a method for making a limit order */
    limitOrder(request: MsgLimitOrder): Promise<MsgLimitOrderResponse>;
    /** MarketOrder defines a method for making a market order */
    marketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse>;
    /** MsgMMOrder defines a method for making a MM(market making) order */
    mMOrder(request: MsgMMOrder): Promise<MsgMMOrderResponse>;
    /** CancelOrder defines a method for cancelling an order */
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    /** CancelAllOrders defines a method for cancelling all orders */
    cancelAllOrders(request: MsgCancelAllOrders): Promise<MsgCancelAllOrdersResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createPair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    createRangedPool(request: MsgCreateRangedPool): Promise<MsgCreateRangedPoolResponse>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    limitOrder(request: MsgLimitOrder): Promise<MsgLimitOrderResponse>;
    marketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse>;
    mMOrder(request: MsgMMOrder): Promise<MsgMMOrderResponse>;
    cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
    cancelAllOrders(request: MsgCancelAllOrders): Promise<MsgCancelAllOrdersResponse>;
}

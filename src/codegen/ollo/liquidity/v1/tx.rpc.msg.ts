import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPool = this.createPool.bind(this);
    this.createPair = this.createPair.bind(this);
    this.createPoolCapped = this.createPoolCapped.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.orderLimit = this.orderLimit.bind(this);
    this.orderMarket = this.orderMarket.bind(this);
    this.orderMarketMaking = this.orderMarketMaking.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.cancelAllOrders = this.cancelAllOrders.bind(this);
    this.cancelMarketMakingOrder = this.cancelMarketMakingOrder.bind(this);
  }

  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }

  createPair(request: MsgCreatePair): Promise<MsgCreatePairResponse> {
    const data = MsgCreatePair.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CreatePair", data);
    return promise.then(data => MsgCreatePairResponse.decode(new _m0.Reader(data)));
  }

  createPoolCapped(request: MsgCreatePoolCapped): Promise<MsgCreatePoolCappedResponse> {
    const data = MsgCreatePoolCapped.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CreatePoolCapped", data);
    return promise.then(data => MsgCreatePoolCappedResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  orderLimit(request: MsgOrderLimit): Promise<MsgOrderLimitResponse> {
    const data = MsgOrderLimit.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "OrderLimit", data);
    return promise.then(data => MsgOrderLimitResponse.decode(new _m0.Reader(data)));
  }

  orderMarket(request: MsgOrderMarket): Promise<MsgOrderMarketResponse> {
    const data = MsgOrderMarket.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "OrderMarket", data);
    return promise.then(data => MsgOrderMarketResponse.decode(new _m0.Reader(data)));
  }

  orderMarketMaking(request: MsgOrderMarketMaking): Promise<MsgOrderMarketMakingResponse> {
    const data = MsgOrderMarketMaking.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "OrderMarketMaking", data);
    return promise.then(data => MsgOrderMarketMakingResponse.decode(new _m0.Reader(data)));
  }

  cancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CancelOrder", data);
    return promise.then(data => MsgCancelOrderResponse.decode(new _m0.Reader(data)));
  }

  cancelAllOrders(request: MsgCancelAllOrders): Promise<MsgCancelAllOrdersResponse> {
    const data = MsgCancelAllOrders.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CancelAllOrders", data);
    return promise.then(data => MsgCancelAllOrdersResponse.decode(new _m0.Reader(data)));
  }

  cancelMarketMakingOrder(request: MsgCancelMarketMakingOrder): Promise<MsgCancelMarketMakingOrderResponse> {
    const data = MsgCancelMarketMakingOrder.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CancelMarketMakingOrder", data);
    return promise.then(data => MsgCancelMarketMakingOrderResponse.decode(new _m0.Reader(data)));
  }

}
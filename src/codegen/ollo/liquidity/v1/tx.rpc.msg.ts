import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPair = this.createPair.bind(this);
    this.createPool = this.createPool.bind(this);
    this.createRangedPool = this.createRangedPool.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.limitOrder = this.limitOrder.bind(this);
    this.marketOrder = this.marketOrder.bind(this);
    this.mMOrder = this.mMOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.cancelAllOrders = this.cancelAllOrders.bind(this);
  }

  createPair(request: MsgCreatePair): Promise<MsgCreatePairResponse> {
    const data = MsgCreatePair.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CreatePair", data);
    return promise.then(data => MsgCreatePairResponse.decode(new _m0.Reader(data)));
  }

  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
  }

  createRangedPool(request: MsgCreateRangedPool): Promise<MsgCreateRangedPoolResponse> {
    const data = MsgCreateRangedPool.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "CreateRangedPool", data);
    return promise.then(data => MsgCreateRangedPoolResponse.decode(new _m0.Reader(data)));
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

  limitOrder(request: MsgLimitOrder): Promise<MsgLimitOrderResponse> {
    const data = MsgLimitOrder.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "LimitOrder", data);
    return promise.then(data => MsgLimitOrderResponse.decode(new _m0.Reader(data)));
  }

  marketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse> {
    const data = MsgMarketOrder.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "MarketOrder", data);
    return promise.then(data => MsgMarketOrderResponse.decode(new _m0.Reader(data)));
  }

  mMOrder(request: MsgMMOrder): Promise<MsgMMOrderResponse> {
    const data = MsgMMOrder.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Msg", "MMOrder", data);
    return promise.then(data => MsgMMOrderResponse.decode(new _m0.Reader(data)));
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

}
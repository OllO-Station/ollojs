import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryLiquidityPoolsRequest, QueryLiquidityPoolsResponse, QueryLiquidityPoolRequest, QueryLiquidityPoolResponse, QueryLiquidityPoolByPoolCoinDenomRequest, QueryLiquidityPoolByReserveAccRequest, QueryPairsRequest, QueryPairsResponse, QueryPairRequest, QueryPairResponse, QueryDepositRequestsRequest, QueryDepositRequestsResponse, QueryDepositRequestRequest, QueryDepositRequestResponse, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponse, QueryWithdrawRequestRequest, QueryWithdrawRequestResponse, QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC query service for the liquidity module. */

export interface Query {
  /** "Returns a list of all liquidity pools with pagination */
  liquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
  /** Returns the liquidity pool that corresponds to the pool_id." */

  liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
  /** Get specific liquidity pool corresponding to the pool_coin_denom. */

  liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
  /** Get specific liquidity pool corresponding to the reserve account. */

  liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
  /** Pairs returns all liquidity pairs. */

  pairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
  /** Pair returns the specific pair. */

  pair(request: QueryPairRequest): Promise<QueryPairResponse>;
  /** DepositRequests returns all deposit requests. */

  depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse>;
  /** DepositRequest returns the specific deposit request. */

  depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse>;
  /** WithdrawRequests returns all withdraw requests. */

  withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse>;
  /** WithdrawRequest returns the specific withdraw request. */

  withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse>;
  /** Orders returns all orders within the pair. */

  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order returns the specific order. */

  order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** OrdersByOrderer returns orders made by an orderer. */

  ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse>;
  orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
  /** Get all parameters of the liquidity module. */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.liquidityPools = this.liquidityPools.bind(this);
    this.liquidityPool = this.liquidityPool.bind(this);
    this.liquidityPoolByPoolCoinDenom = this.liquidityPoolByPoolCoinDenom.bind(this);
    this.liquidityPoolByReserveAcc = this.liquidityPoolByReserveAcc.bind(this);
    this.pairs = this.pairs.bind(this);
    this.pair = this.pair.bind(this);
    this.depositRequests = this.depositRequests.bind(this);
    this.depositRequest = this.depositRequest.bind(this);
    this.withdrawRequests = this.withdrawRequests.bind(this);
    this.withdrawRequest = this.withdrawRequest.bind(this);
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.ordersByOrderer = this.ordersByOrderer.bind(this);
    this.orderBooks = this.orderBooks.bind(this);
    this.params = this.params.bind(this);
  }

  liquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse> {
    const data = QueryLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "LiquidityPools", data);
    return promise.then(data => QueryLiquidityPoolsResponse.decode(new _m0.Reader(data)));
  }

  liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "LiquidityPool", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "LiquidityPoolByPoolCoinDenom", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "LiquidityPoolByReserveAcc", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
  }

  pairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
    const data = QueryPairsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "Pairs", data);
    return promise.then(data => QueryPairsResponse.decode(new _m0.Reader(data)));
  }

  pair(request: QueryPairRequest): Promise<QueryPairResponse> {
    const data = QueryPairRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "Pair", data);
    return promise.then(data => QueryPairResponse.decode(new _m0.Reader(data)));
  }

  depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse> {
    const data = QueryDepositRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "DepositRequests", data);
    return promise.then(data => QueryDepositRequestsResponse.decode(new _m0.Reader(data)));
  }

  depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse> {
    const data = QueryDepositRequestRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "DepositRequest", data);
    return promise.then(data => QueryDepositRequestResponse.decode(new _m0.Reader(data)));
  }

  withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse> {
    const data = QueryWithdrawRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "WithdrawRequests", data);
    return promise.then(data => QueryWithdrawRequestsResponse.decode(new _m0.Reader(data)));
  }

  withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse> {
    const data = QueryWithdrawRequestRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "WithdrawRequest", data);
    return promise.then(data => QueryWithdrawRequestResponse.decode(new _m0.Reader(data)));
  }

  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "Orders", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  }

  order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new _m0.Reader(data)));
  }

  ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersByOrdererRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "OrdersByOrderer", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  }

  orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse> {
    const data = QueryOrderBooksRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "OrderBooks", data);
    return promise.then(data => QueryOrderBooksResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    liquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse> {
      return queryService.liquidityPools(request);
    },

    liquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPool(request);
    },

    liquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPoolByPoolCoinDenom(request);
    },

    liquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse> {
      return queryService.liquidityPoolByReserveAcc(request);
    },

    pairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
      return queryService.pairs(request);
    },

    pair(request: QueryPairRequest): Promise<QueryPairResponse> {
      return queryService.pair(request);
    },

    depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse> {
      return queryService.depositRequests(request);
    },

    depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse> {
      return queryService.depositRequest(request);
    },

    withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse> {
      return queryService.withdrawRequests(request);
    },

    withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse> {
      return queryService.withdrawRequest(request);
    },

    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
      return queryService.orders(request);
    },

    order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
      return queryService.order(request);
    },

    ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse> {
      return queryService.ordersByOrderer(request);
    },

    orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse> {
      return queryService.orderBooks(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};
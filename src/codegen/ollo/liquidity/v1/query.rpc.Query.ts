import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByReserveAddressRequest, QueryPoolByPoolCoinDenomRequest, QueryPairsRequest, QueryPairsResponse, QueryPairRequest, QueryPairResponse, QueryDepositRequestsRequest, QueryDepositRequestsResponse, QueryDepositRequestRequest, QueryDepositRequestResponse, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponse, QueryWithdrawRequestRequest, QueryWithdrawRequestResponse, QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponse, QueryNumMMOrdersRequest, QueryNumMMOrdersResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Params returns parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Pools returns all liquidity pools. */

  pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Pool returns the specific liquidity pool. */

  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** PoolByReserveAddress returns all pools that correspond to the reserve account. */

  poolByReserveAddress(request: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponse>;
  /** PoolByPoolCoinDenom returns all pools that correspond to the pool coin denom. */

  poolByPoolCoinDenom(request: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponse>;
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
  /** OrderBooks returns an order book representation of orders. */

  orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse>;
  /** NumMMOrders returns the number of active market making orders. */

  numMMOrders(request: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pools = this.pools.bind(this);
    this.pool = this.pool.bind(this);
    this.poolByReserveAddress = this.poolByReserveAddress.bind(this);
    this.poolByPoolCoinDenom = this.poolByPoolCoinDenom.bind(this);
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
    this.numMMOrders = this.numMMOrders.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }

  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  poolByReserveAddress(request: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByReserveAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "PoolByReserveAddress", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  poolByPoolCoinDenom(request: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByPoolCoinDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "PoolByPoolCoinDenom", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  pairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
    const data = QueryPairsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Pairs", data);
    return promise.then(data => QueryPairsResponse.decode(new _m0.Reader(data)));
  }

  pair(request: QueryPairRequest): Promise<QueryPairResponse> {
    const data = QueryPairRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Pair", data);
    return promise.then(data => QueryPairResponse.decode(new _m0.Reader(data)));
  }

  depositRequests(request: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponse> {
    const data = QueryDepositRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "DepositRequests", data);
    return promise.then(data => QueryDepositRequestsResponse.decode(new _m0.Reader(data)));
  }

  depositRequest(request: QueryDepositRequestRequest): Promise<QueryDepositRequestResponse> {
    const data = QueryDepositRequestRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "DepositRequest", data);
    return promise.then(data => QueryDepositRequestResponse.decode(new _m0.Reader(data)));
  }

  withdrawRequests(request: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponse> {
    const data = QueryWithdrawRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "WithdrawRequests", data);
    return promise.then(data => QueryWithdrawRequestsResponse.decode(new _m0.Reader(data)));
  }

  withdrawRequest(request: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponse> {
    const data = QueryWithdrawRequestRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "WithdrawRequest", data);
    return promise.then(data => QueryWithdrawRequestResponse.decode(new _m0.Reader(data)));
  }

  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Orders", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  }

  order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new _m0.Reader(data)));
  }

  ordersByOrderer(request: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersByOrdererRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "OrdersByOrderer", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  }

  orderBooks(request: QueryOrderBooksRequest): Promise<QueryOrderBooksResponse> {
    const data = QueryOrderBooksRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "OrderBooks", data);
    return promise.then(data => QueryOrderBooksResponse.decode(new _m0.Reader(data)));
  }

  numMMOrders(request: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponse> {
    const data = QueryNumMMOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("ollo.liquidity.v1.Query", "NumMMOrders", data);
    return promise.then(data => QueryNumMMOrdersResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },

    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },

    poolByReserveAddress(request: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponse> {
      return queryService.poolByReserveAddress(request);
    },

    poolByPoolCoinDenom(request: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponse> {
      return queryService.poolByPoolCoinDenom(request);
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

    numMMOrders(request: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponse> {
      return queryService.numMMOrders(request);
    }

  };
};
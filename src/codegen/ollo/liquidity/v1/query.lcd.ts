import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolByReserveAddressRequest, QueryPoolByPoolCoinDenomRequest, QueryPairsRequest, QueryPairsResponseSDKType, QueryPairRequest, QueryPairResponseSDKType, QueryDepositRequestsRequest, QueryDepositRequestsResponseSDKType, QueryDepositRequestRequest, QueryDepositRequestResponseSDKType, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponseSDKType, QueryWithdrawRequestRequest, QueryWithdrawRequestResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponseSDKType, QueryNumMMOrdersRequest, QueryNumMMOrdersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params returns parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Pools returns all liquidity pools. */


  async pools(params: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pairId !== "undefined") {
      options.params.pair_id = params.pairId;
    }

    if (typeof params?.disabled !== "undefined") {
      options.params.disabled = params.disabled;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/v1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
  /* Pool returns the specific liquidity pool. */


  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* PoolByReserveAddress returns all pools that correspond to the reserve account. */


  async poolByReserveAddress(params: QueryPoolByReserveAddressRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pools/reserve_address/${params.reserveAddress}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* PoolByPoolCoinDenom returns all pools that correspond to the pool coin denom. */


  async poolByPoolCoinDenom(params: QueryPoolByPoolCoinDenomRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pools/pool_coin_denom/${params.poolCoinDenom}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Pairs returns all liquidity pairs. */


  async pairs(params: QueryPairsRequest): Promise<QueryPairsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denoms !== "undefined") {
      options.params.denoms = params.denoms;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/v1/pairs`;
    return await this.req.get<QueryPairsResponseSDKType>(endpoint, options);
  }
  /* Pair returns the specific pair. */


  async pair(params: QueryPairRequest): Promise<QueryPairResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pairs/${params.pairId}`;
    return await this.req.get<QueryPairResponseSDKType>(endpoint);
  }
  /* DepositRequests returns all deposit requests. */


  async depositRequests(params: QueryDepositRequestsRequest): Promise<QueryDepositRequestsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/v1/pools/${params.poolId}/deposit_requests`;
    return await this.req.get<QueryDepositRequestsResponseSDKType>(endpoint, options);
  }
  /* DepositRequest returns the specific deposit request. */


  async depositRequest(params: QueryDepositRequestRequest): Promise<QueryDepositRequestResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pools/${params.poolId}/deposit_requests/${params.id}`;
    return await this.req.get<QueryDepositRequestResponseSDKType>(endpoint);
  }
  /* WithdrawRequests returns all withdraw requests. */


  async withdrawRequests(params: QueryWithdrawRequestsRequest): Promise<QueryWithdrawRequestsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/v1/pools/${params.poolId}/withdraw_requests`;
    return await this.req.get<QueryWithdrawRequestsResponseSDKType>(endpoint, options);
  }
  /* WithdrawRequest returns the specific withdraw request. */


  async withdrawRequest(params: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pools/${params.poolId}/withdraw_requests/${params.id}`;
    return await this.req.get<QueryWithdrawRequestResponseSDKType>(endpoint);
  }
  /* Orders returns all orders within the pair. */


  async orders(params: QueryOrdersRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/v1/pairs/${params.pairId}/orders`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* Order returns the specific order. */


  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/pairs/${params.pairId}/orders/${params.id}`;
    return await this.req.get<QueryOrderResponseSDKType>(endpoint);
  }
  /* OrdersByOrderer returns orders made by an orderer. */


  async ordersByOrderer(params: QueryOrdersByOrdererRequest): Promise<QueryOrdersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pairId !== "undefined") {
      options.params.pair_id = params.pairId;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/v1/orders/${params.orderer}`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* OrderBooks returns an order book representation of orders. */


  async orderBooks(params: QueryOrderBooksRequest): Promise<QueryOrderBooksResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pairIds !== "undefined") {
      options.params.pair_ids = params.pairIds;
    }

    if (typeof params?.priceUnitPowers !== "undefined") {
      options.params.price_unit_powers = params.priceUnitPowers;
    }

    if (typeof params?.numTicks !== "undefined") {
      options.params.num_ticks = params.numTicks;
    }

    const endpoint = `ollo/liquidity/v1/order_books`;
    return await this.req.get<QueryOrderBooksResponseSDKType>(endpoint, options);
  }
  /* NumMMOrders returns the number of active market making orders. */


  async numMMOrders(params: QueryNumMMOrdersRequest): Promise<QueryNumMMOrdersResponseSDKType> {
    const endpoint = `ollo/liquidity/v1/num_mm_orders/${params.orderer}/${params.pairId}`;
    return await this.req.get<QueryNumMMOrdersResponseSDKType>(endpoint);
  }

}
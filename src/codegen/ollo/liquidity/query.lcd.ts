import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryLiquidityPoolsRequest, QueryLiquidityPoolsResponseSDKType, QueryLiquidityPoolRequest, QueryLiquidityPoolResponseSDKType, QueryLiquidityPoolByPoolCoinDenomRequest, QueryLiquidityPoolByReserveAccRequest, QueryPairsRequest, QueryPairsResponseSDKType, QueryPairRequest, QueryPairResponseSDKType, QueryDepositRequestsRequest, QueryDepositRequestsResponseSDKType, QueryDepositRequestRequest, QueryDepositRequestResponseSDKType, QueryWithdrawRequestsRequest, QueryWithdrawRequestsResponseSDKType, QueryWithdrawRequestRequest, QueryWithdrawRequestResponseSDKType, QueryOrdersRequest, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderResponseSDKType, QueryOrdersByOrdererRequest, QueryOrderBooksRequest, QueryOrderBooksResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* "Returns a list of all liquidity pools with pagination */


  async liquidityPools(params: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pairId !== "undefined") {
      options.params.pair_id = params.pairId;
    }

    if (typeof params?.inactive !== "undefined") {
      options.params.inactive = params.inactive;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ollo/liquidity/pools`;
    return await this.req.get<QueryLiquidityPoolsResponseSDKType>(endpoint, options);
  }
  /* Returns the liquidity pool that corresponds to the pool_id." */


  async liquidityPool(params: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponseSDKType> {
    const endpoint = `ollo/liquidity/pools/${params.poolId}`;
    return await this.req.get<QueryLiquidityPoolResponseSDKType>(endpoint);
  }
  /* Get specific liquidity pool corresponding to the pool_coin_denom. */


  async liquidityPoolByPoolCoinDenom(params: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponseSDKType> {
    const endpoint = `ollo/liquidity/pools/pool_coin_denom/${params.poolCoinDenom}`;
    return await this.req.get<QueryLiquidityPoolResponseSDKType>(endpoint);
  }
  /* Get specific liquidity pool corresponding to the reserve account. */


  async liquidityPoolByReserveAcc(params: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponseSDKType> {
    const endpoint = `ollo/liquidity/pools/reserve_acc/${params.reserveAcc}`;
    return await this.req.get<QueryLiquidityPoolResponseSDKType>(endpoint);
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

    const endpoint = `ollo/liquidity/pairs`;
    return await this.req.get<QueryPairsResponseSDKType>(endpoint, options);
  }
  /* Pair returns the specific pair. */


  async pair(params: QueryPairRequest): Promise<QueryPairResponseSDKType> {
    const endpoint = `ollo/liquidity/pairs/${params.pairId}`;
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

    const endpoint = `ollo/liquidity/pools/${params.poolId}/deposit_requests`;
    return await this.req.get<QueryDepositRequestsResponseSDKType>(endpoint, options);
  }
  /* DepositRequest returns the specific deposit request. */


  async depositRequest(params: QueryDepositRequestRequest): Promise<QueryDepositRequestResponseSDKType> {
    const endpoint = `ollo/liquidity/pools/${params.poolId}/deposit_requests/${params.id}`;
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

    const endpoint = `ollo/liquidity/pools/${params.poolId}/withdraw_requests`;
    return await this.req.get<QueryWithdrawRequestsResponseSDKType>(endpoint, options);
  }
  /* WithdrawRequest returns the specific withdraw request. */


  async withdrawRequest(params: QueryWithdrawRequestRequest): Promise<QueryWithdrawRequestResponseSDKType> {
    const endpoint = `ollo/liquidity/pools/${params.poolId}/withdraw_requests/${params.id}`;
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

    const endpoint = `ollo/liquidity/pairs/${params.pairId}/orders`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* Order returns the specific order. */


  async order(params: QueryOrderRequest): Promise<QueryOrderResponseSDKType> {
    const endpoint = `ollo/liquidity/pairs/${params.pairId}/orders/${params.id}`;
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

    const endpoint = `ollo/liquidity/orders/${params.orderer}`;
    return await this.req.get<QueryOrdersResponseSDKType>(endpoint, options);
  }
  /* OrderBooks */


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

    const endpoint = `ollo/liquidity/order_books`;
    return await this.req.get<QueryOrderBooksResponseSDKType>(endpoint, options);
  }
  /* Get all parameters of the liquidity module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ollo/liquidity/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}
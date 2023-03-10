import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryPlansRequest is the request type for the Query/Plans RPC method. */

export interface QueryPlansRequest {
  type: string;
  farmingPoolAddress: string;
  terminationAddress: string;
  stakingCoinDenom: string;
  terminated: string;
  pagination?: PageRequest;
}
/** QueryPlansRequest is the request type for the Query/Plans RPC method. */

export interface QueryPlansRequestSDKType {
  type: string;
  farming_pool_address: string;
  termination_address: string;
  staking_coin_denom: string;
  terminated: string;
  pagination?: PageRequestSDKType;
}
/** QueryPlansResponse is the response type for the Query/Plans RPC method. */

export interface QueryPlansResponse {
  /** plans are the existing plans */
  plans: Any[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryPlansResponse is the response type for the Query/Plans RPC method. */

export interface QueryPlansResponseSDKType {
  plans: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryPlanRequest is the request type for the Query/Plan RPC method. */

export interface QueryPlanRequest {
  /** QueryPlanRequest is the request type for the Query/Plan RPC method. */
  planId: Long;
}
/** QueryPlanRequest is the request type for the Query/Plan RPC method. */

export interface QueryPlanRequestSDKType {
  plan_id: Long;
}
/** QueryPlanResponse is the response type for the Query/Plan RPC method. */

export interface QueryPlanResponse {
  plan?: Any;
}
/** QueryPlanResponse is the response type for the Query/Plan RPC method. */

export interface QueryPlanResponseSDKType {
  plan?: AnySDKType;
}
/** QueryStakingsRequest is the request type for the Query/Stakings RPC method. */

export interface QueryStakingsRequest {
  farmer: string;
  stakingCoinDenom: string;
}
/** QueryStakingsRequest is the request type for the Query/Stakings RPC method. */

export interface QueryStakingsRequestSDKType {
  farmer: string;
  staking_coin_denom: string;
}
/** QueryStakingsResponse is the response type for the Query/Stakings RPC method. */

export interface QueryStakingsResponse {
  stakedCoins: Coin[];
  queuedCoins: Coin[];
}
/** QueryStakingsResponse is the response type for the Query/Stakings RPC method. */

export interface QueryStakingsResponseSDKType {
  staked_coins: CoinSDKType[];
  queued_coins: CoinSDKType[];
}
/**
 * QueryTotalStakingsRequest is the request type for the Query/TotalStakings RPC
 * method.
 */

export interface QueryTotalStakingsRequest {
  /**
   * QueryTotalStakingsRequest is the request type for the Query/TotalStakings RPC
   * method.
   */
  stakingCoinDenom: string;
}
/**
 * QueryTotalStakingsRequest is the request type for the Query/TotalStakings RPC
 * method.
 */

export interface QueryTotalStakingsRequestSDKType {
  staking_coin_denom: string;
}
/**
 * QueryTotalStakingsResponse is the response type for the Query/TotalStakings
 * RPC method.
 */

export interface QueryTotalStakingsResponse {
  amount: string;
}
/**
 * QueryTotalStakingsResponse is the response type for the Query/TotalStakings
 * RPC method.
 */

export interface QueryTotalStakingsResponseSDKType {
  amount: string;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */

export interface QueryRewardsRequest {
  farmer: string;
  stakingCoinDenom: string;
}
/** QueryRewardsRequest is the request type for the Query/Rewards RPC method. */

export interface QueryRewardsRequestSDKType {
  farmer: string;
  staking_coin_denom: string;
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */

export interface QueryRewardsResponse {
  rewards: Coin[];
}
/** QueryRewardsResponse is the response type for the Query/Rewards RPC method. */

export interface QueryRewardsResponseSDKType {
  rewards: CoinSDKType[];
}
/**
 * QueryCurrentEpochDaysRequest is the request type for the
 * Query/CurrentEpochDays RPC method.
 */

export interface QueryCurrentEpochDaysRequest {}
/**
 * QueryCurrentEpochDaysRequest is the request type for the
 * Query/CurrentEpochDays RPC method.
 */

export interface QueryCurrentEpochDaysRequestSDKType {}
/**
 * QuerCurrentEpochDaysResponse is the response type for the
 * Query/CurrentEpochDays RPC method.
 */

export interface QueryCurrentEpochDaysResponse {
  /**
   * QuerCurrentEpochDaysResponse is the response type for the
   * Query/CurrentEpochDays RPC method.
   */
  currentEpochDays: number;
}
/**
 * QuerCurrentEpochDaysResponse is the response type for the
 * Query/CurrentEpochDays RPC method.
 */

export interface QueryCurrentEpochDaysResponseSDKType {
  current_epoch_days: number;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryPlansRequest(): QueryPlansRequest {
  return {
    type: "",
    farmingPoolAddress: "",
    terminationAddress: "",
    stakingCoinDenom: "",
    terminated: "",
    pagination: undefined
  };
}

export const QueryPlansRequest = {
  encode(message: QueryPlansRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.farmingPoolAddress !== "") {
      writer.uint32(18).string(message.farmingPoolAddress);
    }

    if (message.terminationAddress !== "") {
      writer.uint32(26).string(message.terminationAddress);
    }

    if (message.stakingCoinDenom !== "") {
      writer.uint32(34).string(message.stakingCoinDenom);
    }

    if (message.terminated !== "") {
      writer.uint32(42).string(message.terminated);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.farmingPoolAddress = reader.string();
          break;

        case 3:
          message.terminationAddress = reader.string();
          break;

        case 4:
          message.stakingCoinDenom = reader.string();
          break;

        case 5:
          message.terminated = reader.string();
          break;

        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPlansRequest>): QueryPlansRequest {
    const message = createBaseQueryPlansRequest();
    message.type = object.type ?? "";
    message.farmingPoolAddress = object.farmingPoolAddress ?? "";
    message.terminationAddress = object.terminationAddress ?? "";
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    message.terminated = object.terminated ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPlansResponse(): QueryPlansResponse {
  return {
    plans: [],
    pagination: undefined
  };
}

export const QueryPlansResponse = {
  encode(message: QueryPlansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.plans) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlansResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlansResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.plans.push(Any.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPlansResponse>): QueryPlansResponse {
    const message = createBaseQueryPlansResponse();
    message.plans = object.plans?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPlanRequest(): QueryPlanRequest {
  return {
    planId: Long.UZERO
  };
}

export const QueryPlanRequest = {
  encode(message: QueryPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.planId.isZero()) {
      writer.uint32(8).uint64(message.planId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlanRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.planId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPlanRequest>): QueryPlanRequest {
    const message = createBaseQueryPlanRequest();
    message.planId = object.planId !== undefined && object.planId !== null ? Long.fromValue(object.planId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPlanResponse(): QueryPlanResponse {
  return {
    plan: undefined
  };
}

export const QueryPlanResponse = {
  encode(message: QueryPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Any.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlanResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.plan = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPlanResponse>): QueryPlanResponse {
    const message = createBaseQueryPlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Any.fromPartial(object.plan) : undefined;
    return message;
  }

};

function createBaseQueryStakingsRequest(): QueryStakingsRequest {
  return {
    farmer: "",
    stakingCoinDenom: ""
  };
}

export const QueryStakingsRequest = {
  encode(message: QueryStakingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    if (message.stakingCoinDenom !== "") {
      writer.uint32(18).string(message.stakingCoinDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        case 2:
          message.stakingCoinDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryStakingsRequest>): QueryStakingsRequest {
    const message = createBaseQueryStakingsRequest();
    message.farmer = object.farmer ?? "";
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    return message;
  }

};

function createBaseQueryStakingsResponse(): QueryStakingsResponse {
  return {
    stakedCoins: [],
    queuedCoins: []
  };
}

export const QueryStakingsResponse = {
  encode(message: QueryStakingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.queuedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakingsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.queuedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryStakingsResponse>): QueryStakingsResponse {
    const message = createBaseQueryStakingsResponse();
    message.stakedCoins = object.stakedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.queuedCoins = object.queuedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryTotalStakingsRequest(): QueryTotalStakingsRequest {
  return {
    stakingCoinDenom: ""
  };
}

export const QueryTotalStakingsRequest = {
  encode(message: QueryTotalStakingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingCoinDenom !== "") {
      writer.uint32(10).string(message.stakingCoinDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalStakingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStakingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stakingCoinDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTotalStakingsRequest>): QueryTotalStakingsRequest {
    const message = createBaseQueryTotalStakingsRequest();
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    return message;
  }

};

function createBaseQueryTotalStakingsResponse(): QueryTotalStakingsResponse {
  return {
    amount: ""
  };
}

export const QueryTotalStakingsResponse = {
  encode(message: QueryTotalStakingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalStakingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStakingsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTotalStakingsResponse>): QueryTotalStakingsResponse {
    const message = createBaseQueryTotalStakingsResponse();
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseQueryRewardsRequest(): QueryRewardsRequest {
  return {
    farmer: "",
    stakingCoinDenom: ""
  };
}

export const QueryRewardsRequest = {
  encode(message: QueryRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.farmer !== "") {
      writer.uint32(10).string(message.farmer);
    }

    if (message.stakingCoinDenom !== "") {
      writer.uint32(18).string(message.stakingCoinDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string();
          break;

        case 2:
          message.stakingCoinDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRewardsRequest>): QueryRewardsRequest {
    const message = createBaseQueryRewardsRequest();
    message.farmer = object.farmer ?? "";
    message.stakingCoinDenom = object.stakingCoinDenom ?? "";
    return message;
  }

};

function createBaseQueryRewardsResponse(): QueryRewardsResponse {
  return {
    rewards: []
  };
}

export const QueryRewardsResponse = {
  encode(message: QueryRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRewardsResponse>): QueryRewardsResponse {
    const message = createBaseQueryRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCurrentEpochDaysRequest(): QueryCurrentEpochDaysRequest {
  return {};
}

export const QueryCurrentEpochDaysRequest = {
  encode(_: QueryCurrentEpochDaysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochDaysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochDaysRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryCurrentEpochDaysRequest>): QueryCurrentEpochDaysRequest {
    const message = createBaseQueryCurrentEpochDaysRequest();
    return message;
  }

};

function createBaseQueryCurrentEpochDaysResponse(): QueryCurrentEpochDaysResponse {
  return {
    currentEpochDays: 0
  };
}

export const QueryCurrentEpochDaysResponse = {
  encode(message: QueryCurrentEpochDaysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentEpochDays !== 0) {
      writer.uint32(8).uint32(message.currentEpochDays);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochDaysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochDaysResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentEpochDays = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCurrentEpochDaysResponse>): QueryCurrentEpochDaysResponse {
    const message = createBaseQueryCurrentEpochDaysResponse();
    message.currentEpochDays = object.currentEpochDays ?? 0;
    return message;
  }

};
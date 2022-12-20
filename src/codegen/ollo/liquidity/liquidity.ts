import { Coin, CoinSDKType } from "../../cosmos_proto/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum OrderType {
  ORDER_TYPE_UNSPECIFIED = 0,
  ORDER_TYPE_MARKET = 1,
  ORDER_TYPE_LIMIT = 2,
  ORDER_TYPE_MARKET_MAKING = 3,
  UNRECOGNIZED = -1,
}
export const OrderTypeSDKType = OrderType;
export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "ORDER_TYPE_UNSPECIFIED":
      return OrderType.ORDER_TYPE_UNSPECIFIED;

    case 1:
    case "ORDER_TYPE_MARKET":
      return OrderType.ORDER_TYPE_MARKET;

    case 2:
    case "ORDER_TYPE_LIMIT":
      return OrderType.ORDER_TYPE_LIMIT;

    case 3:
    case "ORDER_TYPE_MARKET_MAKING":
      return OrderType.ORDER_TYPE_MARKET_MAKING;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}
export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.ORDER_TYPE_UNSPECIFIED:
      return "ORDER_TYPE_UNSPECIFIED";

    case OrderType.ORDER_TYPE_MARKET:
      return "ORDER_TYPE_MARKET";

    case OrderType.ORDER_TYPE_LIMIT:
      return "ORDER_TYPE_LIMIT";

    case OrderType.ORDER_TYPE_MARKET_MAKING:
      return "ORDER_TYPE_MARKET_MAKING";

    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderStatus {
  ORDER_STATUS_INVALIDATED = 0,
  ORDER_STATUS_MATCHING = 1,
  ORDER_STATUS_MATCHED = 2,
  ORDER_STATUS_NO_MATCH = 3,
  ORDER_STATUS_UNMATCHED = 4,
  ORDER_STATUS_PARTIAL_MATCH = 5,
  ORDER_STATUS_UNSPECIFIED = 6,
  ORDER_STATUS_EXPIRED = 7,
  ORDER_STATUS_CANCELED = 8,
  UNRECOGNIZED = -1,
}
export const OrderStatusSDKType = OrderStatus;
export function orderStatusFromJSON(object: any): OrderStatus {
  switch (object) {
    case 0:
    case "ORDER_STATUS_INVALIDATED":
      return OrderStatus.ORDER_STATUS_INVALIDATED;

    case 1:
    case "ORDER_STATUS_MATCHING":
      return OrderStatus.ORDER_STATUS_MATCHING;

    case 2:
    case "ORDER_STATUS_MATCHED":
      return OrderStatus.ORDER_STATUS_MATCHED;

    case 3:
    case "ORDER_STATUS_NO_MATCH":
      return OrderStatus.ORDER_STATUS_NO_MATCH;

    case 4:
    case "ORDER_STATUS_UNMATCHED":
      return OrderStatus.ORDER_STATUS_UNMATCHED;

    case 5:
    case "ORDER_STATUS_PARTIAL_MATCH":
      return OrderStatus.ORDER_STATUS_PARTIAL_MATCH;

    case 6:
    case "ORDER_STATUS_UNSPECIFIED":
      return OrderStatus.ORDER_STATUS_UNSPECIFIED;

    case 7:
    case "ORDER_STATUS_EXPIRED":
      return OrderStatus.ORDER_STATUS_EXPIRED;

    case 8:
    case "ORDER_STATUS_CANCELED":
      return OrderStatus.ORDER_STATUS_CANCELED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStatus.UNRECOGNIZED;
  }
}
export function orderStatusToJSON(object: OrderStatus): string {
  switch (object) {
    case OrderStatus.ORDER_STATUS_INVALIDATED:
      return "ORDER_STATUS_INVALIDATED";

    case OrderStatus.ORDER_STATUS_MATCHING:
      return "ORDER_STATUS_MATCHING";

    case OrderStatus.ORDER_STATUS_MATCHED:
      return "ORDER_STATUS_MATCHED";

    case OrderStatus.ORDER_STATUS_NO_MATCH:
      return "ORDER_STATUS_NO_MATCH";

    case OrderStatus.ORDER_STATUS_UNMATCHED:
      return "ORDER_STATUS_UNMATCHED";

    case OrderStatus.ORDER_STATUS_PARTIAL_MATCH:
      return "ORDER_STATUS_PARTIAL_MATCH";

    case OrderStatus.ORDER_STATUS_UNSPECIFIED:
      return "ORDER_STATUS_UNSPECIFIED";

    case OrderStatus.ORDER_STATUS_EXPIRED:
      return "ORDER_STATUS_EXPIRED";

    case OrderStatus.ORDER_STATUS_CANCELED:
      return "ORDER_STATUS_CANCELED";

    case OrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum RequestStatus {
  REQUEST_STATUS_UNSPECIFIED = 0,
  REQUEST_STATUS_PENDING = 1,
  REQUEST_STATUS_EXECUTED = 2,
  REQUEST_STATUS_SUCCESS = 3,
  REQUEST_STATUS_FAIL = 4,
  UNRECOGNIZED = -1,
}
export const RequestStatusSDKType = RequestStatus;
export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "REQUEST_STATUS_UNSPECIFIED":
      return RequestStatus.REQUEST_STATUS_UNSPECIFIED;

    case 1:
    case "REQUEST_STATUS_PENDING":
      return RequestStatus.REQUEST_STATUS_PENDING;

    case 2:
    case "REQUEST_STATUS_EXECUTED":
      return RequestStatus.REQUEST_STATUS_EXECUTED;

    case 3:
    case "REQUEST_STATUS_SUCCESS":
      return RequestStatus.REQUEST_STATUS_SUCCESS;

    case 4:
    case "REQUEST_STATUS_FAIL":
      return RequestStatus.REQUEST_STATUS_FAIL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}
export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.REQUEST_STATUS_UNSPECIFIED:
      return "REQUEST_STATUS_UNSPECIFIED";

    case RequestStatus.REQUEST_STATUS_PENDING:
      return "REQUEST_STATUS_PENDING";

    case RequestStatus.REQUEST_STATUS_EXECUTED:
      return "REQUEST_STATUS_EXECUTED";

    case RequestStatus.REQUEST_STATUS_SUCCESS:
      return "REQUEST_STATUS_SUCCESS";

    case RequestStatus.REQUEST_STATUS_FAIL:
      return "REQUEST_STATUS_FAIL";

    case RequestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderDirection {
  ORDER_DIRECTION_UNSPECIFIED = 0,
  ORDER_DIRECTION_BUY = 1,
  ORDER_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}
export const OrderDirectionSDKType = OrderDirection;
export function orderDirectionFromJSON(object: any): OrderDirection {
  switch (object) {
    case 0:
    case "ORDER_DIRECTION_UNSPECIFIED":
      return OrderDirection.ORDER_DIRECTION_UNSPECIFIED;

    case 1:
    case "ORDER_DIRECTION_BUY":
      return OrderDirection.ORDER_DIRECTION_BUY;

    case 2:
    case "ORDER_DIRECTION_SELL":
      return OrderDirection.ORDER_DIRECTION_SELL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderDirection.UNRECOGNIZED;
  }
}
export function orderDirectionToJSON(object: OrderDirection): string {
  switch (object) {
    case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
      return "ORDER_DIRECTION_UNSPECIFIED";

    case OrderDirection.ORDER_DIRECTION_BUY:
      return "ORDER_DIRECTION_BUY";

    case OrderDirection.ORDER_DIRECTION_SELL:
      return "ORDER_DIRECTION_SELL";

    case OrderDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Pair {
  id: Long;
  baseDenom: string;
  quoteDenom: string;
  escrowAddr: string;
  lastOrderId: Long;
  lastPrice: string;
  currentBatchId: Long;
}
export interface PairSDKType {
  id: Long;
  base_denom: string;
  quote_denom: string;
  escrow_addr: string;
  last_order_id: Long;
  last_price: string;
  current_batch_id: Long;
}
export interface PoolType {
  id: Long;
  name: string;
  description: string;
  creatorAddr: string;
}
export interface PoolTypeSDKType {
  id: Long;
  name: string;
  description: string;
  creator_addr: string;
}
export interface PoolReserve {
  /** Reserve coins deposited */
  supply?: Coin;
  addr: string;
  denom: string;
  minSupply: string;
  maxSupply: string;
}
export interface PoolReserveSDKType {
  supply?: CoinSDKType;
  addr: string;
  denom: string;
  min_supply: string;
  max_supply: string;
}
export interface Pool {
  id: Long;
  pairId: Long;
  typeId: Long;
  creatorAddr: string;
  reserve?: PoolReserve;
  supply?: Coin;
  prevDepositReqId: Long;
  prevWithdrawReqId: Long;
  disabled: boolean;
  priceRange?: PriceRange;
}
export interface PoolSDKType {
  id: Long;
  pair_id: Long;
  type_id: Long;
  creator_addr: string;
  reserve?: PoolReserveSDKType;
  supply?: CoinSDKType;
  prev_deposit_req_id: Long;
  prev_withdraw_req_id: Long;
  disabled: boolean;
  price_range?: PriceRangeSDKType;
}
export interface PoolState {
  /** Pool coin issued */
  supply?: Coin;
  prevDepositReqId: Long;
  prevWithdrawReqId: Long;
  disabled: boolean;
  priceRange?: PriceRange;
}
export interface PoolStateSDKType {
  supply?: CoinSDKType;
  prev_deposit_req_id: Long;
  prev_withdraw_req_id: Long;
  disabled: boolean;
  price_range?: PriceRangeSDKType;
}
export interface PriceRange {
  min: string;
  max: string;
}
export interface PriceRangeSDKType {
  min: string;
  max: string;
}
export interface PoolBatch {
  id: Long;
  poolId: Long;
  height: Long;
  depositId: Long;
  withdrawId: Long;
  swapId: Long;
  executed: boolean;
}
export interface PoolBatchSDKType {
  id: Long;
  pool_id: Long;
  height: Long;
  deposit_id: Long;
  withdraw_id: Long;
  swap_id: Long;
  executed: boolean;
}
export interface RequestDeposit {
  id: Long;
  poolId: Long;
  depositorAddr: string;
  poolCoin?: Coin;
  msgHeight: Long;
  depositAmt: Coin[];
  acceptedAmt: Coin[];
  status: RequestStatus;
}
export interface RequestDepositSDKType {
  id: Long;
  pool_id: Long;
  depositor_addr: string;
  pool_coin?: CoinSDKType;
  msg_height: Long;
  deposit_amt: CoinSDKType[];
  accepted_amt: CoinSDKType[];
  status: RequestStatus;
}
export interface RequestWithdraw {
  id: Long;
  poolId: Long;
  withdrawAddr: string;
  poolCoin?: Coin;
  msgHeight: Long;
  withdrawAmt: Coin[];
  status: RequestStatus;
}
export interface RequestWithdrawSDKType {
  id: Long;
  pool_id: Long;
  withdraw_addr: string;
  pool_coin?: CoinSDKType;
  msg_height: Long;
  withdraw_amt: CoinSDKType[];
  status: RequestStatus;
}
export interface Order {
  id: Long;
  pairId: Long;
  creatorAddr: string;
  msgHeight: Long;
  type: OrderType;
  direction: OrderDirection;
  status: OrderStatus;
  batchId: Long;
  offer?: Coin;
  remaining?: Coin;
  received?: Coin;
  price: string;
  amt: string;
  openAmt: string;
  expires?: Date;
}
export interface OrderSDKType {
  id: Long;
  pair_id: Long;
  creator_addr: string;
  msg_height: Long;
  type: OrderType;
  direction: OrderDirection;
  status: OrderStatus;
  batch_id: Long;
  offer?: CoinSDKType;
  remaining?: CoinSDKType;
  received?: CoinSDKType;
  price: string;
  amt: string;
  open_amt: string;
  expires?: Date;
}
export interface MarketMakingOrderId {
  pairId: Long;
  creatorAddr: string;
  orderIds: Long[];
}
export interface MarketMakingOrderIdSDKType {
  pair_id: Long;
  creator_addr: string;
  order_ids: Long[];
}

function createBasePair(): Pair {
  return {
    id: Long.UZERO,
    baseDenom: "",
    quoteDenom: "",
    escrowAddr: "",
    lastOrderId: Long.UZERO,
    lastPrice: "",
    currentBatchId: Long.UZERO
  };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }

    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }

    if (message.escrowAddr !== "") {
      writer.uint32(34).string(message.escrowAddr);
    }

    if (!message.lastOrderId.isZero()) {
      writer.uint32(40).uint64(message.lastOrderId);
    }

    if (message.lastPrice !== "") {
      writer.uint32(50).string(message.lastPrice);
    }

    if (!message.currentBatchId.isZero()) {
      writer.uint32(56).uint64(message.currentBatchId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.baseDenom = reader.string();
          break;

        case 3:
          message.quoteDenom = reader.string();
          break;

        case 4:
          message.escrowAddr = reader.string();
          break;

        case 5:
          message.lastOrderId = (reader.uint64() as Long);
          break;

        case 6:
          message.lastPrice = reader.string();
          break;

        case 7:
          message.currentBatchId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = createBasePair();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.escrowAddr = object.escrowAddr ?? "";
    message.lastOrderId = object.lastOrderId !== undefined && object.lastOrderId !== null ? Long.fromValue(object.lastOrderId) : Long.UZERO;
    message.lastPrice = object.lastPrice ?? "";
    message.currentBatchId = object.currentBatchId !== undefined && object.currentBatchId !== null ? Long.fromValue(object.currentBatchId) : Long.UZERO;
    return message;
  }

};

function createBasePoolType(): PoolType {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    creatorAddr: ""
  };
}

export const PoolType = {
  encode(message: PoolType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.creatorAddr !== "") {
      writer.uint32(34).string(message.creatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.creatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolType>): PoolType {
    const message = createBasePoolType();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.creatorAddr = object.creatorAddr ?? "";
    return message;
  }

};

function createBasePoolReserve(): PoolReserve {
  return {
    supply: undefined,
    addr: "",
    denom: "",
    minSupply: "",
    maxSupply: ""
  };
}

export const PoolReserve = {
  encode(message: PoolReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supply !== undefined) {
      Coin.encode(message.supply, writer.uint32(10).fork()).ldelim();
    }

    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (message.minSupply !== "") {
      writer.uint32(34).string(message.minSupply);
    }

    if (message.maxSupply !== "") {
      writer.uint32(42).string(message.maxSupply);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReserve();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.addr = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.minSupply = reader.string();
          break;

        case 5:
          message.maxSupply = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolReserve>): PoolReserve {
    const message = createBasePoolReserve();
    message.supply = object.supply !== undefined && object.supply !== null ? Coin.fromPartial(object.supply) : undefined;
    message.addr = object.addr ?? "";
    message.denom = object.denom ?? "";
    message.minSupply = object.minSupply ?? "";
    message.maxSupply = object.maxSupply ?? "";
    return message;
  }

};

function createBasePool(): Pool {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    typeId: Long.UZERO,
    creatorAddr: "",
    reserve: undefined,
    supply: undefined,
    prevDepositReqId: Long.UZERO,
    prevWithdrawReqId: Long.UZERO,
    disabled: false,
    priceRange: undefined
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (!message.typeId.isZero()) {
      writer.uint32(24).uint64(message.typeId);
    }

    if (message.creatorAddr !== "") {
      writer.uint32(34).string(message.creatorAddr);
    }

    if (message.reserve !== undefined) {
      PoolReserve.encode(message.reserve, writer.uint32(42).fork()).ldelim();
    }

    if (message.supply !== undefined) {
      Coin.encode(message.supply, writer.uint32(50).fork()).ldelim();
    }

    if (!message.prevDepositReqId.isZero()) {
      writer.uint32(56).uint64(message.prevDepositReqId);
    }

    if (!message.prevWithdrawReqId.isZero()) {
      writer.uint32(64).uint64(message.prevWithdrawReqId);
    }

    if (message.disabled === true) {
      writer.uint32(72).bool(message.disabled);
    }

    if (message.priceRange !== undefined) {
      PriceRange.encode(message.priceRange, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.typeId = (reader.uint64() as Long);
          break;

        case 4:
          message.creatorAddr = reader.string();
          break;

        case 5:
          message.reserve = PoolReserve.decode(reader, reader.uint32());
          break;

        case 6:
          message.supply = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.prevDepositReqId = (reader.uint64() as Long);
          break;

        case 8:
          message.prevWithdrawReqId = (reader.uint64() as Long);
          break;

        case 9:
          message.disabled = reader.bool();
          break;

        case 10:
          message.priceRange = PriceRange.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.typeId = object.typeId !== undefined && object.typeId !== null ? Long.fromValue(object.typeId) : Long.UZERO;
    message.creatorAddr = object.creatorAddr ?? "";
    message.reserve = object.reserve !== undefined && object.reserve !== null ? PoolReserve.fromPartial(object.reserve) : undefined;
    message.supply = object.supply !== undefined && object.supply !== null ? Coin.fromPartial(object.supply) : undefined;
    message.prevDepositReqId = object.prevDepositReqId !== undefined && object.prevDepositReqId !== null ? Long.fromValue(object.prevDepositReqId) : Long.UZERO;
    message.prevWithdrawReqId = object.prevWithdrawReqId !== undefined && object.prevWithdrawReqId !== null ? Long.fromValue(object.prevWithdrawReqId) : Long.UZERO;
    message.disabled = object.disabled ?? false;
    message.priceRange = object.priceRange !== undefined && object.priceRange !== null ? PriceRange.fromPartial(object.priceRange) : undefined;
    return message;
  }

};

function createBasePoolState(): PoolState {
  return {
    supply: undefined,
    prevDepositReqId: Long.UZERO,
    prevWithdrawReqId: Long.UZERO,
    disabled: false,
    priceRange: undefined
  };
}

export const PoolState = {
  encode(message: PoolState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supply !== undefined) {
      Coin.encode(message.supply, writer.uint32(10).fork()).ldelim();
    }

    if (!message.prevDepositReqId.isZero()) {
      writer.uint32(16).uint64(message.prevDepositReqId);
    }

    if (!message.prevWithdrawReqId.isZero()) {
      writer.uint32(24).uint64(message.prevWithdrawReqId);
    }

    if (message.disabled === true) {
      writer.uint32(32).bool(message.disabled);
    }

    if (message.priceRange !== undefined) {
      PriceRange.encode(message.priceRange, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.prevDepositReqId = (reader.uint64() as Long);
          break;

        case 3:
          message.prevWithdrawReqId = (reader.uint64() as Long);
          break;

        case 4:
          message.disabled = reader.bool();
          break;

        case 5:
          message.priceRange = PriceRange.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolState>): PoolState {
    const message = createBasePoolState();
    message.supply = object.supply !== undefined && object.supply !== null ? Coin.fromPartial(object.supply) : undefined;
    message.prevDepositReqId = object.prevDepositReqId !== undefined && object.prevDepositReqId !== null ? Long.fromValue(object.prevDepositReqId) : Long.UZERO;
    message.prevWithdrawReqId = object.prevWithdrawReqId !== undefined && object.prevWithdrawReqId !== null ? Long.fromValue(object.prevWithdrawReqId) : Long.UZERO;
    message.disabled = object.disabled ?? false;
    message.priceRange = object.priceRange !== undefined && object.priceRange !== null ? PriceRange.fromPartial(object.priceRange) : undefined;
    return message;
  }

};

function createBasePriceRange(): PriceRange {
  return {
    min: "",
    max: ""
  };
}

export const PriceRange = {
  encode(message: PriceRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== "") {
      writer.uint32(10).string(message.min);
    }

    if (message.max !== "") {
      writer.uint32(18).string(message.max);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceRange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.min = reader.string();
          break;

        case 2:
          message.max = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PriceRange>): PriceRange {
    const message = createBasePriceRange();
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    return message;
  }

};

function createBasePoolBatch(): PoolBatch {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    height: Long.UZERO,
    depositId: Long.UZERO,
    withdrawId: Long.UZERO,
    swapId: Long.UZERO,
    executed: false
  };
}

export const PoolBatch = {
  encode(message: PoolBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }

    if (!message.depositId.isZero()) {
      writer.uint32(32).uint64(message.depositId);
    }

    if (!message.withdrawId.isZero()) {
      writer.uint32(40).uint64(message.withdrawId);
    }

    if (!message.swapId.isZero()) {
      writer.uint32(48).uint64(message.swapId);
    }

    if (message.executed === true) {
      writer.uint32(56).bool(message.executed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.height = (reader.uint64() as Long);
          break;

        case 4:
          message.depositId = (reader.uint64() as Long);
          break;

        case 5:
          message.withdrawId = (reader.uint64() as Long);
          break;

        case 6:
          message.swapId = (reader.uint64() as Long);
          break;

        case 7:
          message.executed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolBatch>): PoolBatch {
    const message = createBasePoolBatch();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
    message.withdrawId = object.withdrawId !== undefined && object.withdrawId !== null ? Long.fromValue(object.withdrawId) : Long.UZERO;
    message.swapId = object.swapId !== undefined && object.swapId !== null ? Long.fromValue(object.swapId) : Long.UZERO;
    message.executed = object.executed ?? false;
    return message;
  }

};

function createBaseRequestDeposit(): RequestDeposit {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    depositorAddr: "",
    poolCoin: undefined,
    msgHeight: Long.ZERO,
    depositAmt: [],
    acceptedAmt: [],
    status: 0
  };
}

export const RequestDeposit = {
  encode(message: RequestDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.depositorAddr !== "") {
      writer.uint32(26).string(message.depositorAddr);
    }

    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(34).fork()).ldelim();
    }

    if (!message.msgHeight.isZero()) {
      writer.uint32(40).int64(message.msgHeight);
    }

    for (const v of message.depositAmt) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.acceptedAmt) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.depositorAddr = reader.string();
          break;

        case 4:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.msgHeight = (reader.int64() as Long);
          break;

        case 6:
          message.depositAmt.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.acceptedAmt.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestDeposit>): RequestDeposit {
    const message = createBaseRequestDeposit();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.depositorAddr = object.depositorAddr ?? "";
    message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? Coin.fromPartial(object.poolCoin) : undefined;
    message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? Long.fromValue(object.msgHeight) : Long.ZERO;
    message.depositAmt = object.depositAmt?.map(e => Coin.fromPartial(e)) || [];
    message.acceptedAmt = object.acceptedAmt?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseRequestWithdraw(): RequestWithdraw {
  return {
    id: Long.UZERO,
    poolId: Long.UZERO,
    withdrawAddr: "",
    poolCoin: undefined,
    msgHeight: Long.ZERO,
    withdrawAmt: [],
    status: 0
  };
}

export const RequestWithdraw = {
  encode(message: RequestWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }

    if (message.withdrawAddr !== "") {
      writer.uint32(26).string(message.withdrawAddr);
    }

    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(34).fork()).ldelim();
    }

    if (!message.msgHeight.isZero()) {
      writer.uint32(40).int64(message.msgHeight);
    }

    for (const v of message.withdrawAmt) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.poolId = (reader.uint64() as Long);
          break;

        case 3:
          message.withdrawAddr = reader.string();
          break;

        case 4:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.msgHeight = (reader.int64() as Long);
          break;

        case 6:
          message.withdrawAmt.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestWithdraw>): RequestWithdraw {
    const message = createBaseRequestWithdraw();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.withdrawAddr = object.withdrawAddr ?? "";
    message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? Coin.fromPartial(object.poolCoin) : undefined;
    message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? Long.fromValue(object.msgHeight) : Long.ZERO;
    message.withdrawAmt = object.withdrawAmt?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseOrder(): Order {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    creatorAddr: "",
    msgHeight: Long.ZERO,
    type: 0,
    direction: 0,
    status: 0,
    batchId: Long.UZERO,
    offer: undefined,
    remaining: undefined,
    received: undefined,
    price: "",
    amt: "",
    openAmt: "",
    expires: undefined
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.creatorAddr !== "") {
      writer.uint32(26).string(message.creatorAddr);
    }

    if (!message.msgHeight.isZero()) {
      writer.uint32(32).int64(message.msgHeight);
    }

    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }

    if (message.direction !== 0) {
      writer.uint32(48).int32(message.direction);
    }

    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }

    if (!message.batchId.isZero()) {
      writer.uint32(64).uint64(message.batchId);
    }

    if (message.offer !== undefined) {
      Coin.encode(message.offer, writer.uint32(74).fork()).ldelim();
    }

    if (message.remaining !== undefined) {
      Coin.encode(message.remaining, writer.uint32(82).fork()).ldelim();
    }

    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(90).fork()).ldelim();
    }

    if (message.price !== "") {
      writer.uint32(98).string(message.price);
    }

    if (message.amt !== "") {
      writer.uint32(106).string(message.amt);
    }

    if (message.openAmt !== "") {
      writer.uint32(114).string(message.openAmt);
    }

    if (message.expires !== undefined) {
      Timestamp.encode(toTimestamp(message.expires), writer.uint32(122).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.creatorAddr = reader.string();
          break;

        case 4:
          message.msgHeight = (reader.int64() as Long);
          break;

        case 5:
          message.type = (reader.int32() as any);
          break;

        case 6:
          message.direction = (reader.int32() as any);
          break;

        case 7:
          message.status = (reader.int32() as any);
          break;

        case 8:
          message.batchId = (reader.uint64() as Long);
          break;

        case 9:
          message.offer = Coin.decode(reader, reader.uint32());
          break;

        case 10:
          message.remaining = Coin.decode(reader, reader.uint32());
          break;

        case 11:
          message.received = Coin.decode(reader, reader.uint32());
          break;

        case 12:
          message.price = reader.string();
          break;

        case 13:
          message.amt = reader.string();
          break;

        case 14:
          message.openAmt = reader.string();
          break;

        case 15:
          message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.creatorAddr = object.creatorAddr ?? "";
    message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? Long.fromValue(object.msgHeight) : Long.ZERO;
    message.type = object.type ?? 0;
    message.direction = object.direction ?? 0;
    message.status = object.status ?? 0;
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    message.offer = object.offer !== undefined && object.offer !== null ? Coin.fromPartial(object.offer) : undefined;
    message.remaining = object.remaining !== undefined && object.remaining !== null ? Coin.fromPartial(object.remaining) : undefined;
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    message.price = object.price ?? "";
    message.amt = object.amt ?? "";
    message.openAmt = object.openAmt ?? "";
    message.expires = object.expires ?? undefined;
    return message;
  }

};

function createBaseMarketMakingOrderId(): MarketMakingOrderId {
  return {
    pairId: Long.UZERO,
    creatorAddr: "",
    orderIds: []
  };
}

export const MarketMakingOrderId = {
  encode(message: MarketMakingOrderId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }

    if (message.creatorAddr !== "") {
      writer.uint32(18).string(message.creatorAddr);
    }

    writer.uint32(26).fork();

    for (const v of message.orderIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketMakingOrderId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMakingOrderId();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairId = (reader.uint64() as Long);
          break;

        case 2:
          message.creatorAddr = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.orderIds.push((reader.uint64() as Long));
            }
          } else {
            message.orderIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MarketMakingOrderId>): MarketMakingOrderId {
    const message = createBaseMarketMakingOrderId();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.creatorAddr = object.creatorAddr ?? "";
    message.orderIds = object.orderIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};
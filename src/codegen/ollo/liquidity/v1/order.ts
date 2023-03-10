import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OrderType enumerates order types. */

export enum OrderType {
  /** ORDER_TYPE_UNSPECIFIED - ORDER_TYPE_UNSPECIFIED specifies unknown order type. */
  ORDER_TYPE_UNSPECIFIED = 0,

  /** ORDER_TYPE_LIMIT - ORDER_TYPE_LIMIT specifies limit order type. */
  ORDER_TYPE_LIMIT = 1,

  /** ORDER_TYPE_MARKET - ORDER_TYPE_MARKET specifies market order type. */
  ORDER_TYPE_MARKET = 2,

  /** ORDER_TYPE_MM - ORDER_TYPE_MM specifies MM(market making) order type. */
  ORDER_TYPE_MM = 3,
  UNRECOGNIZED = -1,
}
export const OrderTypeSDKType = OrderType;
export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "ORDER_TYPE_UNSPECIFIED":
      return OrderType.ORDER_TYPE_UNSPECIFIED;

    case 1:
    case "ORDER_TYPE_LIMIT":
      return OrderType.ORDER_TYPE_LIMIT;

    case 2:
    case "ORDER_TYPE_MARKET":
      return OrderType.ORDER_TYPE_MARKET;

    case 3:
    case "ORDER_TYPE_MM":
      return OrderType.ORDER_TYPE_MM;

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

    case OrderType.ORDER_TYPE_LIMIT:
      return "ORDER_TYPE_LIMIT";

    case OrderType.ORDER_TYPE_MARKET:
      return "ORDER_TYPE_MARKET";

    case OrderType.ORDER_TYPE_MM:
      return "ORDER_TYPE_MM";

    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** OrderDirection enumerates order directions. */

export enum OrderDirection {
  /** ORDER_DIRECTION_UNSPECIFIED - ORDER_DIRECTION_UNSPECIFIED specifies unknown order direction */
  ORDER_DIRECTION_UNSPECIFIED = 0,

  /** ORDER_DIRECTION_BUY - ORDER_DIRECTION_BUY specifies buy(swap quote coin to base coin) order direction */
  ORDER_DIRECTION_BUY = 1,

  /** ORDER_DIRECTION_SELL - ORDER_DIRECTION_SELL specifies sell(swap base coin to quote coin) order direction */
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
/** RequestStatus enumerates request statuses. */

export enum RequestStatus {
  /** REQUEST_STATUS_UNSPECIFIED - REQUEST_STATUS_UNSPECIFIED specifies unknown request status */
  REQUEST_STATUS_UNSPECIFIED = 0,

  /** REQUEST_STATUS_NOT_EXECUTED - REQUEST_STATUS_NOT_EXECUTED indicates the request is not executed yet */
  REQUEST_STATUS_NOT_EXECUTED = 1,

  /** REQUEST_STATUS_SUCCEEDED - REQUEST_STATUS_SUCCEEDED indicates the request has been succeeded */
  REQUEST_STATUS_SUCCEEDED = 2,

  /** REQUEST_STATUS_FAILED - REQUEST_STATUS_FAILED indicates the request is failed */
  REQUEST_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const RequestStatusSDKType = RequestStatus;
export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "REQUEST_STATUS_UNSPECIFIED":
      return RequestStatus.REQUEST_STATUS_UNSPECIFIED;

    case 1:
    case "REQUEST_STATUS_NOT_EXECUTED":
      return RequestStatus.REQUEST_STATUS_NOT_EXECUTED;

    case 2:
    case "REQUEST_STATUS_SUCCEEDED":
      return RequestStatus.REQUEST_STATUS_SUCCEEDED;

    case 3:
    case "REQUEST_STATUS_FAILED":
      return RequestStatus.REQUEST_STATUS_FAILED;

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

    case RequestStatus.REQUEST_STATUS_NOT_EXECUTED:
      return "REQUEST_STATUS_NOT_EXECUTED";

    case RequestStatus.REQUEST_STATUS_SUCCEEDED:
      return "REQUEST_STATUS_SUCCEEDED";

    case RequestStatus.REQUEST_STATUS_FAILED:
      return "REQUEST_STATUS_FAILED";

    case RequestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** OrderStatus enumerates order statuses. */

export enum OrderStatus {
  /** ORDER_STATUS_UNSPECIFIED - ORDER_STATUS_UNSPECIFIED specifies unknown order status */
  ORDER_STATUS_UNSPECIFIED = 0,

  /** ORDER_STATUS_NOT_EXECUTED - ORDER_STATUS_NOT_EXECUTED indicates the order has not been executed yet */
  ORDER_STATUS_NOT_EXECUTED = 1,

  /** ORDER_STATUS_NOT_MATCHED - ORDER_STATUS_NOT_MATCHED indicates the order has been executed but has no match */
  ORDER_STATUS_NOT_MATCHED = 2,

  /** ORDER_STATUS_PARTIALLY_MATCHED - ORDER_STATUS_PARTIALLY_MATCHED indicates the order has been partially matched */
  ORDER_STATUS_PARTIALLY_MATCHED = 3,

  /** ORDER_STATUS_COMPLETED - ORDER_STATUS_COMPLETED indicates the order has been fully matched and completed */
  ORDER_STATUS_COMPLETED = 4,

  /** ORDER_STATUS_CANCELED - ORDER_STATUS_CANCELED indicates the order has been canceled */
  ORDER_STATUS_CANCELED = 5,

  /** ORDER_STATUS_EXPIRED - ORDER_STATUS_EXPIRED indicates the order has been expired */
  ORDER_STATUS_EXPIRED = 6,
  UNRECOGNIZED = -1,
}
export const OrderStatusSDKType = OrderStatus;
export function orderStatusFromJSON(object: any): OrderStatus {
  switch (object) {
    case 0:
    case "ORDER_STATUS_UNSPECIFIED":
      return OrderStatus.ORDER_STATUS_UNSPECIFIED;

    case 1:
    case "ORDER_STATUS_NOT_EXECUTED":
      return OrderStatus.ORDER_STATUS_NOT_EXECUTED;

    case 2:
    case "ORDER_STATUS_NOT_MATCHED":
      return OrderStatus.ORDER_STATUS_NOT_MATCHED;

    case 3:
    case "ORDER_STATUS_PARTIALLY_MATCHED":
      return OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED;

    case 4:
    case "ORDER_STATUS_COMPLETED":
      return OrderStatus.ORDER_STATUS_COMPLETED;

    case 5:
    case "ORDER_STATUS_CANCELED":
      return OrderStatus.ORDER_STATUS_CANCELED;

    case 6:
    case "ORDER_STATUS_EXPIRED":
      return OrderStatus.ORDER_STATUS_EXPIRED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStatus.UNRECOGNIZED;
  }
}
export function orderStatusToJSON(object: OrderStatus): string {
  switch (object) {
    case OrderStatus.ORDER_STATUS_UNSPECIFIED:
      return "ORDER_STATUS_UNSPECIFIED";

    case OrderStatus.ORDER_STATUS_NOT_EXECUTED:
      return "ORDER_STATUS_NOT_EXECUTED";

    case OrderStatus.ORDER_STATUS_NOT_MATCHED:
      return "ORDER_STATUS_NOT_MATCHED";

    case OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED:
      return "ORDER_STATUS_PARTIALLY_MATCHED";

    case OrderStatus.ORDER_STATUS_COMPLETED:
      return "ORDER_STATUS_COMPLETED";

    case OrderStatus.ORDER_STATUS_CANCELED:
      return "ORDER_STATUS_CANCELED";

    case OrderStatus.ORDER_STATUS_EXPIRED:
      return "ORDER_STATUS_EXPIRED";

    case OrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Order defines an order. */

export interface Order {
  /** type specifies the typo of the order */
  type: OrderType;
  /** id specifies the id of the order */

  id: Long;
  /** pair_id specifies the pair id */

  pairId: Long;
  /** msg_height specifies the block height when the order is stored for the batch execution */

  msgHeight: Long;
  /** orderer specifies the bech32-encoded address that makes an order */

  orderer: string;
  /** direction specifies the order direction; either buy or sell */

  direction: OrderDirection;
  offerCoin?: Coin;
  /** remaining_offer_coin specifies the remaining offer coin */

  remainingOfferCoin?: Coin;
  /** received_coin specifies the received coin after the swap */

  receivedCoin?: Coin;
  /** price specifies the price that an orderer is willing to swap */

  price: string;
  amount: string;
  openAmount: string;
  /** batch_id specifies the pair's batch id when the request is stored */

  batchId: Long;
  expireAt?: Date;
  status: OrderStatus;
}
/** Order defines an order. */

export interface OrderSDKType {
  type: OrderType;
  id: Long;
  pair_id: Long;
  msg_height: Long;
  orderer: string;
  direction: OrderDirection;
  offer_coin?: CoinSDKType;
  remaining_offer_coin?: CoinSDKType;
  received_coin?: CoinSDKType;
  price: string;
  amount: string;
  open_amount: string;
  batch_id: Long;
  expire_at?: Date;
  status: OrderStatus;
}

function createBaseOrder(): Order {
  return {
    type: 0,
    id: Long.UZERO,
    pairId: Long.UZERO,
    msgHeight: Long.ZERO,
    orderer: "",
    direction: 0,
    offerCoin: undefined,
    remainingOfferCoin: undefined,
    receivedCoin: undefined,
    price: "",
    amount: "",
    openAmount: "",
    batchId: Long.UZERO,
    expireAt: undefined,
    status: 0
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }

    if (!message.msgHeight.isZero()) {
      writer.uint32(32).int64(message.msgHeight);
    }

    if (message.orderer !== "") {
      writer.uint32(42).string(message.orderer);
    }

    if (message.direction !== 0) {
      writer.uint32(48).int32(message.direction);
    }

    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(58).fork()).ldelim();
    }

    if (message.remainingOfferCoin !== undefined) {
      Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
    }

    if (message.receivedCoin !== undefined) {
      Coin.encode(message.receivedCoin, writer.uint32(74).fork()).ldelim();
    }

    if (message.price !== "") {
      writer.uint32(82).string(message.price);
    }

    if (message.amount !== "") {
      writer.uint32(90).string(message.amount);
    }

    if (message.openAmount !== "") {
      writer.uint32(98).string(message.openAmount);
    }

    if (!message.batchId.isZero()) {
      writer.uint32(104).uint64(message.batchId);
    }

    if (message.expireAt !== undefined) {
      Timestamp.encode(toTimestamp(message.expireAt), writer.uint32(114).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
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
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.pairId = (reader.uint64() as Long);
          break;

        case 4:
          message.msgHeight = (reader.int64() as Long);
          break;

        case 5:
          message.orderer = reader.string();
          break;

        case 6:
          message.direction = (reader.int32() as any);
          break;

        case 7:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;

        case 8:
          message.remainingOfferCoin = Coin.decode(reader, reader.uint32());
          break;

        case 9:
          message.receivedCoin = Coin.decode(reader, reader.uint32());
          break;

        case 10:
          message.price = reader.string();
          break;

        case 11:
          message.amount = reader.string();
          break;

        case 12:
          message.openAmount = reader.string();
          break;

        case 13:
          message.batchId = (reader.uint64() as Long);
          break;

        case 14:
          message.expireAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 15:
          message.status = (reader.int32() as any);
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
    message.type = object.type ?? 0;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? Long.fromValue(object.msgHeight) : Long.ZERO;
    message.orderer = object.orderer ?? "";
    message.direction = object.direction ?? 0;
    message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
    message.remainingOfferCoin = object.remainingOfferCoin !== undefined && object.remainingOfferCoin !== null ? Coin.fromPartial(object.remainingOfferCoin) : undefined;
    message.receivedCoin = object.receivedCoin !== undefined && object.receivedCoin !== null ? Coin.fromPartial(object.receivedCoin) : undefined;
    message.price = object.price ?? "";
    message.amount = object.amount ?? "";
    message.openAmount = object.openAmount ?? "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    message.expireAt = object.expireAt ?? undefined;
    message.status = object.status ?? 0;
    return message;
  }

};
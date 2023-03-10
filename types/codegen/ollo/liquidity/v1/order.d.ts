import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OrderType enumerates order types. */
export declare enum OrderType {
    /** ORDER_TYPE_UNSPECIFIED - ORDER_TYPE_UNSPECIFIED specifies unknown order type. */
    ORDER_TYPE_UNSPECIFIED = 0,
    /** ORDER_TYPE_LIMIT - ORDER_TYPE_LIMIT specifies limit order type. */
    ORDER_TYPE_LIMIT = 1,
    /** ORDER_TYPE_MARKET - ORDER_TYPE_MARKET specifies market order type. */
    ORDER_TYPE_MARKET = 2,
    /** ORDER_TYPE_MM - ORDER_TYPE_MM specifies MM(market making) order type. */
    ORDER_TYPE_MM = 3,
    UNRECOGNIZED = -1
}
export declare const OrderTypeSDKType: typeof OrderType;
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
/** OrderDirection enumerates order directions. */
export declare enum OrderDirection {
    /** ORDER_DIRECTION_UNSPECIFIED - ORDER_DIRECTION_UNSPECIFIED specifies unknown order direction */
    ORDER_DIRECTION_UNSPECIFIED = 0,
    /** ORDER_DIRECTION_BUY - ORDER_DIRECTION_BUY specifies buy(swap quote coin to base coin) order direction */
    ORDER_DIRECTION_BUY = 1,
    /** ORDER_DIRECTION_SELL - ORDER_DIRECTION_SELL specifies sell(swap base coin to quote coin) order direction */
    ORDER_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare const OrderDirectionSDKType: typeof OrderDirection;
export declare function orderDirectionFromJSON(object: any): OrderDirection;
export declare function orderDirectionToJSON(object: OrderDirection): string;
/** RequestStatus enumerates request statuses. */
export declare enum RequestStatus {
    /** REQUEST_STATUS_UNSPECIFIED - REQUEST_STATUS_UNSPECIFIED specifies unknown request status */
    REQUEST_STATUS_UNSPECIFIED = 0,
    /** REQUEST_STATUS_NOT_EXECUTED - REQUEST_STATUS_NOT_EXECUTED indicates the request is not executed yet */
    REQUEST_STATUS_NOT_EXECUTED = 1,
    /** REQUEST_STATUS_SUCCEEDED - REQUEST_STATUS_SUCCEEDED indicates the request has been succeeded */
    REQUEST_STATUS_SUCCEEDED = 2,
    /** REQUEST_STATUS_FAILED - REQUEST_STATUS_FAILED indicates the request is failed */
    REQUEST_STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const RequestStatusSDKType: typeof RequestStatus;
export declare function requestStatusFromJSON(object: any): RequestStatus;
export declare function requestStatusToJSON(object: RequestStatus): string;
/** OrderStatus enumerates order statuses. */
export declare enum OrderStatus {
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
    UNRECOGNIZED = -1
}
export declare const OrderStatusSDKType: typeof OrderStatus;
export declare function orderStatusFromJSON(object: any): OrderStatus;
export declare function orderStatusToJSON(object: OrderStatus): string;
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
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromPartial(object: DeepPartial<Order>): Order;
};

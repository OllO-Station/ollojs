import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Pair defines a coin pair. */
export interface Pair {
    id: Long;
    baseCoinDenom: string;
    quoteCoinDenom: string;
    escrowAddress: string;
    lastOrderId: Long;
    lastPrice: string;
    currentBatchId: Long;
}
/** Pair defines a coin pair. */
export interface PairSDKType {
    id: Long;
    base_coin_denom: string;
    quote_coin_denom: string;
    escrow_address: string;
    last_order_id: Long;
    last_price: string;
    current_batch_id: Long;
}
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromPartial(object: DeepPartial<Pair>): Pair;
};

import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarket {
    /** base_fee for EIP-1559 blocks */
    baseFee: string;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketSDKType {
    base_fee: string;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGas {
    /** height of the block */
    height: string;
    /** amount of gas wanted by the block */
    amount: string;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasSDKType {
    height: string;
    amount: string;
}
export declare const EventFeeMarket: {
    encode(message: EventFeeMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFeeMarket;
    fromPartial(object: DeepPartial<EventFeeMarket>): EventFeeMarket;
};
export declare const EventBlockGas: {
    encode(message: EventBlockGas, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBlockGas;
    fromPartial(object: DeepPartial<EventBlockGas>): EventBlockGas;
};

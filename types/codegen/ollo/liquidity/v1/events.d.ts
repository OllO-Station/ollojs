import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventDepositLiquidity {
}
export interface EventDepositLiquiditySDKType {
}
export interface EventWithdrawLiquidity {
}
export interface EventWithdrawLiquiditySDKType {
}
export interface EventCreatePool {
}
export interface EventCreatePoolSDKType {
}
export interface EventCreatePair {
}
export interface EventCreatePairSDKType {
}
export declare const EventDepositLiquidity: {
    encode(_: EventDepositLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositLiquidity;
    fromPartial(_: DeepPartial<EventDepositLiquidity>): EventDepositLiquidity;
};
export declare const EventWithdrawLiquidity: {
    encode(_: EventWithdrawLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawLiquidity;
    fromPartial(_: DeepPartial<EventWithdrawLiquidity>): EventWithdrawLiquidity;
};
export declare const EventCreatePool: {
    encode(_: EventCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePool;
    fromPartial(_: DeepPartial<EventCreatePool>): EventCreatePool;
};
export declare const EventCreatePair: {
    encode(_: EventCreatePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePair;
    fromPartial(_: DeepPartial<EventCreatePair>): EventCreatePair;
};

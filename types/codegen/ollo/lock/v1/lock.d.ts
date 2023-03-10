import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface DurationQuery {
    denom: string;
    duration?: Duration;
}
export interface DurationQuerySDKType {
    denom: string;
    duration?: DurationSDKType;
}
export interface TimeQuery {
    denom: string;
    time?: Date;
}
export interface TimeQuerySDKType {
    denom: string;
    time?: Date;
}
export interface DurationLock {
    id: Long;
    depositor: string;
    duration?: Duration;
    durationEnd?: Date;
    coins: Coin[];
}
export interface DurationLockSDKType {
    id: Long;
    depositor: string;
    duration?: DurationSDKType;
    duration_end?: Date;
    coins: CoinSDKType[];
}
export interface Lock {
    id: Long;
    depositor: string;
    balance: string;
    createdAt?: Date;
    locked: boolean;
    blockHeight: Long;
    blockTime?: Date;
    returnsAccumulated: string;
}
export interface LockSDKType {
    id: Long;
    depositor: string;
    balance: string;
    created_at?: Date;
    locked: boolean;
    block_height: Long;
    block_time?: Date;
    returns_accumulated: string;
}
export declare const DurationQuery: {
    encode(message: DurationQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DurationQuery;
    fromPartial(object: DeepPartial<DurationQuery>): DurationQuery;
};
export declare const TimeQuery: {
    encode(message: TimeQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimeQuery;
    fromPartial(object: DeepPartial<TimeQuery>): TimeQuery;
};
export declare const DurationLock: {
    encode(message: DurationLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DurationLock;
    fromPartial(object: DeepPartial<DurationLock>): DurationLock;
};
export declare const Lock: {
    encode(message: Lock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Lock;
    fromPartial(object: DeepPartial<Lock>): Lock;
};

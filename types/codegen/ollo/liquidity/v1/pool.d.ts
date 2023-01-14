import { PoolType, PoolTypeSDKType } from "./liquidity";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PoolA {
    type?: PoolType;
    id: Long;
    pairId: Long;
    creator: string;
    reserveAddress: string;
    poolCoinDenom: string;
    minPrice: string;
    maxPrice: string;
    lastDepositRequestId: Long;
    lastWithdrawRequestId: Long;
    disabled: boolean;
}
export interface PoolASDKType {
    type?: PoolTypeSDKType;
    id: Long;
    pair_id: Long;
    creator: string;
    reserve_address: string;
    pool_coin_denom: string;
    min_price: string;
    max_price: string;
    last_deposit_request_id: Long;
    last_withdraw_request_id: Long;
    disabled: boolean;
}
export declare const PoolA: {
    encode(message: PoolA, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolA;
    fromPartial(object: DeepPartial<PoolA>): PoolA;
};

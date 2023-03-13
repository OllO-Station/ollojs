import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ConstantProductPool {
    poolId: string;
    pairId: Long;
    poolCoinDenom: string;
    reserveAccountAddress: string;
}
export interface ConstantProductPoolSDKType {
    pool_id: string;
    pair_id: Long;
    pool_coin_denom: string;
    reserve_account_address: string;
}
export declare const ConstantProductPool: {
    encode(message: ConstantProductPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConstantProductPool;
    fromPartial(object: DeepPartial<ConstantProductPool>): ConstantProductPool;
};

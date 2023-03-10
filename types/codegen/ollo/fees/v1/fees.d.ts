import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface FeeToken {
    denom: string;
    poolId: Long;
}
export interface FeeTokenSDKType {
    denom: string;
    pool_id: Long;
}
export declare const FeeToken: {
    encode(message: FeeToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeToken;
    fromPartial(object: DeepPartial<FeeToken>): FeeToken;
};

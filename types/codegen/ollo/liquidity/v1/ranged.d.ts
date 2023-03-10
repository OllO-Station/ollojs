import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface RangedPool {
}
export interface RangedPoolSDKType {
}
export declare const RangedPool: {
    encode(_: RangedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RangedPool;
    fromPartial(_: DeepPartial<RangedPool>): RangedPool;
};

import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface RangedPool {
    id: string;
}
export interface RangedPoolSDKType {
    id: string;
}
export declare const RangedPool: {
    encode(message: RangedPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RangedPool;
    fromPartial(object: DeepPartial<RangedPool>): RangedPool;
};

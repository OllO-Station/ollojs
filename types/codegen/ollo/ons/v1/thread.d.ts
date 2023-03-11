import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Thread {
    id: string;
}
export interface ThreadSDKType {
    id: string;
}
export declare const Thread: {
    encode(message: Thread, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Thread;
    fromPartial(object: DeepPartial<Thread>): Thread;
};

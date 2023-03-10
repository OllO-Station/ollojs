import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventCreateLock {
    id: string;
}
export interface EventCreateLockSDKType {
    id: string;
}
export declare const EventCreateLock: {
    encode(message: EventCreateLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateLock;
    fromPartial(object: DeepPartial<EventCreateLock>): EventCreateLock;
};

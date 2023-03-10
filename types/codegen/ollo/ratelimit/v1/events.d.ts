import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventRevert {
    id: string;
}
export interface EventRevertSDKType {
    id: string;
}
export declare const EventRevert: {
    encode(message: EventRevert, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRevert;
    fromPartial(object: DeepPartial<EventRevert>): EventRevert;
};

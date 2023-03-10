import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventQuery {
    id: string;
}
export interface EventQuerySDKType {
    id: string;
}
export declare const EventQuery: {
    encode(message: EventQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventQuery;
    fromPartial(object: DeepPartial<EventQuery>): EventQuery;
};

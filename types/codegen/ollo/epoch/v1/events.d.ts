import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventEpochStarted {
    epochId: Long;
}
export interface EventEpochStartedSDKType {
    epoch_id: Long;
}
export interface EventEpochEnded {
    epochId: Long;
}
export interface EventEpochEndedSDKType {
    epoch_id: Long;
}
export declare const EventEpochStarted: {
    encode(message: EventEpochStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochStarted;
    fromPartial(object: DeepPartial<EventEpochStarted>): EventEpochStarted;
};
export declare const EventEpochEnded: {
    encode(message: EventEpochEnded, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEpochEnded;
    fromPartial(object: DeepPartial<EventEpochEnded>): EventEpochEnded;
};

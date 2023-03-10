import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventGoalCompleted {
    goalID: Long;
    address: string;
}
export interface EventGoalCompletedSDKType {
    goalID: Long;
    address: string;
}
export interface EventGoalClaimed {
    goalID: Long;
    claimer: string;
}
export interface EventGoalClaimedSDKType {
    goalID: Long;
    claimer: string;
}
export declare const EventGoalCompleted: {
    encode(message: EventGoalCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGoalCompleted;
    fromPartial(object: DeepPartial<EventGoalCompleted>): EventGoalCompleted;
};
export declare const EventGoalClaimed: {
    encode(message: EventGoalClaimed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGoalClaimed;
    fromPartial(object: DeepPartial<EventGoalClaimed>): EventGoalClaimed;
};

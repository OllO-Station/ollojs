import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventMissionCompleted {
    missionId: Long;
    address: string;
}
export interface EventMissionCompletedSDKType {
    mission_id: Long;
    address: string;
}
export interface EventMissionClaimed {
    missionId: Long;
    claimer: string;
}
export interface EventMissionClaimedSDKType {
    mission_id: Long;
    claimer: string;
}
export declare const EventMissionCompleted: {
    encode(message: EventMissionCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMissionCompleted;
    fromPartial(object: DeepPartial<EventMissionCompleted>): EventMissionCompleted;
};
export declare const EventMissionClaimed: {
    encode(message: EventMissionClaimed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMissionClaimed;
    fromPartial(object: DeepPartial<EventMissionClaimed>): EventMissionClaimed;
};

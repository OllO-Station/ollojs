import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Goal {
    id: Long;
    description: string;
    weight: string;
}
export interface GoalSDKType {
    id: Long;
    description: string;
    weight: string;
}
export declare const Goal: {
    encode(message: Goal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Goal;
    fromPartial(object: DeepPartial<Goal>): Goal;
};

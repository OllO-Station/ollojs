import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaim {
    claimer: string;
    goalId: Long;
}
export interface MsgClaimSDKType {
    claimer: string;
    goal_id: Long;
}
export interface MsgClaimResponse {
    claimed: string;
}
export interface MsgClaimResponseSDKType {
    claimed: string;
}
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim;
    fromPartial(object: DeepPartial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(message: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse;
    fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse;
};

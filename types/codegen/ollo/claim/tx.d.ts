import { ConditionType } from "./claim";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaim {
    /** airdrop_id specifies index of the airdrop */
    airdropId: Long;
    /** recipient specifies the bech32-encoded address that is eligible to claim airdrop */
    recipient: string;
    /** condition_type specifies the condition type */
    conditionType: ConditionType;
}
export interface MsgClaimSDKType {
    airdrop_id: Long;
    recipient: string;
    condition_type: ConditionType;
}
export interface MsgClaimResponse {
}
export interface MsgClaimResponseSDKType {
}
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim;
    fromPartial(object: DeepPartial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(_: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse;
    fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse;
};

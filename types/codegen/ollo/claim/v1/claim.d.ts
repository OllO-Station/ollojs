import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface InitialClaim {
    enabled: boolean;
    goalId: Long;
}
export interface InitialClaimSDKType {
    enabled: boolean;
    goal_id: Long;
}
export interface ClaimRecord {
    address: string;
    claimable: string;
    completedGoals: Long[];
    claimedGoals: Long[];
}
export interface ClaimRecordSDKType {
    address: string;
    claimable: string;
    completed_goals: Long[];
    claimed_goals: Long[];
}
export declare const InitialClaim: {
    encode(message: InitialClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitialClaim;
    fromPartial(object: DeepPartial<InitialClaim>): InitialClaim;
};
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
};

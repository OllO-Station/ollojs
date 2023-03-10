import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum ClaimAction {
    ClaimActionUnspecified = 0,
    ClaimActionInitialClaim = 1,
    ClaimActionStake = 2,
    ClaimActionCastVote = 3,
    ClaimActionDepositLiquidity = 4,
    ClaimActionLockLiquidity = 5,
    ClaimActionMintNft = 6,
    ClaimActionAuctionNft = 7,
    ClaimActionDepositExternalAsset = 8,
    ClaimActionSwap = 9,
    ClaimActionBorrow = 10,
    UNRECOGNIZED = -1
}
export declare const ClaimActionSDKType: typeof ClaimAction;
export declare function claimActionFromJSON(object: any): ClaimAction;
export declare function claimActionToJSON(object: ClaimAction): string;
export declare enum ClaimStatus {
    ClaimStatusUnspecified = 0,
    ClaimStatusPending = 1,
    ClaimStatusClaimed = 2,
    ClaimStatusActive = 3,
    ClaimStatusExpired = 4,
    UNRECOGNIZED = -1
}
export declare const ClaimStatusSDKType: typeof ClaimStatus;
export declare function claimStatusFromJSON(object: any): ClaimStatus;
export declare function claimStatusToJSON(object: ClaimStatus): string;
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

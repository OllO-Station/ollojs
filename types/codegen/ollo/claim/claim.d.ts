import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ConditionType defines the type of condition that a recipient must execute in order to receive a claimable amount. */
export declare enum ConditionType {
    /** CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED specifies an unknown condition type */
    CONDITION_TYPE_UNSPECIFIED = 0,
    /** CONDITION_TYPE_DEPOSIT - CONDITION_TYPE_DEPOSIT specifies deposit condition type */
    CONDITION_TYPE_DEPOSIT = 1,
    /** CONDITION_TYPE_SWAP - CONDITION_TYPE_SWAP specifies swap condition type */
    CONDITION_TYPE_SWAP = 2,
    /** CONDITION_TYPE_STAKE - CONDITION_TYPE_STAKE specifies staking condition */
    CONDITION_TYPE_STAKE = 3,
    /** CONDITION_TYPE_VOTE - CONDITION_TYPE_VOTE specifies governance vote condition type */
    CONDITION_TYPE_VOTE = 4,
    UNRECOGNIZED = -1
}
export declare const ConditionTypeSDKType: typeof ConditionType;
export declare function conditionTypeFromJSON(object: any): ConditionType;
export declare function conditionTypeToJSON(object: ConditionType): string;
/** Airdrop defines airdrop information. */
export interface Airdrop {
    /** id specifies index of the airdrop */
    id: Long;
    /** source_address defines the bech32-encoded source address where the source of coins from */
    sourceAddress: string;
    /** conditions specifies a list of conditions */
    conditions: ConditionType[];
    /** start_time specifies the start time of the airdrop */
    startTime?: Date;
    /** end_time specifies the start time of the airdrop */
    endTime?: Date;
}
/** Airdrop defines airdrop information. */
export interface AirdropSDKType {
    id: Long;
    source_address: string;
    conditions: ConditionType[];
    start_time?: Date;
    end_time?: Date;
}
/** ClaimRecord defines claim record that corresponds to the airdrop. */
export interface ClaimRecord {
    /** airdrop_id specifies airdrop id */
    airdropId: Long;
    /** recipient specifies the bech32-encoded address that is eligible to claim airdrop */
    recipient: string;
    /** initial_claimable_coins specifies the initial claimable coins */
    initialClaimableCoins: Coin[];
    /** claimable_coins specifies the unclaimed claimable coins */
    claimableCoins: Coin[];
    /**
     * claimed_conditions specifies a list of condition types
     * initial values are empty and each condition type gets appended when claim is successfully executed
     */
    claimedConditions: ConditionType[];
}
/** ClaimRecord defines claim record that corresponds to the airdrop. */
export interface ClaimRecordSDKType {
    airdrop_id: Long;
    recipient: string;
    initial_claimable_coins: CoinSDKType[];
    claimable_coins: CoinSDKType[];
    claimed_conditions: ConditionType[];
}
export declare const Airdrop: {
    encode(message: Airdrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Airdrop;
    fromPartial(object: DeepPartial<Airdrop>): Airdrop;
};
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
};

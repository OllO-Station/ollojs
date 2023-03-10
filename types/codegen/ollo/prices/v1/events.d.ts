import { DataProvider, DataProviderSDKType } from "./prices";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface MsgNewFeedEvent {
    feedId: string;
    dataProviders: DataProvider[];
    feedOwner: Uint8Array;
}
export interface MsgNewFeedEventSDKType {
    feedId: string;
    dataProviders: DataProviderSDKType[];
    feedOwner: Uint8Array;
}
export interface MsgNewRoundDataEvent {
    feedId: string;
    roundId: Long;
    feedData: Uint8Array[];
}
export interface MsgNewRoundDataEventSDKType {
    feedId: string;
    roundId: Long;
    feedData: Uint8Array[];
}
export interface MsgNewRoundRequestEvent {
    feedId: string;
}
export interface MsgNewRoundRequestEventSDKType {
    feedId: string;
}
export interface MsgOraclePaidEvent {
    feedId: string;
    /** The account that was paid to */
    account: Uint8Array;
    value: Long;
}
export interface MsgOraclePaidEventSDKType {
    feedId: string;
    account: Uint8Array;
    value: Long;
}
export interface MsgDataProviderSetChangeEvent {
    feedId: string;
    /** changeType: either add or remove */
    changeType: string;
    dataProviderAddr: Uint8Array;
    signer: Uint8Array;
}
export interface MsgDataProviderSetChangeEventSDKType {
    feedId: string;
    changeType: string;
    dataProviderAddr: Uint8Array;
    signer: Uint8Array;
}
export interface MsgFeedParameterChangeEvent {
    feedId: string;
    /** changeType: either DeviationThreshold, heartbeatTrigger, submissionCount */
    changeType: string;
    newParameterValue: number;
    signer: Uint8Array;
}
export interface MsgFeedParameterChangeEventSDKType {
    feedId: string;
    changeType: string;
    newParameterValue: number;
    signer: Uint8Array;
}
export interface MsgModuleOwnershipTransferEvent {
    newModuleOwnerAddr: Uint8Array;
    signer: Uint8Array;
}
export interface MsgModuleOwnershipTransferEventSDKType {
    newModuleOwnerAddr: Uint8Array;
    signer: Uint8Array;
}
export interface MsgFeedOwnershipTransferEvent {
    feedId: string;
    newFeedOwnerAddr: Uint8Array;
    signer: Uint8Array;
}
export interface MsgFeedOwnershipTransferEventSDKType {
    feedId: string;
    newFeedOwnerAddr: Uint8Array;
    signer: Uint8Array;
}
export interface MsgFeedDataValidationFailedEvent {
    feedId: string;
    feedOwner: Uint8Array;
    /** DataProviders is the init list of data provider of the feed */
    dataProviders: DataProvider[];
    submitter: Uint8Array;
    feedData: Uint8Array[];
    /** Signatures is the data provider signature list of the current round */
    signatures: Uint8Array[];
}
export interface MsgFeedDataValidationFailedEventSDKType {
    feedId: string;
    feedOwner: Uint8Array;
    dataProviders: DataProviderSDKType[];
    submitter: Uint8Array;
    feedData: Uint8Array[];
    signatures: Uint8Array[];
}
export interface MsgFeedRewardSchemaChangeEvent {
    feedId: string;
    newStrategy: string;
    newBaseAmount: Long;
    signer: Uint8Array;
}
export interface MsgFeedRewardSchemaChangeEventSDKType {
    feedId: string;
    newStrategy: string;
    newBaseAmount: Long;
    signer: Uint8Array;
}
export declare const MsgNewFeedEvent: {
    encode(message: MsgNewFeedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewFeedEvent;
    fromPartial(object: DeepPartial<MsgNewFeedEvent>): MsgNewFeedEvent;
};
export declare const MsgNewRoundDataEvent: {
    encode(message: MsgNewRoundDataEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRoundDataEvent;
    fromPartial(object: DeepPartial<MsgNewRoundDataEvent>): MsgNewRoundDataEvent;
};
export declare const MsgNewRoundRequestEvent: {
    encode(message: MsgNewRoundRequestEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRoundRequestEvent;
    fromPartial(object: DeepPartial<MsgNewRoundRequestEvent>): MsgNewRoundRequestEvent;
};
export declare const MsgOraclePaidEvent: {
    encode(message: MsgOraclePaidEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOraclePaidEvent;
    fromPartial(object: DeepPartial<MsgOraclePaidEvent>): MsgOraclePaidEvent;
};
export declare const MsgDataProviderSetChangeEvent: {
    encode(message: MsgDataProviderSetChangeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDataProviderSetChangeEvent;
    fromPartial(object: DeepPartial<MsgDataProviderSetChangeEvent>): MsgDataProviderSetChangeEvent;
};
export declare const MsgFeedParameterChangeEvent: {
    encode(message: MsgFeedParameterChangeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedParameterChangeEvent;
    fromPartial(object: DeepPartial<MsgFeedParameterChangeEvent>): MsgFeedParameterChangeEvent;
};
export declare const MsgModuleOwnershipTransferEvent: {
    encode(message: MsgModuleOwnershipTransferEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleOwnershipTransferEvent;
    fromPartial(object: DeepPartial<MsgModuleOwnershipTransferEvent>): MsgModuleOwnershipTransferEvent;
};
export declare const MsgFeedOwnershipTransferEvent: {
    encode(message: MsgFeedOwnershipTransferEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedOwnershipTransferEvent;
    fromPartial(object: DeepPartial<MsgFeedOwnershipTransferEvent>): MsgFeedOwnershipTransferEvent;
};
export declare const MsgFeedDataValidationFailedEvent: {
    encode(message: MsgFeedDataValidationFailedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedDataValidationFailedEvent;
    fromPartial(object: DeepPartial<MsgFeedDataValidationFailedEvent>): MsgFeedDataValidationFailedEvent;
};
export declare const MsgFeedRewardSchemaChangeEvent: {
    encode(message: MsgFeedRewardSchemaChangeEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedRewardSchemaChangeEvent;
    fromPartial(object: DeepPartial<MsgFeedRewardSchemaChangeEvent>): MsgFeedRewardSchemaChangeEvent;
};

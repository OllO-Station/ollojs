import { BandPricesCallData, BandPricesCallDataSDKType } from "./band";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { DataProvider, DataProviderSDKType, FeedRewardSchema, FeedRewardSchemaSDKType, OCRAbiEncoded, OCRAbiEncodedSDKType } from "./prices";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgBandPricesData {
    creator: string;
    oracleScriptId: Long;
    sourceChannel: string;
    calldata?: BandPricesCallData;
    askCount: Long;
    minCount: Long;
    feeLimit: Coin[];
    prepareGas: Long;
    executeGas: Long;
    clientId: string;
}
export interface MsgBandPricesDataSDKType {
    creator: string;
    oracle_script_id: Long;
    source_channel: string;
    calldata?: BandPricesCallDataSDKType;
    ask_count: Long;
    min_count: Long;
    fee_limit: CoinSDKType[];
    prepare_gas: Long;
    execute_gas: Long;
    client_id: string;
}
export interface MsgBandPricesDataResponse {
}
export interface MsgBandPricesDataResponseSDKType {
}
/**
 * Msg defines the Msg gPRC service.
 * MsgModuleOwnershipTransfer is the type defined for module ownership transfer
 */
export interface MsgModuleOwnershipTransfer {
    /** current module owner address */
    assignerAddress: Uint8Array;
    newModuleOwnerAddress: Uint8Array;
    newModuleOwnerPubKey: Uint8Array;
}
/**
 * Msg defines the Msg gPRC service.
 * MsgModuleOwnershipTransfer is the type defined for module ownership transfer
 */
export interface MsgModuleOwnershipTransferSDKType {
    assignerAddress: Uint8Array;
    newModuleOwnerAddress: Uint8Array;
    newModuleOwnerPubKey: Uint8Array;
}
/** MsgFeed is the type defined for new feed */
export interface MsgFeed {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /** FeedOwner is the owner of the feed */
    feedOwner: Uint8Array;
    /** DataProviders is the init list of data provider of the feed */
    dataProviders: DataProvider[];
    /** The number of signatures required for a feedData submission to be valid */
    submissionCount: number;
    /**
     * The interval between which a new round should automatically be triggered.
     * The given value in milliseconds will only be approximate within block
     * intervals
     */
    heartbeatTrigger: number;
    /**
     * The fraction of deviation in the feed data required to trigger a new round.
     * For example if the price of ATOM/USD changes by 1% then a new round should
     * occur even if the heartbeat interval has not elapsed.
     */
    deviationThresholdTrigger: number;
    /** Module owner who signs the add feed tx */
    moduleOwnerAddress: Uint8Array;
    /** feedReward struct describing how rewards should be paid */
    feedReward?: FeedRewardSchema;
    /** Feed description */
    desc: string;
}
/** MsgFeed is the type defined for new feed */
export interface MsgFeedSDKType {
    feedId: string;
    feedOwner: Uint8Array;
    dataProviders: DataProviderSDKType[];
    submissionCount: number;
    heartbeatTrigger: number;
    deviationThresholdTrigger: number;
    moduleOwnerAddress: Uint8Array;
    feedReward?: FeedRewardSchemaSDKType;
    desc: string;
}
/** MsgAddProvider is the type defined for adding new data provider of the feed */
export interface MsgAddDataProvider {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /** DataProvider is the new data provider of the feed to add */
    dataProvider?: DataProvider;
    /** Signer is the feed owner who signs the add feed provided tx */
    signer: Uint8Array;
}
/** MsgAddProvider is the type defined for adding new data provider of the feed */
export interface MsgAddDataProviderSDKType {
    feedId: string;
    dataProvider?: DataProviderSDKType;
    signer: Uint8Array;
}
/**
 * MsgRemoveProvider is the type defined for removing a data provider of the
 * feed
 */
export interface MsgRemoveDataProvider {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /** Address of the data provider to remove from the feed */
    address: Uint8Array;
    /** Signer is the feed owner who signs the remove feed provided tx */
    signer: Uint8Array;
}
/**
 * MsgRemoveProvider is the type defined for removing a data provider of the
 * feed
 */
export interface MsgRemoveDataProviderSDKType {
    feedId: string;
    address: Uint8Array;
    signer: Uint8Array;
}
export interface MsgSetSubmissionCount {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /** The number of signatures required for a feedData submission to be valid */
    submissionCount: number;
    /** Signer is the feed owner who signs the tx */
    signer: Uint8Array;
}
export interface MsgSetSubmissionCountSDKType {
    feedId: string;
    submissionCount: number;
    signer: Uint8Array;
}
export interface MsgSetHeartbeatTrigger {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /**
     * The interval between which a new round should automatically be triggered.
     * The given value in milliseconds will only be approximate within block
     * intervals
     */
    heartbeatTrigger: number;
    /** Signer is the feed owner who signs the tx */
    signer: Uint8Array;
}
export interface MsgSetHeartbeatTriggerSDKType {
    feedId: string;
    heartbeatTrigger: number;
    signer: Uint8Array;
}
export interface MsgSetDeviationThresholdTrigger {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /**
     * The fraction of deviation in the feed data required to trigger a new round.
     * For example if the price of ATOM/USD changes by 1% then a new round should
     * occur even if the heartbeat interval has not elapsed.
     */
    deviationThresholdTrigger: number;
    /** Signer is the feed owner who signs the tx */
    signer: Uint8Array;
}
export interface MsgSetDeviationThresholdTriggerSDKType {
    feedId: string;
    deviationThresholdTrigger: number;
    signer: Uint8Array;
}
export interface MsgSetFeedReward {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /**
     * The reward distributed to the data providers in a given feed.
     * The reward will be given as the native token in the application,
     * denominated as "link"
     */
    feedReward?: FeedRewardSchema;
    /** Signer is the feed owner who signs the tx */
    signer: Uint8Array;
}
export interface MsgSetFeedRewardSDKType {
    feedId: string;
    feedReward?: FeedRewardSchemaSDKType;
    signer: Uint8Array;
}
/** MsgFeedOwnershipTransfer is the type defined for feed ownership transfer */
export interface MsgFeedOwnershipTransfer {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /** NewFeedOwnerAddress is the address of the new owner of the feed */
    newFeedOwnerAddress: Uint8Array;
    /** Signer is the feed owner who signs the tx */
    signer: Uint8Array;
}
/** MsgFeedOwnershipTransfer is the type defined for feed ownership transfer */
export interface MsgFeedOwnershipTransferSDKType {
    feedId: string;
    newFeedOwnerAddress: Uint8Array;
    signer: Uint8Array;
}
/**
 * MsgFeedData is the type defined for the data of the feed
 * It could be an OCR report feed, or any general feed data in the future
 */
export interface MsgFeedData {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /**
     * Submitter is the leader of the current round who is calling the module to
     * submit feed data
     */
    submitter: Uint8Array;
    /**
     * observationFeedData is the report for price feed, could be used for general
     * feed data From proposal: The reports generated by Chainlink nodes off-chain
     * using the OCR protocol are ABI encoded byte arrays which means each report
     * contains a byte array which could be deserialized to OCRAbiEncoded type
     * this is the original observation data array from each data provider
     */
    observationFeedData: Uint8Array[];
    /**
     * observationFeedData is the list of the data provider observation data
     * signature of the current round, signed by chainlink prikey. This is
     * observation signatures
     */
    observationFeedDataSignatures: Uint8Array[];
    /**
     * isFeedDataValid is the indicator whether feed data is valid against the
     * external validation func, it's true by default
     */
    isFeedDataValid: boolean;
    /**
     * cosmosPubKeys is the cosmos account pubKey slice of the data providers who
     * signed this round
     */
    cosmosPubKeys: Uint8Array[];
    /** txFee is the tx fee of submitting feed data */
    txFee?: Coin;
}
/**
 * MsgFeedData is the type defined for the data of the feed
 * It could be an OCR report feed, or any general feed data in the future
 */
export interface MsgFeedDataSDKType {
    feedId: string;
    submitter: Uint8Array;
    observationFeedData: Uint8Array[];
    observationFeedDataSignatures: Uint8Array[];
    isFeedDataValid: boolean;
    cosmosPubKeys: Uint8Array[];
    txFee?: CoinSDKType;
}
/**
 * MsgRequestNewRound is the type defined for requesting new rounds to be
 * triggered for a given feed
 */
export interface MsgRequestNewRound {
    /** FeedId is the unique identifier of the feed */
    feedId: string;
    /** Signer is the feed owner who signs the tx */
    signer: Uint8Array;
}
/**
 * MsgRequestNewRound is the type defined for requesting new rounds to be
 * triggered for a given feed
 */
export interface MsgRequestNewRoundSDKType {
    feedId: string;
    signer: Uint8Array;
}
/** MsgAccount is the type defined for account associated with the Chainlink node */
export interface MsgAccount {
    /** submitter - associated cosmos account address */
    submitter: Uint8Array;
    /** chainlinkPublicKey - public key of the associated Chainlink Oracle account */
    chainlinkPublicKey: Uint8Array;
    /**
     * chainlinkSigningKey - signing key of the associated Chainlink Oracle
     * account
     */
    chainlinkSigningKey: Uint8Array;
    /**
     * piggyAddress - cosmos account address receivable for reward and fee
     * distribution
     */
    piggyAddress: Uint8Array;
}
/** MsgAccount is the type defined for account associated with the Chainlink node */
export interface MsgAccountSDKType {
    submitter: Uint8Array;
    chainlinkPublicKey: Uint8Array;
    chainlinkSigningKey: Uint8Array;
    piggyAddress: Uint8Array;
}
/** MsgEditAccount is the type defined to edit a Chainlink account */
export interface MsgEditAccount {
    /** submitter - associated cosmos account address */
    submitter: Uint8Array;
    /**
     * piggyAddress - cosmos account address receivable for reward and fee
     * distribution
     */
    piggyAddress: Uint8Array;
}
/** MsgEditAccount is the type defined to edit a Chainlink account */
export interface MsgEditAccountSDKType {
    submitter: Uint8Array;
    piggyAddress: Uint8Array;
}
export interface MsgResponse {
    height: Long;
    txHash: string;
}
export interface MsgResponseSDKType {
    height: Long;
    txHash: string;
}
export interface OCRFeedDataInStore {
    feedData?: MsgFeedData;
    deserializedOCRReport?: OCRAbiEncoded;
    RoundId: Long;
}
export interface OCRFeedDataInStoreSDKType {
    feedData?: MsgFeedDataSDKType;
    deserializedOCRReport?: OCRAbiEncodedSDKType;
    RoundId: Long;
}
export declare const MsgBandPricesData: {
    encode(message: MsgBandPricesData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBandPricesData;
    fromPartial(object: DeepPartial<MsgBandPricesData>): MsgBandPricesData;
};
export declare const MsgBandPricesDataResponse: {
    encode(_: MsgBandPricesDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBandPricesDataResponse;
    fromPartial(_: DeepPartial<MsgBandPricesDataResponse>): MsgBandPricesDataResponse;
};
export declare const MsgModuleOwnershipTransfer: {
    encode(message: MsgModuleOwnershipTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleOwnershipTransfer;
    fromPartial(object: DeepPartial<MsgModuleOwnershipTransfer>): MsgModuleOwnershipTransfer;
};
export declare const MsgFeed: {
    encode(message: MsgFeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeed;
    fromPartial(object: DeepPartial<MsgFeed>): MsgFeed;
};
export declare const MsgAddDataProvider: {
    encode(message: MsgAddDataProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDataProvider;
    fromPartial(object: DeepPartial<MsgAddDataProvider>): MsgAddDataProvider;
};
export declare const MsgRemoveDataProvider: {
    encode(message: MsgRemoveDataProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDataProvider;
    fromPartial(object: DeepPartial<MsgRemoveDataProvider>): MsgRemoveDataProvider;
};
export declare const MsgSetSubmissionCount: {
    encode(message: MsgSetSubmissionCount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubmissionCount;
    fromPartial(object: DeepPartial<MsgSetSubmissionCount>): MsgSetSubmissionCount;
};
export declare const MsgSetHeartbeatTrigger: {
    encode(message: MsgSetHeartbeatTrigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHeartbeatTrigger;
    fromPartial(object: DeepPartial<MsgSetHeartbeatTrigger>): MsgSetHeartbeatTrigger;
};
export declare const MsgSetDeviationThresholdTrigger: {
    encode(message: MsgSetDeviationThresholdTrigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeviationThresholdTrigger;
    fromPartial(object: DeepPartial<MsgSetDeviationThresholdTrigger>): MsgSetDeviationThresholdTrigger;
};
export declare const MsgSetFeedReward: {
    encode(message: MsgSetFeedReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeedReward;
    fromPartial(object: DeepPartial<MsgSetFeedReward>): MsgSetFeedReward;
};
export declare const MsgFeedOwnershipTransfer: {
    encode(message: MsgFeedOwnershipTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedOwnershipTransfer;
    fromPartial(object: DeepPartial<MsgFeedOwnershipTransfer>): MsgFeedOwnershipTransfer;
};
export declare const MsgFeedData: {
    encode(message: MsgFeedData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedData;
    fromPartial(object: DeepPartial<MsgFeedData>): MsgFeedData;
};
export declare const MsgRequestNewRound: {
    encode(message: MsgRequestNewRound, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestNewRound;
    fromPartial(object: DeepPartial<MsgRequestNewRound>): MsgRequestNewRound;
};
export declare const MsgAccount: {
    encode(message: MsgAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAccount;
    fromPartial(object: DeepPartial<MsgAccount>): MsgAccount;
};
export declare const MsgEditAccount: {
    encode(message: MsgEditAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditAccount;
    fromPartial(object: DeepPartial<MsgEditAccount>): MsgEditAccount;
};
export declare const MsgResponse: {
    encode(message: MsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResponse;
    fromPartial(object: DeepPartial<MsgResponse>): MsgResponse;
};
export declare const OCRFeedDataInStore: {
    encode(message: OCRFeedDataInStore, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OCRFeedDataInStore;
    fromPartial(object: DeepPartial<OCRFeedDataInStore>): OCRFeedDataInStore;
};

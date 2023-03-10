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
export interface MsgBandPricesDataResponse {}
export interface MsgBandPricesDataResponseSDKType {}
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

function createBaseMsgBandPricesData(): MsgBandPricesData {
  return {
    creator: "",
    oracleScriptId: Long.UZERO,
    sourceChannel: "",
    calldata: undefined,
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    feeLimit: [],
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO,
    clientId: ""
  };
}

export const MsgBandPricesData = {
  encode(message: MsgBandPricesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.oracleScriptId.isZero()) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }

    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }

    if (message.calldata !== undefined) {
      BandPricesCallData.encode(message.calldata, writer.uint32(34).fork()).ldelim();
    }

    if (!message.askCount.isZero()) {
      writer.uint32(40).uint64(message.askCount);
    }

    if (!message.minCount.isZero()) {
      writer.uint32(48).uint64(message.minCount);
    }

    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.prepareGas.isZero()) {
      writer.uint32(64).uint64(message.prepareGas);
    }

    if (!message.executeGas.isZero()) {
      writer.uint32(72).uint64(message.executeGas);
    }

    if (message.clientId !== "") {
      writer.uint32(82).string(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBandPricesData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBandPricesData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.oracleScriptId = (reader.uint64() as Long);
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.calldata = BandPricesCallData.decode(reader, reader.uint32());
          break;

        case 5:
          message.askCount = (reader.uint64() as Long);
          break;

        case 6:
          message.minCount = (reader.uint64() as Long);
          break;

        case 7:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.prepareGas = (reader.uint64() as Long);
          break;

        case 9:
          message.executeGas = (reader.uint64() as Long);
          break;

        case 10:
          message.clientId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBandPricesData>): MsgBandPricesData {
    const message = createBaseMsgBandPricesData();
    message.creator = object.creator ?? "";
    message.oracleScriptId = object.oracleScriptId !== undefined && object.oracleScriptId !== null ? Long.fromValue(object.oracleScriptId) : Long.UZERO;
    message.sourceChannel = object.sourceChannel ?? "";
    message.calldata = object.calldata !== undefined && object.calldata !== null ? BandPricesCallData.fromPartial(object.calldata) : undefined;
    message.askCount = object.askCount !== undefined && object.askCount !== null ? Long.fromValue(object.askCount) : Long.UZERO;
    message.minCount = object.minCount !== undefined && object.minCount !== null ? Long.fromValue(object.minCount) : Long.UZERO;
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    message.clientId = object.clientId ?? "";
    return message;
  }

};

function createBaseMsgBandPricesDataResponse(): MsgBandPricesDataResponse {
  return {};
}

export const MsgBandPricesDataResponse = {
  encode(_: MsgBandPricesDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBandPricesDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBandPricesDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgBandPricesDataResponse>): MsgBandPricesDataResponse {
    const message = createBaseMsgBandPricesDataResponse();
    return message;
  }

};

function createBaseMsgModuleOwnershipTransfer(): MsgModuleOwnershipTransfer {
  return {
    assignerAddress: new Uint8Array(),
    newModuleOwnerAddress: new Uint8Array(),
    newModuleOwnerPubKey: new Uint8Array()
  };
}

export const MsgModuleOwnershipTransfer = {
  encode(message: MsgModuleOwnershipTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assignerAddress.length !== 0) {
      writer.uint32(10).bytes(message.assignerAddress);
    }

    if (message.newModuleOwnerAddress.length !== 0) {
      writer.uint32(18).bytes(message.newModuleOwnerAddress);
    }

    if (message.newModuleOwnerPubKey.length !== 0) {
      writer.uint32(26).bytes(message.newModuleOwnerPubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleOwnershipTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleOwnershipTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assignerAddress = reader.bytes();
          break;

        case 2:
          message.newModuleOwnerAddress = reader.bytes();
          break;

        case 3:
          message.newModuleOwnerPubKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgModuleOwnershipTransfer>): MsgModuleOwnershipTransfer {
    const message = createBaseMsgModuleOwnershipTransfer();
    message.assignerAddress = object.assignerAddress ?? new Uint8Array();
    message.newModuleOwnerAddress = object.newModuleOwnerAddress ?? new Uint8Array();
    message.newModuleOwnerPubKey = object.newModuleOwnerPubKey ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgFeed(): MsgFeed {
  return {
    feedId: "",
    feedOwner: new Uint8Array(),
    dataProviders: [],
    submissionCount: 0,
    heartbeatTrigger: 0,
    deviationThresholdTrigger: 0,
    moduleOwnerAddress: new Uint8Array(),
    feedReward: undefined,
    desc: ""
  };
}

export const MsgFeed = {
  encode(message: MsgFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.feedOwner.length !== 0) {
      writer.uint32(18).bytes(message.feedOwner);
    }

    for (const v of message.dataProviders) {
      DataProvider.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.submissionCount !== 0) {
      writer.uint32(32).uint32(message.submissionCount);
    }

    if (message.heartbeatTrigger !== 0) {
      writer.uint32(40).uint32(message.heartbeatTrigger);
    }

    if (message.deviationThresholdTrigger !== 0) {
      writer.uint32(48).uint32(message.deviationThresholdTrigger);
    }

    if (message.moduleOwnerAddress.length !== 0) {
      writer.uint32(58).bytes(message.moduleOwnerAddress);
    }

    if (message.feedReward !== undefined) {
      FeedRewardSchema.encode(message.feedReward, writer.uint32(66).fork()).ldelim();
    }

    if (message.desc !== "") {
      writer.uint32(74).string(message.desc);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.feedOwner = reader.bytes();
          break;

        case 3:
          message.dataProviders.push(DataProvider.decode(reader, reader.uint32()));
          break;

        case 4:
          message.submissionCount = reader.uint32();
          break;

        case 5:
          message.heartbeatTrigger = reader.uint32();
          break;

        case 6:
          message.deviationThresholdTrigger = reader.uint32();
          break;

        case 7:
          message.moduleOwnerAddress = reader.bytes();
          break;

        case 8:
          message.feedReward = FeedRewardSchema.decode(reader, reader.uint32());
          break;

        case 9:
          message.desc = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFeed>): MsgFeed {
    const message = createBaseMsgFeed();
    message.feedId = object.feedId ?? "";
    message.feedOwner = object.feedOwner ?? new Uint8Array();
    message.dataProviders = object.dataProviders?.map(e => DataProvider.fromPartial(e)) || [];
    message.submissionCount = object.submissionCount ?? 0;
    message.heartbeatTrigger = object.heartbeatTrigger ?? 0;
    message.deviationThresholdTrigger = object.deviationThresholdTrigger ?? 0;
    message.moduleOwnerAddress = object.moduleOwnerAddress ?? new Uint8Array();
    message.feedReward = object.feedReward !== undefined && object.feedReward !== null ? FeedRewardSchema.fromPartial(object.feedReward) : undefined;
    message.desc = object.desc ?? "";
    return message;
  }

};

function createBaseMsgAddDataProvider(): MsgAddDataProvider {
  return {
    feedId: "",
    dataProvider: undefined,
    signer: new Uint8Array()
  };
}

export const MsgAddDataProvider = {
  encode(message: MsgAddDataProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.dataProvider !== undefined) {
      DataProvider.encode(message.dataProvider, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDataProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDataProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.dataProvider = DataProvider.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAddDataProvider>): MsgAddDataProvider {
    const message = createBaseMsgAddDataProvider();
    message.feedId = object.feedId ?? "";
    message.dataProvider = object.dataProvider !== undefined && object.dataProvider !== null ? DataProvider.fromPartial(object.dataProvider) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgRemoveDataProvider(): MsgRemoveDataProvider {
  return {
    feedId: "",
    address: new Uint8Array(),
    signer: new Uint8Array()
  };
}

export const MsgRemoveDataProvider = {
  encode(message: MsgRemoveDataProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDataProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveDataProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.address = reader.bytes();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRemoveDataProvider>): MsgRemoveDataProvider {
    const message = createBaseMsgRemoveDataProvider();
    message.feedId = object.feedId ?? "";
    message.address = object.address ?? new Uint8Array();
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgSetSubmissionCount(): MsgSetSubmissionCount {
  return {
    feedId: "",
    submissionCount: 0,
    signer: new Uint8Array()
  };
}

export const MsgSetSubmissionCount = {
  encode(message: MsgSetSubmissionCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.submissionCount !== 0) {
      writer.uint32(16).uint32(message.submissionCount);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSubmissionCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSubmissionCount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.submissionCount = reader.uint32();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetSubmissionCount>): MsgSetSubmissionCount {
    const message = createBaseMsgSetSubmissionCount();
    message.feedId = object.feedId ?? "";
    message.submissionCount = object.submissionCount ?? 0;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgSetHeartbeatTrigger(): MsgSetHeartbeatTrigger {
  return {
    feedId: "",
    heartbeatTrigger: 0,
    signer: new Uint8Array()
  };
}

export const MsgSetHeartbeatTrigger = {
  encode(message: MsgSetHeartbeatTrigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.heartbeatTrigger !== 0) {
      writer.uint32(16).uint32(message.heartbeatTrigger);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHeartbeatTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHeartbeatTrigger();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.heartbeatTrigger = reader.uint32();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetHeartbeatTrigger>): MsgSetHeartbeatTrigger {
    const message = createBaseMsgSetHeartbeatTrigger();
    message.feedId = object.feedId ?? "";
    message.heartbeatTrigger = object.heartbeatTrigger ?? 0;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgSetDeviationThresholdTrigger(): MsgSetDeviationThresholdTrigger {
  return {
    feedId: "",
    deviationThresholdTrigger: 0,
    signer: new Uint8Array()
  };
}

export const MsgSetDeviationThresholdTrigger = {
  encode(message: MsgSetDeviationThresholdTrigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.deviationThresholdTrigger !== 0) {
      writer.uint32(16).uint32(message.deviationThresholdTrigger);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeviationThresholdTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeviationThresholdTrigger();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.deviationThresholdTrigger = reader.uint32();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetDeviationThresholdTrigger>): MsgSetDeviationThresholdTrigger {
    const message = createBaseMsgSetDeviationThresholdTrigger();
    message.feedId = object.feedId ?? "";
    message.deviationThresholdTrigger = object.deviationThresholdTrigger ?? 0;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgSetFeedReward(): MsgSetFeedReward {
  return {
    feedId: "",
    feedReward: undefined,
    signer: new Uint8Array()
  };
}

export const MsgSetFeedReward = {
  encode(message: MsgSetFeedReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.feedReward !== undefined) {
      FeedRewardSchema.encode(message.feedReward, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFeedReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFeedReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.feedReward = FeedRewardSchema.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetFeedReward>): MsgSetFeedReward {
    const message = createBaseMsgSetFeedReward();
    message.feedId = object.feedId ?? "";
    message.feedReward = object.feedReward !== undefined && object.feedReward !== null ? FeedRewardSchema.fromPartial(object.feedReward) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgFeedOwnershipTransfer(): MsgFeedOwnershipTransfer {
  return {
    feedId: "",
    newFeedOwnerAddress: new Uint8Array(),
    signer: new Uint8Array()
  };
}

export const MsgFeedOwnershipTransfer = {
  encode(message: MsgFeedOwnershipTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.newFeedOwnerAddress.length !== 0) {
      writer.uint32(18).bytes(message.newFeedOwnerAddress);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedOwnershipTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedOwnershipTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.newFeedOwnerAddress = reader.bytes();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFeedOwnershipTransfer>): MsgFeedOwnershipTransfer {
    const message = createBaseMsgFeedOwnershipTransfer();
    message.feedId = object.feedId ?? "";
    message.newFeedOwnerAddress = object.newFeedOwnerAddress ?? new Uint8Array();
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgFeedData(): MsgFeedData {
  return {
    feedId: "",
    submitter: new Uint8Array(),
    observationFeedData: [],
    observationFeedDataSignatures: [],
    isFeedDataValid: false,
    cosmosPubKeys: [],
    txFee: undefined
  };
}

export const MsgFeedData = {
  encode(message: MsgFeedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.submitter.length !== 0) {
      writer.uint32(18).bytes(message.submitter);
    }

    for (const v of message.observationFeedData) {
      writer.uint32(26).bytes(v!);
    }

    for (const v of message.observationFeedDataSignatures) {
      writer.uint32(34).bytes(v!);
    }

    if (message.isFeedDataValid === true) {
      writer.uint32(40).bool(message.isFeedDataValid);
    }

    for (const v of message.cosmosPubKeys) {
      writer.uint32(50).bytes(v!);
    }

    if (message.txFee !== undefined) {
      Coin.encode(message.txFee, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.submitter = reader.bytes();
          break;

        case 3:
          message.observationFeedData.push(reader.bytes());
          break;

        case 4:
          message.observationFeedDataSignatures.push(reader.bytes());
          break;

        case 5:
          message.isFeedDataValid = reader.bool();
          break;

        case 6:
          message.cosmosPubKeys.push(reader.bytes());
          break;

        case 7:
          message.txFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFeedData>): MsgFeedData {
    const message = createBaseMsgFeedData();
    message.feedId = object.feedId ?? "";
    message.submitter = object.submitter ?? new Uint8Array();
    message.observationFeedData = object.observationFeedData?.map(e => e) || [];
    message.observationFeedDataSignatures = object.observationFeedDataSignatures?.map(e => e) || [];
    message.isFeedDataValid = object.isFeedDataValid ?? false;
    message.cosmosPubKeys = object.cosmosPubKeys?.map(e => e) || [];
    message.txFee = object.txFee !== undefined && object.txFee !== null ? Coin.fromPartial(object.txFee) : undefined;
    return message;
  }

};

function createBaseMsgRequestNewRound(): MsgRequestNewRound {
  return {
    feedId: "",
    signer: new Uint8Array()
  };
}

export const MsgRequestNewRound = {
  encode(message: MsgRequestNewRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestNewRound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestNewRound();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 3:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRequestNewRound>): MsgRequestNewRound {
    const message = createBaseMsgRequestNewRound();
    message.feedId = object.feedId ?? "";
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgAccount(): MsgAccount {
  return {
    submitter: new Uint8Array(),
    chainlinkPublicKey: new Uint8Array(),
    chainlinkSigningKey: new Uint8Array(),
    piggyAddress: new Uint8Array()
  };
}

export const MsgAccount = {
  encode(message: MsgAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter.length !== 0) {
      writer.uint32(10).bytes(message.submitter);
    }

    if (message.chainlinkPublicKey.length !== 0) {
      writer.uint32(18).bytes(message.chainlinkPublicKey);
    }

    if (message.chainlinkSigningKey.length !== 0) {
      writer.uint32(26).bytes(message.chainlinkSigningKey);
    }

    if (message.piggyAddress.length !== 0) {
      writer.uint32(34).bytes(message.piggyAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.bytes();
          break;

        case 2:
          message.chainlinkPublicKey = reader.bytes();
          break;

        case 3:
          message.chainlinkSigningKey = reader.bytes();
          break;

        case 4:
          message.piggyAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAccount>): MsgAccount {
    const message = createBaseMsgAccount();
    message.submitter = object.submitter ?? new Uint8Array();
    message.chainlinkPublicKey = object.chainlinkPublicKey ?? new Uint8Array();
    message.chainlinkSigningKey = object.chainlinkSigningKey ?? new Uint8Array();
    message.piggyAddress = object.piggyAddress ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgEditAccount(): MsgEditAccount {
  return {
    submitter: new Uint8Array(),
    piggyAddress: new Uint8Array()
  };
}

export const MsgEditAccount = {
  encode(message: MsgEditAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter.length !== 0) {
      writer.uint32(10).bytes(message.submitter);
    }

    if (message.piggyAddress.length !== 0) {
      writer.uint32(18).bytes(message.piggyAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.bytes();
          break;

        case 2:
          message.piggyAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEditAccount>): MsgEditAccount {
    const message = createBaseMsgEditAccount();
    message.submitter = object.submitter ?? new Uint8Array();
    message.piggyAddress = object.piggyAddress ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgResponse(): MsgResponse {
  return {
    height: Long.UZERO,
    txHash: ""
  };
}

export const MsgResponse = {
  encode(message: MsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;

        case 2:
          message.txHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgResponse>): MsgResponse {
    const message = createBaseMsgResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.txHash = object.txHash ?? "";
    return message;
  }

};

function createBaseOCRFeedDataInStore(): OCRFeedDataInStore {
  return {
    feedData: undefined,
    deserializedOCRReport: undefined,
    RoundId: Long.UZERO
  };
}

export const OCRFeedDataInStore = {
  encode(message: OCRFeedDataInStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedData !== undefined) {
      MsgFeedData.encode(message.feedData, writer.uint32(10).fork()).ldelim();
    }

    if (message.deserializedOCRReport !== undefined) {
      OCRAbiEncoded.encode(message.deserializedOCRReport, writer.uint32(18).fork()).ldelim();
    }

    if (!message.RoundId.isZero()) {
      writer.uint32(24).uint64(message.RoundId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OCRFeedDataInStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOCRFeedDataInStore();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedData = MsgFeedData.decode(reader, reader.uint32());
          break;

        case 2:
          message.deserializedOCRReport = OCRAbiEncoded.decode(reader, reader.uint32());
          break;

        case 3:
          message.RoundId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OCRFeedDataInStore>): OCRFeedDataInStore {
    const message = createBaseOCRFeedDataInStore();
    message.feedData = object.feedData !== undefined && object.feedData !== null ? MsgFeedData.fromPartial(object.feedData) : undefined;
    message.deserializedOCRReport = object.deserializedOCRReport !== undefined && object.deserializedOCRReport !== null ? OCRAbiEncoded.fromPartial(object.deserializedOCRReport) : undefined;
    message.RoundId = object.RoundId !== undefined && object.RoundId !== null ? Long.fromValue(object.RoundId) : Long.UZERO;
    return message;
  }

};
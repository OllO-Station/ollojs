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

function createBaseMsgNewFeedEvent(): MsgNewFeedEvent {
  return {
    feedId: "",
    dataProviders: [],
    feedOwner: new Uint8Array()
  };
}

export const MsgNewFeedEvent = {
  encode(message: MsgNewFeedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    for (const v of message.dataProviders) {
      DataProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.feedOwner.length !== 0) {
      writer.uint32(26).bytes(message.feedOwner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewFeedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewFeedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.dataProviders.push(DataProvider.decode(reader, reader.uint32()));
          break;

        case 3:
          message.feedOwner = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgNewFeedEvent>): MsgNewFeedEvent {
    const message = createBaseMsgNewFeedEvent();
    message.feedId = object.feedId ?? "";
    message.dataProviders = object.dataProviders?.map(e => DataProvider.fromPartial(e)) || [];
    message.feedOwner = object.feedOwner ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgNewRoundDataEvent(): MsgNewRoundDataEvent {
  return {
    feedId: "",
    roundId: Long.UZERO,
    feedData: []
  };
}

export const MsgNewRoundDataEvent = {
  encode(message: MsgNewRoundDataEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }

    for (const v of message.feedData) {
      writer.uint32(26).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRoundDataEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewRoundDataEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.roundId = (reader.uint64() as Long);
          break;

        case 3:
          message.feedData.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgNewRoundDataEvent>): MsgNewRoundDataEvent {
    const message = createBaseMsgNewRoundDataEvent();
    message.feedId = object.feedId ?? "";
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.feedData = object.feedData?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgNewRoundRequestEvent(): MsgNewRoundRequestEvent {
  return {
    feedId: ""
  };
}

export const MsgNewRoundRequestEvent = {
  encode(message: MsgNewRoundRequestEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgNewRoundRequestEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNewRoundRequestEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgNewRoundRequestEvent>): MsgNewRoundRequestEvent {
    const message = createBaseMsgNewRoundRequestEvent();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseMsgOraclePaidEvent(): MsgOraclePaidEvent {
  return {
    feedId: "",
    account: new Uint8Array(),
    value: Long.UZERO
  };
}

export const MsgOraclePaidEvent = {
  encode(message: MsgOraclePaidEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.account.length !== 0) {
      writer.uint32(18).bytes(message.account);
    }

    if (!message.value.isZero()) {
      writer.uint32(24).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOraclePaidEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOraclePaidEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.account = reader.bytes();
          break;

        case 3:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgOraclePaidEvent>): MsgOraclePaidEvent {
    const message = createBaseMsgOraclePaidEvent();
    message.feedId = object.feedId ?? "";
    message.account = object.account ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDataProviderSetChangeEvent(): MsgDataProviderSetChangeEvent {
  return {
    feedId: "",
    changeType: "",
    dataProviderAddr: new Uint8Array(),
    signer: new Uint8Array()
  };
}

export const MsgDataProviderSetChangeEvent = {
  encode(message: MsgDataProviderSetChangeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.changeType !== "") {
      writer.uint32(18).string(message.changeType);
    }

    if (message.dataProviderAddr.length !== 0) {
      writer.uint32(26).bytes(message.dataProviderAddr);
    }

    if (message.signer.length !== 0) {
      writer.uint32(34).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDataProviderSetChangeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDataProviderSetChangeEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.changeType = reader.string();
          break;

        case 3:
          message.dataProviderAddr = reader.bytes();
          break;

        case 4:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDataProviderSetChangeEvent>): MsgDataProviderSetChangeEvent {
    const message = createBaseMsgDataProviderSetChangeEvent();
    message.feedId = object.feedId ?? "";
    message.changeType = object.changeType ?? "";
    message.dataProviderAddr = object.dataProviderAddr ?? new Uint8Array();
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgFeedParameterChangeEvent(): MsgFeedParameterChangeEvent {
  return {
    feedId: "",
    changeType: "",
    newParameterValue: 0,
    signer: new Uint8Array()
  };
}

export const MsgFeedParameterChangeEvent = {
  encode(message: MsgFeedParameterChangeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.changeType !== "") {
      writer.uint32(18).string(message.changeType);
    }

    if (message.newParameterValue !== 0) {
      writer.uint32(24).uint32(message.newParameterValue);
    }

    if (message.signer.length !== 0) {
      writer.uint32(34).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedParameterChangeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedParameterChangeEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.changeType = reader.string();
          break;

        case 3:
          message.newParameterValue = reader.uint32();
          break;

        case 4:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFeedParameterChangeEvent>): MsgFeedParameterChangeEvent {
    const message = createBaseMsgFeedParameterChangeEvent();
    message.feedId = object.feedId ?? "";
    message.changeType = object.changeType ?? "";
    message.newParameterValue = object.newParameterValue ?? 0;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgModuleOwnershipTransferEvent(): MsgModuleOwnershipTransferEvent {
  return {
    newModuleOwnerAddr: new Uint8Array(),
    signer: new Uint8Array()
  };
}

export const MsgModuleOwnershipTransferEvent = {
  encode(message: MsgModuleOwnershipTransferEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newModuleOwnerAddr.length !== 0) {
      writer.uint32(10).bytes(message.newModuleOwnerAddr);
    }

    if (message.signer.length !== 0) {
      writer.uint32(34).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleOwnershipTransferEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleOwnershipTransferEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newModuleOwnerAddr = reader.bytes();
          break;

        case 4:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgModuleOwnershipTransferEvent>): MsgModuleOwnershipTransferEvent {
    const message = createBaseMsgModuleOwnershipTransferEvent();
    message.newModuleOwnerAddr = object.newModuleOwnerAddr ?? new Uint8Array();
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgFeedOwnershipTransferEvent(): MsgFeedOwnershipTransferEvent {
  return {
    feedId: "",
    newFeedOwnerAddr: new Uint8Array(),
    signer: new Uint8Array()
  };
}

export const MsgFeedOwnershipTransferEvent = {
  encode(message: MsgFeedOwnershipTransferEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.newFeedOwnerAddr.length !== 0) {
      writer.uint32(18).bytes(message.newFeedOwnerAddr);
    }

    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedOwnershipTransferEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedOwnershipTransferEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.newFeedOwnerAddr = reader.bytes();
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

  fromPartial(object: DeepPartial<MsgFeedOwnershipTransferEvent>): MsgFeedOwnershipTransferEvent {
    const message = createBaseMsgFeedOwnershipTransferEvent();
    message.feedId = object.feedId ?? "";
    message.newFeedOwnerAddr = object.newFeedOwnerAddr ?? new Uint8Array();
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgFeedDataValidationFailedEvent(): MsgFeedDataValidationFailedEvent {
  return {
    feedId: "",
    feedOwner: new Uint8Array(),
    dataProviders: [],
    submitter: new Uint8Array(),
    feedData: [],
    signatures: []
  };
}

export const MsgFeedDataValidationFailedEvent = {
  encode(message: MsgFeedDataValidationFailedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.feedOwner.length !== 0) {
      writer.uint32(18).bytes(message.feedOwner);
    }

    for (const v of message.dataProviders) {
      DataProvider.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.submitter.length !== 0) {
      writer.uint32(34).bytes(message.submitter);
    }

    for (const v of message.feedData) {
      writer.uint32(42).bytes(v!);
    }

    for (const v of message.signatures) {
      writer.uint32(50).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedDataValidationFailedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedDataValidationFailedEvent();

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
          message.submitter = reader.bytes();
          break;

        case 5:
          message.feedData.push(reader.bytes());
          break;

        case 6:
          message.signatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFeedDataValidationFailedEvent>): MsgFeedDataValidationFailedEvent {
    const message = createBaseMsgFeedDataValidationFailedEvent();
    message.feedId = object.feedId ?? "";
    message.feedOwner = object.feedOwner ?? new Uint8Array();
    message.dataProviders = object.dataProviders?.map(e => DataProvider.fromPartial(e)) || [];
    message.submitter = object.submitter ?? new Uint8Array();
    message.feedData = object.feedData?.map(e => e) || [];
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgFeedRewardSchemaChangeEvent(): MsgFeedRewardSchemaChangeEvent {
  return {
    feedId: "",
    newStrategy: "",
    newBaseAmount: Long.UZERO,
    signer: new Uint8Array()
  };
}

export const MsgFeedRewardSchemaChangeEvent = {
  encode(message: MsgFeedRewardSchemaChangeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.newStrategy !== "") {
      writer.uint32(18).string(message.newStrategy);
    }

    if (!message.newBaseAmount.isZero()) {
      writer.uint32(24).uint64(message.newBaseAmount);
    }

    if (message.signer.length !== 0) {
      writer.uint32(34).bytes(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFeedRewardSchemaChangeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFeedRewardSchemaChangeEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.newStrategy = reader.string();
          break;

        case 3:
          message.newBaseAmount = (reader.uint64() as Long);
          break;

        case 4:
          message.signer = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgFeedRewardSchemaChangeEvent>): MsgFeedRewardSchemaChangeEvent {
    const message = createBaseMsgFeedRewardSchemaChangeEvent();
    message.feedId = object.feedId ?? "";
    message.newStrategy = object.newStrategy ?? "";
    message.newBaseAmount = object.newBaseAmount !== undefined && object.newBaseAmount !== null ? Long.fromValue(object.newBaseAmount) : Long.UZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  }

};
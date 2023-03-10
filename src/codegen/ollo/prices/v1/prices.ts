import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** DataProvider is the type defined for feed data provider */

export interface DataProvider {
  address: Uint8Array;
  pubKey: Uint8Array;
}
/** DataProvider is the type defined for feed data provider */

export interface DataProviderSDKType {
  address: Uint8Array;
  pubKey: Uint8Array;
}
export interface MsgModuleOwner {
  /** address defines the address of the module owner */
  address: Uint8Array;
  /** pubKey defined the public key of the module owner */

  pubKey: Uint8Array;
  /** the module owner who assigned this new module owner */

  assignerAddress: Uint8Array;
}
export interface MsgModuleOwnerSDKType {
  address: Uint8Array;
  pubKey: Uint8Array;
  assignerAddress: Uint8Array;
}
/**
 * this will be the implementation used later will use pseudo OCR ABI encoded
 * data instead because the structure of how the OCR will be generalized is
 * still unknown OCRAbiEncoded implments the OCR data that is ABCI encoded. The
 * use and form will conform to the Chainlink protocol specification.
 */

export interface OCRAbiEncoded {
  /** Context should be a 32-byte array struct. */
  Context: Uint8Array;
  /**
   * Oracles should be a 32-byte record of all participating oracles. Assuming
   * this is data provider address?
   */

  Oracles: Uint8Array;
  /**
   * Observations should be an array on int192 containing the providers'
   * independent observations.
   */

  Observations: Observation[];
}
/**
 * this will be the implementation used later will use pseudo OCR ABI encoded
 * data instead because the structure of how the OCR will be generalized is
 * still unknown OCRAbiEncoded implments the OCR data that is ABCI encoded. The
 * use and form will conform to the Chainlink protocol specification.
 */

export interface OCRAbiEncodedSDKType {
  Context: Uint8Array;
  Oracles: Uint8Array;
  Observations: ObservationSDKType[];
}
export interface Observation {
  data: Uint8Array;
}
export interface ObservationSDKType {
  data: Uint8Array;
}
export interface FeedRewardSchema {
  /**
   * amount is the base value that rewarded to each valid data provider before
   * designated strategy applied amount is not allowed to be zero
   */
  amount: Long;
  /**
   * reward strategy name, must be a registered strategy
   * this is allowed to be empty, in which case every data provider will be
   * rewarded the same amount token
   */

  strategy: string;
}
export interface FeedRewardSchemaSDKType {
  amount: Long;
  strategy: string;
}

function createBaseDataProvider(): DataProvider {
  return {
    address: new Uint8Array(),
    pubKey: new Uint8Array()
  };
}

export const DataProvider = {
  encode(message: DataProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.pubKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DataProvider>): DataProvider {
    const message = createBaseDataProvider();
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgModuleOwner(): MsgModuleOwner {
  return {
    address: new Uint8Array(),
    pubKey: new Uint8Array(),
    assignerAddress: undefined
  };
}

export const MsgModuleOwner = {
  encode(message: MsgModuleOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }

    if (message.assignerAddress !== undefined) {
      writer.uint32(26).bytes(message.assignerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModuleOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleOwner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.pubKey = reader.bytes();
          break;

        case 3:
          message.assignerAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgModuleOwner>): MsgModuleOwner {
    const message = createBaseMsgModuleOwner();
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.assignerAddress = object.assignerAddress ?? undefined;
    return message;
  }

};

function createBaseOCRAbiEncoded(): OCRAbiEncoded {
  return {
    Context: new Uint8Array(),
    Oracles: new Uint8Array(),
    Observations: []
  };
}

export const OCRAbiEncoded = {
  encode(message: OCRAbiEncoded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Context.length !== 0) {
      writer.uint32(10).bytes(message.Context);
    }

    if (message.Oracles.length !== 0) {
      writer.uint32(18).bytes(message.Oracles);
    }

    for (const v of message.Observations) {
      Observation.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OCRAbiEncoded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOCRAbiEncoded();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Context = reader.bytes();
          break;

        case 2:
          message.Oracles = reader.bytes();
          break;

        case 3:
          message.Observations.push(Observation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OCRAbiEncoded>): OCRAbiEncoded {
    const message = createBaseOCRAbiEncoded();
    message.Context = object.Context ?? new Uint8Array();
    message.Oracles = object.Oracles ?? new Uint8Array();
    message.Observations = object.Observations?.map(e => Observation.fromPartial(e)) || [];
    return message;
  }

};

function createBaseObservation(): Observation {
  return {
    data: new Uint8Array()
  };
}

export const Observation = {
  encode(message: Observation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Observation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Observation>): Observation {
    const message = createBaseObservation();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseFeedRewardSchema(): FeedRewardSchema {
  return {
    amount: Long.UZERO,
    strategy: ""
  };
}

export const FeedRewardSchema = {
  encode(message: FeedRewardSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }

    if (message.strategy !== "") {
      writer.uint32(18).string(message.strategy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedRewardSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedRewardSchema();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;

        case 2:
          message.strategy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeedRewardSchema>): FeedRewardSchema {
    const message = createBaseFeedRewardSchema();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.strategy = object.strategy ?? "";
    return message;
  }

};
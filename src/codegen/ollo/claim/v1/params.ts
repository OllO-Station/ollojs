import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  decayInformation?: DecayInformation;
  airdropStart?: Date;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  decayInformation?: DecayInformationSDKType;
  airdropStart?: Date;
}
/**
 * DecayInformation defines the information about decay for the airdrop
 * when claimable airdrop amount starts to decrease and when it ends
 */

export interface DecayInformation {
  enabled: boolean;
  decayStart?: Date;
  decayEnd?: Date;
}
/**
 * DecayInformation defines the information about decay for the airdrop
 * when claimable airdrop amount starts to decrease and when it ends
 */

export interface DecayInformationSDKType {
  enabled: boolean;
  decayStart?: Date;
  decayEnd?: Date;
}

function createBaseParams(): Params {
  return {
    decayInformation: undefined,
    airdropStart: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.decayInformation !== undefined) {
      DecayInformation.encode(message.decayInformation, writer.uint32(10).fork()).ldelim();
    }

    if (message.airdropStart !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStart), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.decayInformation = DecayInformation.decode(reader, reader.uint32());
          break;

        case 2:
          message.airdropStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.decayInformation = object.decayInformation !== undefined && object.decayInformation !== null ? DecayInformation.fromPartial(object.decayInformation) : undefined;
    message.airdropStart = object.airdropStart ?? undefined;
    return message;
  }

};

function createBaseDecayInformation(): DecayInformation {
  return {
    enabled: false,
    decayStart: undefined,
    decayEnd: undefined
  };
}

export const DecayInformation = {
  encode(message: DecayInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }

    if (message.decayStart !== undefined) {
      Timestamp.encode(toTimestamp(message.decayStart), writer.uint32(18).fork()).ldelim();
    }

    if (message.decayEnd !== undefined) {
      Timestamp.encode(toTimestamp(message.decayEnd), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecayInformation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecayInformation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;

        case 2:
          message.decayStart = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.decayEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DecayInformation>): DecayInformation {
    const message = createBaseDecayInformation();
    message.enabled = object.enabled ?? false;
    message.decayStart = object.decayStart ?? undefined;
    message.decayEnd = object.decayEnd ?? undefined;
    return message;
  }

};
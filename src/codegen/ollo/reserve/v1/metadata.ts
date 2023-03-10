import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */

export interface DenomUnit {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */

  exponent: number;
  /** aliases is a list of string aliases for the given denom */

  aliases: string[];
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */

export interface DenomUnitSDKType {
  denom: string;
  exponent: number;
  aliases: string[];
}
export interface DenomMetadata {
  description: string;
  /** denom_units represents the list of DenomUnit's for a given coin */

  denomUnits: DenomUnit[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */

  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */

  display: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   * 
   * Since: cosmos-sdk 0.43
   */

  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   * 
   * Since: cosmos-sdk 0.43
   */

  symbol: string;
  /**
   * URI to a document (on or off-chain) that contains additional information.
   * Optional.
   * 
   * Since: cosmos-sdk 0.46
   */

  uri: string;
  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify
   * that the document didn't change. Optional.
   * 
   * Since: cosmos-sdk 0.46
   */

  uriHash: string;
}
export interface DenomMetadataSDKType {
  description: string;
  denom_units: DenomUnitSDKType[];
  base: string;
  display: string;
  name: string;
  symbol: string;
  uri: string;
  uri_hash: string;
}

function createBaseDenomUnit(): DenomUnit {
  return {
    denom: "",
    exponent: 0,
    aliases: []
  };
}

export const DenomUnit = {
  encode(message: DenomUnit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }

    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.exponent = reader.uint32();
          break;

        case 3:
          message.aliases.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DenomUnit>): DenomUnit {
    const message = createBaseDenomUnit();
    message.denom = object.denom ?? "";
    message.exponent = object.exponent ?? 0;
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  }

};

function createBaseDenomMetadata(): DenomMetadata {
  return {
    description: "",
    denomUnits: [],
    base: "",
    display: "",
    name: "",
    symbol: "",
    uri: "",
    uriHash: ""
  };
}

export const DenomMetadata = {
  encode(message: DenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    for (const v of message.denomUnits) {
      DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }

    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }

    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }

    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }

    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;

        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.base = reader.string();
          break;

        case 4:
          message.display = reader.string();
          break;

        case 5:
          message.name = reader.string();
          break;

        case 6:
          message.symbol = reader.string();
          break;

        case 7:
          message.uri = reader.string();
          break;

        case 8:
          message.uriHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DenomMetadata>): DenomMetadata {
    const message = createBaseDenomMetadata();
    message.description = object.description ?? "";
    message.denomUnits = object.denomUnits?.map(e => DenomUnit.fromPartial(e)) || [];
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  }

};
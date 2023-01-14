import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** BaseNFT defines a non-fungible token */

export interface BaseNFT {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
  uriHash: string;
}
/** BaseNFT defines a non-fungible token */

export interface BaseNFTSDKType {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
  uri_hash: string;
}
export interface NFTMetadata {
  name: string;
  data: string;
}
export interface NFTMetadataSDKType {
  name: string;
  data: string;
}
/** Denom defines a type of NFT */

export interface Denom {
  id: string;
  name: string;
  schema: string;
  creator: string;
  symbol: string;
  mintRestricted: boolean;
  updateRestricted: boolean;
  description: string;
  uri: string;
  uriHash: string;
  data: string;
}
/** Denom defines a type of NFT */

export interface DenomSDKType {
  id: string;
  name: string;
  schema: string;
  creator: string;
  symbol: string;
  mint_restricted: boolean;
  update_restricted: boolean;
  description: string;
  uri: string;
  uri_hash: string;
  data: string;
}
export interface DenomMetadata {
  creator: string;
  schema: string;
  mintRestricted: boolean;
  updateRestricted: boolean;
  data: string;
}
export interface DenomMetadataSDKType {
  creator: string;
  schema: string;
  mint_restricted: boolean;
  update_restricted: boolean;
  data: string;
}
/** IDCollection defines a type of collection with specified ID */

export interface IDCollection {
  denomId: string;
  tokenIds: string[];
}
/** IDCollection defines a type of collection with specified ID */

export interface IDCollectionSDKType {
  denom_id: string;
  token_ids: string[];
}
/** Owner defines a type of owner */

export interface Owner {
  address: string;
  idCollections: IDCollection[];
}
/** Owner defines a type of owner */

export interface OwnerSDKType {
  address: string;
  id_collections: IDCollectionSDKType[];
}
/** Collection defines a type of collection */

export interface Collection {
  denom?: Denom;
  nfts: BaseNFT[];
}
/** Collection defines a type of collection */

export interface CollectionSDKType {
  denom?: DenomSDKType;
  nfts: BaseNFTSDKType[];
}

function createBaseBaseNFT(): BaseNFT {
  return {
    id: "",
    name: "",
    uri: "",
    data: "",
    owner: "",
    uriHash: ""
  };
}

export const BaseNFT = {
  encode(message: BaseNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }

    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }

    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }

    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.uri = reader.string();
          break;

        case 4:
          message.data = reader.string();
          break;

        case 5:
          message.owner = reader.string();
          break;

        case 6:
          message.uriHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BaseNFT>): BaseNFT {
    const message = createBaseBaseNFT();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.owner = object.owner ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  }

};

function createBaseNFTMetadata(): NFTMetadata {
  return {
    name: "",
    data: ""
  };
}

export const NFTMetadata = {
  encode(message: NFTMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFTMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.data = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NFTMetadata>): NFTMetadata {
    const message = createBaseNFTMetadata();
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseDenom(): Denom {
  return {
    id: "",
    name: "",
    schema: "",
    creator: "",
    symbol: "",
    mintRestricted: false,
    updateRestricted: false,
    description: "",
    uri: "",
    uriHash: "",
    data: ""
  };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }

    if (message.mintRestricted === true) {
      writer.uint32(48).bool(message.mintRestricted);
    }

    if (message.updateRestricted === true) {
      writer.uint32(56).bool(message.updateRestricted);
    }

    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }

    if (message.uri !== "") {
      writer.uint32(74).string(message.uri);
    }

    if (message.uriHash !== "") {
      writer.uint32(82).string(message.uriHash);
    }

    if (message.data !== "") {
      writer.uint32(90).string(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.schema = reader.string();
          break;

        case 4:
          message.creator = reader.string();
          break;

        case 5:
          message.symbol = reader.string();
          break;

        case 6:
          message.mintRestricted = reader.bool();
          break;

        case 7:
          message.updateRestricted = reader.bool();
          break;

        case 8:
          message.description = reader.string();
          break;

        case 9:
          message.uri = reader.string();
          break;

        case 10:
          message.uriHash = reader.string();
          break;

        case 11:
          message.data = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.creator = object.creator ?? "";
    message.symbol = object.symbol ?? "";
    message.mintRestricted = object.mintRestricted ?? false;
    message.updateRestricted = object.updateRestricted ?? false;
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseDenomMetadata(): DenomMetadata {
  return {
    creator: "",
    schema: "",
    mintRestricted: false,
    updateRestricted: false,
    data: ""
  };
}

export const DenomMetadata = {
  encode(message: DenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.schema !== "") {
      writer.uint32(18).string(message.schema);
    }

    if (message.mintRestricted === true) {
      writer.uint32(24).bool(message.mintRestricted);
    }

    if (message.updateRestricted === true) {
      writer.uint32(32).bool(message.updateRestricted);
    }

    if (message.data !== "") {
      writer.uint32(42).string(message.data);
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
          message.creator = reader.string();
          break;

        case 2:
          message.schema = reader.string();
          break;

        case 3:
          message.mintRestricted = reader.bool();
          break;

        case 4:
          message.updateRestricted = reader.bool();
          break;

        case 5:
          message.data = reader.string();
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
    message.creator = object.creator ?? "";
    message.schema = object.schema ?? "";
    message.mintRestricted = object.mintRestricted ?? false;
    message.updateRestricted = object.updateRestricted ?? false;
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseIDCollection(): IDCollection {
  return {
    denomId: "",
    tokenIds: []
  };
}

export const IDCollection = {
  encode(message: IDCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }

    for (const v of message.tokenIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCollection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;

        case 2:
          message.tokenIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IDCollection>): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.tokenIds = object.tokenIds?.map(e => e) || [];
    return message;
  }

};

function createBaseOwner(): Owner {
  return {
    address: "",
    idCollections: []
  };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.idCollections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.idCollections = object.idCollections?.map(e => IDCollection.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCollection(): Collection {
  return {
    denom: undefined,
    nfts: []
  };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.nfts) {
      BaseNFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;

        case 2:
          message.nfts.push(BaseNFT.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Collection>): Collection {
    const message = createBaseCollection();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.nfts = object.nfts?.map(e => BaseNFT.fromPartial(e)) || [];
    return message;
  }

};
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgIssueToken defines an SDK message for issuing a new token */

export interface MsgIssueToken {
  symbol: string;
  name: string;
  scale: number;
  minUnit: string;
  initialSupply: Long;
  maxSupply: Long;
  mintable: boolean;
  owner: string;
}
/** MsgIssueToken defines an SDK message for issuing a new token */

export interface MsgIssueTokenSDKType {
  symbol: string;
  name: string;
  scale: number;
  min_unit: string;
  initial_supply: Long;
  max_supply: Long;
  mintable: boolean;
  owner: string;
}
/** MsgIssueTokenResponse defines the Msg/IssueToken response type */

export interface MsgIssueTokenResponse {}
/** MsgIssueTokenResponse defines the Msg/IssueToken response type */

export interface MsgIssueTokenResponseSDKType {}
/** MsgTransferTokenOwner defines an SDK message for transferring the token owner */

export interface MsgTransferTokenOwner {
  srcOwner: string;
  dstOwner: string;
  symbol: string;
}
/** MsgTransferTokenOwner defines an SDK message for transferring the token owner */

export interface MsgTransferTokenOwnerSDKType {
  src_owner: string;
  dst_owner: string;
  symbol: string;
}
/**
 * MsgTransferTokenOwnerResponse defines the Msg/TransferTokenOwner response
 * type
 */

export interface MsgTransferTokenOwnerResponse {}
/**
 * MsgTransferTokenOwnerResponse defines the Msg/TransferTokenOwner response
 * type
 */

export interface MsgTransferTokenOwnerResponseSDKType {}
/** MsgEditToken defines an SDK message for editing a new token */

export interface MsgEditToken {
  symbol: string;
  name: string;
  maxSupply: Long;
  mintable: string;
  owner: string;
}
/** MsgEditToken defines an SDK message for editing a new token */

export interface MsgEditTokenSDKType {
  symbol: string;
  name: string;
  max_supply: Long;
  mintable: string;
  owner: string;
}
/** MsgEditTokenResponse defines the Msg/EditToken response type */

export interface MsgEditTokenResponse {}
/** MsgEditTokenResponse defines the Msg/EditToken response type */

export interface MsgEditTokenResponseSDKType {}
/** MsgMintToken defines an SDK message for minting a new token */

export interface MsgMintToken {
  symbol: string;
  amount: Long;
  to: string;
  owner: string;
}
/** MsgMintToken defines an SDK message for minting a new token */

export interface MsgMintTokenSDKType {
  symbol: string;
  amount: Long;
  to: string;
  owner: string;
}
/** MsgMintTokenResponse defines the Msg/MintToken response type */

export interface MsgMintTokenResponse {}
/** MsgMintTokenResponse defines the Msg/MintToken response type */

export interface MsgMintTokenResponseSDKType {}
/** MsgBurnToken defines an SDK message for burning some tokens */

export interface MsgBurnToken {
  symbol: string;
  amount: Long;
  sender: string;
}
/** MsgBurnToken defines an SDK message for burning some tokens */

export interface MsgBurnTokenSDKType {
  symbol: string;
  amount: Long;
  sender: string;
}
/** MsgBurnTokenResponse defines the Msg/BurnToken response type */

export interface MsgBurnTokenResponse {}
/** MsgBurnTokenResponse defines the Msg/BurnToken response type */

export interface MsgBurnTokenResponseSDKType {}

function createBaseMsgIssueToken(): MsgIssueToken {
  return {
    symbol: "",
    name: "",
    scale: 0,
    minUnit: "",
    initialSupply: Long.UZERO,
    maxSupply: Long.UZERO,
    mintable: false,
    owner: ""
  };
}

export const MsgIssueToken = {
  encode(message: MsgIssueToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.scale !== 0) {
      writer.uint32(24).uint32(message.scale);
    }

    if (message.minUnit !== "") {
      writer.uint32(34).string(message.minUnit);
    }

    if (!message.initialSupply.isZero()) {
      writer.uint32(40).uint64(message.initialSupply);
    }

    if (!message.maxSupply.isZero()) {
      writer.uint32(48).uint64(message.maxSupply);
    }

    if (message.mintable === true) {
      writer.uint32(56).bool(message.mintable);
    }

    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.scale = reader.uint32();
          break;

        case 4:
          message.minUnit = reader.string();
          break;

        case 5:
          message.initialSupply = (reader.uint64() as Long);
          break;

        case 6:
          message.maxSupply = (reader.uint64() as Long);
          break;

        case 7:
          message.mintable = reader.bool();
          break;

        case 8:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgIssueToken>): MsgIssueToken {
    const message = createBaseMsgIssueToken();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.scale = object.scale ?? 0;
    message.minUnit = object.minUnit ?? "";
    message.initialSupply = object.initialSupply !== undefined && object.initialSupply !== null ? Long.fromValue(object.initialSupply) : Long.UZERO;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.mintable = object.mintable ?? false;
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgIssueTokenResponse(): MsgIssueTokenResponse {
  return {};
}

export const MsgIssueTokenResponse = {
  encode(_: MsgIssueTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueTokenResponse();

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

  fromPartial(_: DeepPartial<MsgIssueTokenResponse>): MsgIssueTokenResponse {
    const message = createBaseMsgIssueTokenResponse();
    return message;
  }

};

function createBaseMsgTransferTokenOwner(): MsgTransferTokenOwner {
  return {
    srcOwner: "",
    dstOwner: "",
    symbol: ""
  };
}

export const MsgTransferTokenOwner = {
  encode(message: MsgTransferTokenOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcOwner !== "") {
      writer.uint32(10).string(message.srcOwner);
    }

    if (message.dstOwner !== "") {
      writer.uint32(18).string(message.dstOwner);
    }

    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenOwner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.srcOwner = reader.string();
          break;

        case 2:
          message.dstOwner = reader.string();
          break;

        case 3:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransferTokenOwner>): MsgTransferTokenOwner {
    const message = createBaseMsgTransferTokenOwner();
    message.srcOwner = object.srcOwner ?? "";
    message.dstOwner = object.dstOwner ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBaseMsgTransferTokenOwnerResponse(): MsgTransferTokenOwnerResponse {
  return {};
}

export const MsgTransferTokenOwnerResponse = {
  encode(_: MsgTransferTokenOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenOwnerResponse();

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

  fromPartial(_: DeepPartial<MsgTransferTokenOwnerResponse>): MsgTransferTokenOwnerResponse {
    const message = createBaseMsgTransferTokenOwnerResponse();
    return message;
  }

};

function createBaseMsgEditToken(): MsgEditToken {
  return {
    symbol: "",
    name: "",
    maxSupply: Long.UZERO,
    mintable: "",
    owner: ""
  };
}

export const MsgEditToken = {
  encode(message: MsgEditToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (!message.maxSupply.isZero()) {
      writer.uint32(24).uint64(message.maxSupply);
    }

    if (message.mintable !== "") {
      writer.uint32(34).string(message.mintable);
    }

    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.maxSupply = (reader.uint64() as Long);
          break;

        case 4:
          message.mintable = reader.string();
          break;

        case 5:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEditToken>): MsgEditToken {
    const message = createBaseMsgEditToken();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.mintable = object.mintable ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgEditTokenResponse(): MsgEditTokenResponse {
  return {};
}

export const MsgEditTokenResponse = {
  encode(_: MsgEditTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditTokenResponse();

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

  fromPartial(_: DeepPartial<MsgEditTokenResponse>): MsgEditTokenResponse {
    const message = createBaseMsgEditTokenResponse();
    return message;
  }

};

function createBaseMsgMintToken(): MsgMintToken {
  return {
    symbol: "",
    amount: Long.UZERO,
    to: "",
    owner: ""
  };
}

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }

    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.amount = (reader.uint64() as Long);
          break;

        case 3:
          message.to = reader.string();
          break;

        case 4:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMintToken>): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.to = object.to ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseMsgMintTokenResponse(): MsgMintTokenResponse {
  return {};
}

export const MsgMintTokenResponse = {
  encode(_: MsgMintTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintTokenResponse();

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

  fromPartial(_: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse {
    const message = createBaseMsgMintTokenResponse();
    return message;
  }

};

function createBaseMsgBurnToken(): MsgBurnToken {
  return {
    symbol: "",
    amount: Long.UZERO,
    sender: ""
  };
}

export const MsgBurnToken = {
  encode(message: MsgBurnToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.amount = (reader.uint64() as Long);
          break;

        case 3:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBurnToken>): MsgBurnToken {
    const message = createBaseMsgBurnToken();
    message.symbol = object.symbol ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgBurnTokenResponse(): MsgBurnTokenResponse {
  return {};
}

export const MsgBurnTokenResponse = {
  encode(_: MsgBurnTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnTokenResponse();

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

  fromPartial(_: DeepPartial<MsgBurnTokenResponse>): MsgBurnTokenResponse {
    const message = createBaseMsgBurnTokenResponse();
    return message;
  }

};
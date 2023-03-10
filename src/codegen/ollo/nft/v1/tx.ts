import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgIssueDenom defines an SDK message for creating a new denom. */

export interface MsgIssueDenom {
  id: string;
  name: string;
  schema: string;
  sender: string;
  symbol: string;
  mintRestricted: boolean;
  updateRestricted: boolean;
  description: string;
  uri: string;
  uriHash: string;
  data: string;
}
/** MsgIssueDenom defines an SDK message for creating a new denom. */

export interface MsgIssueDenomSDKType {
  id: string;
  name: string;
  schema: string;
  sender: string;
  symbol: string;
  mint_restricted: boolean;
  update_restricted: boolean;
  description: string;
  uri: string;
  uri_hash: string;
  data: string;
}
/** MsgIssueDenomResponse defines the MsgIssueDenom response type. */

export interface MsgIssueDenomResponse {}
/** MsgIssueDenomResponse defines the MsgIssueDenom response type. */

export interface MsgIssueDenomResponseSDKType {}
/**
 * MsgTransferDenom defines an SDK message for transferring a denom to a
 * recipient.
 */

export interface MsgTransferDenom {
  id: string;
  sender: string;
  recipient: string;
}
/**
 * MsgTransferDenom defines an SDK message for transferring a denom to a
 * recipient.
 */

export interface MsgTransferDenomSDKType {
  id: string;
  sender: string;
  recipient: string;
}
/** MsgTransferDenomResponse defines the MsgTransferDenom response type. */

export interface MsgTransferDenomResponse {}
/** MsgTransferDenomResponse defines the MsgTransferDenom response type. */

export interface MsgTransferDenomResponseSDKType {}
/** MsgBurnNFT defines an SDK message for minting an NFT. */

export interface MsgMintNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
  uriHash: string;
}
/** MsgBurnNFT defines an SDK message for minting an NFT. */

export interface MsgMintNFTSDKType {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
  uri_hash: string;
}
/** MsgBurnNFT defines an SDK message for burning an NFT. */

export interface MsgBurnNFT {
  id: string;
  denomId: string;
  sender: string;
}
/** MsgBurnNFT defines an SDK message for burning an NFT. */

export interface MsgBurnNFTSDKType {
  id: string;
  denom_id: string;
  sender: string;
}
/** MsgEditNFT defines an SDK message for editing an NFT. */

export interface MsgEditNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  uriHash: string;
}
/** MsgEditNFT defines an SDK message for editing an NFT. */

export interface MsgEditNFTSDKType {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  uri_hash: string;
}
/** MsgSendNFT defines an SDK message for sending an NFT. */

export interface MsgSendNFT {
  id: string;
  denomId: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
  uriHash: string;
}
/** MsgSendNFT defines an SDK message for sending an NFT. */

export interface MsgSendNFTSDKType {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
  uri_hash: string;
}
/** MsgMintNFTResponse defines the MsgMintNFT response type. */

export interface MsgMintNFTResponse {}
/** MsgMintNFTResponse defines the MsgMintNFT response type. */

export interface MsgMintNFTResponseSDKType {}
/** MsgBurnNFTResponse defines the MsgBurnNFT response type. */

export interface MsgBurnNFTResponse {}
/** MsgBurnNFTResponse defines the MsgBurnNFT response type. */

export interface MsgBurnNFTResponseSDKType {}
/** MsgBurnNFTResponse defines the MsgEditNFT response type. */

export interface MsgEditNFTResponse {}
/** MsgBurnNFTResponse defines the MsgEditNFT response type. */

export interface MsgEditNFTResponseSDKType {}
/** MsgBurnNFTResponse defines the MsgSendNFT response type. */

export interface MsgSendNFTResponse {}
/** MsgBurnNFTResponse defines the MsgSendNFT response type. */

export interface MsgSendNFTResponseSDKType {}

function createBaseMsgIssueDenom(): MsgIssueDenom {
  return {
    id: "",
    name: "",
    schema: "",
    sender: "",
    symbol: "",
    mintRestricted: false,
    updateRestricted: false,
    description: "",
    uri: "",
    uriHash: "",
    data: ""
  };
}

export const MsgIssueDenom = {
  encode(message: MsgIssueDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }

    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueDenom();

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
          message.sender = reader.string();
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

  fromPartial(object: DeepPartial<MsgIssueDenom>): MsgIssueDenom {
    const message = createBaseMsgIssueDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.sender = object.sender ?? "";
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

function createBaseMsgIssueDenomResponse(): MsgIssueDenomResponse {
  return {};
}

export const MsgIssueDenomResponse = {
  encode(_: MsgIssueDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueDenomResponse();

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

  fromPartial(_: DeepPartial<MsgIssueDenomResponse>): MsgIssueDenomResponse {
    const message = createBaseMsgIssueDenomResponse();
    return message;
  }

};

function createBaseMsgTransferDenom(): MsgTransferDenom {
  return {
    id: "",
    sender: "",
    recipient: ""
  };
}

export const MsgTransferDenom = {
  encode(message: MsgTransferDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransferDenom>): MsgTransferDenom {
    const message = createBaseMsgTransferDenom();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseMsgTransferDenomResponse(): MsgTransferDenomResponse {
  return {};
}

export const MsgTransferDenomResponse = {
  encode(_: MsgTransferDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferDenomResponse();

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

  fromPartial(_: DeepPartial<MsgTransferDenomResponse>): MsgTransferDenomResponse {
    const message = createBaseMsgTransferDenomResponse();
    return message;
  }

};

function createBaseMsgMintNFT(): MsgMintNFT {
  return {
    id: "",
    denomId: "",
    name: "",
    uri: "",
    data: "",
    sender: "",
    recipient: "",
    uriHash: ""
  };
}

export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }

    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }

    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }

    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.uri = reader.string();
          break;

        case 5:
          message.data = reader.string();
          break;

        case 6:
          message.sender = reader.string();
          break;

        case 7:
          message.recipient = reader.string();
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

  fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  }

};

function createBaseMsgBurnNFT(): MsgBurnNFT {
  return {
    id: "",
    denomId: "",
    sender: ""
  };
}

export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
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

  fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgEditNFT(): MsgEditNFT {
  return {
    id: "",
    denomId: "",
    name: "",
    uri: "",
    data: "",
    sender: "",
    uriHash: ""
  };
}

export const MsgEditNFT = {
  encode(message: MsgEditNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }

    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }

    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }

    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.uri = reader.string();
          break;

        case 5:
          message.data = reader.string();
          break;

        case 6:
          message.sender = reader.string();
          break;

        case 7:
          message.uriHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgEditNFT>): MsgEditNFT {
    const message = createBaseMsgEditNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  }

};

function createBaseMsgSendNFT(): MsgSendNFT {
  return {
    id: "",
    denomId: "",
    name: "",
    uri: "",
    data: "",
    sender: "",
    recipient: "",
    uriHash: ""
  };
}

export const MsgSendNFT = {
  encode(message: MsgSendNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }

    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }

    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }

    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendNFT();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.denomId = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.uri = reader.string();
          break;

        case 5:
          message.data = reader.string();
          break;

        case 6:
          message.sender = reader.string();
          break;

        case 7:
          message.recipient = reader.string();
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

  fromPartial(object: DeepPartial<MsgSendNFT>): MsgSendNFT {
    const message = createBaseMsgSendNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  }

};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {};
}

export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();

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

  fromPartial(_: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    return message;
  }

};

function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}

export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTResponse();

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

  fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  }

};

function createBaseMsgEditNFTResponse(): MsgEditNFTResponse {
  return {};
}

export const MsgEditNFTResponse = {
  encode(_: MsgEditNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNFTResponse();

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

  fromPartial(_: DeepPartial<MsgEditNFTResponse>): MsgEditNFTResponse {
    const message = createBaseMsgEditNFTResponse();
    return message;
  }

};

function createBaseMsgSendNFTResponse(): MsgSendNFTResponse {
  return {};
}

export const MsgSendNFTResponse = {
  encode(_: MsgSendNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendNFTResponse();

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

  fromPartial(_: DeepPartial<MsgSendNFTResponse>): MsgSendNFTResponse {
    const message = createBaseMsgSendNFTResponse();
    return message;
  }

};
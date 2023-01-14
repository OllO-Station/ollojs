import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { DenomMetadata, DenomMetadataSDKType } from "./metadata";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */

export interface MsgCreateDenom {
  sender: string;
  /** subdenom can be up to 44 "alphanumeric" characters long. */

  subdenom: string;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */

export interface MsgCreateDenomSDKType {
  sender: string;
  subdenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */

export interface MsgCreateDenomResponse {
  newTokenDenom: string;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */

export interface MsgCreateDenomResponseSDKType {
  new_token_denom: string;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * // more of a token.  For now, we only support minting to the sender account
 */

export interface MsgMintDenom {
  sender: string;
  amount?: Coin;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * // more of a token.  For now, we only support minting to the sender account
 */

export interface MsgMintDenomSDKType {
  sender: string;
  amount?: CoinSDKType;
}
export interface MsgMintDenomResponse {}
export interface MsgMintDenomResponseSDKType {}
/**
 * MsgBurnDenom is the sdk.Msg type for allowing an admin account to burn
 * // a token.  For now, we only support burning from the sender account.
 */

export interface MsgBurnDenom {
  sender: string;
  amount?: Coin;
}
/**
 * MsgBurnDenom is the sdk.Msg type for allowing an admin account to burn
 * // a token.  For now, we only support burning from the sender account.
 */

export interface MsgBurnDenomSDKType {
  sender: string;
  amount?: CoinSDKType;
}
export interface MsgBurnDenomResponse {}
export interface MsgBurnDenomResponseSDKType {}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */

export interface MsgChangeDenomAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */

export interface MsgChangeDenomAdminSDKType {
  sender: string;
  denom: string;
  new_admin: string;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */

export interface MsgChangeDenomAdminResponse {}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */

export interface MsgChangeDenomAdminResponseSDKType {}
export interface MsgForceTransfer {
  sender: string;
  amount?: Coin;
  transferFromAddress: string;
  transferToAddress: string;
}
export interface MsgForceTransferSDKType {
  sender: string;
  amount?: CoinSDKType;
  transferFromAddress: string;
  transferToAddress: string;
}
export interface MsgForceTransferResponse {}
export interface MsgForceTransferResponseSDKType {}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */

export interface MsgSetDenomMetadata {
  sender: string;
  metadata?: DenomMetadata;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */

export interface MsgSetDenomMetadataSDKType {
  sender: string;
  metadata?: DenomMetadataSDKType;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * // MsgSetDenomMetadata message.
 */

export interface MsgSetDenomMetadataResponse {}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * // MsgSetDenomMetadata message.
 */

export interface MsgSetDenomMetadataResponseSDKType {}

function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    sender: "",
    subdenom: ""
  };
}

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.subdenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  }

};

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: ""
  };
}

export const MsgCreateDenomResponse = {
  encode(message: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  }

};

function createBaseMsgMintDenom(): MsgMintDenom {
  return {
    sender: "",
    amount: undefined
  };
}

export const MsgMintDenom = {
  encode(message: MsgMintDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMintDenom>): MsgMintDenom {
    const message = createBaseMsgMintDenom();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgMintDenomResponse(): MsgMintDenomResponse {
  return {};
}

export const MsgMintDenomResponse = {
  encode(_: MsgMintDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintDenomResponse();

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

  fromPartial(_: DeepPartial<MsgMintDenomResponse>): MsgMintDenomResponse {
    const message = createBaseMsgMintDenomResponse();
    return message;
  }

};

function createBaseMsgBurnDenom(): MsgBurnDenom {
  return {
    sender: "",
    amount: undefined
  };
}

export const MsgBurnDenom = {
  encode(message: MsgBurnDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBurnDenom>): MsgBurnDenom {
    const message = createBaseMsgBurnDenom();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgBurnDenomResponse(): MsgBurnDenomResponse {
  return {};
}

export const MsgBurnDenomResponse = {
  encode(_: MsgBurnDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDenomResponse();

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

  fromPartial(_: DeepPartial<MsgBurnDenomResponse>): MsgBurnDenomResponse {
    const message = createBaseMsgBurnDenomResponse();
    return message;
  }

};

function createBaseMsgChangeDenomAdmin(): MsgChangeDenomAdmin {
  return {
    sender: "",
    denom: "",
    newAdmin: ""
  };
}

export const MsgChangeDenomAdmin = {
  encode(message: MsgChangeDenomAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeDenomAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeDenomAdmin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.newAdmin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChangeDenomAdmin>): MsgChangeDenomAdmin {
    const message = createBaseMsgChangeDenomAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  }

};

function createBaseMsgChangeDenomAdminResponse(): MsgChangeDenomAdminResponse {
  return {};
}

export const MsgChangeDenomAdminResponse = {
  encode(_: MsgChangeDenomAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeDenomAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeDenomAdminResponse();

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

  fromPartial(_: DeepPartial<MsgChangeDenomAdminResponse>): MsgChangeDenomAdminResponse {
    const message = createBaseMsgChangeDenomAdminResponse();
    return message;
  }

};

function createBaseMsgForceTransfer(): MsgForceTransfer {
  return {
    sender: "",
    amount: undefined,
    transferFromAddress: "",
    transferToAddress: ""
  };
}

export const MsgForceTransfer = {
  encode(message: MsgForceTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.transferFromAddress !== "") {
      writer.uint32(26).string(message.transferFromAddress);
    }

    if (message.transferToAddress !== "") {
      writer.uint32(34).string(message.transferToAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.transferFromAddress = reader.string();
          break;

        case 4:
          message.transferToAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgForceTransfer>): MsgForceTransfer {
    const message = createBaseMsgForceTransfer();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.transferFromAddress = object.transferFromAddress ?? "";
    message.transferToAddress = object.transferToAddress ?? "";
    return message;
  }

};

function createBaseMsgForceTransferResponse(): MsgForceTransferResponse {
  return {};
}

export const MsgForceTransferResponse = {
  encode(_: MsgForceTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransferResponse();

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

  fromPartial(_: DeepPartial<MsgForceTransferResponse>): MsgForceTransferResponse {
    const message = createBaseMsgForceTransferResponse();
    return message;
  }

};

function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    sender: "",
    metadata: undefined
  };
}

export const MsgSetDenomMetadata = {
  encode(message: MsgSetDenomMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.metadata !== undefined) {
      DenomMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.metadata = DenomMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.sender = object.sender ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? DenomMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}

export const MsgSetDenomMetadataResponse = {
  encode(_: MsgSetDenomMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();

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

  fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  }

};
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
export interface MsgMintDenomResponse {
}
export interface MsgMintDenomResponseSDKType {
}
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
export interface MsgBurnDenomResponse {
}
export interface MsgBurnDenomResponseSDKType {
}
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
export interface MsgChangeDenomAdminResponse {
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export interface MsgChangeDenomAdminResponseSDKType {
}
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
export interface MsgForceTransferResponse {
}
export interface MsgForceTransferResponseSDKType {
}
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
export interface MsgSetDenomMetadataResponse {
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * // MsgSetDenomMetadata message.
 */
export interface MsgSetDenomMetadataResponseSDKType {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(message: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgMintDenom: {
    encode(message: MsgMintDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDenom;
    fromPartial(object: DeepPartial<MsgMintDenom>): MsgMintDenom;
};
export declare const MsgMintDenomResponse: {
    encode(_: MsgMintDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDenomResponse;
    fromPartial(_: DeepPartial<MsgMintDenomResponse>): MsgMintDenomResponse;
};
export declare const MsgBurnDenom: {
    encode(message: MsgBurnDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDenom;
    fromPartial(object: DeepPartial<MsgBurnDenom>): MsgBurnDenom;
};
export declare const MsgBurnDenomResponse: {
    encode(_: MsgBurnDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDenomResponse;
    fromPartial(_: DeepPartial<MsgBurnDenomResponse>): MsgBurnDenomResponse;
};
export declare const MsgChangeDenomAdmin: {
    encode(message: MsgChangeDenomAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeDenomAdmin;
    fromPartial(object: DeepPartial<MsgChangeDenomAdmin>): MsgChangeDenomAdmin;
};
export declare const MsgChangeDenomAdminResponse: {
    encode(_: MsgChangeDenomAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeDenomAdminResponse;
    fromPartial(_: DeepPartial<MsgChangeDenomAdminResponse>): MsgChangeDenomAdminResponse;
};
export declare const MsgForceTransfer: {
    encode(message: MsgForceTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceTransfer;
    fromPartial(object: DeepPartial<MsgForceTransfer>): MsgForceTransfer;
};
export declare const MsgForceTransferResponse: {
    encode(_: MsgForceTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceTransferResponse;
    fromPartial(_: DeepPartial<MsgForceTransferResponse>): MsgForceTransferResponse;
};
export declare const MsgSetDenomMetadata: {
    encode(message: MsgSetDenomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata;
    fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
};
export declare const MsgSetDenomMetadataResponse: {
    encode(_: MsgSetDenomMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadataResponse;
    fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
};

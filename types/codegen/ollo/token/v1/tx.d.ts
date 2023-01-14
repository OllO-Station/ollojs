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
export interface MsgIssueTokenResponse {
}
/** MsgIssueTokenResponse defines the Msg/IssueToken response type */
export interface MsgIssueTokenResponseSDKType {
}
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
export interface MsgTransferTokenOwnerResponse {
}
/**
 * MsgTransferTokenOwnerResponse defines the Msg/TransferTokenOwner response
 * type
 */
export interface MsgTransferTokenOwnerResponseSDKType {
}
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
export interface MsgEditTokenResponse {
}
/** MsgEditTokenResponse defines the Msg/EditToken response type */
export interface MsgEditTokenResponseSDKType {
}
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
export interface MsgMintTokenResponse {
}
/** MsgMintTokenResponse defines the Msg/MintToken response type */
export interface MsgMintTokenResponseSDKType {
}
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
export interface MsgBurnTokenResponse {
}
/** MsgBurnTokenResponse defines the Msg/BurnToken response type */
export interface MsgBurnTokenResponseSDKType {
}
export declare const MsgIssueToken: {
    encode(message: MsgIssueToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueToken;
    fromPartial(object: DeepPartial<MsgIssueToken>): MsgIssueToken;
};
export declare const MsgIssueTokenResponse: {
    encode(_: MsgIssueTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokenResponse;
    fromPartial(_: DeepPartial<MsgIssueTokenResponse>): MsgIssueTokenResponse;
};
export declare const MsgTransferTokenOwner: {
    encode(message: MsgTransferTokenOwner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenOwner;
    fromPartial(object: DeepPartial<MsgTransferTokenOwner>): MsgTransferTokenOwner;
};
export declare const MsgTransferTokenOwnerResponse: {
    encode(_: MsgTransferTokenOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenOwnerResponse;
    fromPartial(_: DeepPartial<MsgTransferTokenOwnerResponse>): MsgTransferTokenOwnerResponse;
};
export declare const MsgEditToken: {
    encode(message: MsgEditToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditToken;
    fromPartial(object: DeepPartial<MsgEditToken>): MsgEditToken;
};
export declare const MsgEditTokenResponse: {
    encode(_: MsgEditTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditTokenResponse;
    fromPartial(_: DeepPartial<MsgEditTokenResponse>): MsgEditTokenResponse;
};
export declare const MsgMintToken: {
    encode(message: MsgMintToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken;
    fromPartial(object: DeepPartial<MsgMintToken>): MsgMintToken;
};
export declare const MsgMintTokenResponse: {
    encode(_: MsgMintTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse;
    fromPartial(_: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse;
};
export declare const MsgBurnToken: {
    encode(message: MsgBurnToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnToken;
    fromPartial(object: DeepPartial<MsgBurnToken>): MsgBurnToken;
};
export declare const MsgBurnTokenResponse: {
    encode(_: MsgBurnTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnTokenResponse;
    fromPartial(_: DeepPartial<MsgBurnTokenResponse>): MsgBurnTokenResponse;
};

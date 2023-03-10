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
export interface MsgIssueDenomResponse {
}
/** MsgIssueDenomResponse defines the MsgIssueDenom response type. */
export interface MsgIssueDenomResponseSDKType {
}
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
export interface MsgTransferDenomResponse {
}
/** MsgTransferDenomResponse defines the MsgTransferDenom response type. */
export interface MsgTransferDenomResponseSDKType {
}
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
export interface MsgMintNFTResponse {
}
/** MsgMintNFTResponse defines the MsgMintNFT response type. */
export interface MsgMintNFTResponseSDKType {
}
/** MsgBurnNFTResponse defines the MsgBurnNFT response type. */
export interface MsgBurnNFTResponse {
}
/** MsgBurnNFTResponse defines the MsgBurnNFT response type. */
export interface MsgBurnNFTResponseSDKType {
}
/** MsgBurnNFTResponse defines the MsgEditNFT response type. */
export interface MsgEditNFTResponse {
}
/** MsgBurnNFTResponse defines the MsgEditNFT response type. */
export interface MsgEditNFTResponseSDKType {
}
/** MsgBurnNFTResponse defines the MsgSendNFT response type. */
export interface MsgSendNFTResponse {
}
/** MsgBurnNFTResponse defines the MsgSendNFT response type. */
export interface MsgSendNFTResponseSDKType {
}
export declare const MsgIssueDenom: {
    encode(message: MsgIssueDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenom;
    fromPartial(object: DeepPartial<MsgIssueDenom>): MsgIssueDenom;
};
export declare const MsgIssueDenomResponse: {
    encode(_: MsgIssueDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueDenomResponse;
    fromPartial(_: DeepPartial<MsgIssueDenomResponse>): MsgIssueDenomResponse;
};
export declare const MsgTransferDenom: {
    encode(message: MsgTransferDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenom;
    fromPartial(object: DeepPartial<MsgTransferDenom>): MsgTransferDenom;
};
export declare const MsgTransferDenomResponse: {
    encode(_: MsgTransferDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferDenomResponse;
    fromPartial(_: DeepPartial<MsgTransferDenomResponse>): MsgTransferDenomResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT;
    fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT;
    fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT;
};
export declare const MsgEditNFT: {
    encode(message: MsgEditNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFT;
    fromPartial(object: DeepPartial<MsgEditNFT>): MsgEditNFT;
};
export declare const MsgSendNFT: {
    encode(message: MsgSendNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendNFT;
    fromPartial(object: DeepPartial<MsgSendNFT>): MsgSendNFT;
};
export declare const MsgMintNFTResponse: {
    encode(_: MsgMintNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse;
    fromPartial(_: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse;
    fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
};
export declare const MsgEditNFTResponse: {
    encode(_: MsgEditNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFTResponse;
    fromPartial(_: DeepPartial<MsgEditNFTResponse>): MsgEditNFTResponse;
};
export declare const MsgSendNFTResponse: {
    encode(_: MsgSendNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendNFTResponse;
    fromPartial(_: DeepPartial<MsgSendNFTResponse>): MsgSendNFTResponse;
};

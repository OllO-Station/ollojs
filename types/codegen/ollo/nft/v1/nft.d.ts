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
export declare const BaseNFT: {
    encode(message: BaseNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseNFT;
    fromPartial(object: DeepPartial<BaseNFT>): BaseNFT;
};
export declare const NFTMetadata: {
    encode(message: NFTMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFTMetadata;
    fromPartial(object: DeepPartial<NFTMetadata>): NFTMetadata;
};
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Denom;
    fromPartial(object: DeepPartial<Denom>): Denom;
};
export declare const DenomMetadata: {
    encode(message: DenomMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomMetadata;
    fromPartial(object: DeepPartial<DenomMetadata>): DenomMetadata;
};
export declare const IDCollection: {
    encode(message: IDCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDCollection;
    fromPartial(object: DeepPartial<IDCollection>): IDCollection;
};
export declare const Owner: {
    encode(message: Owner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Owner;
    fromPartial(object: DeepPartial<Owner>): Owner;
};
export declare const Collection: {
    encode(message: Collection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collection;
    fromPartial(object: DeepPartial<Collection>): Collection;
};

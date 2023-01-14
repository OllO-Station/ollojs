import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Owner, OwnerSDKType, Collection, CollectionSDKType, Denom, DenomSDKType, BaseNFT, BaseNFTSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequest {
    denomId: string;
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequestSDKType {
    denom_id: string;
    owner: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    /** QuerySupplyResponse is the response type for the Query/Supply RPC method */
    amount: Long;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
    amount: Long;
}
/**
 * QueryNFTsOfOwnerRequest is the request type for the Query/NFTsOfOwner RPC
 * method
 */
export interface QueryNFTsOfOwnerRequest {
    denomId: string;
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryNFTsOfOwnerRequest is the request type for the Query/NFTsOfOwner RPC
 * method
 */
export interface QueryNFTsOfOwnerRequestSDKType {
    denom_id: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryNFTsOfOwnerResponse is the response type for the Query/NFTsOfOwner RPC
 * method
 */
export interface QueryNFTsOfOwnerResponse {
    owner?: Owner;
    pagination?: PageResponse;
}
/**
 * QueryNFTsOfOwnerResponse is the response type for the Query/NFTsOfOwner RPC
 * method
 */
export interface QueryNFTsOfOwnerResponseSDKType {
    owner?: OwnerSDKType;
    pagination?: PageResponseSDKType;
}
/**
 * QueryCollectionRequest is the request type for the Query/Collection RPC
 * method
 */
export interface QueryCollectionRequest {
    denomId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryCollectionRequest is the request type for the Query/Collection RPC
 * method
 */
export interface QueryCollectionRequestSDKType {
    denom_id: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryCollectionResponse is the response type for the Query/Collection RPC
 * method
 */
export interface QueryCollectionResponse {
    collection?: Collection;
    pagination?: PageResponse;
}
/**
 * QueryCollectionResponse is the response type for the Query/Collection RPC
 * method
 */
export interface QueryCollectionResponseSDKType {
    collection?: CollectionSDKType;
    pagination?: PageResponseSDKType;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequest {
    denomId: string;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequestSDKType {
    denom_id: string;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponse {
    /** QueryDenomResponse is the response type for the Query/Denom RPC method */
    denom?: Denom;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponseSDKType {
    denom?: DenomSDKType;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponse {
    denoms: Denom[];
    pagination?: PageResponse;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponseSDKType {
    denoms: DenomSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    denomId: string;
    tokenId: string;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
    denom_id: string;
    token_id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    /** QueryNFTResponse is the response type for the Query/NFT RPC method */
    nft?: BaseNFT;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
    nft?: BaseNFTSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse;
};
export declare const QueryNFTsOfOwnerRequest: {
    encode(message: QueryNFTsOfOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsOfOwnerRequest;
    fromPartial(object: DeepPartial<QueryNFTsOfOwnerRequest>): QueryNFTsOfOwnerRequest;
};
export declare const QueryNFTsOfOwnerResponse: {
    encode(message: QueryNFTsOfOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsOfOwnerResponse;
    fromPartial(object: DeepPartial<QueryNFTsOfOwnerResponse>): QueryNFTsOfOwnerResponse;
};
export declare const QueryCollectionRequest: {
    encode(message: QueryCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest;
    fromPartial(object: DeepPartial<QueryCollectionRequest>): QueryCollectionRequest;
};
export declare const QueryCollectionResponse: {
    encode(message: QueryCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse;
    fromPartial(object: DeepPartial<QueryCollectionResponse>): QueryCollectionResponse;
};
export declare const QueryDenomRequest: {
    encode(message: QueryDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest;
    fromPartial(object: DeepPartial<QueryDenomRequest>): QueryDenomRequest;
};
export declare const QueryDenomResponse: {
    encode(message: QueryDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse;
    fromPartial(object: DeepPartial<QueryDenomResponse>): QueryDenomResponse;
};
export declare const QueryDenomsRequest: {
    encode(message: QueryDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest;
    fromPartial(object: DeepPartial<QueryDenomsRequest>): QueryDenomsRequest;
};
export declare const QueryDenomsResponse: {
    encode(message: QueryDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse;
    fromPartial(object: DeepPartial<QueryDenomsResponse>): QueryDenomsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse;
};

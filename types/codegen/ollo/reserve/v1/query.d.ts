import { Params, ParamsSDKType } from "./params";
import { DenomWhitelist, DenomWhitelistSDKType } from "./reserve";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryDenomWhitelist.gRequest defines the request structure for the
 * DenomWhitelist.g gRPC query.
 */
export interface QueryGetDenomWhitelistRequest {
    denom: string;
}
/**
 * QueryDenomWhitelist.gRequest defines the request structure for the
 * DenomWhitelist.g gRPC query.
 */
export interface QueryGetDenomWhitelistRequestSDKType {
    denom: string;
}
/**
 * QueryDenomWhitelist.gResponse defines the response structure for the
 * DenomWhitelist.g gRPC query.
 */
export interface QueryGetDenomWhitelistResponse {
    whitelist?: DenomWhitelist;
}
/**
 * QueryDenomWhitelist.gResponse defines the response structure for the
 * DenomWhitelist.g gRPC query.
 */
export interface QueryGetDenomWhitelistResponseSDKType {
    whitelist?: DenomWhitelistSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
    denoms: string[];
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */
export interface QueryGetDenomsRequest {
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */
export interface QueryGetDenomsRequestSDKType {
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */
export interface QueryGetDenomsResponse {
    /** params defines the parameters of the module. */
    denoms: string[];
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */
export interface QueryGetDenomsResponseSDKType {
    denoms: string[];
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */
export interface QueryGetDenomRequest {
    denom: string;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method. */
export interface QueryGetDenomRequestSDKType {
    denom: string;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */
export interface QueryGetDenomResponse {
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method. */
export interface QueryGetDenomResponseSDKType {
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
export declare const QueryGetDenomWhitelistRequest: {
    encode(message: QueryGetDenomWhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomWhitelistRequest;
    fromPartial(object: DeepPartial<QueryGetDenomWhitelistRequest>): QueryGetDenomWhitelistRequest;
};
export declare const QueryGetDenomWhitelistResponse: {
    encode(message: QueryGetDenomWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomWhitelistResponse;
    fromPartial(object: DeepPartial<QueryGetDenomWhitelistResponse>): QueryGetDenomWhitelistResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    encode(message: QueryDenomsFromCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    encode(message: QueryDenomsFromCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
};
export declare const QueryGetDenomsRequest: {
    encode(_: QueryGetDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomsRequest;
    fromPartial(_: DeepPartial<QueryGetDenomsRequest>): QueryGetDenomsRequest;
};
export declare const QueryGetDenomsResponse: {
    encode(message: QueryGetDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomsResponse;
    fromPartial(object: DeepPartial<QueryGetDenomsResponse>): QueryGetDenomsResponse;
};
export declare const QueryGetDenomRequest: {
    encode(message: QueryGetDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomRequest;
    fromPartial(object: DeepPartial<QueryGetDenomRequest>): QueryGetDenomRequest;
};
export declare const QueryGetDenomResponse: {
    encode(_: QueryGetDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomResponse;
    fromPartial(_: DeepPartial<QueryGetDenomResponse>): QueryGetDenomResponse;
};

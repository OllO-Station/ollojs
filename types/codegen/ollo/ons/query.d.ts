import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Whois, WhoisSDKType } from "./whois";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
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
export interface QueryGetWhoisRequest {
    index: string;
}
export interface QueryGetWhoisRequestSDKType {
    index: string;
}
export interface QueryGetWhoisResponse {
    whois?: Whois;
}
export interface QueryGetWhoisResponseSDKType {
    whois?: WhoisSDKType;
}
export interface QueryAllWhoisRequest {
    pagination?: PageRequest;
}
export interface QueryAllWhoisRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllWhoisResponse {
    whois: Whois[];
    pagination?: PageResponse;
}
export interface QueryAllWhoisResponseSDKType {
    whois: WhoisSDKType[];
    pagination?: PageResponseSDKType;
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
export declare const QueryGetWhoisRequest: {
    encode(message: QueryGetWhoisRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhoisRequest;
    fromPartial(object: DeepPartial<QueryGetWhoisRequest>): QueryGetWhoisRequest;
};
export declare const QueryGetWhoisResponse: {
    encode(message: QueryGetWhoisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhoisResponse;
    fromPartial(object: DeepPartial<QueryGetWhoisResponse>): QueryGetWhoisResponse;
};
export declare const QueryAllWhoisRequest: {
    encode(message: QueryAllWhoisRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhoisRequest;
    fromPartial(object: DeepPartial<QueryAllWhoisRequest>): QueryAllWhoisRequest;
};
export declare const QueryAllWhoisResponse: {
    encode(message: QueryAllWhoisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhoisResponse;
    fromPartial(object: DeepPartial<QueryAllWhoisResponse>): QueryAllWhoisResponse;
};

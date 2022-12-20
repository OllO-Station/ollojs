import { Params, ParamsSDKType } from "./params";
import { PricesResult, PricesResultSDKType } from "./prices";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
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
export interface QueryPricesRequest {
    requestId: Long;
}
export interface QueryPricesRequestSDKType {
    request_id: Long;
}
export interface QueryPricesResponse {
    result?: PricesResult;
}
export interface QueryPricesResponseSDKType {
    result?: PricesResultSDKType;
}
export interface QueryLastPricesIdRequest {
}
export interface QueryLastPricesIdRequestSDKType {
}
export interface QueryLastPricesIdResponse {
    requestId: Long;
}
export interface QueryLastPricesIdResponseSDKType {
    request_id: Long;
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
export declare const QueryPricesRequest: {
    encode(message: QueryPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesRequest;
    fromPartial(object: DeepPartial<QueryPricesRequest>): QueryPricesRequest;
};
export declare const QueryPricesResponse: {
    encode(message: QueryPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesResponse;
    fromPartial(object: DeepPartial<QueryPricesResponse>): QueryPricesResponse;
};
export declare const QueryLastPricesIdRequest: {
    encode(_: QueryLastPricesIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPricesIdRequest;
    fromPartial(_: DeepPartial<QueryLastPricesIdRequest>): QueryLastPricesIdRequest;
};
export declare const QueryLastPricesIdResponse: {
    encode(message: QueryLastPricesIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPricesIdResponse;
    fromPartial(object: DeepPartial<QueryLastPricesIdResponse>): QueryLastPricesIdResponse;
};

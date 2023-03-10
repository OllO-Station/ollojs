import { FeeToken, FeeTokenSDKType } from "./fees";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensRequestSDKType {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseSDKType {
    fee_tokens: FeeTokenSDKType[];
}
export interface QueryDenomSpotPriceRequest {
    denom: string;
}
export interface QueryDenomSpotPriceRequestSDKType {
    denom: string;
}
export interface QueryDenomSpotPriceResponse {
    denom: string;
    price: string;
}
export interface QueryDenomSpotPriceResponseSDKType {
    denom: string;
    price: string;
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdRequestSDKType {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolId: Long;
}
export interface QueryDenomPoolIdResponseSDKType {
    pool_id: Long;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomRequestSDKType {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryFeeTokensRequest: {
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest;
};
export declare const QueryFeeTokensResponse: {
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse;
};
export declare const QueryDenomSpotPriceRequest: {
    encode(message: QueryDenomSpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest;
    fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest;
};
export declare const QueryDenomSpotPriceResponse: {
    encode(message: QueryDenomSpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponse;
    fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse;
};
export declare const QueryDenomPoolIdRequest: {
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest;
};
export declare const QueryDenomPoolIdResponse: {
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse;
};
export declare const QueryBaseDenomRequest: {
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
};

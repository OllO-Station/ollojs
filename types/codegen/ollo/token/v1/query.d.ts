import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryTokenRequest is request type for the Query/Token RPC method */
export interface QueryTokenRequest {
    /** QueryTokenRequest is request type for the Query/Token RPC method */
    denom: string;
}
/** QueryTokenRequest is request type for the Query/Token RPC method */
export interface QueryTokenRequestSDKType {
    denom: string;
}
/** QueryTokenResponse is response type for the Query/Token RPC method */
export interface QueryTokenResponse {
    Token?: Any;
}
/** QueryTokenResponse is response type for the Query/Token RPC method */
export interface QueryTokenResponseSDKType {
    Token?: AnySDKType;
}
/** QueryTokensRequest is request type for the Query/Tokens RPC method */
export interface QueryTokensRequest {
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryTokensRequest is request type for the Query/Tokens RPC method */
export interface QueryTokensRequestSDKType {
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryTokensResponse is response type for the Query/Tokens RPC method */
export interface QueryTokensResponse {
    Tokens: Any[];
    pagination?: PageResponse;
}
/** QueryTokensResponse is response type for the Query/Tokens RPC method */
export interface QueryTokensResponseSDKType {
    Tokens: AnySDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryFeesRequest is request type for the Query/Fees RPC method */
export interface QueryFeesRequest {
    /** QueryFeesRequest is request type for the Query/Fees RPC method */
    denom: string;
}
/** QueryFeesRequest is request type for the Query/Fees RPC method */
export interface QueryFeesRequestSDKType {
    denom: string;
}
/** QueryFeesResponse is response type for the Query/Fees RPC method */
export interface QueryFeesResponse {
    exist: boolean;
    issueFee?: Coin;
    mintFee?: Coin;
}
/** QueryFeesResponse is response type for the Query/Fees RPC method */
export interface QueryFeesResponseSDKType {
    exist: boolean;
    issue_fee?: CoinSDKType;
    mint_fee?: CoinSDKType;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params?: Params;
    res?: PageResponse;
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
    res?: PageResponseSDKType;
}
/** QueryTokenRequest is request type for the Query/TotalBurn RPC method */
export interface QueryBurnRequest {
}
/** QueryTokenRequest is request type for the Query/TotalBurn RPC method */
export interface QueryBurnRequestSDKType {
}
/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */
export interface QueryBurnResponse {
    burnedCoins: Coin[];
}
/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */
export interface QueryBurnResponseSDKType {
    burned_coins: CoinSDKType[];
}
export declare const QueryTokenRequest: {
    encode(message: QueryTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest;
    fromPartial(object: DeepPartial<QueryTokenRequest>): QueryTokenRequest;
};
export declare const QueryTokenResponse: {
    encode(message: QueryTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse;
    fromPartial(object: DeepPartial<QueryTokenResponse>): QueryTokenResponse;
};
export declare const QueryTokensRequest: {
    encode(message: QueryTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensRequest;
    fromPartial(object: DeepPartial<QueryTokensRequest>): QueryTokensRequest;
};
export declare const QueryTokensResponse: {
    encode(message: QueryTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokensResponse;
    fromPartial(object: DeepPartial<QueryTokensResponse>): QueryTokensResponse;
};
export declare const QueryFeesRequest: {
    encode(message: QueryFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesRequest;
    fromPartial(object: DeepPartial<QueryFeesRequest>): QueryFeesRequest;
};
export declare const QueryFeesResponse: {
    encode(message: QueryFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeesResponse;
    fromPartial(object: DeepPartial<QueryFeesResponse>): QueryFeesResponse;
};
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
export declare const QueryBurnRequest: {
    encode(_: QueryBurnRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnRequest;
    fromPartial(_: DeepPartial<QueryBurnRequest>): QueryBurnRequest;
};
export declare const QueryBurnResponse: {
    encode(message: QueryBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnResponse;
    fromPartial(object: DeepPartial<QueryBurnResponse>): QueryBurnResponse;
};

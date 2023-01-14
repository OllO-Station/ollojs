import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Loans, LoansSDKType } from "./loans";
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
export interface QueryGetLoansRequest {
    id: Long;
}
export interface QueryGetLoansRequestSDKType {
    id: Long;
}
export interface QueryGetLoansResponse {
    Loans?: Loans;
}
export interface QueryGetLoansResponseSDKType {
    Loans?: LoansSDKType;
}
export interface QueryAllLoansRequest {
    pagination?: PageRequest;
}
export interface QueryAllLoansRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllLoansResponse {
    Loans: Loans[];
    pagination?: PageResponse;
}
export interface QueryAllLoansResponseSDKType {
    Loans: LoansSDKType[];
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
export declare const QueryGetLoansRequest: {
    encode(message: QueryGetLoansRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoansRequest;
    fromPartial(object: DeepPartial<QueryGetLoansRequest>): QueryGetLoansRequest;
};
export declare const QueryGetLoansResponse: {
    encode(message: QueryGetLoansResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoansResponse;
    fromPartial(object: DeepPartial<QueryGetLoansResponse>): QueryGetLoansResponse;
};
export declare const QueryAllLoansRequest: {
    encode(message: QueryAllLoansRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLoansRequest;
    fromPartial(object: DeepPartial<QueryAllLoansRequest>): QueryAllLoansRequest;
};
export declare const QueryAllLoansResponse: {
    encode(message: QueryAllLoansResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLoansResponse;
    fromPartial(object: DeepPartial<QueryAllLoansResponse>): QueryAllLoansResponse;
};

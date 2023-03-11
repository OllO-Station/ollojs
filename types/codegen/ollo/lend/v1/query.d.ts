import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Loan, LoanSDKType } from "./loan";
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
export interface QueryGetLoanRequest {
    id: Long;
}
export interface QueryGetLoanRequestSDKType {
    id: Long;
}
export interface QueryGetLoanResponse {
    Loan?: Loan;
}
export interface QueryGetLoanResponseSDKType {
    Loan?: LoanSDKType;
}
export interface QueryAllLoanRequest {
    pagination?: PageRequest;
}
export interface QueryAllLoanRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllLoanResponse {
    Loan: Loan[];
    pagination?: PageResponse;
}
export interface QueryAllLoanResponseSDKType {
    Loan: LoanSDKType[];
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
export declare const QueryGetLoanRequest: {
    encode(message: QueryGetLoanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoanRequest;
    fromPartial(object: DeepPartial<QueryGetLoanRequest>): QueryGetLoanRequest;
};
export declare const QueryGetLoanResponse: {
    encode(message: QueryGetLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoanResponse;
    fromPartial(object: DeepPartial<QueryGetLoanResponse>): QueryGetLoanResponse;
};
export declare const QueryAllLoanRequest: {
    encode(message: QueryAllLoanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLoanRequest;
    fromPartial(object: DeepPartial<QueryAllLoanRequest>): QueryAllLoanRequest;
};
export declare const QueryAllLoanResponse: {
    encode(message: QueryAllLoanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLoanResponse;
    fromPartial(object: DeepPartial<QueryAllLoanResponse>): QueryAllLoanResponse;
};

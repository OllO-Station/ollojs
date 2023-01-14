import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordSDKType, InitialClaim, InitialClaimSDKType } from "./claim";
import { Goal, GoalSDKType } from "./goal";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
export interface QueryGetClaimRecordRequest {
    address: string;
}
export interface QueryGetClaimRecordRequestSDKType {
    address: string;
}
export interface QueryGetClaimRecordResponse {
    claimRecord?: ClaimRecord;
}
export interface QueryGetClaimRecordResponseSDKType {
    claimRecord?: ClaimRecordSDKType;
}
export interface QueryAllClaimRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllClaimRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllClaimRecordResponse {
    claimRecord: ClaimRecord[];
    pagination?: PageResponse;
}
export interface QueryAllClaimRecordResponseSDKType {
    claimRecord: ClaimRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetGoalRequest {
    goalID: Long;
}
export interface QueryGetGoalRequestSDKType {
    goalID: Long;
}
export interface QueryGetGoalResponse {
    Goal?: Goal;
}
export interface QueryGetGoalResponseSDKType {
    Goal?: GoalSDKType;
}
export interface QueryAllGoalRequest {
    pagination?: PageRequest;
}
export interface QueryAllGoalRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllGoalResponse {
    Goal: Goal[];
    pagination?: PageResponse;
}
export interface QueryAllGoalResponseSDKType {
    Goal: GoalSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetAirdropSupplyRequest {
}
export interface QueryGetAirdropSupplyRequestSDKType {
}
export interface QueryGetAirdropSupplyResponse {
    AirdropSupply?: Coin;
}
export interface QueryGetAirdropSupplyResponseSDKType {
    AirdropSupply?: CoinSDKType;
}
export interface QueryGetInitialClaimRequest {
}
export interface QueryGetInitialClaimRequestSDKType {
}
export interface QueryGetInitialClaimResponse {
    InitialClaim?: InitialClaim;
}
export interface QueryGetInitialClaimResponseSDKType {
    InitialClaim?: InitialClaimSDKType;
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
export declare const QueryGetClaimRecordRequest: {
    encode(message: QueryGetClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClaimRecordRequest;
    fromPartial(object: DeepPartial<QueryGetClaimRecordRequest>): QueryGetClaimRecordRequest;
};
export declare const QueryGetClaimRecordResponse: {
    encode(message: QueryGetClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClaimRecordResponse;
    fromPartial(object: DeepPartial<QueryGetClaimRecordResponse>): QueryGetClaimRecordResponse;
};
export declare const QueryAllClaimRecordRequest: {
    encode(message: QueryAllClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllClaimRecordRequest;
    fromPartial(object: DeepPartial<QueryAllClaimRecordRequest>): QueryAllClaimRecordRequest;
};
export declare const QueryAllClaimRecordResponse: {
    encode(message: QueryAllClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllClaimRecordResponse;
    fromPartial(object: DeepPartial<QueryAllClaimRecordResponse>): QueryAllClaimRecordResponse;
};
export declare const QueryGetGoalRequest: {
    encode(message: QueryGetGoalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoalRequest;
    fromPartial(object: DeepPartial<QueryGetGoalRequest>): QueryGetGoalRequest;
};
export declare const QueryGetGoalResponse: {
    encode(message: QueryGetGoalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoalResponse;
    fromPartial(object: DeepPartial<QueryGetGoalResponse>): QueryGetGoalResponse;
};
export declare const QueryAllGoalRequest: {
    encode(message: QueryAllGoalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGoalRequest;
    fromPartial(object: DeepPartial<QueryAllGoalRequest>): QueryAllGoalRequest;
};
export declare const QueryAllGoalResponse: {
    encode(message: QueryAllGoalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGoalResponse;
    fromPartial(object: DeepPartial<QueryAllGoalResponse>): QueryAllGoalResponse;
};
export declare const QueryGetAirdropSupplyRequest: {
    encode(_: QueryGetAirdropSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAirdropSupplyRequest;
    fromPartial(_: DeepPartial<QueryGetAirdropSupplyRequest>): QueryGetAirdropSupplyRequest;
};
export declare const QueryGetAirdropSupplyResponse: {
    encode(message: QueryGetAirdropSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAirdropSupplyResponse;
    fromPartial(object: DeepPartial<QueryGetAirdropSupplyResponse>): QueryGetAirdropSupplyResponse;
};
export declare const QueryGetInitialClaimRequest: {
    encode(_: QueryGetInitialClaimRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInitialClaimRequest;
    fromPartial(_: DeepPartial<QueryGetInitialClaimRequest>): QueryGetInitialClaimRequest;
};
export declare const QueryGetInitialClaimResponse: {
    encode(message: QueryGetInitialClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInitialClaimResponse;
    fromPartial(object: DeepPartial<QueryGetInitialClaimResponse>): QueryGetInitialClaimResponse;
};

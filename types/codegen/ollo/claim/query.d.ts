import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Airdrop, AirdropSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
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
/** QueryAirdropsRequest is request type for the Query/Airdrops RPC method. */
export interface QueryAirdropsRequest {
    pagination?: PageRequest;
}
/** QueryAirdropsRequest is request type for the Query/Airdrops RPC method. */
export interface QueryAirdropsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryAirdropsResponse is response type for the Query/Airdrops RPC method. */
export interface QueryAirdropsResponse {
    airdrops: Airdrop[];
    pagination?: PageResponse;
}
/** QueryAirdropsResponse is response type for the Query/Airdrops RPC method. */
export interface QueryAirdropsResponseSDKType {
    airdrops: AirdropSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAirdropRequest is request type for the Query/Airdrop RPC method. */
export interface QueryAirdropRequest {
    airdropId: Long;
}
/** QueryAirdropRequest is request type for the Query/Airdrop RPC method. */
export interface QueryAirdropRequestSDKType {
    airdrop_id: Long;
}
/** QueryAirdropResponse is response type for the Query/Airdrop RPC method. */
export interface QueryAirdropResponse {
    airdrop?: Airdrop;
}
/** QueryAirdropResponse is response type for the Query/Airdrop RPC method. */
export interface QueryAirdropResponseSDKType {
    airdrop?: AirdropSDKType;
}
/** QueryClaimRecordRequest is request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequest {
    airdropId: Long;
    recipient: string;
}
/** QueryClaimRecordRequest is request type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordRequestSDKType {
    airdrop_id: Long;
    recipient: string;
}
/** QueryClaimRecordResponse is response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordResponse {
    claimRecord?: ClaimRecord;
}
/** QueryClaimRecordResponse is response type for the Query/ClaimRecord RPC method. */
export interface QueryClaimRecordResponseSDKType {
    claim_record?: ClaimRecordSDKType;
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
export declare const QueryAirdropsRequest: {
    encode(message: QueryAirdropsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropsRequest;
    fromPartial(object: DeepPartial<QueryAirdropsRequest>): QueryAirdropsRequest;
};
export declare const QueryAirdropsResponse: {
    encode(message: QueryAirdropsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropsResponse;
    fromPartial(object: DeepPartial<QueryAirdropsResponse>): QueryAirdropsResponse;
};
export declare const QueryAirdropRequest: {
    encode(message: QueryAirdropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropRequest;
    fromPartial(object: DeepPartial<QueryAirdropRequest>): QueryAirdropRequest;
};
export declare const QueryAirdropResponse: {
    encode(message: QueryAirdropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropResponse;
    fromPartial(object: DeepPartial<QueryAirdropResponse>): QueryAirdropResponse;
};
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
};

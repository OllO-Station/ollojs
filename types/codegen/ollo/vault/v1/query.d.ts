import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Vault, VaultSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
export interface QueryAllVaultsRequest {
    pagination?: PageRequest;
}
export interface QueryAllVaultsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllVaultsResponse {
    vault: Vault[];
    pagination?: PageResponse;
}
export interface QueryAllVaultsResponseSDKType {
    vault: VaultSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryVaultRequest {
    id: Long;
}
export interface QueryVaultRequestSDKType {
    id: Long;
}
export interface QueryVaultResponse {
    vault?: Vault;
}
export interface QueryVaultResponseSDKType {
    vault?: VaultSDKType;
}
export declare const QueryAllVaultsRequest: {
    encode(message: QueryAllVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVaultsRequest;
    fromPartial(object: DeepPartial<QueryAllVaultsRequest>): QueryAllVaultsRequest;
};
export declare const QueryAllVaultsResponse: {
    encode(message: QueryAllVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVaultsResponse;
    fromPartial(object: DeepPartial<QueryAllVaultsResponse>): QueryAllVaultsResponse;
};
export declare const QueryVaultRequest: {
    encode(message: QueryVaultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultRequest;
    fromPartial(object: DeepPartial<QueryVaultRequest>): QueryVaultRequest;
};
export declare const QueryVaultResponse: {
    encode(message: QueryVaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultResponse;
    fromPartial(object: DeepPartial<QueryVaultResponse>): QueryVaultResponse;
};

import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Keypair {
    key: string;
    val: string;
}
export interface KeypairSDKType {
    key: string;
    val: string;
}
export interface VerificationMethod {
    id: string;
    type: string;
    controller: string;
    publicKey: Keypair[];
    pubkeyBase58: string;
    credentialJson: Uint8Array;
}
export interface VerificationMethodSDKType {
    id: string;
    type: string;
    controller: string;
    public_key: KeypairSDKType[];
    pubkey_base58: string;
    credential_json: Uint8Array;
}
export interface Service {
    id: string;
    type: string;
    endpoint: string;
}
export interface ServiceSDKType {
    id: string;
    type: string;
    endpoint: string;
}
export interface DidDocument {
    id: string;
    context: string[];
    controller: string[];
    verificationMethod: VerificationMethod[];
    authentication: string[];
    assertionMethod: string[];
    capabilityInvocation: string[];
    capabilityDelegation: string[];
    keyAgreement: string[];
    service: Service[];
    alias: string[];
}
export interface DidDocumentSDKType {
    id: string;
    context: string[];
    controller: string[];
    verification_method: VerificationMethodSDKType[];
    authentication: string[];
    assertion_method: string[];
    capability_invocation: string[];
    capability_delegation: string[];
    key_agreement: string[];
    service: ServiceSDKType[];
    alias: string[];
}
export declare const Keypair: {
    encode(message: Keypair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Keypair;
    fromPartial(object: DeepPartial<Keypair>): Keypair;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromPartial(object: DeepPartial<VerificationMethod>): VerificationMethod;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromPartial(object: DeepPartial<Service>): Service;
};
export declare const DidDocument: {
    encode(message: DidDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocument;
    fromPartial(object: DeepPartial<DidDocument>): DidDocument;
};

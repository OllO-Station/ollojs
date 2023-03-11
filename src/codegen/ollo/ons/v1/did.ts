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

function createBaseKeypair(): Keypair {
  return {
    key: "",
    val: ""
  };
}

export const Keypair = {
  encode(message: Keypair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Keypair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeypair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.val = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Keypair>): Keypair {
    const message = createBaseKeypair();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    return message;
  }

};

function createBaseVerificationMethod(): VerificationMethod {
  return {
    id: "",
    type: "",
    controller: "",
    publicKey: [],
    pubkeyBase58: "",
    credentialJson: new Uint8Array()
  };
}

export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }

    for (const v of message.publicKey) {
      Keypair.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.pubkeyBase58 !== "") {
      writer.uint32(42).string(message.pubkeyBase58);
    }

    if (message.credentialJson.length !== 0) {
      writer.uint32(50).bytes(message.credentialJson);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.controller = reader.string();
          break;

        case 4:
          message.publicKey.push(Keypair.decode(reader, reader.uint32()));
          break;

        case 5:
          message.pubkeyBase58 = reader.string();
          break;

        case 6:
          message.credentialJson = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VerificationMethod>): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.publicKey = object.publicKey?.map(e => Keypair.fromPartial(e)) || [];
    message.pubkeyBase58 = object.pubkeyBase58 ?? "";
    message.credentialJson = object.credentialJson ?? new Uint8Array();
    return message;
  }

};

function createBaseService(): Service {
  return {
    id: "",
    type: "",
    endpoint: ""
  };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.endpoint !== "") {
      writer.uint32(26).string(message.endpoint);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.endpoint = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.endpoint = object.endpoint ?? "";
    return message;
  }

};

function createBaseDidDocument(): DidDocument {
  return {
    id: "",
    context: [],
    controller: [],
    verificationMethod: [],
    authentication: [],
    assertionMethod: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
    keyAgreement: [],
    service: [],
    alias: []
  };
}

export const DidDocument = {
  encode(message: DidDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    for (const v of message.context) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.authentication) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.assertionMethod) {
      writer.uint32(50).string(v!);
    }

    for (const v of message.capabilityInvocation) {
      writer.uint32(58).string(v!);
    }

    for (const v of message.capabilityDelegation) {
      writer.uint32(66).string(v!);
    }

    for (const v of message.keyAgreement) {
      writer.uint32(74).string(v!);
    }

    for (const v of message.service) {
      Service.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.alias) {
      writer.uint32(90).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidDocument();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.context.push(reader.string());
          break;

        case 3:
          message.controller.push(reader.string());
          break;

        case 4:
          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          break;

        case 5:
          message.authentication.push(reader.string());
          break;

        case 6:
          message.assertionMethod.push(reader.string());
          break;

        case 7:
          message.capabilityInvocation.push(reader.string());
          break;

        case 8:
          message.capabilityDelegation.push(reader.string());
          break;

        case 9:
          message.keyAgreement.push(reader.string());
          break;

        case 10:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;

        case 11:
          message.alias.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DidDocument>): DidDocument {
    const message = createBaseDidDocument();
    message.id = object.id ?? "";
    message.context = object.context?.map(e => e) || [];
    message.controller = object.controller?.map(e => e) || [];
    message.verificationMethod = object.verificationMethod?.map(e => VerificationMethod.fromPartial(e)) || [];
    message.authentication = object.authentication?.map(e => e) || [];
    message.assertionMethod = object.assertionMethod?.map(e => e) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map(e => e) || [];
    message.capabilityDelegation = object.capabilityDelegation?.map(e => e) || [];
    message.keyAgreement = object.keyAgreement?.map(e => e) || [];
    message.service = object.service?.map(e => Service.fromPartial(e)) || [];
    message.alias = object.alias?.map(e => e) || [];
    return message;
  }

};
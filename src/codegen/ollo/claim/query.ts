import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Airdrop, AirdropSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryAirdropsRequest(): QueryAirdropsRequest {
  return {
    pagination: undefined
  };
}

export const QueryAirdropsRequest = {
  encode(message: QueryAirdropsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAirdropsRequest>): QueryAirdropsRequest {
    const message = createBaseQueryAirdropsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAirdropsResponse(): QueryAirdropsResponse {
  return {
    airdrops: [],
    pagination: undefined
  };
}

export const QueryAirdropsResponse = {
  encode(message: QueryAirdropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAirdropsResponse>): QueryAirdropsResponse {
    const message = createBaseQueryAirdropsResponse();
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAirdropRequest(): QueryAirdropRequest {
  return {
    airdropId: Long.UZERO
  };
}

export const QueryAirdropRequest = {
  encode(message: QueryAirdropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAirdropRequest>): QueryAirdropRequest {
    const message = createBaseQueryAirdropRequest();
    message.airdropId = object.airdropId !== undefined && object.airdropId !== null ? Long.fromValue(object.airdropId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryAirdropResponse(): QueryAirdropResponse {
  return {
    airdrop: undefined
  };
}

export const QueryAirdropResponse = {
  encode(message: QueryAirdropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdrop !== undefined) {
      Airdrop.encode(message.airdrop, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAirdropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirdropResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdrop = Airdrop.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAirdropResponse>): QueryAirdropResponse {
    const message = createBaseQueryAirdropResponse();
    message.airdrop = object.airdrop !== undefined && object.airdrop !== null ? Airdrop.fromPartial(object.airdrop) : undefined;
    return message;
  }

};

function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    airdropId: Long.UZERO,
    recipient: ""
  };
}

export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.airdropId.isZero()) {
      writer.uint32(8).uint64(message.airdropId);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropId = (reader.uint64() as Long);
          break;

        case 2:
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.airdropId = object.airdropId !== undefined && object.airdropId !== null ? Long.fromValue(object.airdropId) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}

export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  }

};
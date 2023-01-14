import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordSDKType, InitialClaim, InitialClaimSDKType } from "./claim";
import { Goal, GoalSDKType } from "./goal";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
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
export interface QueryGetAirdropSupplyRequest {}
export interface QueryGetAirdropSupplyRequestSDKType {}
export interface QueryGetAirdropSupplyResponse {
  AirdropSupply?: Coin;
}
export interface QueryGetAirdropSupplyResponseSDKType {
  AirdropSupply?: CoinSDKType;
}
export interface QueryGetInitialClaimRequest {}
export interface QueryGetInitialClaimRequestSDKType {}
export interface QueryGetInitialClaimResponse {
  InitialClaim?: InitialClaim;
}
export interface QueryGetInitialClaimResponseSDKType {
  InitialClaim?: InitialClaimSDKType;
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

function createBaseQueryGetClaimRecordRequest(): QueryGetClaimRecordRequest {
  return {
    address: ""
  };
}

export const QueryGetClaimRecordRequest = {
  encode(message: QueryGetClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClaimRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetClaimRecordRequest>): QueryGetClaimRecordRequest {
    const message = createBaseQueryGetClaimRecordRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryGetClaimRecordResponse(): QueryGetClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}

export const QueryGetClaimRecordResponse = {
  encode(message: QueryGetClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetClaimRecordResponse();

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

  fromPartial(object: DeepPartial<QueryGetClaimRecordResponse>): QueryGetClaimRecordResponse {
    const message = createBaseQueryGetClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  }

};

function createBaseQueryAllClaimRecordRequest(): QueryAllClaimRecordRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllClaimRecordRequest = {
  encode(message: QueryAllClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllClaimRecordRequest();

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

  fromPartial(object: DeepPartial<QueryAllClaimRecordRequest>): QueryAllClaimRecordRequest {
    const message = createBaseQueryAllClaimRecordRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllClaimRecordResponse(): QueryAllClaimRecordResponse {
  return {
    claimRecord: [],
    pagination: undefined
  };
}

export const QueryAllClaimRecordResponse = {
  encode(message: QueryAllClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimRecord) {
      ClaimRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllClaimRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimRecord.push(ClaimRecord.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllClaimRecordResponse>): QueryAllClaimRecordResponse {
    const message = createBaseQueryAllClaimRecordResponse();
    message.claimRecord = object.claimRecord?.map(e => ClaimRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetGoalRequest(): QueryGetGoalRequest {
  return {
    goalID: Long.UZERO
  };
}

export const QueryGetGoalRequest = {
  encode(message: QueryGetGoalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.goalID.isZero()) {
      writer.uint32(8).uint64(message.goalID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGoalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.goalID = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetGoalRequest>): QueryGetGoalRequest {
    const message = createBaseQueryGetGoalRequest();
    message.goalID = object.goalID !== undefined && object.goalID !== null ? Long.fromValue(object.goalID) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetGoalResponse(): QueryGetGoalResponse {
  return {
    Goal: undefined
  };
}

export const QueryGetGoalResponse = {
  encode(message: QueryGetGoalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Goal !== undefined) {
      Goal.encode(message.Goal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGoalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Goal = Goal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetGoalResponse>): QueryGetGoalResponse {
    const message = createBaseQueryGetGoalResponse();
    message.Goal = object.Goal !== undefined && object.Goal !== null ? Goal.fromPartial(object.Goal) : undefined;
    return message;
  }

};

function createBaseQueryAllGoalRequest(): QueryAllGoalRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllGoalRequest = {
  encode(message: QueryAllGoalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGoalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGoalRequest();

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

  fromPartial(object: DeepPartial<QueryAllGoalRequest>): QueryAllGoalRequest {
    const message = createBaseQueryAllGoalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllGoalResponse(): QueryAllGoalResponse {
  return {
    Goal: [],
    pagination: undefined
  };
}

export const QueryAllGoalResponse = {
  encode(message: QueryAllGoalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Goal) {
      Goal.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGoalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGoalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Goal.push(Goal.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryAllGoalResponse>): QueryAllGoalResponse {
    const message = createBaseQueryAllGoalResponse();
    message.Goal = object.Goal?.map(e => Goal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetAirdropSupplyRequest(): QueryGetAirdropSupplyRequest {
  return {};
}

export const QueryGetAirdropSupplyRequest = {
  encode(_: QueryGetAirdropSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAirdropSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAirdropSupplyRequest();

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

  fromPartial(_: DeepPartial<QueryGetAirdropSupplyRequest>): QueryGetAirdropSupplyRequest {
    const message = createBaseQueryGetAirdropSupplyRequest();
    return message;
  }

};

function createBaseQueryGetAirdropSupplyResponse(): QueryGetAirdropSupplyResponse {
  return {
    AirdropSupply: undefined
  };
}

export const QueryGetAirdropSupplyResponse = {
  encode(message: QueryGetAirdropSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AirdropSupply !== undefined) {
      Coin.encode(message.AirdropSupply, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAirdropSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAirdropSupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.AirdropSupply = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetAirdropSupplyResponse>): QueryGetAirdropSupplyResponse {
    const message = createBaseQueryGetAirdropSupplyResponse();
    message.AirdropSupply = object.AirdropSupply !== undefined && object.AirdropSupply !== null ? Coin.fromPartial(object.AirdropSupply) : undefined;
    return message;
  }

};

function createBaseQueryGetInitialClaimRequest(): QueryGetInitialClaimRequest {
  return {};
}

export const QueryGetInitialClaimRequest = {
  encode(_: QueryGetInitialClaimRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInitialClaimRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInitialClaimRequest();

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

  fromPartial(_: DeepPartial<QueryGetInitialClaimRequest>): QueryGetInitialClaimRequest {
    const message = createBaseQueryGetInitialClaimRequest();
    return message;
  }

};

function createBaseQueryGetInitialClaimResponse(): QueryGetInitialClaimResponse {
  return {
    InitialClaim: undefined
  };
}

export const QueryGetInitialClaimResponse = {
  encode(message: QueryGetInitialClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.InitialClaim !== undefined) {
      InitialClaim.encode(message.InitialClaim, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetInitialClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetInitialClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.InitialClaim = InitialClaim.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetInitialClaimResponse>): QueryGetInitialClaimResponse {
    const message = createBaseQueryGetInitialClaimResponse();
    message.InitialClaim = object.InitialClaim !== undefined && object.InitialClaim !== null ? InitialClaim.fromPartial(object.InitialClaim) : undefined;
    return message;
  }

};
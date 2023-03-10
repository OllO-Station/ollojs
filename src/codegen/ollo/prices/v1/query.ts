import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { BandPricesResult, BandPricesResultSDKType } from "./band";
import { MsgFeed, MsgFeedSDKType, MsgAccount, MsgAccountSDKType } from "./tx";
import { MsgModuleOwner, MsgModuleOwnerSDKType, OCRAbiEncoded, OCRAbiEncodedSDKType } from "./prices";
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
export interface QueryBandPricesRequest {
  requestId: Long;
}
export interface QueryBandPricesRequestSDKType {
  request_id: Long;
}
export interface QueryBandPricesResponse {
  result?: BandPricesResult;
}
export interface QueryBandPricesResponseSDKType {
  result?: BandPricesResultSDKType;
}
export interface QueryLastBandPricesIdRequest {}
export interface QueryLastBandPricesIdRequestSDKType {}
export interface QueryLastBandPricesIdResponse {
  requestId: Long;
}
export interface QueryLastBandPricesIdResponseSDKType {
  request_id: Long;
}
export interface QueryFeedByIdRequest {
  feedId: string;
}
export interface QueryFeedByIdRequestSDKType {
  feedId: string;
}
export interface QueryFeedByIdResponse {
  feed?: MsgFeed;
}
export interface QueryFeedByIdResponseSDKType {
  feed?: MsgFeedSDKType;
}
export interface QueryModuleOwnerRequest {}
export interface QueryModuleOwnerRequestSDKType {}
export interface QueryModuleOwnerResponse {
  moduleOwner: MsgModuleOwner[];
}
export interface QueryModuleOwnerResponseSDKType {
  moduleOwner: MsgModuleOwnerSDKType[];
}
export interface QueryRoundDataRequest {
  feedId: string;
  roundId: Long;
  pagination?: PageRequest;
}
export interface QueryRoundDataRequestSDKType {
  feedId: string;
  roundId: Long;
  pagination?: PageRequestSDKType;
}
export interface QueryRoundDataResponse {
  roundData: RoundData[];
  pagination?: PageResponse;
}
export interface QueryRoundDataResponseSDKType {
  roundData: RoundDataSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLatestRoundDataRequest {
  feedId: string;
}
export interface QueryLatestRoundDataRequestSDKType {
  feedId: string;
}
export interface QueryLatestRoundDataResponse {
  roundData: RoundData[];
}
export interface QueryLatestRoundDataResponseSDKType {
  roundData: RoundDataSDKType[];
}
export interface RoundData {
  feedId: string;
  feedData?: OCRAbiEncoded;
}
export interface RoundDataSDKType {
  feedId: string;
  feedData?: OCRAbiEncodedSDKType;
}
export interface QueryAccountRequest {
  accountAddress: Uint8Array;
}
export interface QueryAccountRequestSDKType {
  accountAddress: Uint8Array;
}
export interface QueryAccountResponse {
  account?: MsgAccount;
}
export interface QueryAccountResponseSDKType {
  account?: MsgAccountSDKType;
}
export interface QueryFeedRewardAvailStrategiesRequest {}
export interface QueryFeedRewardAvailStrategiesRequestSDKType {}
export interface QueryFeedRewardAvailStrategiesResponse {
  availStrategies: string[];
}
export interface QueryFeedRewardAvailStrategiesResponseSDKType {
  availStrategies: string[];
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

function createBaseQueryBandPricesRequest(): QueryBandPricesRequest {
  return {
    requestId: Long.ZERO
  };
}

export const QueryBandPricesRequest = {
  encode(message: QueryBandPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPricesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBandPricesRequest>): QueryBandPricesRequest {
    const message = createBaseQueryBandPricesRequest();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.ZERO;
    return message;
  }

};

function createBaseQueryBandPricesResponse(): QueryBandPricesResponse {
  return {
    result: undefined
  };
}

export const QueryBandPricesResponse = {
  encode(message: QueryBandPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      BandPricesResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBandPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = BandPricesResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBandPricesResponse>): QueryBandPricesResponse {
    const message = createBaseQueryBandPricesResponse();
    message.result = object.result !== undefined && object.result !== null ? BandPricesResult.fromPartial(object.result) : undefined;
    return message;
  }

};

function createBaseQueryLastBandPricesIdRequest(): QueryLastBandPricesIdRequest {
  return {};
}

export const QueryLastBandPricesIdRequest = {
  encode(_: QueryLastBandPricesIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBandPricesIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastBandPricesIdRequest();

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

  fromPartial(_: DeepPartial<QueryLastBandPricesIdRequest>): QueryLastBandPricesIdRequest {
    const message = createBaseQueryLastBandPricesIdRequest();
    return message;
  }

};

function createBaseQueryLastBandPricesIdResponse(): QueryLastBandPricesIdResponse {
  return {
    requestId: Long.ZERO
  };
}

export const QueryLastBandPricesIdResponse = {
  encode(message: QueryLastBandPricesIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastBandPricesIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastBandPricesIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestId = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLastBandPricesIdResponse>): QueryLastBandPricesIdResponse {
    const message = createBaseQueryLastBandPricesIdResponse();
    message.requestId = object.requestId !== undefined && object.requestId !== null ? Long.fromValue(object.requestId) : Long.ZERO;
    return message;
  }

};

function createBaseQueryFeedByIdRequest(): QueryFeedByIdRequest {
  return {
    feedId: ""
  };
}

export const QueryFeedByIdRequest = {
  encode(message: QueryFeedByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedByIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedByIdRequest>): QueryFeedByIdRequest {
    const message = createBaseQueryFeedByIdRequest();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseQueryFeedByIdResponse(): QueryFeedByIdResponse {
  return {
    feed: undefined
  };
}

export const QueryFeedByIdResponse = {
  encode(message: QueryFeedByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feed !== undefined) {
      MsgFeed.encode(message.feed, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedByIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feed = MsgFeed.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedByIdResponse>): QueryFeedByIdResponse {
    const message = createBaseQueryFeedByIdResponse();
    message.feed = object.feed !== undefined && object.feed !== null ? MsgFeed.fromPartial(object.feed) : undefined;
    return message;
  }

};

function createBaseQueryModuleOwnerRequest(): QueryModuleOwnerRequest {
  return {};
}

export const QueryModuleOwnerRequest = {
  encode(_: QueryModuleOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleOwnerRequest();

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

  fromPartial(_: DeepPartial<QueryModuleOwnerRequest>): QueryModuleOwnerRequest {
    const message = createBaseQueryModuleOwnerRequest();
    return message;
  }

};

function createBaseQueryModuleOwnerResponse(): QueryModuleOwnerResponse {
  return {
    moduleOwner: []
  };
}

export const QueryModuleOwnerResponse = {
  encode(message: QueryModuleOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleOwner) {
      MsgModuleOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.moduleOwner.push(MsgModuleOwner.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryModuleOwnerResponse>): QueryModuleOwnerResponse {
    const message = createBaseQueryModuleOwnerResponse();
    message.moduleOwner = object.moduleOwner?.map(e => MsgModuleOwner.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRoundDataRequest(): QueryRoundDataRequest {
  return {
    feedId: "",
    roundId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryRoundDataRequest = {
  encode(message: QueryRoundDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (!message.roundId.isZero()) {
      writer.uint32(16).uint64(message.roundId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoundDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoundDataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.roundId = (reader.uint64() as Long);
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRoundDataRequest>): QueryRoundDataRequest {
    const message = createBaseQueryRoundDataRequest();
    message.feedId = object.feedId ?? "";
    message.roundId = object.roundId !== undefined && object.roundId !== null ? Long.fromValue(object.roundId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRoundDataResponse(): QueryRoundDataResponse {
  return {
    roundData: [],
    pagination: undefined
  };
}

export const QueryRoundDataResponse = {
  encode(message: QueryRoundDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roundData) {
      RoundData.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRoundDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoundDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.roundData.push(RoundData.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryRoundDataResponse>): QueryRoundDataResponse {
    const message = createBaseQueryRoundDataResponse();
    message.roundData = object.roundData?.map(e => RoundData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryLatestRoundDataRequest(): QueryLatestRoundDataRequest {
  return {
    feedId: ""
  };
}

export const QueryLatestRoundDataRequest = {
  encode(message: QueryLatestRoundDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestRoundDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundDataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestRoundDataRequest>): QueryLatestRoundDataRequest {
    const message = createBaseQueryLatestRoundDataRequest();
    message.feedId = object.feedId ?? "";
    return message;
  }

};

function createBaseQueryLatestRoundDataResponse(): QueryLatestRoundDataResponse {
  return {
    roundData: []
  };
}

export const QueryLatestRoundDataResponse = {
  encode(message: QueryLatestRoundDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roundData) {
      RoundData.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLatestRoundDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.roundData.push(RoundData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryLatestRoundDataResponse>): QueryLatestRoundDataResponse {
    const message = createBaseQueryLatestRoundDataResponse();
    message.roundData = object.roundData?.map(e => RoundData.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRoundData(): RoundData {
  return {
    feedId: "",
    feedData: undefined
  };
}

export const RoundData = {
  encode(message: RoundData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }

    if (message.feedData !== undefined) {
      OCRAbiEncoded.encode(message.feedData, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoundData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoundData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;

        case 2:
          message.feedData = OCRAbiEncoded.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RoundData>): RoundData {
    const message = createBaseRoundData();
    message.feedId = object.feedId ?? "";
    message.feedData = object.feedData !== undefined && object.feedData !== null ? OCRAbiEncoded.fromPartial(object.feedData) : undefined;
    return message;
  }

};

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    accountAddress: new Uint8Array()
  };
}

export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress.length !== 0) {
      writer.uint32(10).bytes(message.accountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.accountAddress = object.accountAddress ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: undefined
  };
}

export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      MsgAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = MsgAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? MsgAccount.fromPartial(object.account) : undefined;
    return message;
  }

};

function createBaseQueryFeedRewardAvailStrategiesRequest(): QueryFeedRewardAvailStrategiesRequest {
  return {};
}

export const QueryFeedRewardAvailStrategiesRequest = {
  encode(_: QueryFeedRewardAvailStrategiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedRewardAvailStrategiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedRewardAvailStrategiesRequest();

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

  fromPartial(_: DeepPartial<QueryFeedRewardAvailStrategiesRequest>): QueryFeedRewardAvailStrategiesRequest {
    const message = createBaseQueryFeedRewardAvailStrategiesRequest();
    return message;
  }

};

function createBaseQueryFeedRewardAvailStrategiesResponse(): QueryFeedRewardAvailStrategiesResponse {
  return {
    availStrategies: []
  };
}

export const QueryFeedRewardAvailStrategiesResponse = {
  encode(message: QueryFeedRewardAvailStrategiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.availStrategies) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeedRewardAvailStrategiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedRewardAvailStrategiesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.availStrategies.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryFeedRewardAvailStrategiesResponse>): QueryFeedRewardAvailStrategiesResponse {
    const message = createBaseQueryFeedRewardAvailStrategiesResponse();
    message.availStrategies = object.availStrategies?.map(e => e) || [];
    return message;
  }

};
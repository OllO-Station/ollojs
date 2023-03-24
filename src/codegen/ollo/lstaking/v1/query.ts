import { Params, ParamsSDKType } from "./params";
import { LiquidValidatorState, LiquidValidatorStateSDKType } from "./validator";
import { VotingPower, VotingPowerSDKType } from "./voting";
import { NetAmountState, NetAmountStateSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryValidatorsRequest is the request type for the Query/Validators RPC method. */

export interface QueryValidatorsRequest {}
/** QueryValidatorsRequest is the request type for the Query/Validators RPC method. */

export interface QueryValidatorsRequestSDKType {}
/** QueryValidatorsResponse is the response type for the Query/Validators RPC method. */

export interface QueryValidatorsResponse {
  validators: LiquidValidatorState[];
}
/** QueryValidatorsResponse is the response type for the Query/Validators RPC method. */

export interface QueryValidatorsResponseSDKType {
  validators: LiquidValidatorStateSDKType[];
}
/** QueryVotingPowerRequest is the request type for the Query/VotingPower RPC method. */

export interface QueryVotingPowerRequest {
  voter: string;
}
/** QueryVotingPowerRequest is the request type for the Query/VotingPower RPC method. */

export interface QueryVotingPowerRequestSDKType {
  voter: string;
}
/** QueryVotingPowerResponse is the response type for the Query/VotingPower RPC method. */

export interface QueryVotingPowerResponse {
  votingPower?: VotingPower;
}
/** QueryVotingPowerResponse is the response type for the Query/VotingPower RPC method. */

export interface QueryVotingPowerResponseSDKType {
  voting_power?: VotingPowerSDKType;
}
/** QueryStateRequest is the request type for the Query/State RPC method. */

export interface QueryStateRequest {}
/** QueryStateRequest is the request type for the Query/State RPC method. */

export interface QueryStateRequestSDKType {}
/** QueryStateResponse is the response type for the Query/State RPC method. */

export interface QueryStateResponse {
  state?: NetAmountState;
}
/** QueryStateResponse is the response type for the Query/State RPC method. */

export interface QueryStateResponseSDKType {
  state?: NetAmountStateSDKType;
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

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {};
}

export const QueryValidatorsRequest = {
  encode(_: QueryValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();

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

  fromPartial(_: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    return message;
  }

};

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: []
  };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      LiquidValidatorState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(LiquidValidatorState.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => LiquidValidatorState.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryVotingPowerRequest(): QueryVotingPowerRequest {
  return {
    voter: ""
  };
}

export const QueryVotingPowerRequest = {
  encode(message: QueryVotingPowerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotingPowerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingPowerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVotingPowerRequest>): QueryVotingPowerRequest {
    const message = createBaseQueryVotingPowerRequest();
    message.voter = object.voter ?? "";
    return message;
  }

};

function createBaseQueryVotingPowerResponse(): QueryVotingPowerResponse {
  return {
    votingPower: undefined
  };
}

export const QueryVotingPowerResponse = {
  encode(message: QueryVotingPowerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingPower !== undefined) {
      VotingPower.encode(message.votingPower, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotingPowerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotingPowerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingPower = VotingPower.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVotingPowerResponse>): QueryVotingPowerResponse {
    const message = createBaseQueryVotingPowerResponse();
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? VotingPower.fromPartial(object.votingPower) : undefined;
    return message;
  }

};

function createBaseQueryStateRequest(): QueryStateRequest {
  return {};
}

export const QueryStateRequest = {
  encode(_: QueryStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateRequest();

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

  fromPartial(_: DeepPartial<QueryStateRequest>): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    return message;
  }

};

function createBaseQueryStateResponse(): QueryStateResponse {
  return {
    state: undefined
  };
}

export const QueryStateResponse = {
  encode(message: QueryStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      NetAmountState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.state = NetAmountState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryStateResponse>): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    message.state = object.state !== undefined && object.state !== null ? NetAmountState.fromPartial(object.state) : undefined;
    return message;
  }

};
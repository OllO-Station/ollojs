import { Params, ParamsSDKType } from "./params";
import { InterchainQuery, InterchainQuerySDKType } from "./icq";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
  hostPort: string;
  params?: Params;
  queries: InterchainQuery[];
}
export interface GenesisStateSDKType {
  host_port: string;
  params?: ParamsSDKType;
  queries: InterchainQuerySDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    hostPort: "",
    params: undefined,
    queries: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostPort !== "") {
      writer.uint32(10).string(message.hostPort);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.queries) {
      InterchainQuery.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostPort = reader.string();
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 3:
          message.queries.push(InterchainQuery.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.hostPort = object.hostPort ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.queries = object.queries?.map(e => InterchainQuery.fromPartial(e)) || [];
    return message;
  }

};
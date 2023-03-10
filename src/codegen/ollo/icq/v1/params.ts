import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Params {
  hostEnabled: boolean;
  allowQueries: string[];
}
export interface ParamsSDKType {
  host_enabled: boolean;
  allow_queries: string[];
}

function createBaseParams(): Params {
  return {
    hostEnabled: false,
    allowQueries: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }

    for (const v of message.allowQueries) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hostEnabled = reader.bool();
          break;

        case 2:
          message.allowQueries.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.hostEnabled = object.hostEnabled ?? false;
    message.allowQueries = object.allowQueries?.map(e => e) || [];
    return message;
  }

};
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
export interface Feed {
  owner: string;
  data: string;
  name: string;
  updatedAt?: Date;
}
export interface FeedSDKType {
  owner: string;
  data: string;
  name: string;
  updated_at?: Date;
}

function createBaseFeed(): Feed {
  return {
    owner: "",
    data: "",
    name: "",
    updatedAt: undefined
  };
}

export const Feed = {
  encode(message: Feed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.data = reader.string();
          break;

        case 3:
          message.name = reader.string();
          break;

        case 4:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Feed>): Feed {
    const message = createBaseFeed();
    message.owner = object.owner ?? "";
    message.data = object.data ?? "";
    message.name = object.name ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  }

};
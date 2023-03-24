import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventCreateValidator {
  id: string;
}
export interface EventCreateValidatorSDKType {
  id: string;
}
export interface EventSlashValidator {
  id: string;
}
export interface EventSlashValidatorSDKType {
  id: string;
}

function createBaseEventCreateValidator(): EventCreateValidator {
  return {
    id: ""
  };
}

export const EventCreateValidator = {
  encode(message: EventCreateValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateValidator>): EventCreateValidator {
    const message = createBaseEventCreateValidator();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseEventSlashValidator(): EventSlashValidator {
  return {
    id: ""
  };
}

export const EventSlashValidator = {
  encode(message: EventSlashValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSlashValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlashValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSlashValidator>): EventSlashValidator {
    const message = createBaseEventSlashValidator();
    message.id = object.id ?? "";
    return message;
  }

};
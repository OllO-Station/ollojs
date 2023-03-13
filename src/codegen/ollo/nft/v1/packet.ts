import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface NftPacketData {
  classId: string;
  nftIds: string[];
  sender: string;
  receiver: string;
}
export interface NftPacketDataSDKType {
  class_id: string;
  nft_ids: string[];
  sender: string;
  receiver: string;
}
export interface NftClassTrace {
  path: string;
  baseClassId: string;
}
export interface NftClassTraceSDKType {
  path: string;
  base_class_id: string;
}

function createBaseNftPacketData(): NftPacketData {
  return {
    classId: "",
    nftIds: [],
    sender: "",
    receiver: ""
  };
}

export const NftPacketData = {
  encode(message: NftPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    for (const v of message.nftIds) {
      writer.uint32(18).string(v!);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;

        case 2:
          message.nftIds.push(reader.string());
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NftPacketData>): NftPacketData {
    const message = createBaseNftPacketData();
    message.classId = object.classId ?? "";
    message.nftIds = object.nftIds?.map(e => e) || [];
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }

};

function createBaseNftClassTrace(): NftClassTrace {
  return {
    path: "",
    baseClassId: ""
  };
}

export const NftClassTrace = {
  encode(message: NftClassTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }

    if (message.baseClassId !== "") {
      writer.uint32(18).string(message.baseClassId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftClassTrace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftClassTrace();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        case 2:
          message.baseClassId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NftClassTrace>): NftClassTrace {
    const message = createBaseNftClassTrace();
    message.path = object.path ?? "";
    message.baseClassId = object.baseClassId ?? "";
    return message;
  }

};
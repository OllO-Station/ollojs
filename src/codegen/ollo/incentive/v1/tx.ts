import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface MsgApplyMarketMaker {
  address: string;
  pairIds: Long[];
}
export interface MsgApplyMarketMakerSDKType {
  address: string;
  pair_ids: Long[];
}
export interface MsgApplyMarketMakerResponse {}
export interface MsgApplyMarketMakerResponseSDKType {}
export interface MsgClaimIncentive {
  address: string;
}
export interface MsgClaimIncentiveSDKType {
  address: string;
}
export interface MsgClaimIncentiveResponse {}
export interface MsgClaimIncentiveResponseSDKType {}

function createBaseMsgApplyMarketMaker(): MsgApplyMarketMaker {
  return {
    address: "",
    pairIds: []
  };
}

export const MsgApplyMarketMaker = {
  encode(message: MsgApplyMarketMaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    writer.uint32(18).fork();

    for (const v of message.pairIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApplyMarketMaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApplyMarketMaker();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.pairIds.push((reader.uint64() as Long));
            }
          } else {
            message.pairIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgApplyMarketMaker>): MsgApplyMarketMaker {
    const message = createBaseMsgApplyMarketMaker();
    message.address = object.address ?? "";
    message.pairIds = object.pairIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgApplyMarketMakerResponse(): MsgApplyMarketMakerResponse {
  return {};
}

export const MsgApplyMarketMakerResponse = {
  encode(_: MsgApplyMarketMakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApplyMarketMakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApplyMarketMakerResponse();

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

  fromPartial(_: DeepPartial<MsgApplyMarketMakerResponse>): MsgApplyMarketMakerResponse {
    const message = createBaseMsgApplyMarketMakerResponse();
    return message;
  }

};

function createBaseMsgClaimIncentive(): MsgClaimIncentive {
  return {
    address: ""
  };
}

export const MsgClaimIncentive = {
  encode(message: MsgClaimIncentive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimIncentive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimIncentive();

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

  fromPartial(object: DeepPartial<MsgClaimIncentive>): MsgClaimIncentive {
    const message = createBaseMsgClaimIncentive();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgClaimIncentiveResponse(): MsgClaimIncentiveResponse {
  return {};
}

export const MsgClaimIncentiveResponse = {
  encode(_: MsgClaimIncentiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimIncentiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimIncentiveResponse();

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

  fromPartial(_: DeepPartial<MsgClaimIncentiveResponse>): MsgClaimIncentiveResponse {
    const message = createBaseMsgClaimIncentiveResponse();
    return message;
  }

};
import { Airdrop, AirdropSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  airdrops: Airdrop[];
  claimRecords: ClaimRecord[];
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  airdrops: AirdropSDKType[];
  claim_records: ClaimRecordSDKType[];
}

function createBaseParams(): Params {
  return {
    airdrops: [],
    claimRecords: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.airdrops) {
      Airdrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.airdrops.push(Airdrop.decode(reader, reader.uint32()));
          break;

        case 2:
          message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
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
    message.airdrops = object.airdrops?.map(e => Airdrop.fromPartial(e)) || [];
    message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
    return message;
  }

};
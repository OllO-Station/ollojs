import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Distribution {
  staking: string;
  communityPool: string;
}
export interface DistributionSDKType {
  staking: string;
  community_pool: string;
}

function createBaseDistribution(): Distribution {
  return {
    staking: "",
    communityPool: ""
  };
}

export const Distribution = {
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }

    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;

        case 2:
          message.communityPool = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.staking = object.staking ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  }

};
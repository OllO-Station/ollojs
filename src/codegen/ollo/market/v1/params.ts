import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Distribution, DistributionSDKType } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  commission: string;
  bidCloseDuration?: Duration;
  distribution?: Distribution;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  commission: string;
  bid_close_duration?: DurationSDKType;
  distribution?: DistributionSDKType;
}

function createBaseParams(): Params {
  return {
    commission: "",
    bidCloseDuration: undefined,
    distribution: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }

    if (message.bidCloseDuration !== undefined) {
      Duration.encode(message.bidCloseDuration, writer.uint32(18).fork()).ldelim();
    }

    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(26).fork()).ldelim();
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
          message.commission = reader.string();
          break;

        case 2:
          message.bidCloseDuration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.distribution = Distribution.decode(reader, reader.uint32());
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
    message.commission = object.commission ?? "";
    message.bidCloseDuration = object.bidCloseDuration !== undefined && object.bidCloseDuration !== null ? Duration.fromPartial(object.bidCloseDuration) : undefined;
    message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
    return message;
  }

};
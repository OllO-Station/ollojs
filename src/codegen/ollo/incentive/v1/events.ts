import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventNewReward {
  delegatorAddress: string;
  validatorAddress: string;
  reward?: DecCoin;
}
export interface EventNewRewardSDKType {
  delegator_address: string;
  validator_address: string;
  reward?: DecCoinSDKType;
}

function createBaseEventNewReward(): EventNewReward {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    reward: undefined
  };
}

export const EventNewReward = {
  encode(message: EventNewReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.reward !== undefined) {
      DecCoin.encode(message.reward, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNewReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNewReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.reward = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventNewReward>): EventNewReward {
    const message = createBaseEventNewReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward !== undefined && object.reward !== null ? DecCoin.fromPartial(object.reward) : undefined;
    return message;
  }

};
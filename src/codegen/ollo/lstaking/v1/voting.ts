import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** voting power of a validator, incl. staking and lstaking */

export interface VotingPower {
  /** voter address in bech32 */
  voter: string;
  /** voting power from default staking module */

  stakingVotingPower: string;
  /** voting power from lstaking module */

  lstakingVotingPower: string;
  /** total validator voting power */

  totalVotingPower: string;
}
/** voting power of a validator, incl. staking and lstaking */

export interface VotingPowerSDKType {
  voter: string;
  staking_voting_power: string;
  lstaking_voting_power: string;
  total_voting_power: string;
}

function createBaseVotingPower(): VotingPower {
  return {
    voter: "",
    stakingVotingPower: "",
    lstakingVotingPower: "",
    totalVotingPower: ""
  };
}

export const VotingPower = {
  encode(message: VotingPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }

    if (message.stakingVotingPower !== "") {
      writer.uint32(18).string(message.stakingVotingPower);
    }

    if (message.lstakingVotingPower !== "") {
      writer.uint32(26).string(message.lstakingVotingPower);
    }

    if (message.totalVotingPower !== "") {
      writer.uint32(34).string(message.totalVotingPower);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingPower();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;

        case 2:
          message.stakingVotingPower = reader.string();
          break;

        case 3:
          message.lstakingVotingPower = reader.string();
          break;

        case 4:
          message.totalVotingPower = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VotingPower>): VotingPower {
    const message = createBaseVotingPower();
    message.voter = object.voter ?? "";
    message.stakingVotingPower = object.stakingVotingPower ?? "";
    message.lstakingVotingPower = object.lstakingVotingPower ?? "";
    message.totalVotingPower = object.totalVotingPower ?? "";
    return message;
  }

};
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ClaimRecord, ClaimRecordSDKType, InitialClaim, InitialClaimSDKType } from "./claim";
import { Goal, GoalSDKType } from "./goal";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the claim module's genesis state. */

export interface GenesisState {
  airdropSupply?: Coin;
  claimRecords: ClaimRecord[];
  goals: Goal[];
  initialClaim?: InitialClaim;
  params?: Params;
}
/** GenesisState defines the claim module's genesis state. */

export interface GenesisStateSDKType {
  airdrop_supply?: CoinSDKType;
  claim_records: ClaimRecordSDKType[];
  goals: GoalSDKType[];
  initial_claim?: InitialClaimSDKType;
  params?: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    airdropSupply: undefined,
    claimRecords: [],
    goals: [],
    initialClaim: undefined,
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropSupply !== undefined) {
      Coin.encode(message.airdropSupply, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.goals) {
      Goal.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.initialClaim !== undefined) {
      InitialClaim.encode(message.initialClaim, writer.uint32(34).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.airdropSupply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
          break;

        case 3:
          message.goals.push(Goal.decode(reader, reader.uint32()));
          break;

        case 4:
          message.initialClaim = InitialClaim.decode(reader, reader.uint32());
          break;

        case 5:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.airdropSupply = object.airdropSupply !== undefined && object.airdropSupply !== null ? Coin.fromPartial(object.airdropSupply) : undefined;
    message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
    message.goals = object.goals?.map(e => Goal.fromPartial(e)) || [];
    message.initialClaim = object.initialClaim !== undefined && object.initialClaim !== null ? InitialClaim.fromPartial(object.initialClaim) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};
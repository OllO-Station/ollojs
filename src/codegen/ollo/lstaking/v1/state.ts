import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** data about supply and circulation of liquid token for calculation */

export interface NetAmountState {
  /** mint rate of liquid token, or total supply / net amount */
  mintRate: string;
  /** total supply of liquid token */

  totalSupply: string;
  /** net amount is sum of reserve, unbonding, rewards, and tokens */

  netAmount: string;
  /** total delegation shares of all validators */

  totalDelegationShares: string;
  /** total worth of all delegation shares of all validators */

  totalLiquidTokens: string;
  /** total remaining rewards balance by all validators */

  rewardsBalance: string;
  /** total unbonding balance by all validators */

  unbondingBalance: string;
  /** total liquid tokens in reserve account */

  reserveAccountBalance: string;
}
/** data about supply and circulation of liquid token for calculation */

export interface NetAmountStateSDKType {
  mint_rate: string;
  total_supply: string;
  net_amount: string;
  total_delegation_shares: string;
  total_liquid_tokens: string;
  rewards_balance: string;
  unbonding_balance: string;
  reserve_account_balance: string;
}

function createBaseNetAmountState(): NetAmountState {
  return {
    mintRate: "",
    totalSupply: "",
    netAmount: "",
    totalDelegationShares: "",
    totalLiquidTokens: "",
    rewardsBalance: "",
    unbondingBalance: "",
    reserveAccountBalance: ""
  };
}

export const NetAmountState = {
  encode(message: NetAmountState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRate !== "") {
      writer.uint32(10).string(message.mintRate);
    }

    if (message.totalSupply !== "") {
      writer.uint32(18).string(message.totalSupply);
    }

    if (message.netAmount !== "") {
      writer.uint32(26).string(message.netAmount);
    }

    if (message.totalDelegationShares !== "") {
      writer.uint32(34).string(message.totalDelegationShares);
    }

    if (message.totalLiquidTokens !== "") {
      writer.uint32(42).string(message.totalLiquidTokens);
    }

    if (message.rewardsBalance !== "") {
      writer.uint32(50).string(message.rewardsBalance);
    }

    if (message.unbondingBalance !== "") {
      writer.uint32(58).string(message.unbondingBalance);
    }

    if (message.reserveAccountBalance !== "") {
      writer.uint32(66).string(message.reserveAccountBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetAmountState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAmountState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintRate = reader.string();
          break;

        case 2:
          message.totalSupply = reader.string();
          break;

        case 3:
          message.netAmount = reader.string();
          break;

        case 4:
          message.totalDelegationShares = reader.string();
          break;

        case 5:
          message.totalLiquidTokens = reader.string();
          break;

        case 6:
          message.rewardsBalance = reader.string();
          break;

        case 7:
          message.unbondingBalance = reader.string();
          break;

        case 8:
          message.reserveAccountBalance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NetAmountState>): NetAmountState {
    const message = createBaseNetAmountState();
    message.mintRate = object.mintRate ?? "";
    message.totalSupply = object.totalSupply ?? "";
    message.netAmount = object.netAmount ?? "";
    message.totalDelegationShares = object.totalDelegationShares ?? "";
    message.totalLiquidTokens = object.totalLiquidTokens ?? "";
    message.rewardsBalance = object.rewardsBalance ?? "";
    message.unbondingBalance = object.unbondingBalance ?? "";
    message.reserveAccountBalance = object.reserveAccountBalance ?? "";
    return message;
  }

};
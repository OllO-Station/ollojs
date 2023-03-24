import { WhitelistedValidator, WhitelistedValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the liquid staking module. */

export interface Params {
  /** The denom of token received after liquid staking */
  liquidBondDenom: string;
  /** The list of whitelisted validators */

  whitelistedValidators: WhitelistedValidator[];
  /** The unstake fee rate */

  unstakeFeeRate: string;
  /** The minimum liquid staking amount */

  minLiquidStakeAmount: string;
}
/** Params defines the parameters for the liquid staking module. */

export interface ParamsSDKType {
  liquid_bond_denom: string;
  whitelisted_validators: WhitelistedValidatorSDKType[];
  unstake_fee_rate: string;
  min_liquid_stake_amount: string;
}

function createBaseParams(): Params {
  return {
    liquidBondDenom: "",
    whitelistedValidators: [],
    unstakeFeeRate: "",
    minLiquidStakeAmount: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidBondDenom !== "") {
      writer.uint32(10).string(message.liquidBondDenom);
    }

    for (const v of message.whitelistedValidators) {
      WhitelistedValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.unstakeFeeRate !== "") {
      writer.uint32(26).string(message.unstakeFeeRate);
    }

    if (message.minLiquidStakeAmount !== "") {
      writer.uint32(34).string(message.minLiquidStakeAmount);
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
          message.liquidBondDenom = reader.string();
          break;

        case 2:
          message.whitelistedValidators.push(WhitelistedValidator.decode(reader, reader.uint32()));
          break;

        case 3:
          message.unstakeFeeRate = reader.string();
          break;

        case 4:
          message.minLiquidStakeAmount = reader.string();
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
    message.liquidBondDenom = object.liquidBondDenom ?? "";
    message.whitelistedValidators = object.whitelistedValidators?.map(e => WhitelistedValidator.fromPartial(e)) || [];
    message.unstakeFeeRate = object.unstakeFeeRate ?? "";
    message.minLiquidStakeAmount = object.minLiquidStakeAmount ?? "";
    return message;
  }

};
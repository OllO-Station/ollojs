import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the set of params for the farming module. */

export interface Params {
  /**
   * private_plan_creation_fee specifies the fee for plan creation
   * this fee prevents from spamming and is collected in the community pool
   */
  privatePlanCreationFee: Coin[];
  /**
   * next_epoch_days is the epoch length in number of days
   * it updates internal state called CurrentEpochDays that is used to process
   * staking and reward distribution in end blocker
   */

  nextEpochDays: number;
  /**
   * farming_fee_collector is the module account address to collect fees within
   * the farming module
   */

  farmingFeeCollector: string;
  /** delayed_staking_gas_fee is used to impose gas fee for the delayed staking */

  delayedStakingGasFee: Long;
  /** max_num_private_plans is the maximum number of active private plans */

  maxNumPrivatePlans: number;
}
/** Params defines the set of params for the farming module. */

export interface ParamsSDKType {
  private_plan_creation_fee: CoinSDKType[];
  next_epoch_days: number;
  farming_fee_collector: string;
  delayed_staking_gas_fee: Long;
  max_num_private_plans: number;
}

function createBaseParams(): Params {
  return {
    privatePlanCreationFee: [],
    nextEpochDays: 0,
    farmingFeeCollector: "",
    delayedStakingGasFee: Long.UZERO,
    maxNumPrivatePlans: 0
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.privatePlanCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextEpochDays !== 0) {
      writer.uint32(16).uint32(message.nextEpochDays);
    }

    if (message.farmingFeeCollector !== "") {
      writer.uint32(26).string(message.farmingFeeCollector);
    }

    if (!message.delayedStakingGasFee.isZero()) {
      writer.uint32(32).uint64(message.delayedStakingGasFee);
    }

    if (message.maxNumPrivatePlans !== 0) {
      writer.uint32(40).uint32(message.maxNumPrivatePlans);
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
          message.privatePlanCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextEpochDays = reader.uint32();
          break;

        case 3:
          message.farmingFeeCollector = reader.string();
          break;

        case 4:
          message.delayedStakingGasFee = (reader.uint64() as Long);
          break;

        case 5:
          message.maxNumPrivatePlans = reader.uint32();
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
    message.privatePlanCreationFee = object.privatePlanCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.nextEpochDays = object.nextEpochDays ?? 0;
    message.farmingFeeCollector = object.farmingFeeCollector ?? "";
    message.delayedStakingGasFee = object.delayedStakingGasFee !== undefined && object.delayedStakingGasFee !== null ? Long.fromValue(object.delayedStakingGasFee) : Long.UZERO;
    message.maxNumPrivatePlans = object.maxNumPrivatePlans ?? 0;
    return message;
  }

};
import { DistributionProportions, DistributionProportionsSDKType, WeightedAddress, WeightedAddressSDKType } from "./mint";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** maximum annual change in inflation rate */

  inflationRateChange: string;
  /** maximum inflation rate */

  inflationMax: string;
  /** minimum inflation rate */

  inflationMin: string;
  /** goal of percent bonded coins */

  goalBonded: string;
  /** expected blocks per year */

  blocksPerYear: Long;
  /** distribution_proportions defines the proportion of the minted denom */

  distributionProportions?: DistributionProportions;
  /** list of funded addresses */

  fundedAddresses: WeightedAddress[];
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  blocks_per_year: Long;
  distribution_proportions?: DistributionProportionsSDKType;
  funded_addresses: WeightedAddressSDKType[];
}

function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: Long.UZERO,
    distributionProportions: undefined,
    fundedAddresses: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(message.inflationRateChange);
    }

    if (message.inflationMax !== "") {
      writer.uint32(26).string(message.inflationMax);
    }

    if (message.inflationMin !== "") {
      writer.uint32(34).string(message.inflationMin);
    }

    if (message.goalBonded !== "") {
      writer.uint32(42).string(message.goalBonded);
    }

    if (!message.blocksPerYear.isZero()) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }

    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.fundedAddresses) {
      WeightedAddress.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.mintDenom = reader.string();
          break;

        case 2:
          message.inflationRateChange = reader.string();
          break;

        case 3:
          message.inflationMax = reader.string();
          break;

        case 4:
          message.inflationMin = reader.string();
          break;

        case 5:
          message.goalBonded = reader.string();
          break;

        case 6:
          message.blocksPerYear = (reader.uint64() as Long);
          break;

        case 7:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;

        case 8:
          message.fundedAddresses.push(WeightedAddress.decode(reader, reader.uint32()));
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
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.fundedAddresses = object.fundedAddresses?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }

};
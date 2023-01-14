import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Minter represents the minting state. */

export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */

  annualProvisions: string;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  inflation: string;
  annual_provisions: string;
}
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressSDKType {
  address: string;
  weight: string;
}
export interface DistributionProportions {
  /**
   * staking defines the proportion of the minted minted_denom that is to be
   * allocated as staking rewards.
   */
  staking: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is
   * to be allocated to the community pool.
   */

  communityPool: string;
  /**
   * usage_incentive defines the proportion of the minted minted_denom that is
   * to be allocated as usage incentive.
   */

  poolIncentives: string;
  /**
   * grants_program defines the proportion of the minted minted_denom that is
   * to be allocated as grants.
   * NOTE: foundation?
   */

  grantsProgram: string;
  /**
   * developer_rewards defines the proportion of the minted minted_denom that is
   * to be allocated to developer rewards address.
   */

  developerRewards: string;
  /**
   * funded_addresses defines the proportion of the minted minted_denom that is
   * to the set of funded addresses.
   */

  fundedAddresses: string;
}
export interface DistributionProportionsSDKType {
  staking: string;
  community_pool: string;
  pool_incentives: string;
  grants_program: string;
  developer_rewards: string;
  funded_addresses: string;
}

function createBaseMinter(): Minter {
  return {
    inflation: "",
    annualProvisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }

    if (message.annualProvisions !== "") {
      writer.uint32(18).string(message.annualProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;

        case 2:
          message.annualProvisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  }

};

function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}

export const WeightedAddress = {
  encode(message: WeightedAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    communityPool: "",
    poolIncentives: "",
    grantsProgram: "",
    developerRewards: "",
    fundedAddresses: ""
  };
}

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }

    if (message.communityPool !== "") {
      writer.uint32(18).string(message.communityPool);
    }

    if (message.poolIncentives !== "") {
      writer.uint32(26).string(message.poolIncentives);
    }

    if (message.grantsProgram !== "") {
      writer.uint32(34).string(message.grantsProgram);
    }

    if (message.developerRewards !== "") {
      writer.uint32(42).string(message.developerRewards);
    }

    if (message.fundedAddresses !== "") {
      writer.uint32(50).string(message.fundedAddresses);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staking = reader.string();
          break;

        case 2:
          message.communityPool = reader.string();
          break;

        case 3:
          message.poolIncentives = reader.string();
          break;

        case 4:
          message.grantsProgram = reader.string();
          break;

        case 5:
          message.developerRewards = reader.string();
          break;

        case 6:
          message.fundedAddresses = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.communityPool = object.communityPool ?? "";
    message.poolIncentives = object.poolIncentives ?? "";
    message.grantsProgram = object.grantsProgram ?? "";
    message.developerRewards = object.developerRewards ?? "";
    message.fundedAddresses = object.fundedAddresses ?? "";
    return message;
  }

};
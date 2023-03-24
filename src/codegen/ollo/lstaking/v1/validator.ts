import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** ValidatorStatus defines the status of a validator. */

export enum ValidatorStatus {
  /** VALIDATOR_STATUS_UNSPECIFIED - VALIDATOR_STATUS_UNSPECIFIED defines an invalid validator status. */
  VALIDATOR_STATUS_UNSPECIFIED = 0,

  /** VALIDATOR_STATUS_ACTIVE - VALIDATOR_STATUS_ACTIVE defines an active validator. */
  VALIDATOR_STATUS_ACTIVE = 1,

  /** VALIDATOR_STATUS_INACTIVE - VALIDATOR_STATUS_INACTIVE defines an inactive validator. */
  VALIDATOR_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const ValidatorStatusSDKType = ValidatorStatus;
export function validatorStatusFromJSON(object: any): ValidatorStatus {
  switch (object) {
    case 0:
    case "VALIDATOR_STATUS_UNSPECIFIED":
      return ValidatorStatus.VALIDATOR_STATUS_UNSPECIFIED;

    case 1:
    case "VALIDATOR_STATUS_ACTIVE":
      return ValidatorStatus.VALIDATOR_STATUS_ACTIVE;

    case 2:
    case "VALIDATOR_STATUS_INACTIVE":
      return ValidatorStatus.VALIDATOR_STATUS_INACTIVE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorStatus.UNRECOGNIZED;
  }
}
export function validatorStatusToJSON(object: ValidatorStatus): string {
  switch (object) {
    case ValidatorStatus.VALIDATOR_STATUS_UNSPECIFIED:
      return "VALIDATOR_STATUS_UNSPECIFIED";

    case ValidatorStatus.VALIDATOR_STATUS_ACTIVE:
      return "VALIDATOR_STATUS_ACTIVE";

    case ValidatorStatus.VALIDATOR_STATUS_INACTIVE:
      return "VALIDATOR_STATUS_INACTIVE";

    case ValidatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LiquidValidator defines a liquid validator */

export interface LiquidValidator {
  /** operator_address is the address of the validator. */
  operatorAddress: string;
}
/** LiquidValidator defines a liquid validator */

export interface LiquidValidatorSDKType {
  operator_address: string;
}
/** WhitelistValidator defines a whitelisted validator */

export interface WhitelistedValidator {
  /** operator_address is the address of the validator. */
  operatorAddress: string;
  /** target weight for liquid staking */

  targetWeight: string;
}
/** WhitelistValidator defines a whitelisted validator */

export interface WhitelistedValidatorSDKType {
  operator_address: string;
  target_weight: string;
}
/** liquid validator with added state info */

export interface LiquidValidatorState {
  /** operator_address is the address of the validator. */
  operatorAddress: string;
  /** target weight for liquid staking */

  weight: string;
  /** status of the validator */

  status: ValidatorStatus;
  /** delegation shares of the validator */

  delegationShares: string;
  /** liquid tokens defines the worth of delegation shares */

  liquidTokens: string;
}
/** liquid validator with added state info */

export interface LiquidValidatorStateSDKType {
  operator_address: string;
  weight: string;
  status: ValidatorStatus;
  delegation_shares: string;
  liquid_tokens: string;
}

function createBaseLiquidValidator(): LiquidValidator {
  return {
    operatorAddress: ""
  };
}

export const LiquidValidator = {
  encode(message: LiquidValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LiquidValidator>): LiquidValidator {
    const message = createBaseLiquidValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  }

};

function createBaseWhitelistedValidator(): WhitelistedValidator {
  return {
    operatorAddress: "",
    targetWeight: ""
  };
}

export const WhitelistedValidator = {
  encode(message: WhitelistedValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.targetWeight !== "") {
      writer.uint32(18).string(message.targetWeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistedValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.targetWeight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WhitelistedValidator>): WhitelistedValidator {
    const message = createBaseWhitelistedValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.targetWeight = object.targetWeight ?? "";
    return message;
  }

};

function createBaseLiquidValidatorState(): LiquidValidatorState {
  return {
    operatorAddress: "",
    weight: "",
    status: 0,
    delegationShares: "",
    liquidTokens: ""
  };
}

export const LiquidValidatorState = {
  encode(message: LiquidValidatorState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    if (message.delegationShares !== "") {
      writer.uint32(34).string(message.delegationShares);
    }

    if (message.liquidTokens !== "") {
      writer.uint32(42).string(message.liquidTokens);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidValidatorState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidValidatorState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        case 4:
          message.delegationShares = reader.string();
          break;

        case 5:
          message.liquidTokens = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LiquidValidatorState>): LiquidValidatorState {
    const message = createBaseLiquidValidatorState();
    message.operatorAddress = object.operatorAddress ?? "";
    message.weight = object.weight ?? "";
    message.status = object.status ?? 0;
    message.delegationShares = object.delegationShares ?? "";
    message.liquidTokens = object.liquidTokens ?? "";
    return message;
  }

};
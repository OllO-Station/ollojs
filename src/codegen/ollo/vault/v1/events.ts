import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventCreateVault {
  sender: string;
  collateralType: string;
}
export interface EventCreateVaultSDKType {
  sender: string;
  collateral_type: string;
}
export interface EventCloseVault {
  owner: string;
  collateralType: string;
}
export interface EventCloseVaultSDKType {
  owner: string;
  collateral_type: string;
}
export interface EventDepositCollateral {
  owner: string;
  collateralType: string;
  collateral?: Coin;
}
export interface EventDepositCollateralSDKType {
  owner: string;
  collateral_type: string;
  collateral?: CoinSDKType;
}
export interface EventWithdrawCollateral {
  owner: string;
  collateralType: string;
  collateral?: Coin;
}
export interface EventWithdrawCollateralSDKType {
  owner: string;
  collateral_type: string;
  collateral?: CoinSDKType;
}
export interface EventDrawDebt {
  owner: string;
  collateralType: string;
  debt?: Coin;
}
export interface EventDrawDebtSDKType {
  owner: string;
  collateral_type: string;
  debt?: CoinSDKType;
}
export interface EventRepayDebt {
  owner: string;
  collateralType: string;
  debt?: Coin;
}
export interface EventRepayDebtSDKType {
  owner: string;
  collateral_type: string;
  debt?: CoinSDKType;
}

function createBaseEventCreateVault(): EventCreateVault {
  return {
    sender: "",
    collateralType: ""
  };
}

export const EventCreateVault = {
  encode(message: EventCreateVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateVault();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreateVault>): EventCreateVault {
    const message = createBaseEventCreateVault();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  }

};

function createBaseEventCloseVault(): EventCloseVault {
  return {
    owner: "",
    collateralType: ""
  };
}

export const EventCloseVault = {
  encode(message: EventCloseVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCloseVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCloseVault();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCloseVault>): EventCloseVault {
    const message = createBaseEventCloseVault();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  }

};

function createBaseEventDepositCollateral(): EventDepositCollateral {
  return {
    owner: "",
    collateralType: "",
    collateral: undefined
  };
}

export const EventDepositCollateral = {
  encode(message: EventDepositCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositCollateral();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDepositCollateral>): EventDepositCollateral {
    const message = createBaseEventDepositCollateral();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    return message;
  }

};

function createBaseEventWithdrawCollateral(): EventWithdrawCollateral {
  return {
    owner: "",
    collateralType: "",
    collateral: undefined
  };
}

export const EventWithdrawCollateral = {
  encode(message: EventWithdrawCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawCollateral();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventWithdrawCollateral>): EventWithdrawCollateral {
    const message = createBaseEventWithdrawCollateral();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    return message;
  }

};

function createBaseEventDrawDebt(): EventDrawDebt {
  return {
    owner: "",
    collateralType: "",
    debt: undefined
  };
}

export const EventDrawDebt = {
  encode(message: EventDrawDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDrawDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDrawDebt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDrawDebt>): EventDrawDebt {
    const message = createBaseEventDrawDebt();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.debt = object.debt !== undefined && object.debt !== null ? Coin.fromPartial(object.debt) : undefined;
    return message;
  }

};

function createBaseEventRepayDebt(): EventRepayDebt {
  return {
    owner: "",
    collateralType: "",
    debt: undefined
  };
}

export const EventRepayDebt = {
  encode(message: EventRepayDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRepayDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRepayDebt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventRepayDebt>): EventRepayDebt {
    const message = createBaseEventRepayDebt();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.debt = object.debt !== undefined && object.debt !== null ? Coin.fromPartial(object.debt) : undefined;
    return message;
  }

};
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
export declare const EventCreateVault: {
    encode(message: EventCreateVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateVault;
    fromPartial(object: DeepPartial<EventCreateVault>): EventCreateVault;
};
export declare const EventCloseVault: {
    encode(message: EventCloseVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCloseVault;
    fromPartial(object: DeepPartial<EventCloseVault>): EventCloseVault;
};
export declare const EventDepositCollateral: {
    encode(message: EventDepositCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDepositCollateral;
    fromPartial(object: DeepPartial<EventDepositCollateral>): EventDepositCollateral;
};
export declare const EventWithdrawCollateral: {
    encode(message: EventWithdrawCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawCollateral;
    fromPartial(object: DeepPartial<EventWithdrawCollateral>): EventWithdrawCollateral;
};
export declare const EventDrawDebt: {
    encode(message: EventDrawDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDrawDebt;
    fromPartial(object: DeepPartial<EventDrawDebt>): EventDrawDebt;
};
export declare const EventRepayDebt: {
    encode(message: EventRepayDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRepayDebt;
    fromPartial(object: DeepPartial<EventRepayDebt>): EventRepayDebt;
};

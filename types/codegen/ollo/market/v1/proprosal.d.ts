import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ProprosalSetCommission {
    title: string;
    description: string;
    commission?: Coin;
}
export interface ProprosalSetCommissionSDKType {
    title: string;
    description: string;
    commission?: CoinSDKType;
}
export declare const ProprosalSetCommission: {
    encode(message: ProprosalSetCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProprosalSetCommission;
    fromPartial(object: DeepPartial<ProprosalSetCommission>): ProprosalSetCommission;
};

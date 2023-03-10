import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the EVM module parameters */
export interface Params {
    /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    noBaseFee: boolean;
    /**
     * base_fee_change_denominator bounds the amount the base fee can change
     * between blocks.
     */
    baseFeeChangeDenominator: number;
    /**
     * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticityMultiplier: number;
    /** enable_height defines at which block height the base fee calculation is enabled. */
    enableHeight: Long;
    /** base_fee for EIP-1559 blocks. */
    baseFee: string;
    /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
    minGasPrice: string;
    /**
     * min_gas_multiplier bounds the minimum gas used to be charged
     * to senders based on gas limit
     */
    minGasMultiplier: string;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
    no_base_fee: boolean;
    base_fee_change_denominator: number;
    elasticity_multiplier: number;
    enable_height: Long;
    base_fee: string;
    min_gas_price: string;
    min_gas_multiplier: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};

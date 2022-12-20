import { PricesCallData, PricesCallDataSDKType } from "./prices";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgPricesData {
    creator: string;
    oracleScriptId: Long;
    sourceChannel: string;
    calldata?: PricesCallData;
    askCount: Long;
    minCount: Long;
    feeLimit: Coin[];
    prepareGas: Long;
    executeGas: Long;
    clientId: string;
}
export interface MsgPricesDataSDKType {
    creator: string;
    oracle_script_id: Long;
    source_channel: string;
    calldata?: PricesCallDataSDKType;
    ask_count: Long;
    min_count: Long;
    fee_limit: CoinSDKType[];
    prepare_gas: Long;
    execute_gas: Long;
    client_id: string;
}
export interface MsgPricesDataResponse {
}
export interface MsgPricesDataResponseSDKType {
}
export declare const MsgPricesData: {
    encode(message: MsgPricesData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPricesData;
    fromPartial(object: DeepPartial<MsgPricesData>): MsgPricesData;
};
export declare const MsgPricesDataResponse: {
    encode(_: MsgPricesDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPricesDataResponse;
    fromPartial(_: DeepPartial<MsgPricesDataResponse>): MsgPricesDataResponse;
};

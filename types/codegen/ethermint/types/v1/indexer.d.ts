import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** TxResult is the value stored in eth tx indexer */
export interface TxResult {
    /** height of the blockchain */
    height: Long;
    /** tx_index of the cosmos transaction */
    txIndex: number;
    /** msg_index in a batch transaction */
    msgIndex: number;
    /**
     * eth_tx_index is the index in the list of valid eth tx in the block,
     * aka. the transaction list returned by eth_getBlock api.
     */
    ethTxIndex: number;
    /** failed is true if the eth transaction did not go succeed */
    failed: boolean;
    /**
     * gas_used by the transaction. If it exceeds the block gas limit,
     * it's set to gas limit, which is what's actually deducted by ante handler.
     */
    gasUsed: Long;
    /**
     * cumulative_gas_used specifies the cumulated amount of gas used for all
     * processed messages within the current batch transaction.
     */
    cumulativeGasUsed: Long;
}
/** TxResult is the value stored in eth tx indexer */
export interface TxResultSDKType {
    height: Long;
    tx_index: number;
    msg_index: number;
    eth_tx_index: number;
    failed: boolean;
    gas_used: Long;
    cumulative_gas_used: Long;
}
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromPartial(object: DeepPartial<TxResult>): TxResult;
};

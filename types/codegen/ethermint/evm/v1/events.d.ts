import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
    /** amount */
    amount: string;
    /** eth_hash is the Ethereum hash of the transaction */
    ethHash: string;
    /** index of the transaction in the block */
    index: string;
    /** gas_used is the amount of gas used by the transaction */
    gasUsed: string;
    /** hash is the Tendermint hash of the transaction */
    hash: string;
    /** recipient of the transaction */
    recipient: string;
    /** eth_tx_failed contains a VM error should it occur */
    ethTxFailed: string;
}
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTxSDKType {
    amount: string;
    eth_hash: string;
    index: string;
    gas_used: string;
    hash: string;
    recipient: string;
    eth_tx_failed: string;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
    /** tx_logs is an array of transaction logs */
    txLogs: string[];
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLogSDKType {
    tx_logs: string[];
}
/** EventMessage */
export interface EventMessage {
    /** module which emits the event */
    module: string;
    /** sender of the message */
    sender: string;
    /** tx_type is the type of the message */
    txType: string;
}
/** EventMessage */
export interface EventMessageSDKType {
    module: string;
    sender: string;
    tx_type: string;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloom {
    /** bloom is the bloom filter of the block */
    bloom: string;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloomSDKType {
    bloom: string;
}
export declare const EventEthereumTx: {
    encode(message: EventEthereumTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEthereumTx;
    fromPartial(object: DeepPartial<EventEthereumTx>): EventEthereumTx;
};
export declare const EventTxLog: {
    encode(message: EventTxLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTxLog;
    fromPartial(object: DeepPartial<EventTxLog>): EventTxLog;
};
export declare const EventMessage: {
    encode(message: EventMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMessage;
    fromPartial(object: DeepPartial<EventMessage>): EventMessage;
};
export declare const EventBlockBloom: {
    encode(message: EventBlockBloom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBlockBloom;
    fromPartial(object: DeepPartial<EventBlockBloom>): EventBlockBloom;
};

import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
    /**
     * evm_denom represents the token denomination used to run the EVM state
     * transitions.
     */
    evmDenom: string;
    /** enable_create toggles state transitions that use the vm.Create function */
    enableCreate: boolean;
    /** enable_call toggles state transitions that use the vm.Call function */
    enableCall: boolean;
    /** extra_eips defines the additional EIPs for the vm.Config */
    extraEips: Long[];
    /** chain_config defines the EVM chain configuration parameters */
    chainConfig?: ChainConfig;
    /**
     * allow_unprotected_txs defines if replay-protected (i.e non EIP155
     * signed) transactions can be executed on the state machine.
     */
    allowUnprotectedTxs: boolean;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
    evm_denom: string;
    enable_create: boolean;
    enable_call: boolean;
    extra_eips: Long[];
    chain_config?: ChainConfigSDKType;
    allow_unprotected_txs: boolean;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfig {
    /** homestead_block switch (nil no fork, 0 = already homestead) */
    homesteadBlock: string;
    /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
    daoForkBlock: string;
    /** dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork */
    daoForkSupport: boolean;
    /**
     * eip150_block: EIP150 implements the Gas price changes
     * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
     */
    eip150Block: string;
    /** eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed) */
    eip150Hash: string;
    /** eip155_block: EIP155Block HF block */
    eip155Block: string;
    /** eip158_block: EIP158 HF block */
    eip158Block: string;
    /** byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium) */
    byzantiumBlock: string;
    /** constantinople_block: Constantinople switch block (nil no fork, 0 = already activated) */
    constantinopleBlock: string;
    /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
    petersburgBlock: string;
    /** istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul) */
    istanbulBlock: string;
    /** muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
    muirGlacierBlock: string;
    /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
    berlinBlock: string;
    /** london_block: London switch block (nil = no fork, 0 = already on london) */
    londonBlock: string;
    /** arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
    arrowGlacierBlock: string;
    /** gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated) */
    grayGlacierBlock: string;
    /** merge_netsplit_block: Virtual fork after The Merge to use as a network splitter */
    mergeNetsplitBlock: string;
    /** shanghai_block switch block (nil = no fork, 0 = already on shanghai) */
    shanghaiBlock: string;
    /** cancun_block switch block (nil = no fork, 0 = already on cancun) */
    cancunBlock: string;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigSDKType {
    homestead_block: string;
    dao_fork_block: string;
    dao_fork_support: boolean;
    eip150_block: string;
    eip150_hash: string;
    eip155_block: string;
    eip158_block: string;
    byzantium_block: string;
    constantinople_block: string;
    petersburg_block: string;
    istanbul_block: string;
    muir_glacier_block: string;
    berlin_block: string;
    london_block: string;
    arrow_glacier_block: string;
    gray_glacier_block: string;
    merge_netsplit_block: string;
    shanghai_block: string;
    cancun_block: string;
}
/** State represents a single Storage key value pair item. */
export interface State {
    /** key is the stored key */
    key: string;
    /** value is the stored value for the given key */
    value: string;
}
/** State represents a single Storage key value pair item. */
export interface StateSDKType {
    key: string;
    value: string;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogs {
    /** hash of the transaction */
    hash: string;
    /** logs is an array of Logs for the given transaction hash */
    logs: Log[];
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsSDKType {
    hash: string;
    logs: LogSDKType[];
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface Log {
    /** address of the contract that generated the event */
    address: string;
    /** topics is a list of topics provided by the contract. */
    topics: string[];
    /** data which is supplied by the contract, usually ABI-encoded */
    data: Uint8Array;
    /** block_number of the block in which the transaction was included */
    blockNumber: Long;
    /** tx_hash is the transaction hash */
    txHash: string;
    /** tx_index of the transaction in the block */
    txIndex: Long;
    /** block_hash of the block in which the transaction was included */
    blockHash: string;
    /** index of the log in the block */
    index: Long;
    /**
     * removed is true if this log was reverted due to a chain
     * reorganisation. You must pay attention to this field if you receive logs
     * through a filter query.
     */
    removed: boolean;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface LogSDKType {
    address: string;
    topics: string[];
    data: Uint8Array;
    block_number: Long;
    tx_hash: string;
    tx_index: Long;
    block_hash: string;
    index: Long;
    removed: boolean;
}
/** TxResult stores results of Tx execution. */
export interface TxResult {
    /**
     * contract_address contains the ethereum address of the created contract (if
     * any). If the state transition is an evm.Call, the contract address will be
     * empty.
     */
    contractAddress: string;
    /** bloom represents the bloom filter bytes */
    bloom: Uint8Array;
    /**
     * tx_logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    txLogs?: TransactionLogs;
    /** ret defines the bytes from the execution. */
    ret: Uint8Array;
    /** reverted flag is set to true when the call has been reverted */
    reverted: boolean;
    /** gas_used notes the amount of gas consumed while execution */
    gasUsed: Long;
}
/** TxResult stores results of Tx execution. */
export interface TxResultSDKType {
    contract_address: string;
    bloom: Uint8Array;
    tx_logs?: TransactionLogsSDKType;
    ret: Uint8Array;
    reverted: boolean;
    gas_used: Long;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
    /** address is a hex formatted ethereum address */
    address: string;
    /** storage_keys are hex formatted hashes of the storage keys */
    storageKeys: string[];
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleSDKType {
    address: string;
    storage_keys: string[];
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
    /** tracer is a custom javascript tracer */
    tracer: string;
    /**
     * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
     * calls
     */
    timeout: string;
    /** reexec defines the number of blocks the tracer is willing to go back */
    reexec: Long;
    /** disable_stack switches stack capture */
    disableStack: boolean;
    /** disable_storage switches storage capture */
    disableStorage: boolean;
    /** debug can be used to print output during capture end */
    debug: boolean;
    /** limit defines the maximum length of output, but zero means unlimited */
    limit: number;
    /** overrides can be used to execute a trace using future fork rules */
    overrides?: ChainConfig;
    /** enable_memory switches memory capture */
    enableMemory: boolean;
    /** enable_return_data switches the capture of return data */
    enableReturnData: boolean;
    /** tracer_json_config configures the tracer using a JSON string */
    tracerJsonConfig: string;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigSDKType {
    tracer: string;
    timeout: string;
    reexec: Long;
    disable_stack: boolean;
    disable_storage: boolean;
    debug: boolean;
    limit: number;
    overrides?: ChainConfigSDKType;
    enable_memory: boolean;
    enable_return_data: boolean;
    tracer_json_config: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const ChainConfig: {
    encode(message: ChainConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainConfig;
    fromPartial(object: DeepPartial<ChainConfig>): ChainConfig;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromPartial(object: DeepPartial<State>): State;
};
export declare const TransactionLogs: {
    encode(message: TransactionLogs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionLogs;
    fromPartial(object: DeepPartial<TransactionLogs>): TransactionLogs;
};
export declare const Log: {
    encode(message: Log, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Log;
    fromPartial(object: DeepPartial<Log>): Log;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromPartial(object: DeepPartial<TxResult>): TxResult;
};
export declare const AccessTuple: {
    encode(message: AccessTuple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTuple;
    fromPartial(object: DeepPartial<AccessTuple>): AccessTuple;
};
export declare const TraceConfig: {
    encode(message: TraceConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TraceConfig;
    fromPartial(object: DeepPartial<TraceConfig>): TraceConfig;
};

import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, AccessTuple, AccessTupleSDKType, Log, LogSDKType } from "./evm";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
    /** data is inner transaction data of the Ethereum transaction */
    data?: Any;
    /** size is the encoded storage size of the transaction (DEPRECATED) */
    size: number;
    /** hash of the transaction in hex format */
    hash: string;
    /**
     * from is the ethereum signer address in hex format. This address value is checked
     * against the address derived from the signature (V, R, S) using the
     * secp256k1 elliptic curve
     */
    from: string;
}
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTxSDKType {
    data?: AnySDKType;
    size: number;
    hash: string;
    from: string;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: Long;
    /** gas_price defines the value for each gas unit */
    gasPrice: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: Long;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTxSDKType {
    nonce: Long;
    gas_price: string;
    gas: Long;
    to: string;
    value: string;
    data: Uint8Array;
    v: Uint8Array;
    r: Uint8Array;
    s: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
    /** chain_id of the destination EVM chain */
    chainId: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: Long;
    /** gas_price defines the value for each gas unit */
    gasPrice: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: Long;
    /** to is the recipient address in hex format */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** accesses is an array of access tuples */
    accesses: AccessTuple[];
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTxSDKType {
    chain_id: string;
    nonce: Long;
    gas_price: string;
    gas: Long;
    to: string;
    value: string;
    data: Uint8Array;
    accesses: AccessTupleSDKType[];
    v: Uint8Array;
    r: Uint8Array;
    s: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTx {
    /** chain_id of the destination EVM chain */
    chainId: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: Long;
    /** gas_tip_cap defines the max value for the gas tip */
    gasTipCap: string;
    /** gas_fee_cap defines the max value for the gas fee */
    gasFeeCap: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: Long;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** accesses is an array of access tuples */
    accesses: AccessTuple[];
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dinamic fee transactions. */
export interface DynamicFeeTxSDKType {
    chain_id: string;
    nonce: Long;
    gas_tip_cap: string;
    gas_fee_cap: string;
    gas: Long;
    to: string;
    value: string;
    data: Uint8Array;
    accesses: AccessTupleSDKType[];
    v: Uint8Array;
    r: Uint8Array;
    s: Uint8Array;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTx {
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTxSDKType {
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
    /**
     * hash of the ethereum transaction in hex format. This hash differs from the
     * Tendermint sha256 hash of the transaction bytes. See
     * https://github.com/tendermint/tendermint/issues/6539 for reference
     */
    hash: string;
    /**
     * logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    logs: Log[];
    /**
     * ret is the returned data from evm function (result or data supplied with revert
     * opcode)
     */
    ret: Uint8Array;
    /** vm_error is the error returned by vm execution */
    vmError: string;
    /** gas_used specifies how much gas was consumed by the transaction */
    gasUsed: Long;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponseSDKType {
    hash: string;
    logs: LogSDKType[];
    ret: Uint8Array;
    vm_error: string;
    gas_used: Long;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgEthereumTx: {
    encode(message: MsgEthereumTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTx;
    fromPartial(object: DeepPartial<MsgEthereumTx>): MsgEthereumTx;
};
export declare const LegacyTx: {
    encode(message: LegacyTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyTx;
    fromPartial(object: DeepPartial<LegacyTx>): LegacyTx;
};
export declare const AccessListTx: {
    encode(message: AccessListTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessListTx;
    fromPartial(object: DeepPartial<AccessListTx>): AccessListTx;
};
export declare const DynamicFeeTx: {
    encode(message: DynamicFeeTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicFeeTx;
    fromPartial(object: DeepPartial<DynamicFeeTx>): DynamicFeeTx;
};
export declare const ExtensionOptionsEthereumTx: {
    encode(_: ExtensionOptionsEthereumTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsEthereumTx;
    fromPartial(_: DeepPartial<ExtensionOptionsEthereumTx>): ExtensionOptionsEthereumTx;
};
export declare const MsgEthereumTxResponse: {
    encode(message: MsgEthereumTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEthereumTxResponse;
    fromPartial(object: DeepPartial<MsgEthereumTxResponse>): MsgEthereumTxResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};

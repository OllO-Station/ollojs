import * as _125 from "./crypto/v1/ethsecp256k1/keys";
import * as _126 from "./evm/v1/events";
import * as _127 from "./evm/v1/evm";
import * as _128 from "./evm/v1/genesis";
import * as _129 from "./evm/v1/query";
import * as _130 from "./evm/v1/tx";
import * as _131 from "./feemarket/v1/events";
import * as _132 from "./feemarket/v1/feemarket";
import * as _133 from "./feemarket/v1/genesis";
import * as _134 from "./feemarket/v1/query";
import * as _135 from "./feemarket/v1/tx";
import * as _136 from "./types/v1/account";
import * as _137 from "./types/v1/dynamic_fee";
import * as _138 from "./types/v1/indexer";
import * as _139 from "./types/v1/web3";
import * as _414 from "./evm/v1/query.lcd";
import * as _415 from "./feemarket/v1/query.lcd";
import * as _416 from "./evm/v1/query.rpc.Query";
import * as _417 from "./feemarket/v1/query.rpc.Query";
import * as _418 from "./evm/v1/tx.rpc.msg";
import * as _419 from "./feemarket/v1/tx.rpc.msg";
export declare namespace ethermint {
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    encode(message: _125.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.PubKey;
                    fromPartial(object: {
                        key?: Uint8Array;
                    }): _125.PubKey;
                };
                PrivKey: {
                    encode(message: _125.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.PrivKey;
                    fromPartial(object: {
                        key?: Uint8Array;
                    }): _125.PrivKey;
                };
            };
        }
    }
    namespace evm {
        const v1: {
            MsgClientImpl: typeof _418.MsgClientImpl;
            QueryClientImpl: typeof _416.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _129.QueryAccountRequest): Promise<_129.QueryAccountResponse>;
                cosmosAccount(request: _129.QueryCosmosAccountRequest): Promise<_129.QueryCosmosAccountResponse>;
                validatorAccount(request: _129.QueryValidatorAccountRequest): Promise<_129.QueryValidatorAccountResponse>;
                balance(request: _129.QueryBalanceRequest): Promise<_129.QueryBalanceResponse>;
                storage(request: _129.QueryStorageRequest): Promise<_129.QueryStorageResponse>;
                code(request: _129.QueryCodeRequest): Promise<_129.QueryCodeResponse>;
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                ethCall(request: _129.EthCallRequest): Promise<_130.MsgEthereumTxResponse>;
                estimateGas(request: _129.EthCallRequest): Promise<_129.EstimateGasResponse>;
                traceTx(request: _129.QueryTraceTxRequest): Promise<_129.QueryTraceTxResponse>;
                traceBlock(request: _129.QueryTraceBlockRequest): Promise<_129.QueryTraceBlockResponse>;
                baseFee(request?: _129.QueryBaseFeeRequest): Promise<_129.QueryBaseFeeResponse>;
            };
            LCDQueryClient: typeof _414.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    ethereumTx(value: _130.MsgEthereumTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    ethereumTx(value: _130.MsgEthereumTx): {
                        typeUrl: string;
                        value: _130.MsgEthereumTx;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    ethereumTx(value: _130.MsgEthereumTx): {
                        typeUrl: string;
                        value: _130.MsgEthereumTx;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.evm.v1.MsgEthereumTx": {
                    aminoType: string;
                    toAmino: ({ data, size, hash, from }: _130.MsgEthereumTx) => {
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    };
                    fromAmino: ({ data, size, hash, from }: {
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    }) => _130.MsgEthereumTx;
                };
                "/ethermint.evm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _130.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            evm_denom: string;
                            enable_create: boolean;
                            enable_call: boolean;
                            extra_eips: string[];
                            chain_config: {
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
                            };
                            allow_unprotected_txs: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            evm_denom: string;
                            enable_create: boolean;
                            enable_call: boolean;
                            extra_eips: string[];
                            chain_config: {
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
                            };
                            allow_unprotected_txs: boolean;
                        };
                    }) => _130.MsgUpdateParams;
                };
            };
            MsgEthereumTx: {
                encode(message: _130.MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgEthereumTx;
                fromPartial(object: {
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    size?: number;
                    hash?: string;
                    from?: string;
                }): _130.MsgEthereumTx;
            };
            LegacyTx: {
                encode(message: _130.LegacyTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.LegacyTx;
                fromPartial(object: {
                    nonce?: string | number | import("long");
                    gasPrice?: string;
                    gas?: string | number | import("long");
                    to?: string;
                    value?: string;
                    data?: Uint8Array;
                    v?: Uint8Array;
                    r?: Uint8Array;
                    s?: Uint8Array;
                }): _130.LegacyTx;
            };
            AccessListTx: {
                encode(message: _130.AccessListTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.AccessListTx;
                fromPartial(object: {
                    chainId?: string;
                    nonce?: string | number | import("long");
                    gasPrice?: string;
                    gas?: string | number | import("long");
                    to?: string;
                    value?: string;
                    data?: Uint8Array;
                    accesses?: {
                        address?: string;
                        storageKeys?: string[];
                    }[];
                    v?: Uint8Array;
                    r?: Uint8Array;
                    s?: Uint8Array;
                }): _130.AccessListTx;
            };
            DynamicFeeTx: {
                encode(message: _130.DynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DynamicFeeTx;
                fromPartial(object: {
                    chainId?: string;
                    nonce?: string | number | import("long");
                    gasTipCap?: string;
                    gasFeeCap?: string;
                    gas?: string | number | import("long");
                    to?: string;
                    value?: string;
                    data?: Uint8Array;
                    accesses?: {
                        address?: string;
                        storageKeys?: string[];
                    }[];
                    v?: Uint8Array;
                    r?: Uint8Array;
                    s?: Uint8Array;
                }): _130.DynamicFeeTx;
            };
            ExtensionOptionsEthereumTx: {
                encode(_: _130.ExtensionOptionsEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ExtensionOptionsEthereumTx;
                fromPartial(_: {}): _130.ExtensionOptionsEthereumTx;
            };
            MsgEthereumTxResponse: {
                encode(message: _130.MsgEthereumTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgEthereumTxResponse;
                fromPartial(object: {
                    hash?: string;
                    logs?: {
                        address?: string;
                        topics?: string[];
                        data?: Uint8Array;
                        blockNumber?: string | number | import("long");
                        txHash?: string;
                        txIndex?: string | number | import("long");
                        blockHash?: string;
                        index?: string | number | import("long");
                        removed?: boolean;
                    }[];
                    ret?: Uint8Array;
                    vmError?: string;
                    gasUsed?: string | number | import("long");
                }): _130.MsgEthereumTxResponse;
            };
            MsgUpdateParams: {
                encode(message: _130.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        evmDenom?: string;
                        enableCreate?: boolean;
                        enableCall?: boolean;
                        extraEips?: (string | number | import("long"))[];
                        chainConfig?: {
                            homesteadBlock?: string;
                            daoForkBlock?: string;
                            daoForkSupport?: boolean;
                            eip150Block?: string;
                            eip150Hash?: string;
                            eip155Block?: string;
                            eip158Block?: string;
                            byzantiumBlock?: string;
                            constantinopleBlock?: string;
                            petersburgBlock?: string;
                            istanbulBlock?: string;
                            muirGlacierBlock?: string;
                            berlinBlock?: string;
                            londonBlock?: string;
                            arrowGlacierBlock?: string;
                            grayGlacierBlock?: string;
                            mergeNetsplitBlock?: string;
                            shanghaiBlock?: string;
                            cancunBlock?: string;
                        };
                        allowUnprotectedTxs?: boolean;
                    };
                }): _130.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _130.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgUpdateParamsResponse;
                fromPartial(_: {}): _130.MsgUpdateParamsResponse;
            };
            QueryAccountRequest: {
                encode(message: _129.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _129.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _129.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryAccountResponse;
                fromPartial(object: {
                    balance?: string;
                    codeHash?: string;
                    nonce?: string | number | import("long");
                }): _129.QueryAccountResponse;
            };
            QueryCosmosAccountRequest: {
                encode(message: _129.QueryCosmosAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryCosmosAccountRequest;
                fromPartial(object: {
                    address?: string;
                }): _129.QueryCosmosAccountRequest;
            };
            QueryCosmosAccountResponse: {
                encode(message: _129.QueryCosmosAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryCosmosAccountResponse;
                fromPartial(object: {
                    cosmosAddress?: string;
                    sequence?: string | number | import("long");
                    accountNumber?: string | number | import("long");
                }): _129.QueryCosmosAccountResponse;
            };
            QueryValidatorAccountRequest: {
                encode(message: _129.QueryValidatorAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryValidatorAccountRequest;
                fromPartial(object: {
                    consAddress?: string;
                }): _129.QueryValidatorAccountRequest;
            };
            QueryValidatorAccountResponse: {
                encode(message: _129.QueryValidatorAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryValidatorAccountResponse;
                fromPartial(object: {
                    accountAddress?: string;
                    sequence?: string | number | import("long");
                    accountNumber?: string | number | import("long");
                }): _129.QueryValidatorAccountResponse;
            };
            QueryBalanceRequest: {
                encode(message: _129.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                }): _129.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _129.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: string;
                }): _129.QueryBalanceResponse;
            };
            QueryStorageRequest: {
                encode(message: _129.QueryStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryStorageRequest;
                fromPartial(object: {
                    address?: string;
                    key?: string;
                }): _129.QueryStorageRequest;
            };
            QueryStorageResponse: {
                encode(message: _129.QueryStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryStorageResponse;
                fromPartial(object: {
                    value?: string;
                }): _129.QueryStorageResponse;
            };
            QueryCodeRequest: {
                encode(message: _129.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryCodeRequest;
                fromPartial(object: {
                    address?: string;
                }): _129.QueryCodeRequest;
            };
            QueryCodeResponse: {
                encode(message: _129.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryCodeResponse;
                fromPartial(object: {
                    code?: Uint8Array;
                }): _129.QueryCodeResponse;
            };
            QueryTxLogsRequest: {
                encode(message: _129.QueryTxLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryTxLogsRequest;
                fromPartial(object: {
                    hash?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _129.QueryTxLogsRequest;
            };
            QueryTxLogsResponse: {
                encode(message: _129.QueryTxLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryTxLogsResponse;
                fromPartial(object: {
                    logs?: {
                        address?: string;
                        topics?: string[];
                        data?: Uint8Array;
                        blockNumber?: string | number | import("long");
                        txHash?: string;
                        txIndex?: string | number | import("long");
                        blockHash?: string;
                        index?: string | number | import("long");
                        removed?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _129.QueryTxLogsResponse;
            };
            QueryParamsRequest: {
                encode(_: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsRequest;
                fromPartial(_: {}): _129.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        evmDenom?: string;
                        enableCreate?: boolean;
                        enableCall?: boolean;
                        extraEips?: (string | number | import("long"))[];
                        chainConfig?: {
                            homesteadBlock?: string;
                            daoForkBlock?: string;
                            daoForkSupport?: boolean;
                            eip150Block?: string;
                            eip150Hash?: string;
                            eip155Block?: string;
                            eip158Block?: string;
                            byzantiumBlock?: string;
                            constantinopleBlock?: string;
                            petersburgBlock?: string;
                            istanbulBlock?: string;
                            muirGlacierBlock?: string;
                            berlinBlock?: string;
                            londonBlock?: string;
                            arrowGlacierBlock?: string;
                            grayGlacierBlock?: string;
                            mergeNetsplitBlock?: string;
                            shanghaiBlock?: string;
                            cancunBlock?: string;
                        };
                        allowUnprotectedTxs?: boolean;
                    };
                }): _129.QueryParamsResponse;
            };
            EthCallRequest: {
                encode(message: _129.EthCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.EthCallRequest;
                fromPartial(object: {
                    args?: Uint8Array;
                    gasCap?: string | number | import("long");
                    proposerAddress?: Uint8Array;
                    chainId?: string | number | import("long");
                }): _129.EthCallRequest;
            };
            EstimateGasResponse: {
                encode(message: _129.EstimateGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.EstimateGasResponse;
                fromPartial(object: {
                    gas?: string | number | import("long");
                }): _129.EstimateGasResponse;
            };
            QueryTraceTxRequest: {
                encode(message: _129.QueryTraceTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryTraceTxRequest;
                fromPartial(object: {
                    msg?: {
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        size?: number;
                        hash?: string;
                        from?: string;
                    };
                    traceConfig?: {
                        tracer?: string;
                        timeout?: string;
                        reexec?: string | number | import("long");
                        disableStack?: boolean;
                        disableStorage?: boolean;
                        debug?: boolean;
                        limit?: number;
                        overrides?: {
                            homesteadBlock?: string;
                            daoForkBlock?: string;
                            daoForkSupport?: boolean;
                            eip150Block?: string;
                            eip150Hash?: string;
                            eip155Block?: string;
                            eip158Block?: string;
                            byzantiumBlock?: string;
                            constantinopleBlock?: string;
                            petersburgBlock?: string;
                            istanbulBlock?: string;
                            muirGlacierBlock?: string;
                            berlinBlock?: string;
                            londonBlock?: string;
                            arrowGlacierBlock?: string;
                            grayGlacierBlock?: string;
                            mergeNetsplitBlock?: string;
                            shanghaiBlock?: string;
                            cancunBlock?: string;
                        };
                        enableMemory?: boolean;
                        enableReturnData?: boolean;
                        tracerJsonConfig?: string;
                    };
                    predecessors?: {
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        size?: number;
                        hash?: string;
                        from?: string;
                    }[];
                    blockNumber?: string | number | import("long");
                    blockHash?: string;
                    blockTime?: Date;
                    proposerAddress?: Uint8Array;
                    chainId?: string | number | import("long");
                }): _129.QueryTraceTxRequest;
            };
            QueryTraceTxResponse: {
                encode(message: _129.QueryTraceTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryTraceTxResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _129.QueryTraceTxResponse;
            };
            QueryTraceBlockRequest: {
                encode(message: _129.QueryTraceBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryTraceBlockRequest;
                fromPartial(object: {
                    txs?: {
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        size?: number;
                        hash?: string;
                        from?: string;
                    }[];
                    traceConfig?: {
                        tracer?: string;
                        timeout?: string;
                        reexec?: string | number | import("long");
                        disableStack?: boolean;
                        disableStorage?: boolean;
                        debug?: boolean;
                        limit?: number;
                        overrides?: {
                            homesteadBlock?: string;
                            daoForkBlock?: string;
                            daoForkSupport?: boolean;
                            eip150Block?: string;
                            eip150Hash?: string;
                            eip155Block?: string;
                            eip158Block?: string;
                            byzantiumBlock?: string;
                            constantinopleBlock?: string;
                            petersburgBlock?: string;
                            istanbulBlock?: string;
                            muirGlacierBlock?: string;
                            berlinBlock?: string;
                            londonBlock?: string;
                            arrowGlacierBlock?: string;
                            grayGlacierBlock?: string;
                            mergeNetsplitBlock?: string;
                            shanghaiBlock?: string;
                            cancunBlock?: string;
                        };
                        enableMemory?: boolean;
                        enableReturnData?: boolean;
                        tracerJsonConfig?: string;
                    };
                    blockNumber?: string | number | import("long");
                    blockHash?: string;
                    blockTime?: Date;
                    proposerAddress?: Uint8Array;
                    chainId?: string | number | import("long");
                }): _129.QueryTraceBlockRequest;
            };
            QueryTraceBlockResponse: {
                encode(message: _129.QueryTraceBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryTraceBlockResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _129.QueryTraceBlockResponse;
            };
            QueryBaseFeeRequest: {
                encode(_: _129.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryBaseFeeRequest;
                fromPartial(_: {}): _129.QueryBaseFeeRequest;
            };
            QueryBaseFeeResponse: {
                encode(message: _129.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryBaseFeeResponse;
                fromPartial(object: {
                    baseFee?: string;
                }): _129.QueryBaseFeeResponse;
            };
            GenesisState: {
                encode(message: _128.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisState;
                fromPartial(object: {
                    accounts?: {
                        address?: string;
                        code?: string;
                        storage?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[];
                    params?: {
                        evmDenom?: string;
                        enableCreate?: boolean;
                        enableCall?: boolean;
                        extraEips?: (string | number | import("long"))[];
                        chainConfig?: {
                            homesteadBlock?: string;
                            daoForkBlock?: string;
                            daoForkSupport?: boolean;
                            eip150Block?: string;
                            eip150Hash?: string;
                            eip155Block?: string;
                            eip158Block?: string;
                            byzantiumBlock?: string;
                            constantinopleBlock?: string;
                            petersburgBlock?: string;
                            istanbulBlock?: string;
                            muirGlacierBlock?: string;
                            berlinBlock?: string;
                            londonBlock?: string;
                            arrowGlacierBlock?: string;
                            grayGlacierBlock?: string;
                            mergeNetsplitBlock?: string;
                            shanghaiBlock?: string;
                            cancunBlock?: string;
                        };
                        allowUnprotectedTxs?: boolean;
                    };
                }): _128.GenesisState;
            };
            GenesisAccount: {
                encode(message: _128.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.GenesisAccount;
                fromPartial(object: {
                    address?: string;
                    code?: string;
                    storage?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _128.GenesisAccount;
            };
            Params: {
                encode(message: _127.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Params;
                fromPartial(object: {
                    evmDenom?: string;
                    enableCreate?: boolean;
                    enableCall?: boolean;
                    extraEips?: (string | number | import("long"))[];
                    chainConfig?: {
                        homesteadBlock?: string;
                        daoForkBlock?: string;
                        daoForkSupport?: boolean;
                        eip150Block?: string;
                        eip150Hash?: string;
                        eip155Block?: string;
                        eip158Block?: string;
                        byzantiumBlock?: string;
                        constantinopleBlock?: string;
                        petersburgBlock?: string;
                        istanbulBlock?: string;
                        muirGlacierBlock?: string;
                        berlinBlock?: string;
                        londonBlock?: string;
                        arrowGlacierBlock?: string;
                        grayGlacierBlock?: string;
                        mergeNetsplitBlock?: string;
                        shanghaiBlock?: string;
                        cancunBlock?: string;
                    };
                    allowUnprotectedTxs?: boolean;
                }): _127.Params;
            };
            ChainConfig: {
                encode(message: _127.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ChainConfig;
                fromPartial(object: {
                    homesteadBlock?: string;
                    daoForkBlock?: string;
                    daoForkSupport?: boolean;
                    eip150Block?: string;
                    eip150Hash?: string;
                    eip155Block?: string;
                    eip158Block?: string;
                    byzantiumBlock?: string;
                    constantinopleBlock?: string;
                    petersburgBlock?: string;
                    istanbulBlock?: string;
                    muirGlacierBlock?: string;
                    berlinBlock?: string;
                    londonBlock?: string;
                    arrowGlacierBlock?: string;
                    grayGlacierBlock?: string;
                    mergeNetsplitBlock?: string;
                    shanghaiBlock?: string;
                    cancunBlock?: string;
                }): _127.ChainConfig;
            };
            State: {
                encode(message: _127.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.State;
                fromPartial(object: {
                    key?: string;
                    value?: string;
                }): _127.State;
            };
            TransactionLogs: {
                encode(message: _127.TransactionLogs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.TransactionLogs;
                fromPartial(object: {
                    hash?: string;
                    logs?: {
                        address?: string;
                        topics?: string[];
                        data?: Uint8Array;
                        blockNumber?: string | number | import("long");
                        txHash?: string;
                        txIndex?: string | number | import("long");
                        blockHash?: string;
                        index?: string | number | import("long");
                        removed?: boolean;
                    }[];
                }): _127.TransactionLogs;
            };
            Log: {
                encode(message: _127.Log, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Log;
                fromPartial(object: {
                    address?: string;
                    topics?: string[];
                    data?: Uint8Array;
                    blockNumber?: string | number | import("long");
                    txHash?: string;
                    txIndex?: string | number | import("long");
                    blockHash?: string;
                    index?: string | number | import("long");
                    removed?: boolean;
                }): _127.Log;
            };
            TxResult: {
                encode(message: _127.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.TxResult;
                fromPartial(object: {
                    contractAddress?: string;
                    bloom?: Uint8Array;
                    txLogs?: {
                        hash?: string;
                        logs?: {
                            address?: string;
                            topics?: string[];
                            data?: Uint8Array;
                            blockNumber?: string | number | import("long");
                            txHash?: string;
                            txIndex?: string | number | import("long");
                            blockHash?: string;
                            index?: string | number | import("long");
                            removed?: boolean;
                        }[];
                    };
                    ret?: Uint8Array;
                    reverted?: boolean;
                    gasUsed?: string | number | import("long");
                }): _127.TxResult;
            };
            AccessTuple: {
                encode(message: _127.AccessTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.AccessTuple;
                fromPartial(object: {
                    address?: string;
                    storageKeys?: string[];
                }): _127.AccessTuple;
            };
            TraceConfig: {
                encode(message: _127.TraceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.TraceConfig;
                fromPartial(object: {
                    tracer?: string;
                    timeout?: string;
                    reexec?: string | number | import("long");
                    disableStack?: boolean;
                    disableStorage?: boolean;
                    debug?: boolean;
                    limit?: number;
                    overrides?: {
                        homesteadBlock?: string;
                        daoForkBlock?: string;
                        daoForkSupport?: boolean;
                        eip150Block?: string;
                        eip150Hash?: string;
                        eip155Block?: string;
                        eip158Block?: string;
                        byzantiumBlock?: string;
                        constantinopleBlock?: string;
                        petersburgBlock?: string;
                        istanbulBlock?: string;
                        muirGlacierBlock?: string;
                        berlinBlock?: string;
                        londonBlock?: string;
                        arrowGlacierBlock?: string;
                        grayGlacierBlock?: string;
                        mergeNetsplitBlock?: string;
                        shanghaiBlock?: string;
                        cancunBlock?: string;
                    };
                    enableMemory?: boolean;
                    enableReturnData?: boolean;
                    tracerJsonConfig?: string;
                }): _127.TraceConfig;
            };
            EventEthereumTx: {
                encode(message: _126.EventEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventEthereumTx;
                fromPartial(object: {
                    amount?: string;
                    ethHash?: string;
                    index?: string;
                    gasUsed?: string;
                    hash?: string;
                    recipient?: string;
                    ethTxFailed?: string;
                }): _126.EventEthereumTx;
            };
            EventTxLog: {
                encode(message: _126.EventTxLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventTxLog;
                fromPartial(object: {
                    txLogs?: string[];
                }): _126.EventTxLog;
            };
            EventMessage: {
                encode(message: _126.EventMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventMessage;
                fromPartial(object: {
                    module?: string;
                    sender?: string;
                    txType?: string;
                }): _126.EventMessage;
            };
            EventBlockBloom: {
                encode(message: _126.EventBlockBloom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventBlockBloom;
                fromPartial(object: {
                    bloom?: string;
                }): _126.EventBlockBloom;
            };
        };
    }
    namespace feemarket {
        const v1: {
            MsgClientImpl: typeof _419.MsgClientImpl;
            QueryClientImpl: typeof _417.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                baseFee(request?: _134.QueryBaseFeeRequest): Promise<_134.QueryBaseFeeResponse>;
                blockGas(request?: _134.QueryBlockGasRequest): Promise<_134.QueryBlockGasResponse>;
            };
            LCDQueryClient: typeof _415.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.feemarket.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _135.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            no_base_fee: boolean;
                            base_fee_change_denominator: number;
                            elasticity_multiplier: number;
                            enable_height: string;
                            base_fee: string;
                            min_gas_price: string;
                            min_gas_multiplier: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            no_base_fee: boolean;
                            base_fee_change_denominator: number;
                            elasticity_multiplier: number;
                            enable_height: string;
                            base_fee: string;
                            min_gas_price: string;
                            min_gas_multiplier: string;
                        };
                    }) => _135.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _135.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateParams;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        noBaseFee?: boolean;
                        baseFeeChangeDenominator?: number;
                        elasticityMultiplier?: number;
                        enableHeight?: string | number | import("long");
                        baseFee?: string;
                        minGasPrice?: string;
                        minGasMultiplier?: string;
                    };
                }): _135.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _135.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateParamsResponse;
                fromPartial(_: {}): _135.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _134.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsRequest;
                fromPartial(_: {}): _134.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _134.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        noBaseFee?: boolean;
                        baseFeeChangeDenominator?: number;
                        elasticityMultiplier?: number;
                        enableHeight?: string | number | import("long");
                        baseFee?: string;
                        minGasPrice?: string;
                        minGasMultiplier?: string;
                    };
                }): _134.QueryParamsResponse;
            };
            QueryBaseFeeRequest: {
                encode(_: _134.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBaseFeeRequest;
                fromPartial(_: {}): _134.QueryBaseFeeRequest;
            };
            QueryBaseFeeResponse: {
                encode(message: _134.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBaseFeeResponse;
                fromPartial(object: {
                    baseFee?: string;
                }): _134.QueryBaseFeeResponse;
            };
            QueryBlockGasRequest: {
                encode(_: _134.QueryBlockGasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBlockGasRequest;
                fromPartial(_: {}): _134.QueryBlockGasRequest;
            };
            QueryBlockGasResponse: {
                encode(message: _134.QueryBlockGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryBlockGasResponse;
                fromPartial(object: {
                    gas?: string | number | import("long");
                }): _134.QueryBlockGasResponse;
            };
            GenesisState: {
                encode(message: _133.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.GenesisState;
                fromPartial(object: {
                    params?: {
                        noBaseFee?: boolean;
                        baseFeeChangeDenominator?: number;
                        elasticityMultiplier?: number;
                        enableHeight?: string | number | import("long");
                        baseFee?: string;
                        minGasPrice?: string;
                        minGasMultiplier?: string;
                    };
                    blockGas?: string | number | import("long");
                }): _133.GenesisState;
            };
            Params: {
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromPartial(object: {
                    noBaseFee?: boolean;
                    baseFeeChangeDenominator?: number;
                    elasticityMultiplier?: number;
                    enableHeight?: string | number | import("long");
                    baseFee?: string;
                    minGasPrice?: string;
                    minGasMultiplier?: string;
                }): _132.Params;
            };
            EventFeeMarket: {
                encode(message: _131.EventFeeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.EventFeeMarket;
                fromPartial(object: {
                    baseFee?: string;
                }): _131.EventFeeMarket;
            };
            EventBlockGas: {
                encode(message: _131.EventBlockGas, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.EventBlockGas;
                fromPartial(object: {
                    height?: string;
                    amount?: string;
                }): _131.EventBlockGas;
            };
        };
    }
    namespace types {
        const v1: {
            ExtensionOptionsWeb3Tx: {
                encode(message: _139.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ExtensionOptionsWeb3Tx;
                fromPartial(object: {
                    typedDataChainId?: string | number | import("long");
                    feePayer?: string;
                    feePayerSig?: Uint8Array;
                }): _139.ExtensionOptionsWeb3Tx;
            };
            TxResult: {
                encode(message: _138.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.TxResult;
                fromPartial(object: {
                    height?: string | number | import("long");
                    txIndex?: number;
                    msgIndex?: number;
                    ethTxIndex?: number;
                    failed?: boolean;
                    gasUsed?: string | number | import("long");
                    cumulativeGasUsed?: string | number | import("long");
                }): _138.TxResult;
            };
            ExtensionOptionDynamicFeeTx: {
                encode(message: _137.ExtensionOptionDynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ExtensionOptionDynamicFeeTx;
                fromPartial(object: {
                    maxPriorityPrice?: string;
                }): _137.ExtensionOptionDynamicFeeTx;
            };
            EthAccount: {
                encode(message: _136.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EthAccount;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: string | number | import("long");
                        sequence?: string | number | import("long");
                    };
                    codeHash?: string;
                }): _136.EthAccount;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ethermint: {
                evm: {
                    v1: _418.MsgClientImpl;
                };
                feemarket: {
                    v1: _419.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ethermint: {
                evm: {
                    v1: {
                        account(request: _129.QueryAccountRequest): Promise<_129.QueryAccountResponse>;
                        cosmosAccount(request: _129.QueryCosmosAccountRequest): Promise<_129.QueryCosmosAccountResponse>;
                        validatorAccount(request: _129.QueryValidatorAccountRequest): Promise<_129.QueryValidatorAccountResponse>;
                        balance(request: _129.QueryBalanceRequest): Promise<_129.QueryBalanceResponse>;
                        storage(request: _129.QueryStorageRequest): Promise<_129.QueryStorageResponse>;
                        code(request: _129.QueryCodeRequest): Promise<_129.QueryCodeResponse>;
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                        ethCall(request: _129.EthCallRequest): Promise<_130.MsgEthereumTxResponse>;
                        estimateGas(request: _129.EthCallRequest): Promise<_129.EstimateGasResponse>;
                        traceTx(request: _129.QueryTraceTxRequest): Promise<_129.QueryTraceTxResponse>;
                        traceBlock(request: _129.QueryTraceBlockRequest): Promise<_129.QueryTraceBlockResponse>;
                        baseFee(request?: _129.QueryBaseFeeRequest): Promise<_129.QueryBaseFeeResponse>;
                    };
                };
                feemarket: {
                    v1: {
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        baseFee(request?: _134.QueryBaseFeeRequest): Promise<_134.QueryBaseFeeResponse>;
                        blockGas(request?: _134.QueryBlockGasRequest): Promise<_134.QueryBlockGasResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ethermint: {
                evm: {
                    v1: _414.LCDQueryClient;
                };
                feemarket: {
                    v1: _415.LCDQueryClient;
                };
            };
        }>;
    };
}

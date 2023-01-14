import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _291 from "./wasm/v1/query.lcd";
import * as _292 from "./wasm/v1/query.rpc.Query";
import * as _293 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _99.QueryContractInfoRequest): Promise<_99.QueryContractInfoResponse>;
                contractHistory(request: _99.QueryContractHistoryRequest): Promise<_99.QueryContractHistoryResponse>;
                contractsByCode(request: _99.QueryContractsByCodeRequest): Promise<_99.QueryContractsByCodeResponse>;
                allContractState(request: _99.QueryAllContractStateRequest): Promise<_99.QueryAllContractStateResponse>;
                rawContractState(request: _99.QueryRawContractStateRequest): Promise<_99.QueryRawContractStateResponse>;
                smartContractState(request: _99.QuerySmartContractStateRequest): Promise<_99.QuerySmartContractStateResponse>;
                code(request: _99.QueryCodeRequest): Promise<_99.QueryCodeResponse>;
                codes(request?: _99.QueryCodesRequest): Promise<_99.QueryCodesResponse>;
                pinnedCodes(request?: _99.QueryPinnedCodesRequest): Promise<_99.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _291.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: _100.MsgStoreCode;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: _100.MsgExecuteContract;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: _100.MsgMigrateContract;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _100.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: _100.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _100.MsgStoreCode): {
                        typeUrl: string;
                        value: _100.MsgStoreCode;
                    };
                    instantiateContract(value: _100.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _100.MsgInstantiateContract;
                    };
                    executeContract(value: _100.MsgExecuteContract): {
                        typeUrl: string;
                        value: _100.MsgExecuteContract;
                    };
                    migrateContract(value: _100.MsgMigrateContract): {
                        typeUrl: string;
                        value: _100.MsgMigrateContract;
                    };
                    updateAdmin(value: _100.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _100.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _100.MsgClearAdmin): {
                        typeUrl: string;
                        value: _100.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _100.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _100.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _100.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _100.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _100.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _100.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _100.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _100.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _100.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _100.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _100.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _100.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _101.AccessType;
            accessTypeToJSON(object: _101.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _101.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _101.ContractCodeHistoryOperationType): string;
            AccessType: typeof _101.AccessType;
            AccessTypeSDKType: typeof _101.AccessType;
            ContractCodeHistoryOperationType: typeof _101.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _101.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _101.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.AccessTypeParam;
                fromPartial(object: {
                    value?: _101.AccessType;
                }): _101.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _101.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.AccessConfig;
                fromPartial(object: {
                    permission?: _101.AccessType;
                    address?: string;
                }): _101.AccessConfig;
            };
            Params: {
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _101.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _101.AccessType;
                    maxWasmCodeSize?: string | number | import("long");
                }): _101.Params;
            };
            CodeInfo: {
                encode(message: _101.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CodeInfo;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _101.AccessType;
                        address?: string;
                    };
                }): _101.CodeInfo;
            };
            ContractInfo: {
                encode(message: _101.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ContractInfo;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: string | number | import("long");
                        txIndex?: string | number | import("long");
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _101.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _101.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _101.ContractCodeHistoryOperationType;
                    codeId?: string | number | import("long");
                    updated?: {
                        blockHeight?: string | number | import("long");
                        txIndex?: string | number | import("long");
                    };
                    msg?: Uint8Array;
                }): _101.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _101.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.AbsoluteTxPosition;
                fromPartial(object: {
                    blockHeight?: string | number | import("long");
                    txIndex?: string | number | import("long");
                }): _101.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _101.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _101.Model;
            };
            MsgStoreCode: {
                encode(message: _100.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _101.AccessType;
                        address?: string;
                    };
                }): _100.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _100.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgStoreCodeResponse;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _100.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _100.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: string | number | import("long");
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _100.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _100.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _100.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _100.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _100.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _100.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgExecuteContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _100.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _100.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _100.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _100.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgMigrateContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _100.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _100.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _100.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _100.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgUpdateAdminResponse;
                fromPartial(_: {}): _100.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _100.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _100.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _100.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MsgClearAdminResponse;
                fromPartial(_: {}): _100.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _99.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _99.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _99.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractInfoResponse;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _99.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _99.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _99.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _99.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractHistoryResponse;
                fromPartial(object: {
                    entries?: {
                        operation?: _101.ContractCodeHistoryOperationType;
                        codeId?: string | number | import("long");
                        updated?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _99.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _99.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractsByCodeRequest;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _99.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _99.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryContractsByCodeResponse;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _99.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _99.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _99.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _99.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryAllContractStateResponse;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _99.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _99.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _99.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _99.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryRawContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _99.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _99.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _99.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _99.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QuerySmartContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _99.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _99.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodeRequest;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _99.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _99.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.CodeInfoResponse;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _99.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _99.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodeResponse;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _99.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _99.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _99.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _99.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryCodesResponse;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _99.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _99.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _99.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _99.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryPinnedCodesResponse;
                fromPartial(object: {
                    codeIds?: (string | number | import("long"))[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _99.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _98.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _101.AccessType;
                        address?: string;
                    };
                }): _98.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _98.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.InstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: string | number | import("long");
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _98.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _98.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _98.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _98.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _98.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _98.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ExecuteContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _98.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _98.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _98.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _98.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _98.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _98.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _98.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _98.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _98.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _97.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: string | number | import("long");
                    timeoutTimestamp?: string | number | import("long");
                    data?: Uint8Array;
                }): _97.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _97.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _97.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _101.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _101.AccessType;
                        maxWasmCodeSize?: string | number | import("long");
                    };
                    codes?: {
                        codeId?: string | number | import("long");
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _101.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string | number | import("long");
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string | number | import("long");
                                txIndex?: string | number | import("long");
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string | number | import("long");
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _101.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string | number | import("long");
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _96.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _96.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState_GenMsgs;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _101.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: string | number | import("long");
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _96.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _96.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Code;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _101.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _96.Code;
            };
            Contract: {
                encode(message: _96.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Contract;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _96.Contract;
            };
            Sequence: {
                encode(message: _96.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: string | number | import("long");
                }): _96.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: _293.MsgClientImpl;
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
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
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
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
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
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _99.QueryContractInfoRequest): Promise<_99.QueryContractInfoResponse>;
                        contractHistory(request: _99.QueryContractHistoryRequest): Promise<_99.QueryContractHistoryResponse>;
                        contractsByCode(request: _99.QueryContractsByCodeRequest): Promise<_99.QueryContractsByCodeResponse>;
                        allContractState(request: _99.QueryAllContractStateRequest): Promise<_99.QueryAllContractStateResponse>;
                        rawContractState(request: _99.QueryRawContractStateRequest): Promise<_99.QueryRawContractStateResponse>;
                        smartContractState(request: _99.QuerySmartContractStateRequest): Promise<_99.QuerySmartContractStateResponse>;
                        code(request: _99.QueryCodeRequest): Promise<_99.QueryCodeResponse>;
                        codes(request?: _99.QueryCodesRequest): Promise<_99.QueryCodesResponse>;
                        pinnedCodes(request?: _99.QueryPinnedCodesRequest): Promise<_99.QueryPinnedCodesResponse>;
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
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
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
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
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
            cosmwasm: {
                wasm: {
                    v1: _291.LCDQueryClient;
                };
            };
        }>;
    };
}

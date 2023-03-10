import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _398 from "./wasm/v1/query.lcd";
import * as _399 from "./wasm/v1/query.rpc.Query";
import * as _400 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _400.MsgClientImpl;
            QueryClientImpl: typeof _399.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _122.QueryContractInfoRequest): Promise<_122.QueryContractInfoResponse>;
                contractHistory(request: _122.QueryContractHistoryRequest): Promise<_122.QueryContractHistoryResponse>;
                contractsByCode(request: _122.QueryContractsByCodeRequest): Promise<_122.QueryContractsByCodeResponse>;
                allContractState(request: _122.QueryAllContractStateRequest): Promise<_122.QueryAllContractStateResponse>;
                rawContractState(request: _122.QueryRawContractStateRequest): Promise<_122.QueryRawContractStateResponse>;
                smartContractState(request: _122.QuerySmartContractStateRequest): Promise<_122.QuerySmartContractStateResponse>;
                code(request: _122.QueryCodeRequest): Promise<_122.QueryCodeResponse>;
                codes(request?: _122.QueryCodesRequest): Promise<_122.QueryCodesResponse>;
                pinnedCodes(request?: _122.QueryPinnedCodesRequest): Promise<_122.QueryPinnedCodesResponse>;
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                contractsByCreator(request: _122.QueryContractsByCreatorRequest): Promise<_122.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _398.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _123.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _123.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _123.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _123.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _123.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _123.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _123.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _123.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _123.MsgStoreCode): {
                        typeUrl: string;
                        value: _123.MsgStoreCode;
                    };
                    instantiateContract(value: _123.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _123.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _123.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _123.MsgInstantiateContract2;
                    };
                    executeContract(value: _123.MsgExecuteContract): {
                        typeUrl: string;
                        value: _123.MsgExecuteContract;
                    };
                    migrateContract(value: _123.MsgMigrateContract): {
                        typeUrl: string;
                        value: _123.MsgMigrateContract;
                    };
                    updateAdmin(value: _123.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _123.MsgClearAdmin): {
                        typeUrl: string;
                        value: _123.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _123.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _123.MsgUpdateInstantiateConfig;
                    };
                };
                fromPartial: {
                    storeCode(value: _123.MsgStoreCode): {
                        typeUrl: string;
                        value: _123.MsgStoreCode;
                    };
                    instantiateContract(value: _123.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _123.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _123.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _123.MsgInstantiateContract2;
                    };
                    executeContract(value: _123.MsgExecuteContract): {
                        typeUrl: string;
                        value: _123.MsgExecuteContract;
                    };
                    migrateContract(value: _123.MsgMigrateContract): {
                        typeUrl: string;
                        value: _123.MsgMigrateContract;
                    };
                    updateAdmin(value: _123.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _123.MsgClearAdmin): {
                        typeUrl: string;
                        value: _123.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _123.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _123.MsgUpdateInstantiateConfig;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _123.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _123.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _123.MsgInstantiateContract) => {
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
                    }) => _123.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _123.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _123.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _123.MsgExecuteContract) => {
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
                    }) => _123.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _123.MsgMigrateContract) => {
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
                    }) => _123.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _123.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _123.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _123.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _123.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, newInstantiatePermission }: _123.MsgUpdateInstantiateConfig) => {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, code_id, new_instantiate_permission }: {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _123.MsgUpdateInstantiateConfig;
                };
            };
            accessTypeFromJSON(object: any): _124.AccessType;
            accessTypeToJSON(object: _124.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _124.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _124.ContractCodeHistoryOperationType): string;
            AccessType: typeof _124.AccessType;
            AccessTypeSDKType: typeof _124.AccessType;
            ContractCodeHistoryOperationType: typeof _124.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _124.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _124.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccessTypeParam;
                fromPartial(object: {
                    value?: _124.AccessType;
                }): _124.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _124.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AccessConfig;
                fromPartial(object: {
                    permission?: _124.AccessType;
                    address?: string;
                    addresses?: string[];
                }): _124.AccessConfig;
            };
            Params: {
                encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                    instantiateDefaultPermission?: _124.AccessType;
                }): _124.Params;
            };
            CodeInfo: {
                encode(message: _124.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.CodeInfo;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _124.CodeInfo;
            };
            ContractInfo: {
                encode(message: _124.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ContractInfo;
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
                }): _124.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _124.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _124.ContractCodeHistoryOperationType;
                    codeId?: string | number | import("long");
                    updated?: {
                        blockHeight?: string | number | import("long");
                        txIndex?: string | number | import("long");
                    };
                    msg?: Uint8Array;
                }): _124.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _124.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.AbsoluteTxPosition;
                fromPartial(object: {
                    blockHeight?: string | number | import("long");
                    txIndex?: string | number | import("long");
                }): _124.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _124.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _124.Model;
            };
            MsgStoreCode: {
                encode(message: _123.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _123.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _123.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgStoreCodeResponse;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    checksum?: Uint8Array;
                }): _123.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _123.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgInstantiateContract;
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
                }): _123.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _123.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgInstantiateContract2;
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
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _123.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _123.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _123.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _123.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgInstantiateContract2Response;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _123.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _123.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _123.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _123.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgExecuteContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _123.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _123.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _123.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _123.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgMigrateContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _123.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _123.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _123.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _123.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateAdminResponse;
                fromPartial(_: {}): _123.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _123.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _123.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _123.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgClearAdminResponse;
                fromPartial(_: {}): _123.MsgClearAdminResponse;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _123.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateInstantiateConfig;
                fromPartial(object: {
                    sender?: string;
                    codeId?: string | number | import("long");
                    newInstantiatePermission?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _123.MsgUpdateInstantiateConfig;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _123.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: {}): _123.MsgUpdateInstantiateConfigResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _122.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _122.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _122.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractInfoResponse;
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
                }): _122.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _122.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _122.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _122.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractHistoryResponse;
                fromPartial(object: {
                    entries?: {
                        operation?: _124.ContractCodeHistoryOperationType;
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
                }): _122.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _122.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractsByCodeRequest;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _122.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _122.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractsByCodeResponse;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _122.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _122.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _122.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _122.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryAllContractStateResponse;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _122.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _122.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _122.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _122.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryRawContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _122.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _122.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _122.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _122.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QuerySmartContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _122.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _122.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCodeRequest;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                }): _122.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _122.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.CodeInfoResponse;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _122.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _122.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCodeResponse;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _124.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    };
                    data?: Uint8Array;
                }): _122.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _122.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _122.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _122.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryCodesResponse;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: string | number | import("long");
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _124.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _122.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _122.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _122.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _122.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryPinnedCodesResponse;
                fromPartial(object: {
                    codeIds?: (string | number | import("long"))[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _122.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsRequest;
                fromPartial(_: {}): _122.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _124.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _124.AccessType;
                    };
                }): _122.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _122.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractsByCreatorRequest;
                fromPartial(object: {
                    creatorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long");
                        limit?: string | number | import("long");
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _122.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _122.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryContractsByCreatorResponse;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long");
                    };
                }): _122.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _121.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _121.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _121.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InstantiateContractProposal;
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
                }): _121.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _121.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.InstantiateContract2Proposal;
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
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _121.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _121.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string | number | import("long");
                    msg?: Uint8Array;
                }): _121.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _121.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _121.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _121.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ExecuteContractProposal;
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
                }): _121.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _121.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _121.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _121.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _121.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _121.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _121.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _121.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long"))[];
                }): _121.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _121.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.AccessConfigUpdate;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    instantiatePermission?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _121.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _121.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.UpdateInstantiateConfigProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: string | number | import("long");
                        instantiatePermission?: {
                            permission?: _124.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    }[];
                }): _121.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _121.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.StoreAndInstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _124.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _121.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _120.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: string | number | import("long");
                    timeoutTimestamp?: string | number | import("long");
                    data?: Uint8Array;
                }): _120.MsgIBCSend;
            };
            MsgIBCSendResponse: {
                encode(message: _120.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgIBCSendResponse;
                fromPartial(object: {
                    sequence?: string | number | import("long");
                }): _120.MsgIBCSendResponse;
            };
            MsgIBCCloseChannel: {
                encode(message: _120.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _120.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _119.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.GenesisState;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _124.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _124.AccessType;
                    };
                    codes?: {
                        codeId?: string | number | import("long");
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _124.AccessType;
                                address?: string;
                                addresses?: string[];
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
                        contractCodeHistory?: {
                            operation?: _124.ContractCodeHistoryOperationType;
                            codeId?: string | number | import("long");
                            updated?: {
                                blockHeight?: string | number | import("long");
                                txIndex?: string | number | import("long");
                            };
                            msg?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string | number | import("long");
                    }[];
                }): _119.GenesisState;
            };
            Code: {
                encode(message: _119.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Code;
                fromPartial(object: {
                    codeId?: string | number | import("long");
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _124.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _119.Code;
            };
            Contract: {
                encode(message: _119.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Contract;
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
                    contractCodeHistory?: {
                        operation?: _124.ContractCodeHistoryOperationType;
                        codeId?: string | number | import("long");
                        updated?: {
                            blockHeight?: string | number | import("long");
                            txIndex?: string | number | import("long");
                        };
                        msg?: Uint8Array;
                    }[];
                }): _119.Contract;
            };
            Sequence: {
                encode(message: _119.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: string | number | import("long");
                }): _119.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _118.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ContractExecutionAuthorization;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        filter?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _118.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _118.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ContractMigrationAuthorization;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        filter?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _118.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _118.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ContractGrant;
                fromPartial(object: {
                    contract?: string;
                    limit?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    filter?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _118.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _118.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MaxCallsLimit;
                fromPartial(object: {
                    remaining?: string | number | import("long");
                }): _118.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _118.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.MaxFundsLimit;
                fromPartial(object: {
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _118.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _118.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.CombinedLimit;
                fromPartial(object: {
                    callsRemaining?: string | number | import("long");
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _118.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _118.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.AllowAllMessagesFilter;
                fromPartial(_: {}): _118.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _118.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.AcceptedMessageKeysFilter;
                fromPartial(object: {
                    keys?: string[];
                }): _118.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _118.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.AcceptedMessagesFilter;
                fromPartial(object: {
                    messages?: Uint8Array[];
                }): _118.AcceptedMessagesFilter;
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
            cosmwasm: {
                wasm: {
                    v1: _400.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _122.QueryContractInfoRequest): Promise<_122.QueryContractInfoResponse>;
                        contractHistory(request: _122.QueryContractHistoryRequest): Promise<_122.QueryContractHistoryResponse>;
                        contractsByCode(request: _122.QueryContractsByCodeRequest): Promise<_122.QueryContractsByCodeResponse>;
                        allContractState(request: _122.QueryAllContractStateRequest): Promise<_122.QueryAllContractStateResponse>;
                        rawContractState(request: _122.QueryRawContractStateRequest): Promise<_122.QueryRawContractStateResponse>;
                        smartContractState(request: _122.QuerySmartContractStateRequest): Promise<_122.QuerySmartContractStateResponse>;
                        code(request: _122.QueryCodeRequest): Promise<_122.QueryCodeResponse>;
                        codes(request?: _122.QueryCodesRequest): Promise<_122.QueryCodesResponse>;
                        pinnedCodes(request?: _122.QueryPinnedCodesRequest): Promise<_122.QueryPinnedCodesResponse>;
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                        contractsByCreator(request: _122.QueryContractsByCreatorRequest): Promise<_122.QueryContractsByCreatorResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: _398.LCDQueryClient;
                };
            };
        }>;
    };
}

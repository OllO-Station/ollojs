import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ethermintAminoConverters: {
    "/ethermint.feemarket.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./feemarket/v1/tx").MsgUpdateParams) => {
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
        }) => import("./feemarket/v1/tx").MsgUpdateParams;
    };
    "/ethermint.evm.v1.MsgEthereumTx": {
        aminoType: string;
        toAmino: ({ data, size, hash, from }: import("./evm/v1/tx").MsgEthereumTx) => {
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
        }) => import("./evm/v1/tx").MsgEthereumTx;
    };
    "/ethermint.evm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./evm/v1/tx").MsgUpdateParams) => {
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
        }) => import("./evm/v1/tx").MsgUpdateParams;
    };
};
export declare const ethermintProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningEthermintClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningEthermintClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;

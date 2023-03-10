import { AminoMsg } from "@cosmjs/amino";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export interface AminoMsgEthereumTx extends AminoMsg {
    type: "/ethermint.evm.v1.MsgEthereumTx";
    value: {
        data: {
            type_url: string;
            value: Uint8Array;
        };
        size: number;
        hash: string;
        from: string;
    };
}
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "/ethermint.evm.v1.MsgUpdateParams";
    value: {
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
}
export declare const AminoConverter: {
    "/ethermint.evm.v1.MsgEthereumTx": {
        aminoType: string;
        toAmino: ({ data, size, hash, from }: MsgEthereumTx) => AminoMsgEthereumTx["value"];
        fromAmino: ({ data, size, hash, from }: AminoMsgEthereumTx["value"]) => MsgEthereumTx;
    };
    "/ethermint.evm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};

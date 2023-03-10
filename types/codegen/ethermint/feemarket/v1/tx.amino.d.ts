import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface AminoMsgUpdateParams extends AminoMsg {
    type: "/ethermint.feemarket.v1.MsgUpdateParams";
    value: {
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
}
export declare const AminoConverter: {
    "/ethermint.feemarket.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => AminoMsgUpdateParams["value"];
        fromAmino: ({ authority, params }: AminoMsgUpdateParams["value"]) => MsgUpdateParams;
    };
};

import { AminoMsg } from "@cosmjs/amino";
import { MsgPricesData } from "./tx";
export interface AminoMsgPricesData extends AminoMsg {
    type: "/ollo.oracle.MsgPricesData";
    value: {
        creator: string;
        oracle_script_id: string;
        source_channel: string;
        calldata: {
            symbols: string[];
            multiplier: string;
        };
        ask_count: string;
        min_count: string;
        fee_limit: {
            denom: string;
            amount: string;
        }[];
        prepare_gas: string;
        execute_gas: string;
        client_id: string;
    };
}
export declare const AminoConverter: {
    "/ollo.oracle.MsgPricesData": {
        aminoType: string;
        toAmino: ({ creator, oracleScriptId, sourceChannel, calldata, askCount, minCount, feeLimit, prepareGas, executeGas, clientId }: MsgPricesData) => AminoMsgPricesData["value"];
        fromAmino: ({ creator, oracle_script_id, source_channel, calldata, ask_count, min_count, fee_limit, prepare_gas, execute_gas, client_id }: AminoMsgPricesData["value"]) => MsgPricesData;
    };
};

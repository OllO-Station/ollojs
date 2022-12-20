import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../helpers";
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
export const AminoConverter = {
  "/ollo.oracle.MsgPricesData": {
    aminoType: "/ollo.oracle.MsgPricesData",
    toAmino: ({
      creator,
      oracleScriptId,
      sourceChannel,
      calldata,
      askCount,
      minCount,
      feeLimit,
      prepareGas,
      executeGas,
      clientId
    }: MsgPricesData): AminoMsgPricesData["value"] => {
      return {
        creator,
        oracle_script_id: oracleScriptId.toString(),
        source_channel: sourceChannel,
        calldata: {
          symbols: calldata.symbols,
          multiplier: calldata.multiplier.toString()
        },
        ask_count: askCount.toString(),
        min_count: minCount.toString(),
        fee_limit: feeLimit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        prepare_gas: prepareGas.toString(),
        execute_gas: executeGas.toString(),
        client_id: clientId
      };
    },
    fromAmino: ({
      creator,
      oracle_script_id,
      source_channel,
      calldata,
      ask_count,
      min_count,
      fee_limit,
      prepare_gas,
      execute_gas,
      client_id
    }: AminoMsgPricesData["value"]): MsgPricesData => {
      return {
        creator,
        oracleScriptId: Long.fromString(oracle_script_id),
        sourceChannel: source_channel,
        calldata: {
          symbols: calldata.symbols,
          multiplier: Long.fromString(calldata.multiplier)
        },
        askCount: Long.fromString(ask_count),
        minCount: Long.fromString(min_count),
        feeLimit: fee_limit.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        prepareGas: Long.fromString(prepare_gas),
        executeGas: Long.fromString(execute_gas),
        clientId: client_id
      };
    }
  }
};
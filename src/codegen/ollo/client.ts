import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as olloClaimTxRegistry from "./claim/tx.registry";
import * as olloLiquidityTxRegistry from "./liquidity/tx.registry";
import * as olloLoanTxRegistry from "./loan/tx.registry";
import * as olloOnsTxRegistry from "./ons/tx.registry";
import * as olloOracleTxRegistry from "./oracle/tx.registry";
import * as olloClaimTxAmino from "./claim/tx.amino";
import * as olloLiquidityTxAmino from "./liquidity/tx.amino";
import * as olloLoanTxAmino from "./loan/tx.amino";
import * as olloOnsTxAmino from "./ons/tx.amino";
import * as olloOracleTxAmino from "./oracle/tx.amino";
export const olloAminoConverters = { ...olloClaimTxAmino.AminoConverter,
  ...olloLiquidityTxAmino.AminoConverter,
  ...olloLoanTxAmino.AminoConverter,
  ...olloOnsTxAmino.AminoConverter,
  ...olloOracleTxAmino.AminoConverter
};
export const olloProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...olloClaimTxRegistry.registry, ...olloLiquidityTxRegistry.registry, ...olloLoanTxRegistry.registry, ...olloOnsTxRegistry.registry, ...olloOracleTxRegistry.registry];
export const getSigningOlloClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...olloProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...olloAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOlloClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningOlloClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};
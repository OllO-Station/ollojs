import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as olloClaimV1TxRegistry from "./claim/v1/tx.registry";
import * as olloFarmingV1TxRegistry from "./farming/v1/tx.registry";
import * as olloGrantsV1TxRegistry from "./grants/v1/tx.registry";
import * as olloLiquidityV1TxRegistry from "./liquidity/v1/tx.registry";
import * as olloLoanV1TxRegistry from "./loan/v1/tx.registry";
import * as olloNftV1TxRegistry from "./nft/v1/tx.registry";
import * as olloOnsV1TxRegistry from "./ons/v1/tx.registry";
import * as olloReserveV1TxRegistry from "./reserve/v1/tx.registry";
import * as olloTokenV1TxRegistry from "./token/v1/tx.registry";
import * as olloClaimV1TxAmino from "./claim/v1/tx.amino";
import * as olloFarmingV1TxAmino from "./farming/v1/tx.amino";
import * as olloGrantsV1TxAmino from "./grants/v1/tx.amino";
import * as olloLiquidityV1TxAmino from "./liquidity/v1/tx.amino";
import * as olloLoanV1TxAmino from "./loan/v1/tx.amino";
import * as olloNftV1TxAmino from "./nft/v1/tx.amino";
import * as olloOnsV1TxAmino from "./ons/v1/tx.amino";
import * as olloReserveV1TxAmino from "./reserve/v1/tx.amino";
import * as olloTokenV1TxAmino from "./token/v1/tx.amino";
export const olloAminoConverters = { ...olloClaimV1TxAmino.AminoConverter,
  ...olloFarmingV1TxAmino.AminoConverter,
  ...olloGrantsV1TxAmino.AminoConverter,
  ...olloLiquidityV1TxAmino.AminoConverter,
  ...olloLoanV1TxAmino.AminoConverter,
  ...olloNftV1TxAmino.AminoConverter,
  ...olloOnsV1TxAmino.AminoConverter,
  ...olloReserveV1TxAmino.AminoConverter,
  ...olloTokenV1TxAmino.AminoConverter
};
export const olloProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...olloClaimV1TxRegistry.registry, ...olloFarmingV1TxRegistry.registry, ...olloGrantsV1TxRegistry.registry, ...olloLiquidityV1TxRegistry.registry, ...olloLoanV1TxRegistry.registry, ...olloNftV1TxRegistry.registry, ...olloOnsV1TxRegistry.registry, ...olloReserveV1TxRegistry.registry, ...olloTokenV1TxRegistry.registry];
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
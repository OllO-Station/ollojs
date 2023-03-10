import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      orm: {
        query: {
          v1alpha1: (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    ollo: {
      claim: {
        v1: (await import("./claim/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      emissions: {
        v1: (await import("./emissions/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      epoch: {
        v1: (await import("./epoch/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      farming: {
        v1: (await import("./farming/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      fees: {
        v1: (await import("./fees/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      grants: {
        v1: (await import("./grants/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      icq: {
        v1: (await import("./icq/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      incentive: {
        v1: (await import("./incentive/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      liquidity: {
        v1: (await import("./liquidity/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      loan: {
        v1: (await import("./loan/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      lock: {
        v1: (await import("./lock/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      market: {
        v1: (await import("./market/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1: (await import("./mint/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1: (await import("./nft/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      ons: {
        v1: (await import("./ons/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      prices: {
        v1: (await import("./prices/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      ratelimit: {
        v1: (await import("./ratelimit/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      reserve: {
        v1: (await import("./reserve/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      token: {
        v1: (await import("./token/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      vault: {
        v1: (await import("./vault/v1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};
import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    ollo: {
      claim: {
        v1: new (await import("./claim/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      farming: {
        v1: new (await import("./farming/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      grants: {
        v1: new (await import("./grants/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      liquidity: {
        v1: new (await import("./liquidity/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      loan: {
        v1: new (await import("./loan/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      market: {
        v1: new (await import("./market/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1: new (await import("./mint/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      nft: {
        v1: new (await import("./nft/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      ons: {
        v1: new (await import("./ons/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      reserve: {
        v1: new (await import("./reserve/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      token: {
        v1: new (await import("./token/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};
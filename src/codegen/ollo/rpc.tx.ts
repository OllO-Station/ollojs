import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    consensus: {
      v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  ollo: {
    claim: {
      v1: new (await import("./claim/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    farming: {
      v1: new (await import("./farming/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    grants: {
      v1: new (await import("./grants/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    incentive: {
      v1: new (await import("./incentive/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    lend: {
      v1: new (await import("./lend/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    liquidity: {
      v1: new (await import("./liquidity/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    lock: {
      v1: new (await import("./lock/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    lstaking: {
      v1: new (await import("./lstaking/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    market: {
      v1: new (await import("./market/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    nft: {
      v1: new (await import("./nft/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    prices: {
      v1: new (await import("./prices/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    reserve: {
      v1: new (await import("./reserve/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    token: {
      v1: new (await import("./token/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});
import * as _1 from "../cosmos_proto/coin";
import * as _2 from "./base/v1beta1/coin";
import * as _3 from "../cosmos_proto/pagination";
import * as _4 from "./base/query/v1beta1/pagination";
import * as _5 from "./base/abci/v1beta1/abci";
import * as _6 from "./base/kv/v1beta1/kv";
import * as _7 from "./base/reflection/v1beta1/reflection";
import * as _8 from "./base/reflection/v2alpha1/reflection";
import * as _9 from "./base/snapshots/v1beta1/snapshot";
import * as _10 from "./base/store/v1beta1/commit_info";
import * as _11 from "./base/store/v1beta1/listening";
import * as _12 from "./base/tendermint/v1beta1/query";
import * as _13 from "./app/v1alpha1/config";
import * as _14 from "./app/v1alpha1/module";
import * as _15 from "./app/v1alpha1/query";
import * as _16 from "./auth/v1beta1/auth";
import * as _17 from "./auth/v1beta1/genesis";
import * as _18 from "./auth/v1beta1/query";
import * as _19 from "./authz/v1beta1/authz";
import * as _20 from "./authz/v1beta1/event";
import * as _21 from "./authz/v1beta1/genesis";
import * as _22 from "./authz/v1beta1/query";
import * as _23 from "./authz/v1beta1/tx";
import * as _24 from "./bank/v1beta1/authz";
import * as _25 from "./bank/v1beta1/bank";
import * as _26 from "./bank/v1beta1/genesis";
import * as _27 from "./bank/v1beta1/query";
import * as _28 from "./bank/v1beta1/tx";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _68 from "./msg/v1/msg";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _187 from "./authz/v1beta1/tx.amino";
import * as _188 from "./bank/v1beta1/tx.amino";
import * as _189 from "./crisis/v1beta1/tx.amino";
import * as _190 from "./distribution/v1beta1/tx.amino";
import * as _191 from "./evidence/v1beta1/tx.amino";
import * as _192 from "./feegrant/v1beta1/tx.amino";
import * as _193 from "./gov/v1/tx.amino";
import * as _194 from "./gov/v1beta1/tx.amino";
import * as _195 from "./group/v1/tx.amino";
import * as _196 from "./nft/v1beta1/tx.amino";
import * as _197 from "./slashing/v1beta1/tx.amino";
import * as _198 from "./staking/v1beta1/tx.amino";
import * as _199 from "./upgrade/v1beta1/tx.amino";
import * as _200 from "./vesting/v1beta1/tx.amino";
import * as _201 from "./authz/v1beta1/tx.registry";
import * as _202 from "./bank/v1beta1/tx.registry";
import * as _203 from "./crisis/v1beta1/tx.registry";
import * as _204 from "./distribution/v1beta1/tx.registry";
import * as _205 from "./evidence/v1beta1/tx.registry";
import * as _206 from "./feegrant/v1beta1/tx.registry";
import * as _207 from "./gov/v1/tx.registry";
import * as _208 from "./gov/v1beta1/tx.registry";
import * as _209 from "./group/v1/tx.registry";
import * as _210 from "./nft/v1beta1/tx.registry";
import * as _211 from "./slashing/v1beta1/tx.registry";
import * as _212 from "./staking/v1beta1/tx.registry";
import * as _213 from "./upgrade/v1beta1/tx.registry";
import * as _214 from "./vesting/v1beta1/tx.registry";
import * as _215 from "./auth/v1beta1/query.lcd";
import * as _216 from "./authz/v1beta1/query.lcd";
import * as _217 from "./bank/v1beta1/query.lcd";
import * as _218 from "./base/tendermint/v1beta1/query.lcd";
import * as _219 from "./distribution/v1beta1/query.lcd";
import * as _220 from "./evidence/v1beta1/query.lcd";
import * as _221 from "./feegrant/v1beta1/query.lcd";
import * as _222 from "./gov/v1/query.lcd";
import * as _223 from "./gov/v1beta1/query.lcd";
import * as _224 from "./group/v1/query.lcd";
import * as _225 from "./mint/v1beta1/query.lcd";
import * as _226 from "./nft/v1beta1/query.lcd";
import * as _227 from "./params/v1beta1/query.lcd";
import * as _228 from "./slashing/v1beta1/query.lcd";
import * as _229 from "./staking/v1beta1/query.lcd";
import * as _230 from "./tx/v1beta1/service.lcd";
import * as _231 from "./upgrade/v1beta1/query.lcd";
import * as _232 from "./app/v1alpha1/query.rpc.Query";
import * as _233 from "./auth/v1beta1/query.rpc.Query";
import * as _234 from "./authz/v1beta1/query.rpc.Query";
import * as _235 from "./bank/v1beta1/query.rpc.Query";
import * as _236 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _237 from "./distribution/v1beta1/query.rpc.Query";
import * as _238 from "./evidence/v1beta1/query.rpc.Query";
import * as _239 from "./feegrant/v1beta1/query.rpc.Query";
import * as _240 from "./gov/v1/query.rpc.Query";
import * as _241 from "./gov/v1beta1/query.rpc.Query";
import * as _242 from "./group/v1/query.rpc.Query";
import * as _243 from "./mint/v1beta1/query.rpc.Query";
import * as _244 from "./nft/v1beta1/query.rpc.Query";
import * as _245 from "./params/v1beta1/query.rpc.Query";
import * as _246 from "./slashing/v1beta1/query.rpc.Query";
import * as _247 from "./staking/v1beta1/query.rpc.Query";
import * as _248 from "./tx/v1beta1/service.rpc.Service";
import * as _249 from "./upgrade/v1beta1/query.rpc.Query";
import * as _250 from "./authz/v1beta1/tx.rpc.msg";
import * as _251 from "./bank/v1beta1/tx.rpc.msg";
import * as _252 from "./crisis/v1beta1/tx.rpc.msg";
import * as _253 from "./distribution/v1beta1/tx.rpc.msg";
import * as _254 from "./evidence/v1beta1/tx.rpc.msg";
import * as _255 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _256 from "./gov/v1/tx.rpc.msg";
import * as _257 from "./gov/v1beta1/tx.rpc.msg";
import * as _258 from "./group/v1/tx.rpc.msg";
import * as _259 from "./nft/v1beta1/tx.rpc.msg";
import * as _260 from "./slashing/v1beta1/tx.rpc.msg";
import * as _261 from "./staking/v1beta1/tx.rpc.msg";
import * as _262 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _263 from "./vesting/v1beta1/tx.rpc.msg";
import * as _321 from "./lcd";
import * as _322 from "./rpc.query";
import * as _323 from "./rpc.tx";
export namespace cosmos {
  export namespace base {
    export const v1beta1 = { ..._1,
      ..._2
    };
    export namespace query {
      export const v1beta1 = { ..._3,
        ..._4
      };
    }
    export namespace abci {
      export const v1beta1 = { ..._5
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._6
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._7
      };
      export const v2alpha1 = { ..._8
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._9
      };
    }
    export namespace store {
      export const v1beta1 = { ..._10,
        ..._11
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._12,
        ..._218,
        ..._236
      };
    }
  }
  export namespace app {
    export const v1alpha1 = { ..._13,
      ..._14,
      ..._15,
      ..._232
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._16,
      ..._17,
      ..._18,
      ..._215,
      ..._233
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._187,
      ..._201,
      ..._216,
      ..._234,
      ..._250
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._188,
      ..._202,
      ..._217,
      ..._235,
      ..._251
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._29,
      ..._30
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._31,
      ..._32,
      ..._189,
      ..._203,
      ..._252
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._33
    };
    export namespace hd {
      export const v1 = { ..._34
      };
    }
    export namespace keyring {
      export const v1 = { ..._35
      };
    }
    export const multisig = { ..._36
    };
    export const secp256k1 = { ..._37
    };
    export const secp256r1 = { ..._38
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._190,
      ..._204,
      ..._219,
      ..._237,
      ..._253
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._191,
      ..._205,
      ..._220,
      ..._238,
      ..._254
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._192,
      ..._206,
      ..._221,
      ..._239,
      ..._255
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._51
    };
  }
  export namespace gov {
    export const v1 = { ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._193,
      ..._207,
      ..._222,
      ..._240,
      ..._256
    };
    export const v1beta1 = { ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._194,
      ..._208,
      ..._223,
      ..._241,
      ..._257
    };
  }
  export namespace group {
    export const v1 = { ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._195,
      ..._209,
      ..._224,
      ..._242,
      ..._258
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._65,
      ..._66,
      ..._67,
      ..._225,
      ..._243
    };
  }
  export namespace msg {
    export const v1 = { ..._68
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._196,
      ..._210,
      ..._226,
      ..._244,
      ..._259
    };
  }
  export namespace orm {
    export const v1 = { ..._74
    };
    export const v1alpha1 = { ..._75
    };
  }
  export namespace params {
    export const v1beta1 = { ..._76,
      ..._77,
      ..._227,
      ..._245
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._197,
      ..._211,
      ..._228,
      ..._246,
      ..._260
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._198,
      ..._212,
      ..._229,
      ..._247,
      ..._261
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._87
      };
    }
    export const v1beta1 = { ..._88,
      ..._89,
      ..._230,
      ..._248
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._90,
      ..._91,
      ..._92,
      ..._199,
      ..._213,
      ..._231,
      ..._249,
      ..._262
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._93,
      ..._94,
      ..._200,
      ..._214,
      ..._263
    };
  }
  export const ClientFactory = { ..._321,
    ..._322,
    ..._323
  };
}
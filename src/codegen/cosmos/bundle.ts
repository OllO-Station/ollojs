import * as _1 from "../cosmos_proto/coin";
import * as _2 from "./base/v1beta1/coin";
import * as _3 from "../cosmos_proto/pagination";
import * as _4 from "./base/query/v1beta1/pagination";
import * as _5 from "./base/abci/v1beta1/abci";
import * as _6 from "./base/kv/v1beta1/kv";
import * as _7 from "./base/node/v1beta1/query";
import * as _8 from "./base/reflection/v1beta1/reflection";
import * as _9 from "./base/reflection/v2alpha1/reflection";
import * as _10 from "./base/snapshots/v1beta1/snapshot";
import * as _11 from "./base/store/v1beta1/commit_info";
import * as _12 from "./base/store/v1beta1/listening";
import * as _13 from "./base/tendermint/v1beta1/query";
import * as _14 from "./base/tendermint/v1beta1/types";
import * as _15 from "./app/runtime/v1alpha1/module";
import * as _16 from "./app/v1alpha1/config";
import * as _17 from "./app/v1alpha1/module";
import * as _18 from "./app/v1alpha1/query";
import * as _19 from "./auth/module/v1/module";
import * as _20 from "./auth/v1beta1/auth";
import * as _21 from "./auth/v1beta1/genesis";
import * as _22 from "./auth/v1beta1/query";
import * as _23 from "./auth/v1beta1/tx";
import * as _24 from "./authz/module/v1/module";
import * as _25 from "./authz/v1beta1/authz";
import * as _26 from "./authz/v1beta1/event";
import * as _27 from "./authz/v1beta1/genesis";
import * as _28 from "./authz/v1beta1/query";
import * as _29 from "./authz/v1beta1/tx";
import * as _30 from "./autocli/v1/options";
import * as _31 from "./bank/module/v1/module";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./capability/module/v1/module";
import * as _38 from "./capability/v1beta1/capability";
import * as _39 from "./capability/v1beta1/genesis";
import * as _40 from "./consensus/module/v1/module";
import * as _41 from "./consensus/v1/query";
import * as _42 from "./consensus/v1/tx";
import * as _43 from "./crisis/module/v1/module";
import * as _44 from "./crisis/v1beta1/genesis";
import * as _45 from "./crisis/v1beta1/tx";
import * as _46 from "./crypto/ed25519/keys";
import * as _47 from "./crypto/hd/v1/hd";
import * as _48 from "./crypto/keyring/v1/record";
import * as _49 from "./crypto/multisig/keys";
import * as _50 from "./crypto/secp256k1/keys";
import * as _51 from "./crypto/secp256r1/keys";
import * as _52 from "./distribution/module/v1/module";
import * as _53 from "./distribution/v1beta1/distribution";
import * as _54 from "./distribution/v1beta1/genesis";
import * as _55 from "./distribution/v1beta1/query";
import * as _56 from "./distribution/v1beta1/tx";
import * as _57 from "./evidence/module/v1/module";
import * as _58 from "./evidence/v1beta1/evidence";
import * as _59 from "./evidence/v1beta1/genesis";
import * as _60 from "./evidence/v1beta1/query";
import * as _61 from "./evidence/v1beta1/tx";
import * as _62 from "./feegrant/module/v1/module";
import * as _63 from "./feegrant/v1beta1/feegrant";
import * as _64 from "./feegrant/v1beta1/genesis";
import * as _65 from "./feegrant/v1beta1/query";
import * as _66 from "./feegrant/v1beta1/tx";
import * as _67 from "./genutil/module/v1/module";
import * as _68 from "./genutil/v1beta1/genesis";
import * as _69 from "./group/module/v1/module";
import * as _70 from "./group/v1/events";
import * as _71 from "./group/v1/genesis";
import * as _72 from "./group/v1/query";
import * as _73 from "./group/v1/tx";
import * as _74 from "./group/v1/types";
import * as _75 from "./mint/module/v1/module";
import * as _76 from "./mint/v1beta1/genesis";
import * as _77 from "./mint/v1beta1/mint";
import * as _78 from "./mint/v1beta1/query";
import * as _79 from "./mint/v1beta1/tx";
import * as _80 from "./msg/v1/msg";
import * as _81 from "./nft/module/v1/module";
import * as _82 from "./nft/v1beta1/event";
import * as _83 from "./nft/v1beta1/genesis";
import * as _84 from "./nft/v1beta1/nft";
import * as _85 from "./nft/v1beta1/query";
import * as _86 from "./nft/v1beta1/tx";
import * as _87 from "./orm/module/v1alpha1/module";
import * as _88 from "./orm/query/v1alpha1/query";
import * as _89 from "./orm/v1/orm";
import * as _90 from "./orm/v1alpha1/schema";
import * as _91 from "./params/module/v1/module";
import * as _92 from "./params/v1beta1/params";
import * as _93 from "./params/v1beta1/query";
import * as _94 from "./query/v1/query";
import * as _95 from "./slashing/module/v1/module";
import * as _96 from "./slashing/v1beta1/genesis";
import * as _97 from "./slashing/v1beta1/query";
import * as _98 from "./slashing/v1beta1/slashing";
import * as _99 from "./slashing/v1beta1/tx";
import * as _100 from "./staking/module/v1/module";
import * as _101 from "./staking/v1beta1/authz";
import * as _102 from "./staking/v1beta1/genesis";
import * as _103 from "./staking/v1beta1/query";
import * as _104 from "./staking/v1beta1/staking";
import * as _105 from "./staking/v1beta1/tx";
import * as _106 from "./tx/module/v1/module";
import * as _107 from "./tx/signing/v1beta1/signing";
import * as _108 from "./tx/v1beta1/service";
import * as _109 from "./tx/v1beta1/tx";
import * as _110 from "./upgrade/module/v1/module";
import * as _111 from "./upgrade/v1beta1/query";
import * as _112 from "./upgrade/v1beta1/tx";
import * as _113 from "./upgrade/v1beta1/upgrade";
import * as _114 from "./vesting/module/v1/module";
import * as _115 from "./vesting/v1beta1/tx";
import * as _116 from "./vesting/v1beta1/vesting";
import * as _345 from "./auth/v1beta1/tx.amino";
import * as _346 from "./authz/v1beta1/tx.amino";
import * as _347 from "./bank/v1beta1/tx.amino";
import * as _348 from "./consensus/v1/tx.amino";
import * as _349 from "./crisis/v1beta1/tx.amino";
import * as _350 from "./distribution/v1beta1/tx.amino";
import * as _351 from "./evidence/v1beta1/tx.amino";
import * as _352 from "./feegrant/v1beta1/tx.amino";
import * as _353 from "./group/v1/tx.amino";
import * as _354 from "./mint/v1beta1/tx.amino";
import * as _355 from "./nft/v1beta1/tx.amino";
import * as _356 from "./slashing/v1beta1/tx.amino";
import * as _357 from "./staking/v1beta1/tx.amino";
import * as _358 from "./upgrade/v1beta1/tx.amino";
import * as _359 from "./vesting/v1beta1/tx.amino";
import * as _360 from "./auth/v1beta1/tx.registry";
import * as _361 from "./authz/v1beta1/tx.registry";
import * as _362 from "./bank/v1beta1/tx.registry";
import * as _363 from "./consensus/v1/tx.registry";
import * as _364 from "./crisis/v1beta1/tx.registry";
import * as _365 from "./distribution/v1beta1/tx.registry";
import * as _366 from "./evidence/v1beta1/tx.registry";
import * as _367 from "./feegrant/v1beta1/tx.registry";
import * as _368 from "./group/v1/tx.registry";
import * as _369 from "./mint/v1beta1/tx.registry";
import * as _370 from "./nft/v1beta1/tx.registry";
import * as _371 from "./slashing/v1beta1/tx.registry";
import * as _372 from "./staking/v1beta1/tx.registry";
import * as _373 from "./upgrade/v1beta1/tx.registry";
import * as _374 from "./vesting/v1beta1/tx.registry";
import * as _375 from "./auth/v1beta1/query.lcd";
import * as _376 from "./authz/v1beta1/query.lcd";
import * as _377 from "./bank/v1beta1/query.lcd";
import * as _378 from "./base/node/v1beta1/query.lcd";
import * as _379 from "./base/tendermint/v1beta1/query.lcd";
import * as _380 from "./consensus/v1/query.lcd";
import * as _381 from "./distribution/v1beta1/query.lcd";
import * as _382 from "./evidence/v1beta1/query.lcd";
import * as _383 from "./feegrant/v1beta1/query.lcd";
import * as _384 from "./group/v1/query.lcd";
import * as _385 from "./mint/v1beta1/query.lcd";
import * as _386 from "./nft/v1beta1/query.lcd";
import * as _387 from "./params/v1beta1/query.lcd";
import * as _388 from "./slashing/v1beta1/query.lcd";
import * as _389 from "./staking/v1beta1/query.lcd";
import * as _390 from "./tx/v1beta1/service.lcd";
import * as _391 from "./upgrade/v1beta1/query.lcd";
import * as _392 from "./app/v1alpha1/query.rpc.Query";
import * as _393 from "./auth/v1beta1/query.rpc.Query";
import * as _394 from "./authz/v1beta1/query.rpc.Query";
import * as _395 from "./bank/v1beta1/query.rpc.Query";
import * as _396 from "./base/node/v1beta1/query.rpc.Service";
import * as _397 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _398 from "./consensus/v1/query.rpc.Query";
import * as _399 from "./distribution/v1beta1/query.rpc.Query";
import * as _400 from "./evidence/v1beta1/query.rpc.Query";
import * as _401 from "./feegrant/v1beta1/query.rpc.Query";
import * as _402 from "./group/v1/query.rpc.Query";
import * as _403 from "./mint/v1beta1/query.rpc.Query";
import * as _404 from "./nft/v1beta1/query.rpc.Query";
import * as _405 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _406 from "./params/v1beta1/query.rpc.Query";
import * as _407 from "./slashing/v1beta1/query.rpc.Query";
import * as _408 from "./staking/v1beta1/query.rpc.Query";
import * as _409 from "./tx/v1beta1/service.rpc.Service";
import * as _410 from "./upgrade/v1beta1/query.rpc.Query";
import * as _411 from "./auth/v1beta1/tx.rpc.msg";
import * as _412 from "./authz/v1beta1/tx.rpc.msg";
import * as _413 from "./bank/v1beta1/tx.rpc.msg";
import * as _414 from "./consensus/v1/tx.rpc.msg";
import * as _415 from "./crisis/v1beta1/tx.rpc.msg";
import * as _416 from "./distribution/v1beta1/tx.rpc.msg";
import * as _417 from "./evidence/v1beta1/tx.rpc.msg";
import * as _418 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _419 from "./group/v1/tx.rpc.msg";
import * as _420 from "./mint/v1beta1/tx.rpc.msg";
import * as _421 from "./nft/v1beta1/tx.rpc.msg";
import * as _422 from "./slashing/v1beta1/tx.rpc.msg";
import * as _423 from "./staking/v1beta1/tx.rpc.msg";
import * as _424 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _425 from "./vesting/v1beta1/tx.rpc.msg";
import * as _550 from "./lcd";
import * as _551 from "./rpc.query";
import * as _552 from "./rpc.tx";
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
    export namespace node {
      export const v1beta1 = { ..._7,
        ..._378,
        ..._396
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._8
      };
      export const v2alpha1 = { ..._9
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._10
      };
    }
    export namespace store {
      export const v1beta1 = { ..._11,
        ..._12
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._13,
        ..._14,
        ..._379,
        ..._397
      };
    }
  }
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = { ..._15
      };
    }
    export const v1alpha1 = { ..._16,
      ..._17,
      ..._18,
      ..._392
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = { ..._19
      };
    }
    export const v1beta1 = { ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._345,
      ..._360,
      ..._375,
      ..._393,
      ..._411
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = { ..._24
      };
    }
    export const v1beta1 = { ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._346,
      ..._361,
      ..._376,
      ..._394,
      ..._412
    };
  }
  export namespace autocli {
    export const v1 = { ..._30
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = { ..._31
      };
    }
    export const v1beta1 = { ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._347,
      ..._362,
      ..._377,
      ..._395,
      ..._413
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = { ..._37
      };
    }
    export const v1beta1 = { ..._38,
      ..._39
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = { ..._40
      };
    }
    export const v1 = { ..._41,
      ..._42,
      ..._348,
      ..._363,
      ..._380,
      ..._398,
      ..._414
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = { ..._43
      };
    }
    export const v1beta1 = { ..._44,
      ..._45,
      ..._349,
      ..._364,
      ..._415
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._46
    };
    export namespace hd {
      export const v1 = { ..._47
      };
    }
    export namespace keyring {
      export const v1 = { ..._48
      };
    }
    export const multisig = { ..._49
    };
    export const secp256k1 = { ..._50
    };
    export const secp256r1 = { ..._51
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = { ..._52
      };
    }
    export const v1beta1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._350,
      ..._365,
      ..._381,
      ..._399,
      ..._416
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = { ..._57
      };
    }
    export const v1beta1 = { ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._351,
      ..._366,
      ..._382,
      ..._400,
      ..._417
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = { ..._62
      };
    }
    export const v1beta1 = { ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._352,
      ..._367,
      ..._383,
      ..._401,
      ..._418
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = { ..._67
      };
    }
    export const v1beta1 = { ..._68
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = { ..._69
      };
    }
    export const v1 = { ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._353,
      ..._368,
      ..._384,
      ..._402,
      ..._419
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = { ..._75
      };
    }
    export const v1beta1 = { ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._354,
      ..._369,
      ..._385,
      ..._403,
      ..._420
    };
  }
  export namespace msg {
    export const v1 = { ..._80
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = { ..._81
      };
    }
    export const v1beta1 = { ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._355,
      ..._370,
      ..._386,
      ..._404,
      ..._421
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._87
      };
    }
    export namespace query {
      export const v1alpha1 = { ..._88,
        ..._405
      };
    }
    export const v1 = { ..._89
    };
    export const v1alpha1 = { ..._90
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = { ..._91
      };
    }
    export const v1beta1 = { ..._92,
      ..._93,
      ..._387,
      ..._406
    };
  }
  export namespace query {
    export const v1 = { ..._94
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = { ..._95
      };
    }
    export const v1beta1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._356,
      ..._371,
      ..._388,
      ..._407,
      ..._422
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = { ..._100
      };
    }
    export const v1beta1 = { ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._357,
      ..._372,
      ..._389,
      ..._408,
      ..._423
    };
  }
  export namespace tx {
    export namespace module {
      export const v1 = { ..._106
      };
    }
    export namespace signing {
      export const v1beta1 = { ..._107
      };
    }
    export const v1beta1 = { ..._108,
      ..._109,
      ..._390,
      ..._409
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = { ..._110
      };
    }
    export const v1beta1 = { ..._111,
      ..._112,
      ..._113,
      ..._358,
      ..._373,
      ..._391,
      ..._410,
      ..._424
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = { ..._114
      };
    }
    export const v1beta1 = { ..._115,
      ..._116,
      ..._359,
      ..._374,
      ..._425
    };
  }
  export const ClientFactory = { ..._550,
    ..._551,
    ..._552
  };
}
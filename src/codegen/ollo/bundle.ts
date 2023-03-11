import * as _172 from "./auth/v1/auth";
import * as _173 from "./auth/v1/events";
import * as _174 from "./auth/v1/genesis";
import * as _175 from "./auth/v1/params";
import * as _176 from "./auth/v1/query";
import * as _177 from "./auth/v1/tx";
import * as _178 from "./claim/v1/claim";
import * as _179 from "./claim/v1/events";
import * as _180 from "./claim/v1/genesis";
import * as _181 from "./claim/v1/goal";
import * as _182 from "./claim/v1/params";
import * as _183 from "./claim/v1/query";
import * as _184 from "./claim/v1/tx";
import * as _185 from "./emissions/v1/emissions";
import * as _186 from "./emissions/v1/genesis";
import * as _187 from "./emissions/v1/params";
import * as _188 from "./emissions/v1/query";
import * as _189 from "./emissions/v1/tx";
import * as _190 from "./epoch/v1/epoch";
import * as _191 from "./epoch/v1/events";
import * as _192 from "./epoch/v1/genesis";
import * as _193 from "./epoch/v1/query";
import * as _194 from "./farming/v1/events";
import * as _195 from "./farming/v1/farming";
import * as _196 from "./farming/v1/genesis";
import * as _197 from "./farming/v1/params";
import * as _198 from "./farming/v1/proposal";
import * as _199 from "./farming/v1/query";
import * as _200 from "./farming/v1/tx";
import * as _201 from "./fees/v1/fees";
import * as _202 from "./fees/v1/genesis";
import * as _203 from "./fees/v1/params";
import * as _204 from "./fees/v1/proprosal";
import * as _205 from "./fees/v1/query";
import * as _206 from "./grants/v1/events";
import * as _207 from "./grants/v1/genesis";
import * as _208 from "./grants/v1/grants";
import * as _209 from "./grants/v1/params";
import * as _210 from "./grants/v1/query";
import * as _211 from "./grants/v1/tx";
import * as _212 from "./icq/v1/events";
import * as _213 from "./icq/v1/genesis";
import * as _214 from "./icq/v1/icq";
import * as _215 from "./icq/v1/packet";
import * as _216 from "./icq/v1/params";
import * as _217 from "./icq/v1/query";
import * as _218 from "./icq/v1/tx";
import * as _219 from "./incentive/v1/deposit";
import * as _220 from "./incentive/v1/events";
import * as _221 from "./incentive/v1/genesis";
import * as _222 from "./incentive/v1/incentive";
import * as _223 from "./incentive/v1/mm";
import * as _224 from "./incentive/v1/params";
import * as _225 from "./incentive/v1/proprosal";
import * as _226 from "./incentive/v1/query";
import * as _227 from "./incentive/v1/tx";
import * as _228 from "./lend/v1/borrow";
import * as _229 from "./lend/v1/events";
import * as _230 from "./lend/v1/genesis";
import * as _231 from "./lend/v1/loan";
import * as _232 from "./lend/v1/params";
import * as _233 from "./lend/v1/proprosal";
import * as _234 from "./lend/v1/query";
import * as _235 from "./lend/v1/tx";
import * as _236 from "./liquidity/v1/basic";
import * as _237 from "./liquidity/v1/events";
import * as _238 from "./liquidity/v1/genesis";
import * as _239 from "./liquidity/v1/liquidity";
import * as _240 from "./liquidity/v1/order";
import * as _241 from "./liquidity/v1/pair";
import * as _242 from "./liquidity/v1/params";
import * as _243 from "./liquidity/v1/pool";
import * as _244 from "./liquidity/v1/proprosal";
import * as _245 from "./liquidity/v1/query";
import * as _246 from "./liquidity/v1/ranged";
import * as _247 from "./liquidity/v1/tx";
import * as _248 from "./lock/v1/events";
import * as _249 from "./lock/v1/genesis";
import * as _250 from "./lock/v1/lock";
import * as _251 from "./lock/v1/params";
import * as _252 from "./lock/v1/query";
import * as _253 from "./lock/v1/tx";
import * as _254 from "./market/v1/genesis";
import * as _255 from "./market/v1/packet";
import * as _256 from "./market/v1/params";
import * as _257 from "./market/v1/query";
import * as _258 from "./market/v1/tx";
import * as _259 from "./mint/v1/events";
import * as _260 from "./mint/v1/genesis";
import * as _261 from "./mint/v1/mint";
import * as _262 from "./mint/v1/params";
import * as _263 from "./mint/v1/query";
import * as _264 from "./mint/v1/tx";
import * as _265 from "./nft/v1/genesis";
import * as _266 from "./nft/v1/nft";
import * as _267 from "./nft/v1/params";
import * as _268 from "./nft/v1/query";
import * as _269 from "./nft/v1/tx";
import * as _270 from "./ons/v1/did";
import * as _271 from "./ons/v1/event";
import * as _272 from "./ons/v1/genesis";
import * as _273 from "./ons/v1/listing";
import * as _274 from "./ons/v1/ons";
import * as _275 from "./ons/v1/packet";
import * as _276 from "./ons/v1/params";
import * as _277 from "./ons/v1/proprosal";
import * as _278 from "./ons/v1/query";
import * as _279 from "./ons/v1/thread";
import * as _280 from "./ons/v1/tx";
import * as _281 from "./ons/v1/whois";
import * as _282 from "./prices/v1/band";
import * as _283 from "./prices/v1/events";
import * as _284 from "./prices/v1/feed";
import * as _285 from "./prices/v1/genesis";
import * as _286 from "./prices/v1/packet";
import * as _287 from "./prices/v1/params";
import * as _288 from "./prices/v1/prices";
import * as _289 from "./prices/v1/query";
import * as _290 from "./prices/v1/tx";
import * as _291 from "./ratelimit/v1/events";
import * as _292 from "./ratelimit/v1/genesis";
import * as _293 from "./ratelimit/v1/params";
import * as _294 from "./ratelimit/v1/query";
import * as _295 from "./reserve/v1/events";
import * as _296 from "./reserve/v1/genesis";
import * as _297 from "./reserve/v1/metadata";
import * as _298 from "./reserve/v1/params";
import * as _299 from "./reserve/v1/query";
import * as _300 from "./reserve/v1/reserve";
import * as _301 from "./reserve/v1/tx";
import * as _302 from "./token/v1/genesis";
import * as _303 from "./token/v1/params";
import * as _304 from "./token/v1/query";
import * as _305 from "./token/v1/token";
import * as _306 from "./token/v1/tx";
import * as _307 from "./vault/v1/events";
import * as _308 from "./vault/v1/genesis";
import * as _309 from "./vault/v1/params";
import * as _310 from "./vault/v1/query";
import * as _311 from "./vault/v1/tx";
import * as _312 from "./vault/v1/vault";
import * as _441 from "./auth/v1/tx.amino";
import * as _442 from "./claim/v1/tx.amino";
import * as _443 from "./emissions/v1/tx.amino";
import * as _444 from "./farming/v1/tx.amino";
import * as _445 from "./grants/v1/tx.amino";
import * as _446 from "./incentive/v1/tx.amino";
import * as _447 from "./lend/v1/tx.amino";
import * as _448 from "./liquidity/v1/tx.amino";
import * as _449 from "./lock/v1/tx.amino";
import * as _450 from "./nft/v1/tx.amino";
import * as _451 from "./ons/v1/tx.amino";
import * as _452 from "./prices/v1/tx.amino";
import * as _453 from "./reserve/v1/tx.amino";
import * as _454 from "./token/v1/tx.amino";
import * as _455 from "./vault/v1/tx.amino";
import * as _456 from "./auth/v1/tx.registry";
import * as _457 from "./claim/v1/tx.registry";
import * as _458 from "./emissions/v1/tx.registry";
import * as _459 from "./farming/v1/tx.registry";
import * as _460 from "./grants/v1/tx.registry";
import * as _461 from "./incentive/v1/tx.registry";
import * as _462 from "./lend/v1/tx.registry";
import * as _463 from "./liquidity/v1/tx.registry";
import * as _464 from "./lock/v1/tx.registry";
import * as _465 from "./nft/v1/tx.registry";
import * as _466 from "./ons/v1/tx.registry";
import * as _467 from "./prices/v1/tx.registry";
import * as _468 from "./reserve/v1/tx.registry";
import * as _469 from "./token/v1/tx.registry";
import * as _470 from "./vault/v1/tx.registry";
import * as _471 from "./auth/v1/query.lcd";
import * as _472 from "./claim/v1/query.lcd";
import * as _473 from "./emissions/v1/query.lcd";
import * as _474 from "./epoch/v1/query.lcd";
import * as _475 from "./farming/v1/query.lcd";
import * as _476 from "./fees/v1/query.lcd";
import * as _477 from "./grants/v1/query.lcd";
import * as _478 from "./icq/v1/query.lcd";
import * as _479 from "./incentive/v1/query.lcd";
import * as _480 from "./lend/v1/query.lcd";
import * as _481 from "./liquidity/v1/query.lcd";
import * as _482 from "./lock/v1/query.lcd";
import * as _483 from "./market/v1/query.lcd";
import * as _484 from "./mint/v1/query.lcd";
import * as _485 from "./nft/v1/query.lcd";
import * as _486 from "./ons/v1/query.lcd";
import * as _487 from "./prices/v1/query.lcd";
import * as _488 from "./ratelimit/v1/query.lcd";
import * as _489 from "./reserve/v1/query.lcd";
import * as _490 from "./token/v1/query.lcd";
import * as _491 from "./vault/v1/query.lcd";
import * as _492 from "./auth/v1/query.rpc.Query";
import * as _493 from "./claim/v1/query.rpc.Query";
import * as _494 from "./emissions/v1/query.rpc.Query";
import * as _495 from "./epoch/v1/query.rpc.Query";
import * as _496 from "./farming/v1/query.rpc.Query";
import * as _497 from "./fees/v1/query.rpc.Query";
import * as _498 from "./grants/v1/query.rpc.Query";
import * as _499 from "./icq/v1/query.rpc.Query";
import * as _500 from "./incentive/v1/query.rpc.Query";
import * as _501 from "./lend/v1/query.rpc.Query";
import * as _502 from "./liquidity/v1/query.rpc.Query";
import * as _503 from "./lock/v1/query.rpc.Query";
import * as _504 from "./market/v1/query.rpc.Query";
import * as _505 from "./mint/v1/query.rpc.Query";
import * as _506 from "./nft/v1/query.rpc.Query";
import * as _507 from "./ons/v1/query.rpc.Query";
import * as _508 from "./prices/v1/query.rpc.Query";
import * as _509 from "./ratelimit/v1/query.rpc.Query";
import * as _510 from "./reserve/v1/query.rpc.Query";
import * as _511 from "./token/v1/query.rpc.Query";
import * as _512 from "./vault/v1/query.rpc.Query";
import * as _513 from "./auth/v1/tx.rpc.msg";
import * as _514 from "./claim/v1/tx.rpc.msg";
import * as _515 from "./emissions/v1/tx.rpc.msg";
import * as _516 from "./farming/v1/tx.rpc.msg";
import * as _517 from "./grants/v1/tx.rpc.msg";
import * as _518 from "./incentive/v1/tx.rpc.msg";
import * as _519 from "./lend/v1/tx.rpc.msg";
import * as _520 from "./liquidity/v1/tx.rpc.msg";
import * as _521 from "./lock/v1/tx.rpc.msg";
import * as _522 from "./nft/v1/tx.rpc.msg";
import * as _523 from "./ons/v1/tx.rpc.msg";
import * as _524 from "./prices/v1/tx.rpc.msg";
import * as _525 from "./reserve/v1/tx.rpc.msg";
import * as _526 from "./token/v1/tx.rpc.msg";
import * as _527 from "./vault/v1/tx.rpc.msg";
import * as _540 from "./lcd";
import * as _541 from "./rpc.query";
import * as _542 from "./rpc.tx";
export namespace ollo {
  export namespace auth {
    export const v1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._441,
      ..._456,
      ..._471,
      ..._492,
      ..._513
    };
  }
  export namespace claim {
    export const v1 = { ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._184,
      ..._442,
      ..._457,
      ..._472,
      ..._493,
      ..._514
    };
  }
  export namespace emissions {
    export const v1 = { ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._443,
      ..._458,
      ..._473,
      ..._494,
      ..._515
    };
  }
  export namespace epoch {
    export const v1 = { ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._474,
      ..._495
    };
  }
  export namespace farming {
    export const v1 = { ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._444,
      ..._459,
      ..._475,
      ..._496,
      ..._516
    };
  }
  export namespace fees {
    export const v1 = { ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._476,
      ..._497
    };
  }
  export namespace grants {
    export const v1 = { ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._445,
      ..._460,
      ..._477,
      ..._498,
      ..._517
    };
  }
  export namespace icq {
    export const v1 = { ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._478,
      ..._499
    };
  }
  export namespace incentive {
    export const v1 = { ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._446,
      ..._461,
      ..._479,
      ..._500,
      ..._518
    };
  }
  export namespace lend {
    export const v1 = { ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._447,
      ..._462,
      ..._480,
      ..._501,
      ..._519
    };
  }
  export namespace liquidity {
    export const v1 = { ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._448,
      ..._463,
      ..._481,
      ..._502,
      ..._520
    };
  }
  export namespace lock {
    export const v1 = { ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._449,
      ..._464,
      ..._482,
      ..._503,
      ..._521
    };
  }
  export namespace market {
    export const v1 = { ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._483,
      ..._504
    };
  }
  export namespace mint {
    export const v1 = { ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._484,
      ..._505
    };
  }
  export namespace nft {
    export const v1 = { ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._450,
      ..._465,
      ..._485,
      ..._506,
      ..._522
    };
  }
  export namespace ons {
    export const v1 = { ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._280,
      ..._281,
      ..._451,
      ..._466,
      ..._486,
      ..._507,
      ..._523
    };
  }
  export namespace prices {
    export const v1 = { ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._287,
      ..._288,
      ..._289,
      ..._290,
      ..._452,
      ..._467,
      ..._487,
      ..._508,
      ..._524
    };
  }
  export namespace ratelimit {
    export const v1 = { ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._488,
      ..._509
    };
  }
  export namespace reserve {
    export const v1 = { ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._453,
      ..._468,
      ..._489,
      ..._510,
      ..._525
    };
  }
  export namespace token {
    export const v1 = { ..._302,
      ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._454,
      ..._469,
      ..._490,
      ..._511,
      ..._526
    };
  }
  export namespace vault {
    export const v1 = { ..._307,
      ..._308,
      ..._309,
      ..._310,
      ..._311,
      ..._312,
      ..._455,
      ..._470,
      ..._491,
      ..._512,
      ..._527
    };
  }
  export const ClientFactory = { ..._540,
    ..._541,
    ..._542
  };
}
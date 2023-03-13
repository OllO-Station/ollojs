import * as _172 from "./claim/v1/claim";
import * as _173 from "./claim/v1/events";
import * as _174 from "./claim/v1/genesis";
import * as _175 from "./claim/v1/goal";
import * as _176 from "./claim/v1/params";
import * as _177 from "./claim/v1/query";
import * as _178 from "./claim/v1/tx";
import * as _179 from "./emissions/v1/emissions";
import * as _180 from "./emissions/v1/genesis";
import * as _181 from "./emissions/v1/params";
import * as _182 from "./emissions/v1/query";
import * as _183 from "./emissions/v1/tx";
import * as _184 from "./epoch/v1/epoch";
import * as _185 from "./epoch/v1/events";
import * as _186 from "./epoch/v1/genesis";
import * as _187 from "./epoch/v1/query";
import * as _188 from "./farming/v1/events";
import * as _189 from "./farming/v1/farming";
import * as _190 from "./farming/v1/genesis";
import * as _191 from "./farming/v1/params";
import * as _192 from "./farming/v1/proposal";
import * as _193 from "./farming/v1/query";
import * as _194 from "./farming/v1/tx";
import * as _195 from "./fees/v1/fees";
import * as _196 from "./fees/v1/genesis";
import * as _197 from "./fees/v1/params";
import * as _198 from "./fees/v1/proprosal";
import * as _199 from "./fees/v1/query";
import * as _200 from "./grants/v1/events";
import * as _201 from "./grants/v1/genesis";
import * as _202 from "./grants/v1/grants";
import * as _203 from "./grants/v1/params";
import * as _204 from "./grants/v1/query";
import * as _205 from "./grants/v1/tx";
import * as _206 from "./icq/v1/events";
import * as _207 from "./icq/v1/genesis";
import * as _208 from "./icq/v1/icq";
import * as _209 from "./icq/v1/packet";
import * as _210 from "./icq/v1/params";
import * as _211 from "./icq/v1/query";
import * as _212 from "./icq/v1/tx";
import * as _213 from "./incentive/v1/deposit";
import * as _214 from "./incentive/v1/events";
import * as _215 from "./incentive/v1/genesis";
import * as _216 from "./incentive/v1/incentive";
import * as _217 from "./incentive/v1/mm";
import * as _218 from "./incentive/v1/params";
import * as _219 from "./incentive/v1/proprosal";
import * as _220 from "./incentive/v1/query";
import * as _221 from "./incentive/v1/tx";
import * as _222 from "./lend/v1/borrow";
import * as _223 from "./lend/v1/events";
import * as _224 from "./lend/v1/genesis";
import * as _225 from "./lend/v1/loan";
import * as _226 from "./lend/v1/params";
import * as _227 from "./lend/v1/proprosal";
import * as _228 from "./lend/v1/query";
import * as _229 from "./lend/v1/tx";
import * as _230 from "./liquidity/v1/events";
import * as _231 from "./liquidity/v1/genesis";
import * as _232 from "./liquidity/v1/liquidity";
import * as _233 from "./liquidity/v1/order";
import * as _234 from "./liquidity/v1/pair";
import * as _235 from "./liquidity/v1/params";
import * as _236 from "./liquidity/v1/pool";
import * as _237 from "./liquidity/v1/proprosal";
import * as _238 from "./liquidity/v1/query";
import * as _239 from "./liquidity/v1/ranged";
import * as _240 from "./liquidity/v1/stable";
import * as _241 from "./liquidity/v1/tx";
import * as _242 from "./lock/v1/events";
import * as _243 from "./lock/v1/genesis";
import * as _244 from "./lock/v1/lock";
import * as _245 from "./lock/v1/params";
import * as _246 from "./lock/v1/query";
import * as _247 from "./lock/v1/tx";
import * as _248 from "./market/v1/events";
import * as _249 from "./market/v1/genesis";
import * as _250 from "./market/v1/listing";
import * as _251 from "./market/v1/market";
import * as _252 from "./market/v1/packet";
import * as _253 from "./market/v1/params";
import * as _254 from "./market/v1/proprosal";
import * as _255 from "./market/v1/query";
import * as _256 from "./market/v1/tx";
import * as _257 from "./mint/v1/events";
import * as _258 from "./mint/v1/genesis";
import * as _259 from "./mint/v1/mint";
import * as _260 from "./mint/v1/params";
import * as _261 from "./mint/v1/query";
import * as _262 from "./mint/v1/tx";
import * as _263 from "./nft/v1/events";
import * as _264 from "./nft/v1/genesis";
import * as _265 from "./nft/v1/nft";
import * as _266 from "./nft/v1/packet";
import * as _267 from "./nft/v1/params";
import * as _268 from "./nft/v1/query";
import * as _269 from "./nft/v1/tx";
import * as _270 from "./ons/v1/did";
import * as _271 from "./ons/v1/events";
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
import * as _289 from "./prices/v1/proprosal";
import * as _290 from "./prices/v1/query";
import * as _291 from "./prices/v1/store";
import * as _292 from "./prices/v1/tx";
import * as _293 from "./ratelimit/v1/events";
import * as _294 from "./ratelimit/v1/genesis";
import * as _295 from "./ratelimit/v1/params";
import * as _296 from "./ratelimit/v1/query";
import * as _297 from "./reserve/v1/events";
import * as _298 from "./reserve/v1/genesis";
import * as _299 from "./reserve/v1/metadata";
import * as _300 from "./reserve/v1/params";
import * as _301 from "./reserve/v1/query";
import * as _302 from "./reserve/v1/reserve";
import * as _303 from "./reserve/v1/tx";
import * as _304 from "./token/v1/events";
import * as _305 from "./token/v1/genesis";
import * as _306 from "./token/v1/params";
import * as _307 from "./token/v1/query";
import * as _308 from "./token/v1/token";
import * as _309 from "./token/v1/tx";
import * as _310 from "./vault/v1/events";
import * as _311 from "./vault/v1/genesis";
import * as _312 from "./vault/v1/params";
import * as _313 from "./vault/v1/query";
import * as _314 from "./vault/v1/tx";
import * as _315 from "./vault/v1/vault";
import * as _444 from "./claim/v1/tx.amino";
import * as _445 from "./emissions/v1/tx.amino";
import * as _446 from "./farming/v1/tx.amino";
import * as _447 from "./grants/v1/tx.amino";
import * as _448 from "./incentive/v1/tx.amino";
import * as _449 from "./lend/v1/tx.amino";
import * as _450 from "./liquidity/v1/tx.amino";
import * as _451 from "./lock/v1/tx.amino";
import * as _452 from "./nft/v1/tx.amino";
import * as _453 from "./ons/v1/tx.amino";
import * as _454 from "./prices/v1/tx.amino";
import * as _455 from "./reserve/v1/tx.amino";
import * as _456 from "./token/v1/tx.amino";
import * as _457 from "./vault/v1/tx.amino";
import * as _458 from "./claim/v1/tx.registry";
import * as _459 from "./emissions/v1/tx.registry";
import * as _460 from "./farming/v1/tx.registry";
import * as _461 from "./grants/v1/tx.registry";
import * as _462 from "./incentive/v1/tx.registry";
import * as _463 from "./lend/v1/tx.registry";
import * as _464 from "./liquidity/v1/tx.registry";
import * as _465 from "./lock/v1/tx.registry";
import * as _466 from "./nft/v1/tx.registry";
import * as _467 from "./ons/v1/tx.registry";
import * as _468 from "./prices/v1/tx.registry";
import * as _469 from "./reserve/v1/tx.registry";
import * as _470 from "./token/v1/tx.registry";
import * as _471 from "./vault/v1/tx.registry";
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
import * as _492 from "./claim/v1/query.rpc.Query";
import * as _493 from "./emissions/v1/query.rpc.Query";
import * as _494 from "./epoch/v1/query.rpc.Query";
import * as _495 from "./farming/v1/query.rpc.Query";
import * as _496 from "./fees/v1/query.rpc.Query";
import * as _497 from "./grants/v1/query.rpc.Query";
import * as _498 from "./icq/v1/query.rpc.Query";
import * as _499 from "./incentive/v1/query.rpc.Query";
import * as _500 from "./lend/v1/query.rpc.Query";
import * as _501 from "./liquidity/v1/query.rpc.Query";
import * as _502 from "./lock/v1/query.rpc.Query";
import * as _503 from "./market/v1/query.rpc.Query";
import * as _504 from "./mint/v1/query.rpc.Query";
import * as _505 from "./nft/v1/query.rpc.Query";
import * as _506 from "./ons/v1/query.rpc.Query";
import * as _507 from "./prices/v1/query.rpc.Query";
import * as _508 from "./ratelimit/v1/query.rpc.Query";
import * as _509 from "./reserve/v1/query.rpc.Query";
import * as _510 from "./token/v1/query.rpc.Query";
import * as _511 from "./vault/v1/query.rpc.Query";
import * as _512 from "./claim/v1/tx.rpc.msg";
import * as _513 from "./emissions/v1/tx.rpc.msg";
import * as _514 from "./farming/v1/tx.rpc.msg";
import * as _515 from "./grants/v1/tx.rpc.msg";
import * as _516 from "./incentive/v1/tx.rpc.msg";
import * as _517 from "./lend/v1/tx.rpc.msg";
import * as _518 from "./liquidity/v1/tx.rpc.msg";
import * as _519 from "./lock/v1/tx.rpc.msg";
import * as _520 from "./nft/v1/tx.rpc.msg";
import * as _521 from "./ons/v1/tx.rpc.msg";
import * as _522 from "./prices/v1/tx.rpc.msg";
import * as _523 from "./reserve/v1/tx.rpc.msg";
import * as _524 from "./token/v1/tx.rpc.msg";
import * as _525 from "./vault/v1/tx.rpc.msg";
import * as _538 from "./lcd";
import * as _539 from "./rpc.query";
import * as _540 from "./rpc.tx";
export namespace ollo {
  export namespace claim {
    export const v1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._444,
      ..._458,
      ..._472,
      ..._492,
      ..._512
    };
  }
  export namespace emissions {
    export const v1 = { ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._445,
      ..._459,
      ..._473,
      ..._493,
      ..._513
    };
  }
  export namespace epoch {
    export const v1 = { ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._474,
      ..._494
    };
  }
  export namespace farming {
    export const v1 = { ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._446,
      ..._460,
      ..._475,
      ..._495,
      ..._514
    };
  }
  export namespace fees {
    export const v1 = { ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._476,
      ..._496
    };
  }
  export namespace grants {
    export const v1 = { ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._447,
      ..._461,
      ..._477,
      ..._497,
      ..._515
    };
  }
  export namespace icq {
    export const v1 = { ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._478,
      ..._498
    };
  }
  export namespace incentive {
    export const v1 = { ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._448,
      ..._462,
      ..._479,
      ..._499,
      ..._516
    };
  }
  export namespace lend {
    export const v1 = { ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._449,
      ..._463,
      ..._480,
      ..._500,
      ..._517
    };
  }
  export namespace liquidity {
    export const v1 = { ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._450,
      ..._464,
      ..._481,
      ..._501,
      ..._518
    };
  }
  export namespace lock {
    export const v1 = { ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._451,
      ..._465,
      ..._482,
      ..._502,
      ..._519
    };
  }
  export namespace market {
    export const v1 = { ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._483,
      ..._503
    };
  }
  export namespace mint {
    export const v1 = { ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._484,
      ..._504
    };
  }
  export namespace nft {
    export const v1 = { ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._452,
      ..._466,
      ..._485,
      ..._505,
      ..._520
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
      ..._453,
      ..._467,
      ..._486,
      ..._506,
      ..._521
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
      ..._291,
      ..._292,
      ..._454,
      ..._468,
      ..._487,
      ..._507,
      ..._522
    };
  }
  export namespace ratelimit {
    export const v1 = { ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._488,
      ..._508
    };
  }
  export namespace reserve {
    export const v1 = { ..._297,
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._302,
      ..._303,
      ..._455,
      ..._469,
      ..._489,
      ..._509,
      ..._523
    };
  }
  export namespace token {
    export const v1 = { ..._304,
      ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._309,
      ..._456,
      ..._470,
      ..._490,
      ..._510,
      ..._524
    };
  }
  export namespace vault {
    export const v1 = { ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._314,
      ..._315,
      ..._457,
      ..._471,
      ..._491,
      ..._511,
      ..._525
    };
  }
  export const ClientFactory = { ..._538,
    ..._539,
    ..._540
  };
}
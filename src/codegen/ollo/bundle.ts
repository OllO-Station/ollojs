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
import * as _188 from "./farming/v1/farming";
import * as _189 from "./farming/v1/genesis";
import * as _190 from "./farming/v1/params";
import * as _191 from "./farming/v1/proposal";
import * as _192 from "./farming/v1/query";
import * as _193 from "./farming/v1/tx";
import * as _194 from "./fees/v1/fees";
import * as _195 from "./fees/v1/genesis";
import * as _196 from "./fees/v1/params";
import * as _197 from "./fees/v1/proprosal";
import * as _198 from "./fees/v1/query";
import * as _199 from "./grants/v1/events";
import * as _200 from "./grants/v1/genesis";
import * as _201 from "./grants/v1/grants";
import * as _202 from "./grants/v1/params";
import * as _203 from "./grants/v1/query";
import * as _204 from "./grants/v1/tx";
import * as _205 from "./icq/v1/events";
import * as _206 from "./icq/v1/genesis";
import * as _207 from "./icq/v1/icq";
import * as _208 from "./icq/v1/packet";
import * as _209 from "./icq/v1/params";
import * as _210 from "./icq/v1/query";
import * as _211 from "./icq/v1/tx";
import * as _212 from "./incentive/v1/deposit";
import * as _213 from "./incentive/v1/events";
import * as _214 from "./incentive/v1/genesis";
import * as _215 from "./incentive/v1/incentive";
import * as _216 from "./incentive/v1/mm";
import * as _217 from "./incentive/v1/params";
import * as _218 from "./incentive/v1/proprosal";
import * as _219 from "./incentive/v1/query";
import * as _220 from "./incentive/v1/tx";
import * as _221 from "./liquidity/v1/basic";
import * as _222 from "./liquidity/v1/events";
import * as _223 from "./liquidity/v1/genesis";
import * as _224 from "./liquidity/v1/liquidity";
import * as _225 from "./liquidity/v1/order";
import * as _226 from "./liquidity/v1/pair";
import * as _227 from "./liquidity/v1/params";
import * as _228 from "./liquidity/v1/pool";
import * as _229 from "./liquidity/v1/proprosal";
import * as _230 from "./liquidity/v1/query";
import * as _231 from "./liquidity/v1/ranged";
import * as _232 from "./liquidity/v1/tx";
import * as _233 from "./loan/v1/borrow";
import * as _234 from "./loan/v1/events";
import * as _235 from "./loan/v1/genesis";
import * as _236 from "./loan/v1/loan";
import * as _237 from "./loan/v1/loans";
import * as _238 from "./loan/v1/packet";
import * as _239 from "./loan/v1/params";
import * as _240 from "./loan/v1/query";
import * as _241 from "./loan/v1/tx";
import * as _242 from "./lock/v1/events";
import * as _243 from "./lock/v1/genesis";
import * as _244 from "./lock/v1/lock";
import * as _245 from "./lock/v1/params";
import * as _246 from "./lock/v1/query";
import * as _247 from "./lock/v1/tx";
import * as _248 from "./market/v1/genesis";
import * as _249 from "./market/v1/packet";
import * as _250 from "./market/v1/params";
import * as _251 from "./market/v1/query";
import * as _252 from "./market/v1/tx";
import * as _253 from "./mint/v1/events";
import * as _254 from "./mint/v1/genesis";
import * as _255 from "./mint/v1/mint";
import * as _256 from "./mint/v1/params";
import * as _257 from "./mint/v1/query";
import * as _258 from "./mint/v1/tx";
import * as _259 from "./nft/v1/genesis";
import * as _260 from "./nft/v1/nft";
import * as _261 from "./nft/v1/params";
import * as _262 from "./nft/v1/query";
import * as _263 from "./nft/v1/tx";
import * as _264 from "./ons/v1/genesis";
import * as _265 from "./ons/v1/packet";
import * as _266 from "./ons/v1/params";
import * as _267 from "./ons/v1/query";
import * as _268 from "./ons/v1/tx";
import * as _269 from "./ons/v1/whois";
import * as _270 from "./prices/v1/band";
import * as _271 from "./prices/v1/events";
import * as _272 from "./prices/v1/genesis";
import * as _273 from "./prices/v1/packet";
import * as _274 from "./prices/v1/params";
import * as _275 from "./prices/v1/prices";
import * as _276 from "./prices/v1/query";
import * as _277 from "./prices/v1/tx";
import * as _278 from "./ratelimit/v1/events";
import * as _279 from "./ratelimit/v1/genesis";
import * as _280 from "./ratelimit/v1/params";
import * as _281 from "./ratelimit/v1/query";
import * as _282 from "./reserve/v1/events";
import * as _283 from "./reserve/v1/genesis";
import * as _284 from "./reserve/v1/metadata";
import * as _285 from "./reserve/v1/params";
import * as _286 from "./reserve/v1/query";
import * as _287 from "./reserve/v1/reserve";
import * as _288 from "./reserve/v1/tx";
import * as _289 from "./token/v1/genesis";
import * as _290 from "./token/v1/params";
import * as _291 from "./token/v1/query";
import * as _292 from "./token/v1/token";
import * as _293 from "./token/v1/tx";
import * as _294 from "./vault/v1/events";
import * as _295 from "./vault/v1/genesis";
import * as _296 from "./vault/v1/params";
import * as _297 from "./vault/v1/query";
import * as _298 from "./vault/v1/tx";
import * as _299 from "./vault/v1/vault";
import * as _432 from "./claim/v1/tx.amino";
import * as _433 from "./emissions/v1/tx.amino";
import * as _434 from "./farming/v1/tx.amino";
import * as _435 from "./grants/v1/tx.amino";
import * as _436 from "./incentive/v1/tx.amino";
import * as _437 from "./liquidity/v1/tx.amino";
import * as _438 from "./loan/v1/tx.amino";
import * as _439 from "./lock/v1/tx.amino";
import * as _440 from "./nft/v1/tx.amino";
import * as _441 from "./ons/v1/tx.amino";
import * as _442 from "./prices/v1/tx.amino";
import * as _443 from "./reserve/v1/tx.amino";
import * as _444 from "./token/v1/tx.amino";
import * as _445 from "./vault/v1/tx.amino";
import * as _446 from "./claim/v1/tx.registry";
import * as _447 from "./emissions/v1/tx.registry";
import * as _448 from "./farming/v1/tx.registry";
import * as _449 from "./grants/v1/tx.registry";
import * as _450 from "./incentive/v1/tx.registry";
import * as _451 from "./liquidity/v1/tx.registry";
import * as _452 from "./loan/v1/tx.registry";
import * as _453 from "./lock/v1/tx.registry";
import * as _454 from "./nft/v1/tx.registry";
import * as _455 from "./ons/v1/tx.registry";
import * as _456 from "./prices/v1/tx.registry";
import * as _457 from "./reserve/v1/tx.registry";
import * as _458 from "./token/v1/tx.registry";
import * as _459 from "./vault/v1/tx.registry";
import * as _460 from "./claim/v1/query.lcd";
import * as _461 from "./emissions/v1/query.lcd";
import * as _462 from "./epoch/v1/query.lcd";
import * as _463 from "./farming/v1/query.lcd";
import * as _464 from "./fees/v1/query.lcd";
import * as _465 from "./grants/v1/query.lcd";
import * as _466 from "./icq/v1/query.lcd";
import * as _467 from "./incentive/v1/query.lcd";
import * as _468 from "./liquidity/v1/query.lcd";
import * as _469 from "./loan/v1/query.lcd";
import * as _470 from "./lock/v1/query.lcd";
import * as _471 from "./market/v1/query.lcd";
import * as _472 from "./mint/v1/query.lcd";
import * as _473 from "./nft/v1/query.lcd";
import * as _474 from "./ons/v1/query.lcd";
import * as _475 from "./prices/v1/query.lcd";
import * as _476 from "./ratelimit/v1/query.lcd";
import * as _477 from "./reserve/v1/query.lcd";
import * as _478 from "./token/v1/query.lcd";
import * as _479 from "./vault/v1/query.lcd";
import * as _480 from "./claim/v1/query.rpc.Query";
import * as _481 from "./emissions/v1/query.rpc.Query";
import * as _482 from "./epoch/v1/query.rpc.Query";
import * as _483 from "./farming/v1/query.rpc.Query";
import * as _484 from "./fees/v1/query.rpc.Query";
import * as _485 from "./grants/v1/query.rpc.Query";
import * as _486 from "./icq/v1/query.rpc.Query";
import * as _487 from "./incentive/v1/query.rpc.Query";
import * as _488 from "./liquidity/v1/query.rpc.Query";
import * as _489 from "./loan/v1/query.rpc.Query";
import * as _490 from "./lock/v1/query.rpc.Query";
import * as _491 from "./market/v1/query.rpc.Query";
import * as _492 from "./mint/v1/query.rpc.Query";
import * as _493 from "./nft/v1/query.rpc.Query";
import * as _494 from "./ons/v1/query.rpc.Query";
import * as _495 from "./prices/v1/query.rpc.Query";
import * as _496 from "./ratelimit/v1/query.rpc.Query";
import * as _497 from "./reserve/v1/query.rpc.Query";
import * as _498 from "./token/v1/query.rpc.Query";
import * as _499 from "./vault/v1/query.rpc.Query";
import * as _500 from "./claim/v1/tx.rpc.msg";
import * as _501 from "./emissions/v1/tx.rpc.msg";
import * as _502 from "./farming/v1/tx.rpc.msg";
import * as _503 from "./grants/v1/tx.rpc.msg";
import * as _504 from "./incentive/v1/tx.rpc.msg";
import * as _505 from "./liquidity/v1/tx.rpc.msg";
import * as _506 from "./loan/v1/tx.rpc.msg";
import * as _507 from "./lock/v1/tx.rpc.msg";
import * as _508 from "./nft/v1/tx.rpc.msg";
import * as _509 from "./ons/v1/tx.rpc.msg";
import * as _510 from "./prices/v1/tx.rpc.msg";
import * as _511 from "./reserve/v1/tx.rpc.msg";
import * as _512 from "./token/v1/tx.rpc.msg";
import * as _513 from "./vault/v1/tx.rpc.msg";
import * as _528 from "./lcd";
import * as _529 from "./rpc.query";
import * as _530 from "./rpc.tx";
export namespace ollo {
  export namespace claim {
    export const v1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._432,
      ..._446,
      ..._460,
      ..._480,
      ..._500
    };
  }
  export namespace emissions {
    export const v1 = { ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._433,
      ..._447,
      ..._461,
      ..._481,
      ..._501
    };
  }
  export namespace epoch {
    export const v1 = { ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._462,
      ..._482
    };
  }
  export namespace farming {
    export const v1 = { ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._434,
      ..._448,
      ..._463,
      ..._483,
      ..._502
    };
  }
  export namespace fees {
    export const v1 = { ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._464,
      ..._484
    };
  }
  export namespace grants {
    export const v1 = { ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._435,
      ..._449,
      ..._465,
      ..._485,
      ..._503
    };
  }
  export namespace icq {
    export const v1 = { ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._466,
      ..._486
    };
  }
  export namespace incentive {
    export const v1 = { ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._436,
      ..._450,
      ..._467,
      ..._487,
      ..._504
    };
  }
  export namespace liquidity {
    export const v1 = { ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._437,
      ..._451,
      ..._468,
      ..._488,
      ..._505
    };
  }
  export namespace loan {
    export const v1 = { ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._438,
      ..._452,
      ..._469,
      ..._489,
      ..._506
    };
  }
  export namespace lock {
    export const v1 = { ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._439,
      ..._453,
      ..._470,
      ..._490,
      ..._507
    };
  }
  export namespace market {
    export const v1 = { ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._471,
      ..._491
    };
  }
  export namespace mint {
    export const v1 = { ..._253,
      ..._254,
      ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._472,
      ..._492
    };
  }
  export namespace nft {
    export const v1 = { ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._440,
      ..._454,
      ..._473,
      ..._493,
      ..._508
    };
  }
  export namespace ons {
    export const v1 = { ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._441,
      ..._455,
      ..._474,
      ..._494,
      ..._509
    };
  }
  export namespace prices {
    export const v1 = { ..._270,
      ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._442,
      ..._456,
      ..._475,
      ..._495,
      ..._510
    };
  }
  export namespace ratelimit {
    export const v1 = { ..._278,
      ..._279,
      ..._280,
      ..._281,
      ..._476,
      ..._496
    };
  }
  export namespace reserve {
    export const v1 = { ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._286,
      ..._287,
      ..._288,
      ..._443,
      ..._457,
      ..._477,
      ..._497,
      ..._511
    };
  }
  export namespace token {
    export const v1 = { ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._293,
      ..._444,
      ..._458,
      ..._478,
      ..._498,
      ..._512
    };
  }
  export namespace vault {
    export const v1 = { ..._294,
      ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299,
      ..._445,
      ..._459,
      ..._479,
      ..._499,
      ..._513
    };
  }
  export const ClientFactory = { ..._528,
    ..._529,
    ..._530
  };
}
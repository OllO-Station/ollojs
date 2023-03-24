import * as _172 from "./automation/v1/genesis";
import * as _173 from "./automation/v1/packet";
import * as _174 from "./automation/v1/params";
import * as _175 from "./automation/v1/query";
import * as _176 from "./automation/v1/tx";
import * as _177 from "./claim/v1/claim";
import * as _178 from "./claim/v1/events";
import * as _179 from "./claim/v1/genesis";
import * as _180 from "./claim/v1/goal";
import * as _181 from "./claim/v1/params";
import * as _182 from "./claim/v1/query";
import * as _183 from "./claim/v1/tx";
import * as _184 from "./emissions/v1/genesis";
import * as _185 from "./emissions/v1/params";
import * as _186 from "./emissions/v1/query";
import * as _187 from "./emissions/v1/tx";
import * as _188 from "./engine/v1/genesis";
import * as _189 from "./engine/v1/packet";
import * as _190 from "./engine/v1/params";
import * as _191 from "./engine/v1/query";
import * as _192 from "./engine/v1/tx";
import * as _193 from "./epoch/v1/epoch";
import * as _194 from "./epoch/v1/events";
import * as _195 from "./epoch/v1/genesis";
import * as _196 from "./epoch/v1/query";
import * as _197 from "./farming/v1/events";
import * as _198 from "./farming/v1/farming";
import * as _199 from "./farming/v1/genesis";
import * as _200 from "./farming/v1/params";
import * as _201 from "./farming/v1/proposal";
import * as _202 from "./farming/v1/query";
import * as _203 from "./farming/v1/tx";
import * as _204 from "./fees/v1/fees";
import * as _205 from "./fees/v1/genesis";
import * as _206 from "./fees/v1/params";
import * as _207 from "./fees/v1/proprosal";
import * as _208 from "./fees/v1/query";
import * as _209 from "./grants/v1/events";
import * as _210 from "./grants/v1/genesis";
import * as _211 from "./grants/v1/grants";
import * as _212 from "./grants/v1/params";
import * as _213 from "./grants/v1/query";
import * as _214 from "./grants/v1/tx";
import * as _215 from "./hooks/v1/genesis";
import * as _216 from "./hooks/v1/packet";
import * as _217 from "./hooks/v1/params";
import * as _218 from "./hooks/v1/query";
import * as _219 from "./hooks/v1/tx";
import * as _220 from "./icq/v1/events";
import * as _221 from "./icq/v1/genesis";
import * as _222 from "./icq/v1/icq";
import * as _223 from "./icq/v1/packet";
import * as _224 from "./icq/v1/params";
import * as _225 from "./icq/v1/query";
import * as _226 from "./icq/v1/tx";
import * as _227 from "./incentive/v1/deposit";
import * as _228 from "./incentive/v1/events";
import * as _229 from "./incentive/v1/genesis";
import * as _230 from "./incentive/v1/incentive";
import * as _231 from "./incentive/v1/mm";
import * as _232 from "./incentive/v1/params";
import * as _233 from "./incentive/v1/proprosal";
import * as _234 from "./incentive/v1/query";
import * as _235 from "./incentive/v1/tx";
import * as _236 from "./lend/v1/borrow";
import * as _237 from "./lend/v1/events";
import * as _238 from "./lend/v1/genesis";
import * as _239 from "./lend/v1/loan";
import * as _240 from "./lend/v1/params";
import * as _241 from "./lend/v1/proprosal";
import * as _242 from "./lend/v1/query";
import * as _243 from "./lend/v1/tx";
import * as _244 from "./liquidity/v1/events";
import * as _245 from "./liquidity/v1/genesis";
import * as _246 from "./liquidity/v1/liquidity";
import * as _247 from "./liquidity/v1/order";
import * as _248 from "./liquidity/v1/pair";
import * as _249 from "./liquidity/v1/params";
import * as _250 from "./liquidity/v1/pool";
import * as _251 from "./liquidity/v1/proprosal";
import * as _252 from "./liquidity/v1/query";
import * as _253 from "./liquidity/v1/ranged";
import * as _254 from "./liquidity/v1/stable";
import * as _255 from "./liquidity/v1/tx";
import * as _256 from "./lock/v1/events";
import * as _257 from "./lock/v1/genesis";
import * as _258 from "./lock/v1/lock";
import * as _259 from "./lock/v1/params";
import * as _260 from "./lock/v1/query";
import * as _261 from "./lock/v1/tx";
import * as _262 from "./lstaking/v1/events";
import * as _263 from "./lstaking/v1/genesis";
import * as _264 from "./lstaking/v1/params";
import * as _265 from "./lstaking/v1/query";
import * as _266 from "./lstaking/v1/redelegation";
import * as _267 from "./lstaking/v1/state";
import * as _268 from "./lstaking/v1/tx";
import * as _269 from "./lstaking/v1/validator";
import * as _270 from "./lstaking/v1/voting";
import * as _271 from "./market/v1/distribution";
import * as _272 from "./market/v1/events";
import * as _273 from "./market/v1/genesis";
import * as _274 from "./market/v1/market";
import * as _275 from "./market/v1/packet";
import * as _276 from "./market/v1/params";
import * as _277 from "./market/v1/proprosal";
import * as _278 from "./market/v1/query";
import * as _279 from "./market/v1/tx";
import * as _280 from "./mint/v1/events";
import * as _281 from "./mint/v1/genesis";
import * as _282 from "./mint/v1/mint";
import * as _283 from "./mint/v1/params";
import * as _284 from "./mint/v1/query";
import * as _285 from "./mint/v1/tx";
import * as _286 from "./nft/v1/events";
import * as _287 from "./nft/v1/genesis";
import * as _288 from "./nft/v1/nft";
import * as _289 from "./nft/v1/packet";
import * as _290 from "./nft/v1/params";
import * as _291 from "./nft/v1/query";
import * as _292 from "./nft/v1/tx";
import * as _293 from "./ollo/events";
import * as _294 from "./ollo/genesis";
import * as _295 from "./ollo/packet";
import * as _296 from "./ollo/query";
import * as _297 from "./ons/v1/genesis";
import * as _298 from "./ons/v1/packet";
import * as _299 from "./ons/v1/params";
import * as _300 from "./ons/v1/query";
import * as _301 from "./ons/v1/tx";
import * as _302 from "./prices/v1/band";
import * as _303 from "./prices/v1/events";
import * as _304 from "./prices/v1/feed";
import * as _305 from "./prices/v1/genesis";
import * as _306 from "./prices/v1/packet";
import * as _307 from "./prices/v1/params";
import * as _308 from "./prices/v1/prices";
import * as _309 from "./prices/v1/proprosal";
import * as _310 from "./prices/v1/query";
import * as _311 from "./prices/v1/store";
import * as _312 from "./prices/v1/tx";
import * as _313 from "./ratelimit/v1/events";
import * as _314 from "./ratelimit/v1/genesis";
import * as _315 from "./ratelimit/v1/params";
import * as _316 from "./ratelimit/v1/query";
import * as _317 from "./reserve/v1/events";
import * as _318 from "./reserve/v1/genesis";
import * as _319 from "./reserve/v1/metadata";
import * as _320 from "./reserve/v1/params";
import * as _321 from "./reserve/v1/query";
import * as _322 from "./reserve/v1/reserve";
import * as _323 from "./reserve/v1/tx";
import * as _324 from "./token/v1/events";
import * as _325 from "./token/v1/genesis";
import * as _326 from "./token/v1/params";
import * as _327 from "./token/v1/query";
import * as _328 from "./token/v1/token";
import * as _329 from "./token/v1/tx";
import * as _330 from "./vault/v1/genesis";
import * as _331 from "./vault/v1/params";
import * as _332 from "./vault/v1/query";
import * as _333 from "./vault/v1/tx";
import * as _462 from "./claim/v1/tx.amino";
import * as _463 from "./farming/v1/tx.amino";
import * as _464 from "./grants/v1/tx.amino";
import * as _465 from "./incentive/v1/tx.amino";
import * as _466 from "./lend/v1/tx.amino";
import * as _467 from "./liquidity/v1/tx.amino";
import * as _468 from "./lock/v1/tx.amino";
import * as _469 from "./lstaking/v1/tx.amino";
import * as _470 from "./market/v1/tx.amino";
import * as _471 from "./nft/v1/tx.amino";
import * as _472 from "./prices/v1/tx.amino";
import * as _473 from "./reserve/v1/tx.amino";
import * as _474 from "./token/v1/tx.amino";
import * as _475 from "./claim/v1/tx.registry";
import * as _476 from "./farming/v1/tx.registry";
import * as _477 from "./grants/v1/tx.registry";
import * as _478 from "./incentive/v1/tx.registry";
import * as _479 from "./lend/v1/tx.registry";
import * as _480 from "./liquidity/v1/tx.registry";
import * as _481 from "./lock/v1/tx.registry";
import * as _482 from "./lstaking/v1/tx.registry";
import * as _483 from "./market/v1/tx.registry";
import * as _484 from "./nft/v1/tx.registry";
import * as _485 from "./prices/v1/tx.registry";
import * as _486 from "./reserve/v1/tx.registry";
import * as _487 from "./token/v1/tx.registry";
import * as _488 from "./automation/v1/query.lcd";
import * as _489 from "./claim/v1/query.lcd";
import * as _490 from "./emissions/v1/query.lcd";
import * as _491 from "./engine/v1/query.lcd";
import * as _492 from "./epoch/v1/query.lcd";
import * as _493 from "./farming/v1/query.lcd";
import * as _494 from "./fees/v1/query.lcd";
import * as _495 from "./grants/v1/query.lcd";
import * as _496 from "./hooks/v1/query.lcd";
import * as _497 from "./icq/v1/query.lcd";
import * as _498 from "./incentive/v1/query.lcd";
import * as _499 from "./lend/v1/query.lcd";
import * as _500 from "./liquidity/v1/query.lcd";
import * as _501 from "./lock/v1/query.lcd";
import * as _502 from "./lstaking/v1/query.lcd";
import * as _503 from "./market/v1/query.lcd";
import * as _504 from "./mint/v1/query.lcd";
import * as _505 from "./nft/v1/query.lcd";
import * as _506 from "./ons/v1/query.lcd";
import * as _507 from "./prices/v1/query.lcd";
import * as _508 from "./ratelimit/v1/query.lcd";
import * as _509 from "./reserve/v1/query.lcd";
import * as _510 from "./token/v1/query.lcd";
import * as _511 from "./vault/v1/query.lcd";
import * as _512 from "./automation/v1/query.rpc.Query";
import * as _513 from "./claim/v1/query.rpc.Query";
import * as _514 from "./emissions/v1/query.rpc.Query";
import * as _515 from "./engine/v1/query.rpc.Query";
import * as _516 from "./epoch/v1/query.rpc.Query";
import * as _517 from "./farming/v1/query.rpc.Query";
import * as _518 from "./fees/v1/query.rpc.Query";
import * as _519 from "./grants/v1/query.rpc.Query";
import * as _520 from "./hooks/v1/query.rpc.Query";
import * as _521 from "./icq/v1/query.rpc.Query";
import * as _522 from "./incentive/v1/query.rpc.Query";
import * as _523 from "./lend/v1/query.rpc.Query";
import * as _524 from "./liquidity/v1/query.rpc.Query";
import * as _525 from "./lock/v1/query.rpc.Query";
import * as _526 from "./lstaking/v1/query.rpc.Query";
import * as _527 from "./market/v1/query.rpc.Query";
import * as _528 from "./mint/v1/query.rpc.Query";
import * as _529 from "./nft/v1/query.rpc.Query";
import * as _530 from "./ollo/query.rpc.Query";
import * as _531 from "./ons/v1/query.rpc.Query";
import * as _532 from "./prices/v1/query.rpc.Query";
import * as _533 from "./ratelimit/v1/query.rpc.Query";
import * as _534 from "./reserve/v1/query.rpc.Query";
import * as _535 from "./token/v1/query.rpc.Query";
import * as _536 from "./vault/v1/query.rpc.Query";
import * as _537 from "./claim/v1/tx.rpc.msg";
import * as _538 from "./farming/v1/tx.rpc.msg";
import * as _539 from "./grants/v1/tx.rpc.msg";
import * as _540 from "./incentive/v1/tx.rpc.msg";
import * as _541 from "./lend/v1/tx.rpc.msg";
import * as _542 from "./liquidity/v1/tx.rpc.msg";
import * as _543 from "./lock/v1/tx.rpc.msg";
import * as _544 from "./lstaking/v1/tx.rpc.msg";
import * as _545 from "./market/v1/tx.rpc.msg";
import * as _546 from "./nft/v1/tx.rpc.msg";
import * as _547 from "./prices/v1/tx.rpc.msg";
import * as _548 from "./reserve/v1/tx.rpc.msg";
import * as _549 from "./token/v1/tx.rpc.msg";
import * as _562 from "./lcd";
import * as _563 from "./rpc.query";
import * as _564 from "./rpc.tx";
export namespace ollo {
  export namespace automation {
    export const v1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._488,
      ..._512
    };
  }
  export namespace claim {
    export const v1 = { ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._462,
      ..._475,
      ..._489,
      ..._513,
      ..._537
    };
  }
  export namespace emissions {
    export const v1 = { ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._490,
      ..._514
    };
  }
  export namespace engine {
    export const v1 = { ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._491,
      ..._515
    };
  }
  export namespace epoch {
    export const v1 = { ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._492,
      ..._516
    };
  }
  export namespace farming {
    export const v1 = { ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._463,
      ..._476,
      ..._493,
      ..._517,
      ..._538
    };
  }
  export namespace fees {
    export const v1 = { ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._494,
      ..._518
    };
  }
  export namespace grants {
    export const v1 = { ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._464,
      ..._477,
      ..._495,
      ..._519,
      ..._539
    };
  }
  export namespace hooks {
    export const v1 = { ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._496,
      ..._520
    };
  }
  export namespace icq {
    export const v1 = { ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._497,
      ..._521
    };
  }
  export namespace incentive {
    export const v1 = { ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._465,
      ..._478,
      ..._498,
      ..._522,
      ..._540
    };
  }
  export namespace lend {
    export const v1 = { ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._466,
      ..._479,
      ..._499,
      ..._523,
      ..._541
    };
  }
  export namespace liquidity {
    export const v1 = { ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._467,
      ..._480,
      ..._500,
      ..._524,
      ..._542
    };
  }
  export namespace lock {
    export const v1 = { ..._256,
      ..._257,
      ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._468,
      ..._481,
      ..._501,
      ..._525,
      ..._543
    };
  }
  export namespace lstaking {
    export const v1 = { ..._262,
      ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._270,
      ..._469,
      ..._482,
      ..._502,
      ..._526,
      ..._544
    };
  }
  export namespace market {
    export const v1 = { ..._271,
      ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._470,
      ..._483,
      ..._503,
      ..._527,
      ..._545
    };
  }
  export namespace mint {
    export const v1 = { ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._285,
      ..._504,
      ..._528
    };
  }
  export namespace nft {
    export const v1 = { ..._286,
      ..._287,
      ..._288,
      ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._471,
      ..._484,
      ..._505,
      ..._529,
      ..._546
    };
  }
  export namespace ollo {
    export const v1 = { ..._293,
      ..._294,
      ..._295,
      ..._296,
      ..._530
    };
  }
  export namespace ons {
    export const v1 = { ..._297,
      ..._298,
      ..._299,
      ..._300,
      ..._301,
      ..._506,
      ..._531
    };
  }
  export namespace prices {
    export const v1 = { ..._302,
      ..._303,
      ..._304,
      ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._309,
      ..._310,
      ..._311,
      ..._312,
      ..._472,
      ..._485,
      ..._507,
      ..._532,
      ..._547
    };
  }
  export namespace ratelimit {
    export const v1 = { ..._313,
      ..._314,
      ..._315,
      ..._316,
      ..._508,
      ..._533
    };
  }
  export namespace reserve {
    export const v1 = { ..._317,
      ..._318,
      ..._319,
      ..._320,
      ..._321,
      ..._322,
      ..._323,
      ..._473,
      ..._486,
      ..._509,
      ..._534,
      ..._548
    };
  }
  export namespace token {
    export const v1 = { ..._324,
      ..._325,
      ..._326,
      ..._327,
      ..._328,
      ..._329,
      ..._474,
      ..._487,
      ..._510,
      ..._535,
      ..._549
    };
  }
  export namespace vault {
    export const v1 = { ..._330,
      ..._331,
      ..._332,
      ..._333,
      ..._511,
      ..._536
    };
  }
  export const ClientFactory = { ..._562,
    ..._563,
    ..._564
  };
}
import * as _134 from "./claim/v1/claim";
import * as _135 from "./claim/v1/events";
import * as _136 from "./claim/v1/genesis";
import * as _137 from "./claim/v1/goal";
import * as _138 from "./claim/v1/packet";
import * as _139 from "./claim/v1/params";
import * as _140 from "./claim/v1/query";
import * as _141 from "./claim/v1/tx";
import * as _142 from "./farming/v1/farming";
import * as _143 from "./farming/v1/genesis";
import * as _144 from "./farming/v1/params";
import * as _145 from "./farming/v1/proposal";
import * as _146 from "./farming/v1/query";
import * as _147 from "./farming/v1/tx";
import * as _148 from "./grants/v1/events";
import * as _149 from "./grants/v1/genesis";
import * as _150 from "./grants/v1/grants";
import * as _151 from "./grants/v1/params";
import * as _152 from "./grants/v1/query";
import * as _153 from "./grants/v1/tx";
import * as _154 from "./liquidity/v1/genesis";
import * as _155 from "./liquidity/v1/liquidity";
import * as _156 from "./liquidity/v1/params";
import * as _157 from "./liquidity/v1/pool";
import * as _158 from "./liquidity/v1/query";
import * as _159 from "./liquidity/v1/tx";
import * as _160 from "./loan/v1/genesis";
import * as _161 from "./loan/v1/loans";
import * as _162 from "./loan/v1/packet";
import * as _163 from "./loan/v1/params";
import * as _164 from "./loan/v1/query";
import * as _165 from "./loan/v1/tx";
import * as _166 from "./market/v1/genesis";
import * as _167 from "./market/v1/packet";
import * as _168 from "./market/v1/params";
import * as _169 from "./market/v1/query";
import * as _170 from "./market/v1/tx";
import * as _171 from "./mint/v1/events";
import * as _172 from "./mint/v1/genesis";
import * as _173 from "./mint/v1/mint";
import * as _174 from "./mint/v1/params";
import * as _175 from "./mint/v1/query";
import * as _176 from "./mint/v1/tx";
import * as _177 from "./nft/v1/genesis";
import * as _178 from "./nft/v1/nft";
import * as _179 from "./nft/v1/params";
import * as _180 from "./nft/v1/query";
import * as _181 from "./nft/v1/tx";
import * as _182 from "./ons/v1/genesis";
import * as _183 from "./ons/v1/packet";
import * as _184 from "./ons/v1/params";
import * as _185 from "./ons/v1/query";
import * as _186 from "./ons/v1/tx";
import * as _187 from "./ons/v1/whois";
import * as _188 from "./reserve/v1/events";
import * as _189 from "./reserve/v1/genesis";
import * as _190 from "./reserve/v1/metadata";
import * as _191 from "./reserve/v1/params";
import * as _192 from "./reserve/v1/query";
import * as _193 from "./reserve/v1/reserve";
import * as _194 from "./reserve/v1/tx";
import * as _195 from "./token/v1/events";
import * as _196 from "./token/v1/genesis";
import * as _197 from "./token/v1/params";
import * as _198 from "./token/v1/query";
import * as _199 from "./token/v1/token";
import * as _200 from "./token/v1/tx";
import * as _315 from "./claim/v1/tx.amino";
import * as _316 from "./farming/v1/tx.amino";
import * as _317 from "./grants/v1/tx.amino";
import * as _318 from "./liquidity/v1/tx.amino";
import * as _319 from "./loan/v1/tx.amino";
import * as _320 from "./nft/v1/tx.amino";
import * as _321 from "./ons/v1/tx.amino";
import * as _322 from "./reserve/v1/tx.amino";
import * as _323 from "./token/v1/tx.amino";
import * as _324 from "./claim/v1/tx.registry";
import * as _325 from "./farming/v1/tx.registry";
import * as _326 from "./grants/v1/tx.registry";
import * as _327 from "./liquidity/v1/tx.registry";
import * as _328 from "./loan/v1/tx.registry";
import * as _329 from "./nft/v1/tx.registry";
import * as _330 from "./ons/v1/tx.registry";
import * as _331 from "./reserve/v1/tx.registry";
import * as _332 from "./token/v1/tx.registry";
import * as _333 from "./claim/v1/query.lcd";
import * as _334 from "./farming/v1/query.lcd";
import * as _335 from "./grants/v1/query.lcd";
import * as _336 from "./liquidity/v1/query.lcd";
import * as _337 from "./loan/v1/query.lcd";
import * as _338 from "./market/v1/query.lcd";
import * as _339 from "./mint/v1/query.lcd";
import * as _340 from "./nft/v1/query.lcd";
import * as _341 from "./ons/v1/query.lcd";
import * as _342 from "./reserve/v1/query.lcd";
import * as _343 from "./token/v1/query.lcd";
import * as _344 from "./claim/v1/query.rpc.Query";
import * as _345 from "./farming/v1/query.rpc.Query";
import * as _346 from "./grants/v1/query.rpc.Query";
import * as _347 from "./liquidity/v1/query.rpc.Query";
import * as _348 from "./loan/v1/query.rpc.Query";
import * as _349 from "./market/v1/query.rpc.Query";
import * as _350 from "./mint/v1/query.rpc.Query";
import * as _351 from "./nft/v1/query.rpc.Query";
import * as _352 from "./ons/v1/query.rpc.Query";
import * as _353 from "./reserve/v1/query.rpc.Query";
import * as _354 from "./token/v1/query.rpc.Query";
import * as _355 from "./claim/v1/tx.rpc.msg";
import * as _356 from "./farming/v1/tx.rpc.msg";
import * as _357 from "./grants/v1/tx.rpc.msg";
import * as _358 from "./liquidity/v1/tx.rpc.msg";
import * as _359 from "./loan/v1/tx.rpc.msg";
import * as _360 from "./nft/v1/tx.rpc.msg";
import * as _361 from "./ons/v1/tx.rpc.msg";
import * as _362 from "./reserve/v1/tx.rpc.msg";
import * as _363 from "./token/v1/tx.rpc.msg";
import * as _373 from "./lcd";
import * as _374 from "./rpc.query";
import * as _375 from "./rpc.tx";
export namespace ollo {
  export namespace claim {
    export const v1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._315,
      ..._324,
      ..._333,
      ..._344,
      ..._355
    };
  }
  export namespace farming {
    export const v1 = { ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._316,
      ..._325,
      ..._334,
      ..._345,
      ..._356
    };
  }
  export namespace grants {
    export const v1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._317,
      ..._326,
      ..._335,
      ..._346,
      ..._357
    };
  }
  export namespace liquidity {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._318,
      ..._327,
      ..._336,
      ..._347,
      ..._358
    };
  }
  export namespace loan {
    export const v1 = { ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._319,
      ..._328,
      ..._337,
      ..._348,
      ..._359
    };
  }
  export namespace market {
    export const v1 = { ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._338,
      ..._349
    };
  }
  export namespace mint {
    export const v1 = { ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._339,
      ..._350
    };
  }
  export namespace nft {
    export const v1 = { ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._320,
      ..._329,
      ..._340,
      ..._351,
      ..._360
    };
  }
  export namespace ons {
    export const v1 = { ..._182,
      ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._321,
      ..._330,
      ..._341,
      ..._352,
      ..._361
    };
  }
  export namespace reserve {
    export const v1 = { ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._322,
      ..._331,
      ..._342,
      ..._353,
      ..._362
    };
  }
  export namespace token {
    export const v1 = { ..._195,
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._323,
      ..._332,
      ..._343,
      ..._354,
      ..._363
    };
  }
  export const ClientFactory = { ..._373,
    ..._374,
    ..._375
  };
}
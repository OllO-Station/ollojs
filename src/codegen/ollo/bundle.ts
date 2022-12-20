import * as _134 from "./claim/claim";
import * as _135 from "./claim/genesis";
import * as _136 from "./claim/packet";
import * as _137 from "./claim/params";
import * as _138 from "./claim/query";
import * as _139 from "./claim/tx";
import * as _140 from "./inflation/genesis";
import * as _141 from "./inflation/params";
import * as _142 from "./inflation/query";
import * as _143 from "./inflation/tx";
import * as _144 from "./liquidity/genesis";
import * as _145 from "./liquidity/liquidity";
import * as _146 from "./liquidity/params";
import * as _147 from "./liquidity/query";
import * as _148 from "./liquidity/tx";
import * as _149 from "./loan/genesis";
import * as _150 from "./loan/loans";
import * as _151 from "./loan/packet";
import * as _152 from "./loan/params";
import * as _153 from "./loan/query";
import * as _154 from "./loan/tx";
import * as _155 from "./market/genesis";
import * as _156 from "./market/packet";
import * as _157 from "./market/params";
import * as _158 from "./market/query";
import * as _159 from "./market/tx";
import * as _160 from "./ons/genesis";
import * as _161 from "./ons/packet";
import * as _162 from "./ons/params";
import * as _163 from "./ons/query";
import * as _164 from "./ons/tx";
import * as _165 from "./ons/whois";
import * as _166 from "./oracle/genesis";
import * as _167 from "./oracle/packet";
import * as _168 from "./oracle/params";
import * as _169 from "./oracle/prices";
import * as _170 from "./oracle/query";
import * as _171 from "./oracle/tx";
import * as _172 from "./reserve/genesis";
import * as _173 from "./reserve/params";
import * as _174 from "./reserve/query";
import * as _175 from "./reserve/tx";
import * as _290 from "./claim/tx.amino";
import * as _291 from "./liquidity/tx.amino";
import * as _292 from "./loan/tx.amino";
import * as _293 from "./ons/tx.amino";
import * as _294 from "./oracle/tx.amino";
import * as _295 from "./claim/tx.registry";
import * as _296 from "./liquidity/tx.registry";
import * as _297 from "./loan/tx.registry";
import * as _298 from "./ons/tx.registry";
import * as _299 from "./oracle/tx.registry";
import * as _300 from "./claim/query.lcd";
import * as _301 from "./inflation/query.lcd";
import * as _302 from "./liquidity/query.lcd";
import * as _303 from "./loan/query.lcd";
import * as _304 from "./market/query.lcd";
import * as _305 from "./ons/query.lcd";
import * as _306 from "./oracle/query.lcd";
import * as _307 from "./reserve/query.lcd";
import * as _308 from "./claim/query.rpc.Query";
import * as _309 from "./inflation/query.rpc.Query";
import * as _310 from "./liquidity/query.rpc.Query";
import * as _311 from "./loan/query.rpc.Query";
import * as _312 from "./market/query.rpc.Query";
import * as _313 from "./ons/query.rpc.Query";
import * as _314 from "./oracle/query.rpc.Query";
import * as _315 from "./reserve/query.rpc.Query";
import * as _316 from "./claim/tx.rpc.msg";
import * as _317 from "./liquidity/tx.rpc.msg";
import * as _318 from "./loan/tx.rpc.msg";
import * as _319 from "./ons/tx.rpc.msg";
import * as _320 from "./oracle/tx.rpc.msg";
import * as _330 from "./lcd";
import * as _331 from "./rpc.query";
import * as _332 from "./rpc.tx";
export namespace ollo {
  export const claim = { ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._290,
    ..._295,
    ..._300,
    ..._308,
    ..._316
  };
  export const inflation = { ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._301,
    ..._309
  };
  export const liquidity = { ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._291,
    ..._296,
    ..._302,
    ..._310,
    ..._317
  };
  export const loan = { ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._154,
    ..._292,
    ..._297,
    ..._303,
    ..._311,
    ..._318
  };
  export const market = { ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._304,
    ..._312
  };
  export const ons = { ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._293,
    ..._298,
    ..._305,
    ..._313,
    ..._319
  };
  export const oracle = { ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._294,
    ..._299,
    ..._306,
    ..._314,
    ..._320
  };
  export const reserve = { ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._307,
    ..._315
  };
  export const ClientFactory = { ..._330,
    ..._331,
    ..._332
  };
}
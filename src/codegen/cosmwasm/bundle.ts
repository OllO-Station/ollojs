import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _289 from "./wasm/v1/tx.amino";
import * as _290 from "./wasm/v1/tx.registry";
import * as _291 from "./wasm/v1/query.lcd";
import * as _292 from "./wasm/v1/query.rpc.Query";
import * as _293 from "./wasm/v1/tx.rpc.msg";
import * as _367 from "./lcd";
import * as _368 from "./rpc.query";
import * as _369 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._289,
      ..._290,
      ..._291,
      ..._292,
      ..._293
    };
  }
  export const ClientFactory = { ..._367,
    ..._368,
    ..._369
  };
}
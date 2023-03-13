import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _408 from "./wasm/v1/tx.amino";
import * as _409 from "./wasm/v1/tx.registry";
import * as _410 from "./wasm/v1/query.lcd";
import * as _411 from "./wasm/v1/query.rpc.Query";
import * as _412 from "./wasm/v1/tx.rpc.msg";
import * as _529 from "./lcd";
import * as _530 from "./rpc.query";
import * as _531 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._408,
      ..._409,
      ..._410,
      ..._411,
      ..._412
    };
  }
  export const ClientFactory = { ..._529,
    ..._530,
    ..._531
  };
}
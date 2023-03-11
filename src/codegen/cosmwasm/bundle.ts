import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _405 from "./wasm/v1/tx.amino";
import * as _406 from "./wasm/v1/tx.registry";
import * as _407 from "./wasm/v1/query.lcd";
import * as _408 from "./wasm/v1/query.rpc.Query";
import * as _409 from "./wasm/v1/tx.rpc.msg";
import * as _531 from "./lcd";
import * as _532 from "./rpc.query";
import * as _533 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._405,
      ..._406,
      ..._407,
      ..._408,
      ..._409
    };
  }
  export const ClientFactory = { ..._531,
    ..._532,
    ..._533
  };
}
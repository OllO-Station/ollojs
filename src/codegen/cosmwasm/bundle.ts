import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _264 from "./wasm/v1/tx.amino";
import * as _265 from "./wasm/v1/tx.registry";
import * as _266 from "./wasm/v1/query.lcd";
import * as _267 from "./wasm/v1/query.rpc.Query";
import * as _268 from "./wasm/v1/tx.rpc.msg";
import * as _324 from "./lcd";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268
    };
  }
  export const ClientFactory = { ..._324,
    ..._325,
    ..._326
  };
}
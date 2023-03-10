import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _396 from "./wasm/v1/tx.amino";
import * as _397 from "./wasm/v1/tx.registry";
import * as _398 from "./wasm/v1/query.lcd";
import * as _399 from "./wasm/v1/query.rpc.Query";
import * as _400 from "./wasm/v1/tx.rpc.msg";
import * as _519 from "./lcd";
import * as _520 from "./rpc.query";
import * as _521 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._396,
      ..._397,
      ..._398,
      ..._399,
      ..._400
    };
  }
  export const ClientFactory = { ..._519,
    ..._520,
    ..._521
  };
}
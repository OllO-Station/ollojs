import * as _118 from "./wasm/v1/authz";
import * as _119 from "./wasm/v1/genesis";
import * as _120 from "./wasm/v1/ibc";
import * as _121 from "./wasm/v1/proposal";
import * as _122 from "./wasm/v1/query";
import * as _123 from "./wasm/v1/tx";
import * as _124 from "./wasm/v1/types";
import * as _426 from "./wasm/v1/tx.amino";
import * as _427 from "./wasm/v1/tx.registry";
import * as _428 from "./wasm/v1/query.lcd";
import * as _429 from "./wasm/v1/query.rpc.Query";
import * as _430 from "./wasm/v1/tx.rpc.msg";
import * as _553 from "./lcd";
import * as _554 from "./rpc.query";
import * as _555 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._426,
      ..._427,
      ..._428,
      ..._429,
      ..._430
    };
  }
  export const ClientFactory = { ..._553,
    ..._554,
    ..._555
  };
}
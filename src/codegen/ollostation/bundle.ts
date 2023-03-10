import * as _300 from "../ollo/lend/genesis";
import * as _301 from "../ollo/lend/params";
import * as _302 from "../ollo/lend/query";
import * as _303 from "../ollo/lend/tx";
import * as _514 from "../ollo/lend/query.lcd";
import * as _515 from "../ollo/lend/query.rpc.Query";
import * as _531 from "./lcd";
import * as _532 from "./rpc.query";
import * as _533 from "./rpc.tx";
export namespace ollostation {
  export namespace ollo {
    export const lend = { ..._300,
      ..._301,
      ..._302,
      ..._303,
      ..._514,
      ..._515
    };
  }
  export const ClientFactory = { ..._531,
    ..._532,
    ..._533
  };
}
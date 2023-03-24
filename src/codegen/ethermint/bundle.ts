import * as _125 from "./crypto/v1/ethsecp256k1/keys";
import * as _126 from "./evm/v1/events";
import * as _127 from "./evm/v1/evm";
import * as _128 from "./evm/v1/genesis";
import * as _129 from "./evm/v1/query";
import * as _130 from "./evm/v1/tx";
import * as _131 from "./feemarket/v1/events";
import * as _132 from "./feemarket/v1/feemarket";
import * as _133 from "./feemarket/v1/genesis";
import * as _134 from "./feemarket/v1/query";
import * as _135 from "./feemarket/v1/tx";
import * as _136 from "./types/v1/account";
import * as _137 from "./types/v1/dynamic_fee";
import * as _138 from "./types/v1/indexer";
import * as _139 from "./types/v1/web3";
import * as _431 from "./evm/v1/tx.amino";
import * as _432 from "./feemarket/v1/tx.amino";
import * as _433 from "./evm/v1/tx.registry";
import * as _434 from "./feemarket/v1/tx.registry";
import * as _435 from "./evm/v1/query.lcd";
import * as _436 from "./feemarket/v1/query.lcd";
import * as _437 from "./evm/v1/query.rpc.Query";
import * as _438 from "./feemarket/v1/query.rpc.Query";
import * as _439 from "./evm/v1/tx.rpc.msg";
import * as _440 from "./feemarket/v1/tx.rpc.msg";
import * as _556 from "./lcd";
import * as _557 from "./rpc.query";
import * as _558 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = { ..._125
      };
    }
  }
  export namespace evm {
    export const v1 = { ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._431,
      ..._433,
      ..._435,
      ..._437,
      ..._439
    };
  }
  export namespace feemarket {
    export const v1 = { ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._432,
      ..._434,
      ..._436,
      ..._438,
      ..._440
    };
  }
  export namespace types {
    export const v1 = { ..._136,
      ..._137,
      ..._138,
      ..._139
    };
  }
  export const ClientFactory = { ..._556,
    ..._557,
    ..._558
  };
}
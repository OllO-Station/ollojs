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
import * as _413 from "./evm/v1/tx.amino";
import * as _414 from "./feemarket/v1/tx.amino";
import * as _415 from "./evm/v1/tx.registry";
import * as _416 from "./feemarket/v1/tx.registry";
import * as _417 from "./evm/v1/query.lcd";
import * as _418 from "./feemarket/v1/query.lcd";
import * as _419 from "./evm/v1/query.rpc.Query";
import * as _420 from "./feemarket/v1/query.rpc.Query";
import * as _421 from "./evm/v1/tx.rpc.msg";
import * as _422 from "./feemarket/v1/tx.rpc.msg";
import * as _532 from "./lcd";
import * as _533 from "./rpc.query";
import * as _534 from "./rpc.tx";
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
      ..._413,
      ..._415,
      ..._417,
      ..._419,
      ..._421
    };
  }
  export namespace feemarket {
    export const v1 = { ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._414,
      ..._416,
      ..._418,
      ..._420,
      ..._422
    };
  }
  export namespace types {
    export const v1 = { ..._136,
      ..._137,
      ..._138,
      ..._139
    };
  }
  export const ClientFactory = { ..._532,
    ..._533,
    ..._534
  };
}
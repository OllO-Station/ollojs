import * as _148 from "./applications/transfer/v1/genesis";
import * as _149 from "./applications/transfer/v1/query";
import * as _150 from "./applications/transfer/v1/transfer";
import * as _151 from "./applications/transfer/v1/tx";
import * as _152 from "./applications/transfer/v2/packet";
import * as _153 from "./core/channel/v1/channel";
import * as _154 from "./core/channel/v1/genesis";
import * as _155 from "./core/channel/v1/query";
import * as _156 from "./core/channel/v1/tx";
import * as _157 from "./core/client/v1/client";
import * as _158 from "./core/client/v1/genesis";
import * as _159 from "./core/client/v1/query";
import * as _160 from "./core/client/v1/tx";
import * as _161 from "./core/commitment/v1/commitment";
import * as _162 from "./core/connection/v1/connection";
import * as _163 from "./core/connection/v1/genesis";
import * as _164 from "./core/connection/v1/query";
import * as _165 from "./core/connection/v1/tx";
import * as _166 from "./core/port/v1/query";
import * as _167 from "./core/types/v1/genesis";
import * as _168 from "./lightclients/localhost/v1/localhost";
import * as _169 from "./lightclients/solomachine/v1/solomachine";
import * as _170 from "./lightclients/solomachine/v2/solomachine";
import * as _171 from "./lightclients/tendermint/v1/tendermint";
import * as _441 from "./applications/transfer/v1/tx.amino";
import * as _442 from "./core/channel/v1/tx.amino";
import * as _443 from "./core/client/v1/tx.amino";
import * as _444 from "./core/connection/v1/tx.amino";
import * as _445 from "./applications/transfer/v1/tx.registry";
import * as _446 from "./core/channel/v1/tx.registry";
import * as _447 from "./core/client/v1/tx.registry";
import * as _448 from "./core/connection/v1/tx.registry";
import * as _449 from "./applications/transfer/v1/query.lcd";
import * as _450 from "./core/channel/v1/query.lcd";
import * as _451 from "./core/client/v1/query.lcd";
import * as _452 from "./core/connection/v1/query.lcd";
import * as _453 from "./applications/transfer/v1/query.rpc.Query";
import * as _454 from "./core/channel/v1/query.rpc.Query";
import * as _455 from "./core/client/v1/query.rpc.Query";
import * as _456 from "./core/connection/v1/query.rpc.Query";
import * as _457 from "./core/port/v1/query.rpc.Query";
import * as _458 from "./applications/transfer/v1/tx.rpc.msg";
import * as _459 from "./core/channel/v1/tx.rpc.msg";
import * as _460 from "./core/client/v1/tx.rpc.msg";
import * as _461 from "./core/connection/v1/tx.rpc.msg";
import * as _559 from "./lcd";
import * as _560 from "./rpc.query";
import * as _561 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._441,
        ..._445,
        ..._449,
        ..._453,
        ..._458
      };
      export const v2 = { ..._152
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._442,
        ..._446,
        ..._450,
        ..._454,
        ..._459
      };
    }
    export namespace client {
      export const v1 = { ..._157,
        ..._158,
        ..._159,
        ..._160,
        ..._443,
        ..._447,
        ..._451,
        ..._455,
        ..._460
      };
    }
    export namespace commitment {
      export const v1 = { ..._161
      };
    }
    export namespace connection {
      export const v1 = { ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._444,
        ..._448,
        ..._452,
        ..._456,
        ..._461
      };
    }
    export namespace port {
      export const v1 = { ..._166,
        ..._457
      };
    }
    export namespace types {
      export const v1 = { ..._167
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._168
      };
    }
    export namespace solomachine {
      export const v1 = { ..._169
      };
      export const v2 = { ..._170
      };
    }
    export namespace tendermint {
      export const v1 = { ..._171
      };
    }
  }
  export const ClientFactory = { ..._559,
    ..._560,
    ..._561
  };
}
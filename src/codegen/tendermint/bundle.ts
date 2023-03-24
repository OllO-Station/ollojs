import * as _334 from "./abci/types";
import * as _335 from "./crypto/keys";
import * as _336 from "./crypto/proof";
import * as _337 from "./libs/bits/types";
import * as _338 from "./p2p/types";
import * as _339 from "./types/block";
import * as _340 from "./types/evidence";
import * as _341 from "./types/params";
import * as _342 from "./types/types";
import * as _343 from "./types/validator";
import * as _344 from "./version/types";
export namespace tendermint {
  export const abci = { ..._334
  };
  export const crypto = { ..._335,
    ..._336
  };
  export namespace libs {
    export const bits = { ..._337
    };
  }
  export const p2p = { ..._338
  };
  export const types = { ..._339,
    ..._340,
    ..._341,
    ..._342,
    ..._343
  };
  export const version = { ..._344
  };
}
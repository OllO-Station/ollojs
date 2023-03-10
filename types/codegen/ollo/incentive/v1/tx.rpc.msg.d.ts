import { Rpc } from "../../../helpers";
import { MsgApplyMarketMaker, MsgApplyMarketMakerResponse, MsgClaimIncentive, MsgClaimIncentiveResponse } from "./tx";
export interface Msg {
    applyMarketMaker(request: MsgApplyMarketMaker): Promise<MsgApplyMarketMakerResponse>;
    claimIncentive(request: MsgClaimIncentive): Promise<MsgClaimIncentiveResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    applyMarketMaker(request: MsgApplyMarketMaker): Promise<MsgApplyMarketMakerResponse>;
    claimIncentive(request: MsgClaimIncentive): Promise<MsgClaimIncentiveResponse>;
}

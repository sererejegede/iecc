import { IRoasterShift } from './roasterShift';

export class Roaster {
    public _id: string;
    public userId: string;
    public status: string;
    public clientId: string;
    public location: string;
    public shift: IRoasterShift;

    constructor(
        _userId: string,
        _clientId: string,
        _status: string,
        _shift: IRoasterShift
    ) {
        this.clientId = _clientId;
        this.shift = _shift;
        this.status = _status;
        this.userId = _userId;
    }
}

import { IRoasterShift } from './roasterShift';

export interface IRoaster {
    userId: string,
    status: string,
    clientId: string,
    shift: IRoasterShift
}
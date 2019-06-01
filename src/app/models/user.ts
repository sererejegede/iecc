
import { IUserNOK } from './userNOK';
import { ISocialWorkDetails } from './socialWorkDetail';

export interface IUser {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: string,
    dateOfInitialAssessment: string,
    dateOfAdmission: string,
    personIdNumber: string,
    nhsNumber: string,
    address: string,
    telephoneNumber: string,
    gpDetails: string,
    position: string,
    nextOfKin: IUserNOK,
    socialWorkDetail: ISocialWorkDetails
}
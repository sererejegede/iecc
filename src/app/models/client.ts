import { IUserNOK } from './userNOK';
import { ISocialWorkDetails } from './socialWorkDetail';



export class Client {
    public id : string;
    public name: string;
    public email: string;
    public password: string;
    public description: string;
    public telephoneNumber: string;
    public address: string;
    public dateOfInitialAssessment: string;
    public dateOfAdmission: string;
    public personIdNumber: string;
    public nhsNumber: string;
    public nextOfKin: IUserNOK;
    public socialWorkerDetail: ISocialWorkDetails;
  

    constructor(
        _id: string,
        _name: string,
        _email: string,
        _password: string,
        _description: string,
        _telephoneNumber: string,
        _address: string,
        _dateOfInitialAssessment: string,
        _dateOfAdmission: string,
        _personIdNumber: string,
        _nhsNumber: string,
        _nextOfKin: IUserNOK,
        _socialWorkerDetail: ISocialWorkDetails
    ) {
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.description = _description;
        this.telephoneNumber = _telephoneNumber;
        this.address = _address;
        this.dateOfInitialAssessment = _dateOfInitialAssessment;
        this.dateOfAdmission = _dateOfAdmission;
        this.personIdNumber = _personIdNumber;
        this.nhsNumber = _nhsNumber;
        this.nextOfKin = _nextOfKin;
        this.socialWorkerDetail
    }
}
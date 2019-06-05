import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BroadCastSelectedUserService {


	private readonly userSelectedAnnouncedSource = new Subject<Object>();
	userSelectedAnnounced$ = this.userSelectedAnnouncedSource.asObservable();

	private readonly reloadAnnouncedSource = new Subject();
	reloadAnnouncedSource$ = this.reloadAnnouncedSource.asObservable();

	constructor() {}

	announceUserSelectedOperation(announce: Object) {
		this.userSelectedAnnouncedSource.next(announce);
	}

	announceReloadOperation() {
		this.reloadAnnouncedSource.next();
	}
}

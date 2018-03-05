import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user-model';
import { Injectable } from '@angular/core';
import { PayloadAction } from '../../../core/models/payload-action-model';

export const UserActionTypes = {
    LOAD: 'LOAD',
    DELETE: 'DELETE'
};

@Injectable()
export class UserActions {
    public load(payload: UserModel): PayloadAction<UserModel> {
        return {
            type: UserActionTypes.LOAD,
            payload
        };
    }
    public delete(): Action {
        return {
            type: UserActionTypes.DELETE
        };
    }
}

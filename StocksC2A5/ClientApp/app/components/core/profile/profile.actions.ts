import { Action } from '@ngrx/store';
import { type } from '../../util/action-name-helper';
import { ProfileModel } from '../models/profile-model';
import { Injectable } from '@angular/core';
import { PayloadAction } from '../models/payload-action-model';

export const ProfileActionTypes = {
    LOAD: type('[Profile] Load'),
    DELETE: type('[Profile] Delete')
};

@Injectable()
export class ProfileActions {
    public load(payload: ProfileModel): PayloadAction<ProfileModel> {
        return {
            type: ProfileActionTypes.LOAD,
            payload
        };
    }
    public delete(): Action {
        return {
            type: ProfileActionTypes.DELETE
        };
    }
}

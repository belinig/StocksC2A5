import { Action } from '@ngrx/store';
import { ProfileModel } from '../models/profile-model';
import { ProfileActionTypes } from './profile.actions';
import { PayloadAction } from '../models/payload-action-model';

const initialState: ProfileModel = {
    role: [],
    sub: null,
    jti: null,
    at_hash: null,
    useage: null,
    nbf: null,
    exp: null,
    iat: null,
    iss: null,
    unique_name: null,
    email_confirmed: false,
};

export function profileReducer(state = initialState, action: PayloadAction<ProfileModel>): ProfileModel {
    switch (action.type) {
        case ProfileActionTypes.LOAD:
            return action.payload;

        case ProfileActionTypes.DELETE:
            return initialState;

        default:
            return state;
    }
}

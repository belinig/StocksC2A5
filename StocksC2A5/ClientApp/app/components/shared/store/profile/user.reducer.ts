import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/user-model';
import { UserActionTypes } from './user.actions';
import { PayloadAction } from '../../../core/models/payload-action-model';

const initialState: UserModel = {
    username: null,
    loggedIn: false
};

export function userReducer(state = initialState, action: PayloadAction<UserModel>): UserModel {
    switch (action.type) {
        case UserActionTypes.LOAD:
            return action.payload;

        case UserActionTypes.DELETE:
            return initialState;

        default:
            return state;
    }
}

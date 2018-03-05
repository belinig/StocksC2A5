import { Action } from '@ngrx/store';

export interface PayloadAction<PAYLOAD> extends Action {
    payload: PAYLOAD;
}

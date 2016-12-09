import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core';
import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';

import * as fromTree from './tree';

export interface AppState {
    tree: fromTree.TreeState
}

const appReducer = {
    tree: fromTree.treeReducer
}

const developmentReducer: ActionReducer<any> = combineReducers(appReducer);

export function reducer(state, action) {
    return developmentReducer(state, action);
}

export function getTreeState(state$: Observable<AppState>) {
    return state$.select(state => state.tree);
}

export const getTreeViewState = compose(fromTree.getTreeState, getTreeState);
export const getPersonState = compose(fromTree.getPerson, getTreeState);
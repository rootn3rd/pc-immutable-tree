import { Action } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { TreeActionTypes } from './../actions/tree';
import * as Stubs from './../stubs/tree';
import { fromJS, List, Map } from 'immutable';

import * as ImmutableHelpers from './../utils/immutableHelper';

export interface TreeState {
    treeView: List<Map<any, any>>;
    person: Map<string, any>;
}

const initialState: any = Map({
    treeView: List.of(...[]),
    person: Map({
        name: "",
        hobbies: List.of(...[])
    })
});

export function treeReducer(state = fromJS(initialState), action: Action): any {
    switch (action.type) {
        case TreeActionTypes.INITIAL_LOAD: {

            let initialData = fromJS(Stubs.TREE_DATA);
            let p = Map({
                name: "Pankaj",
                hobbies: List.of("hobby1", "hobby2")
            });

            let newState = Map({
                treeView: initialData,
                person: p
            });
            //console.log(p);
            return newState;
        }
        case TreeActionTypes.NODE_SELECT: {
            ImmutableHelpers.test();

            state = state.updateIn(['treeView', 0, 'isSelected'], (x) => {
                return !x;
            });

            // state = state.updateIn(createUpdatePath(state.get('treeView'), 1), (x) => {
            //     return !x;
            // });

            return state;
        }
        case TreeActionTypes.EDIT_PERSON: {

            // state = state.updateIn(['person', 'name'], (currName) => {
            //     console.log(currName);
            //     currName = "Chaurasia";
            // });

            let tempState = state.asMutable();

            tempState = tempState.updateIn(['person', 'name'], (x) => {
                return ' Chaurasia';
            });

            tempState = tempState.updateIn(['person', 'hobbies', 1], (x) => {
                return 'superawesome';
            });


            tempState = tempState.updateIn(['treeView', 0, 'isSelected'], (x) => {
                return !x;
            });
            //console.log(tempState.get('treeView'));

            return tempState.asImmutable();
        }

        case TreeActionTypes.DO_SOMETHING_COMPLETED: {
            state = state.updateIn(['treeView', 1, 'isSelected'], (x) => {
                return !x;
            });

            // state = state.updateIn(createUpdatePath(state.get('treeView'), 1), (x) => {
            //     return !x;
            // });
            console.log('Do something reducer');
            return state;


        }
        default: {
            return state;
        }
    }

}

export function getTreeState(state$: Observable<any>) {
    return state$.select(state => state.get("treeView"));
}

export function getPerson(state$: Observable<any>) {
    return state$.select(state => state.get("person"));
}


function createUpdatePath(treeView, nodeId) {
    return ['treeView', 1];
}
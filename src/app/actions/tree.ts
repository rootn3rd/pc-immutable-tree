import { Action } from '@ngrx/store';

export const TreeActionTypes = {
    INITIAL_LOAD: "INITIAL_LOAD",
    NODE_SELECT: "NODE_SELECT",
    EDIT_PERSON: "EDIT_PERSON",
    DO_SOMETHING: "DO_SOMETHING",
    DO_SOMETHING_COMPLETED: "DO_SOMETHING_COMPLETED"
}

export class InitialLoadAction implements Action {
    type = TreeActionTypes.INITIAL_LOAD;

    constructor(public payload: any) { }
}

export class NodeSelectAction implements Action {
    type = TreeActionTypes.NODE_SELECT;

    constructor(public payload: any) { }
}

export class EditPersonAction implements Action {

    type = TreeActionTypes.EDIT_PERSON;

    constructor(public payload: any) { }
}

export class DoSomethingAction implements Action {

    type = TreeActionTypes.DO_SOMETHING;
    constructor(public payload: any) { }
}


export class DoSomethingCompletedAction implements Action {

    type = TreeActionTypes.DO_SOMETHING_COMPLETED;
    constructor(public payload: any) { }
}
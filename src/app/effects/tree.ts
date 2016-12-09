import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TreeActionTypes, DoSomethingCompletedAction } from './../actions/tree';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/filter';

import { of } from 'rxjs/observable/of';
import { combineLatest } from 'rxjs/observable/combineLatest';
import * as fromAppState from './../reducers/index';

@Injectable()
export class TreeEffects {


    constructor(private actions$: Actions, private store: Store<fromAppState.AppState>) {

        let combinedObservable$ = combineLatest(
            store.let(fromAppState.getTreeState),
            this.actions$
                .ofType(TreeActionTypes.DO_SOMETHING_COMPLETED)
                .map(action => action.payload),
            (tree, payload) => {

                console.log('Tree and payload', tree, payload);

            }).subscribe(x => {
                console.log('Will do something');
            });

        // let combinedObservable$ =
        //     store.let(fromAppState.getTreeState)
        //         .skipWhile(x => this.actions$
        //             .ofType(TreeActionTypes.DO_SOMETHING_COMPLETED)
        //             .map(action => action.payload)
        //             .filter(payload => <boolean>payload.isCompleted))


        // combineLatest(
        //     store.let(fromAppState.getTreeState),
        //     ,
        //     (tree, payload) => {

        //         console.log('Tree and payload', tree, payload);

        //     }).subscribe(x => {
        //         console.log('Will do something');
        //     });


    }

    @Effect()
    doSomething$ = this.actions$
        .ofType(TreeActionTypes.DO_SOMETHING)
        .map(action => action.payload)
        .delay(2000)
        .map(payload => {
            console.log('doSomething$ invoked!');
            return new DoSomethingCompletedAction({
                node: payload
            })
        });




}
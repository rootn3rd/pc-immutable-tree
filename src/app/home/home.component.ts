import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';
import { Store } from '@ngrx/store';
import { NodeSelectAction, InitialLoadAction, EditPersonAction, DoSomethingAction } from './../actions/tree';
import * as fromAppState from './../reducers/index';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  treeData: Observable<any>;
  person$: Observable<any>;
  personData: any;

  constructor(private store: Store<fromAppState.AppState>) {

    this.treeData = store.let(fromAppState.getTreeViewState);
    this.person$ = store.let(fromAppState.getPersonState);

    this.person$.subscribe(x => this.personData = x);
    this.load();
  }

  nodeSelected(node) {
    console.log(node);
    this.store.dispatch(new NodeSelectAction({
      currentNode: node
    }));
  }

  load() {
    this.store.dispatch(new InitialLoadAction({}));
  }

  edit() {
    this.store.dispatch(new EditPersonAction({}));
  }

  nodeClick(node) {
    console.log(node);
    this.store.dispatch(new NodeSelectAction({
      currentNode: node
    }));
  }

  doSomething() {

    this.store.dispatch(new DoSomethingAction({}));
  }
}

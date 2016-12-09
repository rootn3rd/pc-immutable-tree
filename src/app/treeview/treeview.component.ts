import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'treeview',
    templateUrl: './treeview.component.html'
})
export class TreeViewComponent {

    @Input('data')
    data: any;

    @Output('node-selected')
    nodeSelected: EventEmitter<any> = new EventEmitter<any>();

    @Output('node-click')
    nodeClicked: EventEmitter<any> = new EventEmitter<any>();
}
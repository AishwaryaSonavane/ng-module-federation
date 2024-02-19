import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  _componentName:string | undefined;
  _path:string | undefined;
  _module:string | undefined;
  _project:string | undefined;
  _bg:'blue'|'red'|'green' | undefined;

  @Input()
  set componentName(name:string){
    this._componentName=name;
  }


  @Input()
  set path(path:string){
    this._path=path;
  }

  @Input()
  set module(module:string){
    this._module=module;
  }

  @Input()
  set project(name:string){
    this._project=name;
  }

  @Input()
  set bg(bg:'blue'|'red'|'green'){
    this._bg=bg;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

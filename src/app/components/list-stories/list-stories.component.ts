import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent implements OnInit {

  @Input() stories: any;

  constructor() { }

  ngOnInit() {
  }

}

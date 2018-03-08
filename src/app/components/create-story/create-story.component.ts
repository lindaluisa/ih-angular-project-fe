import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { StoryService } from '../../services/story.service';


@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  story: any;

  constructor(public entryService: StoryService, private router: Router) { }
  
  @Input() user: any; 
  @Input() currentUser: any;
  @Output() createStoryEvent = new EventEmitter<string>();

  ngOnInit() {
  }


  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.createStoryEvent.emit(this.story);
      this.processing = false;
    }
  }

}

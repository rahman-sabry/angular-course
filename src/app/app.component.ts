import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[0].description;

  price = 9.992366223466;

  rate = 0.68;

  startDate = new Date(2000, 0, 1)

  onCourseSelected(course:Course) {

    console.log("App component - click event bubbled ...", course);

  }

  trackCourse(index:number, course:Course) {
    return course.id
  }

}

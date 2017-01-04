import { Inject, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Api} from "../../Services/api";
import {CoursesForm} from './CoursesForm';

@Component({
    templateUrl: '/templates/Courses.CreateCourse.main',
    providers:[Api, CoursesForm]
})

export class CourseCreateComponent {
    private course: Object;
    
    constructor(
    ) {
        this.course = {
            author: '',
            name: '',
            description: '',
            price: '',
            image: ''
        };
    }
}

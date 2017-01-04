import { Inject, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Api} from "../../Services/api";
import {CoursesForm} from './CoursesForm';

@Component({
    templateUrl: '/templates/Courses.EditCourse.main',
    providers:[Api, CoursesForm]
})

export class CourseEditComponent implements OnInit {
    private course: Object;
    private router: Router;
    private _idToLoad: number;
    private teste: String;
    private _api: Api;
    private route: ActivatedRoute;
    
    constructor(
        @Inject(Api) api: Api,
        private _router: ActivatedRoute
    ) {
        this._api = api;
        this.route = _router;
        this.course = {};
    }

    ngOnInit() {
        this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
            this.getCourse(id);

        });
    }

    private getCourse(i) {
        this._api.getCourse(i).then(
            (res) => {
                this.course = res["course"];
                console.log(this.course)
            }, (error) => {
                console.error(error);
            }
        );
    }   
}
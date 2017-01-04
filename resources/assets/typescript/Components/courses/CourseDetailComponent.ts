import { Component, Inject, Injectable } from '@angular/core';
// import { ROUTER_DIRECTIVES, Router, OnActivate, RouteSegment } from '@angular/router';
import { Router } from '@angular/router';
import {Api} from "../../Services/api";

@Component({
    'selector': 'state-template',
    'templateUrl': '/templates/Courses.DetailCourse.main',
     // directives: [ROUTER_DIRECTIVES]
})
export class CourseDetailComponent {

    private course: Object;
    private router: Router;
    private _idToLoad: number;
    private teste: String;
/*
    routerOnActivate(current: RouteSegment) {
        this._idToLoad = parseInt(current.getParam('id'));
        this.getCourse();
    }*/
    routerOnActivate() {
        //this._idToLoad = parseInt(current.getParam('id'));
        //this.getCourse();
    }

    private getCourse() {
/*
        this._api.getCourse(this._idToLoad).then(
            (res) => {
                this.course = res["course"];
            }, (error) => {
                console.error(error);
            }
        );
        */
    }

    constructor(private _api: Api,  @Inject(Router) router: Router)
    {
        this.router = router;
        this.course = {};
    }


}

import { Component, Inject, Injectable, Input } from '@angular/core';
import { Router} from '@angular/router';
import {Api} from "../../Services/api";

// declare var jQuery:any;

@Component({
    selector: 'course-remove',
    'templateUrl': '/templates/Courses.Remove.main',
    // directives: [ROUTER_DIRECTIVES]
})

export class CourseRemoveComponent
{
    @Input('course') course: Object;
    constructor(private _api: Api) {}
    
    remove(id) {
        this._api.deleteCourse(id);
       // jQuery("#remove-course").modal("hide");
    }
}
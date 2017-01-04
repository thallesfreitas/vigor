import { Component, Inject } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import {Api} from "../../Services/api";
// import {CourseRemoveComponent} from "./CourseRemoveComponent";



@Component({
    'selector': 'state-template',
    'templateUrl': '/templates/Courses.ListCourse.main',
    providers:[Api]//,
    // directives: [ROUTER_DIRECTIVES, CourseRemoveComponent]
})

export class CourseListComponent {

    private courses: Object;
    private selectedCourse: Object = {};
    private router: Router;
    private _api: Api;

        

    constructor(
        @Inject(Api) api: Api,
        @Inject(Router) router: Router)
    {
        this._api = api;
        this.router = router;
        this.courses = this._api.courses$;
        this._api.getCourses();
        
        
    }
    
    public CreateCourse (e) {
        console.log("CreateCourse");
        this.router.navigate(["/course/create/new"]);
    }
    
    public CourseDetail (e,id) {
        console.log("CourseDetail: "+ id);
        this.router.navigate(["/course/"+id]);
    }
    
    public CourseEdit (e,id) {
        console.log("CourseEdit");
        this.router.navigate(["/course/edit/"+id]);
    }

}

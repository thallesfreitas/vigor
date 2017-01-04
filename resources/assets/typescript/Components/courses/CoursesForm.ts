import { ElementRef, Component, Inject, Input, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Api } from "../../Services/api";
import { ICourse } from "../../interfaces/ICourse";
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://vigorlocal.com.br/api/upload-file';

@Component({
    selector: 'coursesform',
    'templateUrl': '/templates/Courses.Form.main'
})

export class CoursesForm {

    @Input('course') course: ICourse;
    @Input('isUpdate') isUpdate: boolean = false;
    @Input('action') action: string;
    errors: Array<Object> = [];
    private _api: Api;
    data: any;
    
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

    constructor(
        @Inject(Api) api: Api,
        private _router: Router
    ){
        this._api = api;    

        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            this.course.image = "IMAGEM";
            var responsePath = JSON.parse(response);
            this.course.image = responsePath.generatedName;
            console.log(response, responsePath);// the url will be in the response
        };
    }

    processCourse(course): void {
        !this.isUpdate ? this.save(course) : this.update(course);
    }

    save(course)
    {
        let course_string = this._courseString(course);

        this._api.createCourse(course_string).then(
            (res) => {
                this._router.navigate(['/listcourse']);
            },
            (error) => {
                if(error.status === 422) 
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                         this.errors.push(errors[key]);
                    }
                }
            }
        );
    }

    update(course)
    {
        let course_string = this._courseString(course);

        this._api.updateCourse(course_string, course.id).then(
            (res) => {
                this._router.navigate(['/listcourse']);
            },
            (error) => {
                if(error.status === 422)
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                        this.errors.push(errors[key]);
                    }
                }
            }
        );
    }

    private _courseString(course): string{
        return "&author="+course.author+
            "&name="+course.name+
            "&description="+course.description+
            "&price="+course.price+
            "&image="+course.image;
    }
}
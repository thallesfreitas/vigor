import { NgModule, CUSTOM_ELEMENTS_SCHEMA }     from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { FormsModule }                          from '@angular/forms';
import { RouterModule, Routes }                 from '@angular/router';
import { AppComponent }                         from './app.component';
import { FirstComponent }                       from './Components/FirstComponent/FirstComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HttpModule } from '@angular/http';

import {CourseRemoveComponent} from "./Components/courses/CourseRemoveComponent";
import {CourseListComponent} from "./Components/courses/CourseListComponent";
import {CourseEditComponent} from "./Components/courses/CourseEditComponent";
import {CourseCreateComponent} from "./Components/courses/CourseCreateComponent";
import {CourseDetailComponent} from "./Components/courses/CourseDetailComponent";
import { CoursesForm } from "./Components/courses/CoursesForm";
import { FileSelectDirective } from 'ng2-file-upload';

import { FileUploadModule } from './Components/file-upload/file-upload.module';
import { DemoComponent } from './Components/DemoComponent';



const appRoutes: Routes = [
    { path: '',                    component: FirstComponent           },
    { path: 'upload',              component: FirstComponent         },
    
    { path: 'listcourse',            component: CourseListComponent    },
    { path: 'course/:id',            component: CourseDetailComponent  },
    { path: 'course/edit/:id',       component: CourseEditComponent    },
    { path: 'course/create/:id',     component: CourseCreateComponent  }, 

    { path: 'DemoComponent',         component: DemoComponent  }, 
];

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    FileUploadModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    FirstComponent , CourseListComponent, 
    CourseDetailComponent, CourseEditComponent, 
    CourseCreateComponent, CoursesForm,
    FileSelectDirective,
    CourseRemoveComponent,
    
    DemoComponent
  ],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]

})
export class AppModule { }

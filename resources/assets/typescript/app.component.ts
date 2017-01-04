/*import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { FirstComponent } from './Components/FirstComponent/FirstComponent';
import { SecondComponent } from './Components/SecondComponent/SecondComponent';


import {CourseListComponent} from "./Components/courses/CourseListComponent";
import {CourseEditComponent} from "./Components/courses/CourseEditComponent";
import {CourseCreateComponent} from "./Components/courses/CourseCreateComponent";
import {CourseDetailComponent} from "./Components/courses/CourseDetailComponent";

@Routes([
    
    {path:'/upload',              component: FirstComponent},
    {path:'/edit',                component: SecondComponent},
    
    // {path:'/',                    component: CourseListComponent},
    {path:'/ListCourse',        component: CourseListComponent},
    {path:'/courses/:id',         component: CourseDetailComponent},
    {path:'/courses/edit/:id',    component: CourseEditComponent},
    {path:'/courses/create',      component: CourseCreateComponent}

])

@Component({
    'directives': [ROUTER_DIRECTIVES],
    'selector': 'app',
    // 'template': `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`
    'template': `<div class="row"><h2 class="text-center text-muted">Crud with Angular 2 & Laravel 5</h2><router-outlet></router-outlet></div>`
})
export class AppComponent {
    constructor () {}
}
*/




//FUNCIONA O UPLOAD
//import { Component } from '@angular/core';
// import { Routes, RouterModule } from "@angular/router";

// import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
// import { FirstComponent } from './Components/FirstComponent/FirstComponent';
// import { SecondComponent } from './Components/SecondComponent/SecondComponent';
/*
import { CourseListComponent } from "./Components/courses/CourseListComponent";
import {CourseEditComponent} from "./Components/courses/CourseEditComponent";
import {CourseCreateComponent} from "./Components/courses/CourseCreateComponent";
import {CourseDetailComponent} from "./Components/courses/CourseDetailComponent";
*/
// @Routes([
   // export const AppRoutes: Routes = [
    // { path: '/upload',             component: FirstComponent        },
    // { path: '/segundo',            component: SecondComponent       }
    /*,    
    { path: '/listcourse',         component: CourseListComponent   },
    { path: '/course/:id',         component: CourseDetailComponent },
    { path: '/courses/edit/:id',   component: CourseEditComponent   },
    { path: '/courses/create',     component: CourseCreateComponent }*/
    // ]
// ])
// @Component({
    // 'directives': [ROUTER_DIRECTIVES],
    // 'selector': 'app',
    // 'template': `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`
// })
/*
@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
*/
// export class AppComponent {
    // constructor () {}
// }
/*
import { Routes, RouterModule } from "@angular/router";
import { Component, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from './Components/FirstComponent/FirstComponent';

export const AppRoutes: Routes = [
    { path: 'upload',             component: FirstComponent        }
    
    /*,    
    { path: '/segundo',            component: SecondComponent    }
    { path: '/listcourse',         component: CourseListComponent   },
    { path: '/course/:id',         component: CourseDetailComponent },
    { path: '/courses/edit/:id',   component: CourseEditComponent   },
    { path: '/courses/create',     component: CourseCreateComponent }
    *
    ];


@Component({
    // 'directives': [ROUTER_DIRECTIVES],
    'selector': 'app',
    // 'template': `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`
    'template': `<div class="row"><h2 class="text-center text-muted">Crud with Angular 2 & Laravel 5</h2><router-outlet></router-outlet></div>`
})

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes)  ],
  declarations: [ FirstComponent ],
  bootstrap:    [ FirstComponent ]
})
export class AppComponent { }



import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="row"><h2 class="text-center text-muted">Crud with Angular 2 & Laravel 5</h2><router-outlet></router-outlet></div>`
})
export class AppComponent  { name = 'Angular'; }



*/

/*
import { ModuleWithProviders } from '@angular/core';
import { Component,  NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent }  from './Components/FirstComponent/FirstComponent';


export const AppRoutes: Routes = [
    { path: '',             component: FirstComponent        },
    { path: 'upload',             component: FirstComponent        }
    
    ,    
    { path: '/segundo',            component: SecondComponent    }
    { path: '/listcourse',         component: CourseListComponent   },
    { path: '/course/:id',         component: CourseDetailComponent },
    { path: '/courses/edit/:id',   component: CourseEditComponent   },
    { path: '/courses/create',     component: CourseCreateComponent }
    
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes) ],
  exports:      [ RouterModule ],
  declarations: [ FirstComponent ],
  bootstrap:    [ FirstComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
@Component({
  selector: 'app',
  'template': `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`
})
export class AppComponent { }
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app',
  'template': `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`
})
export class AppComponent { }

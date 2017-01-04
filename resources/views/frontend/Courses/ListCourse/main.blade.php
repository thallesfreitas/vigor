<div class="row">
    <h5 class="text-center text-muted">Course List</h5>
    <hr>
    <div class="pull-right" style="margin-bottom: 10px;">
    	<button
                type="submit"
                class="btn btn-md btn-success"
                (click)="CreateCourse($event)"
        >
            Add new course
    	</button>


    </div>
</div>
<div class="row">
    <div class="list-group" *ngFor="let course of courses | async">
        <!-- <a href="#" class="list-group-item clearfix"> -->
        <div class="list-group-item clearfix">
            <span class="glyphicon glyphicon-file"></span>
            Author: @{{ course.author }}, Name: @{{ course.name }}, Price: @{{ course.price }}
            <span class="pull-right">

                <button class="btn btn-md btn-success" type="submit" (click)="CourseDetail($event, course.id)">
                    <span class="glyphicon glyphicon-search"></span>
                </button>

                <button class="btn btn-md btn-info" type="submit" (click)="CourseEdit($event, course.id)">
                    <span class="glyphicon glyphicon-pencil"></span>
                </button>

                <a href="#removecourse" data-target="#removecourse"  prevent-default data-toggle="modal" class="btn btn-md btn-danger" target="_self" (click)="$event; selectedCourse = course">
                    <span class="glyphicon glyphicon-trash"></span>
                </a>
          </span>
      <!--   </a> -->
        </div>
        <course-remove [course]="selectedCourse"></course-remove>
    </div>
</div>




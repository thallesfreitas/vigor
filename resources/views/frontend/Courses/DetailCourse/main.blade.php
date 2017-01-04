<h5 class="text-center text-muted">Detalle curso de @{{ course.name }}</h5>
<hr>
<a href="#" class="list-group-item clearfix">
    <span class="glyphicon glyphicon-file"></span>
    Author: @{{ course.author }}, Name: @{{ course.name }}
    <span class="pull-right">

        <a class="btn btn-md btn-success" [routerLink]="['/listcourse']">
            Volver al listado
        </a>
  </span>
</a>
<div class="modal fade" id="removecourse" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title">¿You want to delete the course @{{ course.name }}?</h4>
            </div>
            <div class="modal-body">
                <p>Autor: @{{ course.author }}</p>
                <p>Description: @{{ course.description }}</p>
                <p>Price: @{{ course.price }}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger"  data-dismiss="modal" id="removeCourse" (click)="remove(course.id)">Remove course</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<div *ngIf="errors">
    <div class="alert alert-danger" *ngFor="let error of errors">
        @{{ error }}
    </div>
</div>

<h5 class="text-center text-muted" *ngIf="isUpdate">Editar el curso @{{ course.name }}</h5>
<form role="form">
    <div class="form-group">
        <label class="sr-only" for="author">Author</label>
        <input type="text" id="author" class="form-control" [(ngModel)]="course.author" placeholder="Author"  [ngModelOptions]="{standalone: true}">
    </div>
    <div class="form-group">
        <label class="sr-only" for="name">Name</label>
        <input type="text" id="name" class="form-control" [(ngModel)]="course.name" placeholder="Name"  [ngModelOptions]="{standalone: true}">
    </div>
    <div class="form-group">
        <label class="sr-only" for="description">Description</label>
        <input type="text" id="description" class="form-control" [(ngModel)]="course.description" placeholder="Description"  [ngModelOptions]="{standalone: true}">
    </div>
    <div class="form-group">
        <label class="sr-only" for="price">Price</label>
        <input type="text" id="price" class="form-control" [(ngModel)]="course.price" placeholder="Price"  [ngModelOptions]="{standalone: true}">
    </div>

    <div class="form-group">
        <h3>Select files</h3>
        <!-- <input type="file" ng2FileSelect [uploader]="uploader" multiple  /><br/> -->
        <input type="file" ng2FileSelect [uploader]="uploader"  /><br/>
        <h3>Upload queue</h3>
        <p>Queue length: @{{ uploader?.queue?.length }}</p>
        <table class="table">
            <thead>
            <tr>
                <th width="50%">Name</th>
                <th>Size</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of uploader.queue">
                <td><strong>@{{ item?.file?.name }}</strong></td>
                <td *ngIf="uploader.isHTML5" nowrap>@{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>
                
                <td *ngIf="uploader.isHTML5">
                    <div class="progress" style="margin-bottom: 0;">
                        <div class="progress-bar" role="progressbar" [ngStyle]="{ 'width': item.progress + '%' }"></div>
                    </div>
                </td>
                <td class="text-center">
                    <span *ngIf="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>
                    <span *ngIf="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>
                    <span *ngIf="item.isError"><i class="glyphicon glyphicon-remove"></i></span>
                </td>

                <td nowrap>
                    <button type="button" class="btn btn-success btn-xs"
                            (click)="item.upload()" [disabled]="item.isReady || item.isUploading || item.isSuccess">
                        <span class="glyphicon glyphicon-upload"></span> Upload
                    </button>
                    <button type="button" class="btn btn-warning btn-xs"
                            (click)="item.cancel()" [disabled]="!item.isUploading">
                        <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                    </button>
                    <button type="button" class="btn btn-danger btn-xs"
                            (click)="item.remove()">
                        <span class="glyphicon glyphicon-trash"></span> Remove
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        Queue progress:
        <div class="progress" style="">
            <div class="progress-bar" role="progressbar" [ngStyle]="{ 'width': uploader.progress + '%' }"></div>
        </div>
        
        <button type="button" class="btn btn-success btn-s"
                (click)="uploader.uploadAll()" [disabled]="!uploader.getNotUploadedItems().length">
            <span class="glyphicon glyphicon-upload"></span> Upload all
        </button>
        <button type="button" class="btn btn-warning btn-s"
                (click)="uploader.cancelAll()" [disabled]="!uploader.isUploading">
            <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
        </button>
        <button type="button" class="btn btn-danger btn-s"
                (click)="uploader.clearQueue()" [disabled]="!uploader.queue.length">
            <span class="glyphicon glyphicon-trash"></span> Remove all
        </button>
    </div>
    <div class="form-group">
        <input type="button" (click)="processCourse(course)" class="btn btn-success" [value]="action">
        <a class="btn btn-info" [routerLink]="['/listcourse']" >List Courses</a>
    </div>
</form>





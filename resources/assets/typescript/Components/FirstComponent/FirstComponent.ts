import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../../Services/FileUploadService/FileUploadService';
import { ProgressBar } from '../UI/ProgressBar/ProgressBar';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
    'providers': [FileUploadService],
    'selector': 'state-template',
    'templateUrl': '/templates/FirstComponent.main'
})
export class FirstComponent {
    private fileUploadService: FileUploadService;
    private redirectRoute: string = '/listCourse';
    private files: File[] = [];
    private router: Router;
    private uploadProgress: number = 0;
    private progressBarVisibility: boolean = false;
    private uploadRoute: string = '/api/upload-file';

    constructor (
        @Inject(FileUploadService) fileUploadService: FileUploadService,
        @Inject(Router) router: Router
    ) {
        this.fileUploadService = fileUploadService;
        this.router = router;
    }

    public run (): void {}

    public filesSelectionHandler (fileInput: any){
        let FileList: FileList = fileInput.target.files;

        for (let i = 0, length = FileList.length; i < length; i++) {
            this.files.push(FileList.item(i));
        }

        this.progressBarVisibility = true;
    }

    public filesUploadHandler () {
        this.uploadProgress = 100;
        this.fileUploadService.upload().then(
            () => {
                this.router.navigate([this.redirectRoute]);
            },
            (error) => {
                document.write(error);
            }
        );
    }
}
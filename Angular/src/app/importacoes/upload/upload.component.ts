import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient} from '@angular/common/http';
import { ImportacoesService } from '../importacoes.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  progress: number;
  message: string;
  @Output() onUploadFinished = new EventEmitter();

  constructor(private service: ImportacoesService) { }

  ngOnInit() {
  }   

  public uploadFile = (files) => {
    if (files.length === 0){
      return;
    }
    
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    document.getElementById('customFileLabel').innerHTML = fileToUpload.name;

    this.service.upload({ url: 'https://localhost:44310/api/values', formData }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    }, error => console.log(error));

    
    

    // this.http.post('https://localhost:5001/api/values', formData, {reportProgress: true, observe: 'events'})
    //   .subscribe(event => {
    //     if (event.type === HttpEventType.UploadProgress)
    //       this.progress = Math.round(100 * event.loaded / event.total);
    //     else if (event.type === HttpEventType.Response) {
    //       this.message = 'Upload success.';
    //       this.onUploadFinished.emit(event.body);
    //     }
    //   });
  }
}

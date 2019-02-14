import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post('https://uploadtest-a6f25.firebaseio.com/',fd)
    .subscribe(res => {
      console.log(res);
    });
  }

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}

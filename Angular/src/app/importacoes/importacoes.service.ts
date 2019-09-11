import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportacoesService {

  constructor(private http: HttpClient) { }

  upload({ url, formData }: { url: string; formData: FormData; }){
    return this.http.post(url, formData, 
    {reportProgress: true, observe: 'events'})    
  }
}

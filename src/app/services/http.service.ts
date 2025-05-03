import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getRandomImageUrl(): string {
    return `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;
  }
}

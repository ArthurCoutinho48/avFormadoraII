import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.page.html',
  styleUrls: ['./task1.page.scss'],
  standalone: false,
})
export class Task1Page implements OnInit {

  imagemUrl: string = '';

  constructor(private httpService: HttpService) {
    this.carregarImagem();
  }

  ngOnInit() {
  }

  carregarImagem() {
    this.imagemUrl = this.httpService.getRandomImageUrl();
  }
}

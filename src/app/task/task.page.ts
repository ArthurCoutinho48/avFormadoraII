import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
  standalone: false,
})
export class TaskPage implements OnInit {

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

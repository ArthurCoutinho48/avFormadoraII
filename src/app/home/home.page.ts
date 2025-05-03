import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage{

  constructor(private router: Router) {}

  navigateToTask(rota:number){

    if (rota === 1){
      this.router.navigate(['/task']);
    }else if (rota == 2){
      this.router.navigate(['/task1']);
    }
    
  }

}

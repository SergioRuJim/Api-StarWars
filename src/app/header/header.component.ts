import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  idiomas:string[] = ["Inglés", 'Español'];

  seleccionado: any = "Español";

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  cambiarIdioma(){
    if(this.seleccionado == "Español"){
      this.translate.use('es');
    }else{
      this.translate.use('en');
    }
  }

}

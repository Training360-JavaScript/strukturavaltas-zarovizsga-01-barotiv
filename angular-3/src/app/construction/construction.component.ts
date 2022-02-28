import { ConstructionService } from 'src/app/service/construction.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from '../model/construction';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

  list$: Observable<Construction[]> = this.constructionService.getAll();

  constructor(
    private constructionService: ConstructionService
  ) { }

  ngOnInit(): void {
  }

}

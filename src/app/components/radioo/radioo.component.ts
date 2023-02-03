import { Component } from '@angular/core';

@Component({
  selector: 'app-radioo',
  templateUrl: './radioo.component.html',
  styleUrls: ['./radioo.component.css']
})
export class RadiooComponent {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}

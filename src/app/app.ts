import {Component} from '@angular/core';
import {Navigation} from './components/navigation/navigation';

@Component({
  selector: 'pt-root',
  imports: [
    Navigation,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

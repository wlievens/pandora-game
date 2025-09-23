import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'pt-navigation',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbar,
    MatButton
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
}

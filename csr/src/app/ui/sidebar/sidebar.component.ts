import { Component } from '@angular/core';
import {SocialComponent} from '@ui/social/social.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SocialComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}

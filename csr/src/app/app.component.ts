import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from '@ui/sidebar/sidebar.component';
import {ProjectsComponent} from '@ui/projects/projects.component';
import {ExperienceComponent} from '@ui/experience/experience.component';
import {SkillsComponent} from '@ui/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProjectsComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Taylor Ray - Web Developer';
}

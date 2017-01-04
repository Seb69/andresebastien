import {Component, OnInit} from '@angular/core';
import {Project} from './shared';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      name: "PROJECT ONE",
      date: "2016",
      description: "Good project on going",
      picture: "/assets/Artboard 1.svg",
      links: []
    },
    {
      name: "PROJECT TWO",
      date: "2015",
      description: "Average project on going",
      picture: "/assets/Artboard 1.svg",
      links: []
    }
  ];



  ngOnInit() {

  }

}

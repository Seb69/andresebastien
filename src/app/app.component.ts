import {Component} from "@angular/core";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProjectsComponent} from "./projects/projects.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WelcomeComponent, ProjectsComponent]
})
export class AppComponent {
  title = 'app works!';
}

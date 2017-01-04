import {Component} from "@angular/core";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProjectsComponent} from "./projects/projects.component";
import{FooterComponent} from "./footer/footer.component" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WelcomeComponent, ProjectsComponent,FooterComponent]
})
export class AppComponent {

}

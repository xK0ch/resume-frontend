import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationBarComponent} from "./shared/components/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}

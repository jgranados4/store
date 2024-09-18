import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
const UI = [HeaderComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UI],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store';
}

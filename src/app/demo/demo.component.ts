import { Component } from '@angular/core';
import { CustomPipe } from '../custom.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CustomPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}

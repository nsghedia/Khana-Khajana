import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Khana Khajana';
  loadedFeature: string = 'recipe';

  id: any;
  Row: number = 1;
  IsShowRow = true;

  ngOnInit(): void {
    this.id = setInterval(() => {
      this.Row++;
      if (this.Row > 10) {
        clearInterval(this.id);
        this.IsShowRow = false;
      }
    }, 1000);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

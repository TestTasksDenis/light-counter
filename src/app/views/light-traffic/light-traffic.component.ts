import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { TrafficLight } from '@domain/interfaces/traffic-light.interface';
import { Color } from '@domain/types/color.type';
import { TrafficService } from '@services/traffic/traffic.service';

@Component({
  selector: 'light-light-traffic',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './light-traffic.component.html',
  styleUrl: './light-traffic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightTrafficComponent {
  readonly trafficService = inject(TrafficService);
  traffic = input<string>();

  removeLight(): void {
    if (this.trafficService.currentTraffic()) {
      this.trafficService.removeLight(this.trafficService.currentTraffic()!.name);
    }
  }

  changeColor(color: Color, currentTraffic: TrafficLight): void {
    this.trafficService.updateLight({
      name: currentTraffic.name,
      color,
    });
  }
}

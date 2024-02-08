import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TrafficLight } from '@domain/interfaces/traffic-light.interface';
import { TrafficService } from '@services/traffic/traffic.service';

@Component({
  selector: 'light-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  protected activeIndex: number | null = 0;
  readonly trafficService = inject(TrafficService);

  ngOnInit(): void {
    this.#removeTrafficSubscription();
  }

  addLight(): void {
    this.trafficService.addLight();
    this.activeIndex = this.trafficService.trafficLights().length - 1;
  }

  setCurrentLight(trafficLight: TrafficLight, index: number): void {
    this.trafficService.currentTraffic.set(trafficLight);
    this.activeIndex = index;
  }

  #removeTrafficSubscription(): void {
    this.trafficService.removeTraffic$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.activeIndex = null;
      });
  }
}

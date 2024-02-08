import { Injectable, signal } from '@angular/core';
import { TrafficLight } from '@domain/interfaces/traffic-light.interface';
import { Color } from '@domain/types/color.type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficService {
  trafficLights = signal<TrafficLight[]>([]);
  currentTraffic = signal<TrafficLight | null>(null);
  trafficColors: Color[] = ['red', 'green', 'orange'];
  removeTraffic$ = new Subject<void>;

  addLight(): void {
    const newTrafficLight: TrafficLight = {
      color: this.#getRandColor(),
      name: `Name ${this.trafficLights().length + 1}`,
    };

    this.trafficLights.update((value: TrafficLight[]) => [
      ...value,
      newTrafficLight,
    ]);

    this.currentTraffic.set(newTrafficLight);
  }

  removeLight(itemName: string): void {
    this.trafficLights.update(traffics => traffics.filter(item => item.name !== itemName));
    this.currentTraffic.set(null);
    this.removeTraffic$.next();
  }

  updateLight(trafficLight: TrafficLight): void {
    this.trafficLights.update(traffics => traffics.map(item => {
      if (item.name === trafficLight.name) {
        return {
          name: trafficLight.name,
          color: trafficLight.color,
        };
      }

      return item;
    }));

    this.currentTraffic.set(trafficLight);
  }

  getLightsByColor(color: Color): number {
    return this.trafficLights().filter(item => item.color === color).length;
  }

  #getRandColor(): Color {
    return this.trafficColors[Math.floor(Math.random() * 3)];
  }
}

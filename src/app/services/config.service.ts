import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }

  get apiBaseUrl(): string {
    return environment.apiBaseUrl;
  }
}

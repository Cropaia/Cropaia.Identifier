import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropModel } from '../models/CropModel';

@Injectable({
  providedIn: 'root'
})
export class CropService {
  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }

  public getCropList() {
    return this.http.get<CropModel[]>(this.baseUrl + 'api/Crop');
  }
}

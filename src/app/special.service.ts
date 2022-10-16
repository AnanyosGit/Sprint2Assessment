import { Injectable } from '@angular/core';
import { Medicine } from './med';
import { orderedMedicine } from './orderedMedicine';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor() { }
  cartMeds:Array<any>=[];
  
}

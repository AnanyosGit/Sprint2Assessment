import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
//import { AddMedicineComponent } from './add-medicine/add-medicine.component';
//import { DeleteMedicineComponent } from './delete-medicine/delete-medicine.component';
//import { MedicineListComponent } from './medicine-list/medicine-list.component';
//import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [
  {path:"addmedicine",component:AddMedicineComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

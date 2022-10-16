import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Medicine } from '../med';
import { MedicineService } from '../medicine.service';
import { SpecialService } from '../special.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  
  medicine:Medicine = new Medicine();
  category:Category=new Category();
  cartMedicines;
  constructor(private med:MedicineService,private router:Router, private testserv:SpecialService) {}
    addMedicine(){
      this.med.addMedicine(this.medicine).subscribe(
        data=>{
          console.log(data),
          this.goToMedicineList();
          
        },
        error=>{
          console.log(error);
        }
      )
    }
   
   goToMedicineList(){
    this.router.navigate(['/add-medicine']);
   }
   addToCart(){

   }
  ngOnInit(): void {
    this.cartMedicines=this.testserv.cartMeds;
    console.log(this.cartMedicines)
  }
  formSubmit(){
    console.log(this.medicine);
    this.addMedicine();
    alert("details added successfully");
  }
  @Input() cartMed='';

}

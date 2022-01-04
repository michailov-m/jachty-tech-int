import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { YachtService } from '../yacht-selection/yacht.service';
import { RezerwacjaFormularz } from 'src/models/rezerwacja-formularz';

@Component({
  selector: 'app-booking-popup',
  templateUrl: './booking-popup.component.html',
  styleUrls: ['./booking-popup.component.scss']
})
export class BookingPopupComponent implements OnInit {

  idJacht: number;
  bookingForm: FormGroup;
  notValid: boolean;

  constructor(public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BookingPopupComponent>,
    private datePipe: DatePipe,
    private yachtService: YachtService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.idJacht = data.idJacht;
    this.bookingForm = this.formBuilder.group({
      dataOd: formBuilder.control(''),
      dataDo: formBuilder.control(''),
      imie: formBuilder.control(''),
      nazwisko: formBuilder.control(''),
      email: formBuilder.control(''),
      nrtelefonu: formBuilder.control('')
    })
   }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    let dataOd = this.datePipe.transform(this.bookingForm.get('dataOd').value, "yyyy-MM-dd");
    let dataDo = this.datePipe.transform(this.bookingForm.get('dataDo').value, "yyyy-MM-dd");
    let bf = new RezerwacjaFormularz();
    bf.idJachtu = this.idJacht;
    bf.dataOd = dataOd;
    bf.dataDo = dataDo;
    bf.imie = this.bookingForm.get("imie").value;
    bf.nazwisko = this.bookingForm.get("nazwisko").value;
    bf.adresEmail = this.bookingForm.get("email").value;
    bf.nrTelefonu = this.bookingForm.get("nrtelefonu").value;

    if (bf.idJachtu && bf.dataOd && bf.dataDo && bf.imie && bf.nazwisko && bf.adresEmail && bf.nrTelefonu) {
      this.yachtService.postBookYacht(bf).subscribe();
      this.onNoClick();
    } else {
      this.notValid = true;
    }

    
 }

}

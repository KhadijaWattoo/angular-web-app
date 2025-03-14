import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonGrid,IonRow,IonCol,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.page.html',
  styleUrls: ['./seven.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonGrid,IonCol,IonRow,
    IonButton
  ]
})
export class SevenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

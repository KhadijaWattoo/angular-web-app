import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonIcon,IonCol,IonGrid,IonRow,IonButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoIonic,arrowBackSharp,bagHandleOutline,starOutline,heartCircleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-task11',
  templateUrl: './task11.page.html',
  styleUrls: ['./task11.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonIcon
    ,IonCol,IonGrid,IonRow,IonButton
  ]
})
export class Task11Page implements OnInit {

  constructor() {
    addIcons({ logoIonic,arrowBackSharp,bagHandleOutline,starOutline,heartCircleOutline });
   }

  ngOnInit() {
  }

}

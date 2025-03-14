   import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonCard,IonCardContent,IonThumbnail
  ,IonButton
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-five',
  templateUrl: './five.page.html',
  styleUrls: ['./five.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonCard,IonCardContent
    ,IonThumbnail,IonButton
  ]
})
export class FivePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

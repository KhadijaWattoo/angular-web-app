import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 

import { addIcons } from 'ionicons';
import { logoIonic,searchOutline,arrowForwardOutline,addCircleOutline,tabletLandscapeOutline,homeOutline
  ,layersOutline,heartOutline,personOutline
 } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonAvatar,IonItem,IonThumbnail,
  IonLabel,IonIcon,IonCol,IonRow,IonGrid,IonFooter,IonButton,IonButtons
 } from '@ionic/angular/standalone';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-eight',
  templateUrl: './eight.page.html',
  styleUrls: ['./eight.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonAvatar
    ,IonItem,IonThumbnail,IonLabel,IonIcon,IonCol,IonGrid,IonRow,IonFooter,IonButton,IonButtons
  ]
})
export class EightPage implements OnInit {

  constructor() { 
    addIcons({ logoIonic,searchOutline,arrowForwardOutline,addCircleOutline,tabletLandscapeOutline 
      ,homeOutline,layersOutline,heartOutline,personOutline
    });
  }

  ngOnInit() {
  }

}

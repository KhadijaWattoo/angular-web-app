import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { logoIonic ,chevronBackCircleOutline,heartCircle,arrowForwardOutline
  ,ellipsisHorizontalOutline,returnUpForwardOutline,arrowDownSharp
 } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonIcon,IonLabel,IonGrid,IonRow,IonCol
  ,IonButton
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.page.html',
  styleUrls: ['./nine.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList
    ,IonIcon,IonLabel,IonCol,IonGrid,IonRow,IonButton
  ]
})
export class NinePage implements OnInit {

  constructor() {
    addIcons({ logoIonic ,chevronBackCircleOutline,heartCircle,arrowForwardOutline
      ,ellipsisHorizontalOutline,returnUpForwardOutline,arrowDownSharp
     });
   }

  ngOnInit() {
  }

}

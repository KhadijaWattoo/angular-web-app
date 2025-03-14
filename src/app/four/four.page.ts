import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonIcon,IonFabButton,IonFab
  ,IonInput,IonNote,IonTextarea,IonItem,IonLabel,IonToggle,IonList,IonButton
} from '@ionic/angular/standalone';
import { addIcons   } from 'ionicons';
import { logoIonic , batteryFullOutline ,wifiOutline,cellularOutline,personCircleOutline,logoGoogle, add} from 'ionicons/icons';

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon,IonFabButton,IonFab
    ,IonInput,IonNote,IonTextarea,IonItem,IonLabel,IonToggle,IonList,IonButton
  ]
})
export class FourPage implements OnInit {

  constructor() {
    addIcons({ logoIonic , batteryFullOutline,wifiOutline,cellularOutline,personCircleOutline ,logoGoogle,add});
   }

  ngOnInit() {
  }

}

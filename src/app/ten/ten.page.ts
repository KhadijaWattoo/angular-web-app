import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonButton,IonFab,IonFabButton,IonIcon,IonFooter  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add,homeOutline,searchOutline,heartOutline,personOutline,bagHandleOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-ten',
  templateUrl: './ten.page.html',
  styleUrls: ['./ten.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonButton ,IonFab,IonFabButton,IonIcon
    ,IonFooter
  ]
})
export class TenPage implements OnInit {

  constructor() { 
    addIcons({ add,homeOutline,searchOutline,heartOutline,personOutline,bagHandleOutline });
  }

  ngOnInit() {
  }

}

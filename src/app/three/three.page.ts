import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonInput,IonButton,IonIcon  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star,logoGoogle, logoFacebook } from 'ionicons/icons';
@Component({
  selector: 'app-three',
  templateUrl: './three.page.html',
  styleUrls: ['./three.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonInput,IonButton,IonIcon]
})
export class ThreePage implements OnInit {

  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star ,logoGoogle,logoFacebook });
  }

  ngOnInit() {
  }

}

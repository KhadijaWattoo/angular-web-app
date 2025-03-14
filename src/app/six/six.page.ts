import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonIcon ,IonFab,IonFabButton,IonItem,IonThumbnail,IonLabel
  ,IonCard,IonGrid,IonRow,IonCol,IonAvatar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic ,settingsOutline,searchOutline,notificationsOutline,addOutline,addCircleOutline,add,heartOutline
  ,chatbubbleEllipsesOutline,bookmarkOutline,paperPlaneOutline,ellipsisVerticalOutline
 } from 'ionicons/icons';
@Component({
  selector: 'app-six',
  templateUrl: './six.page.html',
  styleUrls: ['./six.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonIcon,IonFab,IonFabButton
    ,IonItem,IonThumbnail,IonLabel,IonCard,IonGrid,IonRow,IonCol,IonAvatar
  ]
})
export class SixPage implements OnInit {

  constructor() {
    addIcons({ logoIonic,settingsOutline ,searchOutline,notificationsOutline,addOutline,addCircleOutline,add,heartOutline
      ,chatbubbleEllipsesOutline,bookmarkOutline,paperPlaneOutline,ellipsisVerticalOutline
    });
   }

  ngOnInit() {
  }

}

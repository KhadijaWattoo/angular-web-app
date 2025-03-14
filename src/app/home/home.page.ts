import { Component ,ViewChild} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle,  IonButton,IonIcon ,IonList,IonItem,IonLabel,IonBadge,IonCard,IonCardContent,IonCardSubtitle,IonCardTitle,IonThumbnail,IonContent,IonCardHeader ,IonInput,IonCheckbox,IonChip,IonAvatar,IonFab,IonFabButton,IonFabList  ,
  IonNote,
  IonTextarea,
  IonToggle,
  IonText,
  IonItemOptions,IonItemSliding,IonItemOption,IonRange,IonSelectOption,IonSelect,IonListHeader, 
  
  } from '@ionic/angular/standalone';
  import { IonCol, IonGrid, IonRow } from '@ionic/angular';
 

  import { logoIonic } from 'ionicons/icons';

  import { chevronForward, listCircle, } from 'ionicons/icons';
  import { pin, share, trash } from 'ionicons/icons';

import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star,beerOutline } from 'ionicons/icons';
 
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton,IonIcon,IonList,IonItem,IonLabel,IonBadge,IonCard,IonCardContent,IonCardSubtitle,IonCardTitle,IonThumbnail,IonContent,IonCardHeader,IonInput,IonCheckbox,IonChip,IonAvatar,IonFab,IonFabButton,IonFabList,IonNote,
    IonTextarea,
    IonToggle,IonText,IonItemOptions,IonItemSliding,IonItemOption,IonRange,IonSelectOption
  ,IonSelect,IonListHeader,  ],
})
export class HomePage {
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  inputModel!: string; // Define the inputModel


  onInput(event: any) {
    const inputValue = event.target.value;
    console.log('Input value:', inputValue);
    // Add logic to handle the input event here
  }
  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star,beerOutline });
  }
}
 
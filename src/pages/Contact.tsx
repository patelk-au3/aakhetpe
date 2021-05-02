import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon, IonText, IonButton,IonButtons,IonBackButton } from '@ionic/react';
import { wallet } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import './Wallet.css';

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        {/* <IonTitle>MY WALLET</IonTitle> */}
        <IonToolbar color="secondary">
    <IonButtons slot="secondary">
      <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>HELP & SUPPORT</IonTitle>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" icon={wallet}/>
      </IonButton>
    </IonButtons>
  </IonToolbar>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Contact;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Friends.css';

const Friends: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Friends</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Friends page" />
      </IonContent> */}
    </IonPage>
  );
};

export default Friends;

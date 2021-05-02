import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { close, ellipse, ellipseOutline } from 'ionicons/icons';
import Logo from "../assets/logo.png";
import Gold from "../assets/gold.png";
import PlayerOption from "../assets/player-option.png";
import Silver from "../assets/silver.png";
import Friend from "../assets/friend.png";
import ExploreContainer from '../components/ExploreContainer';
import './Setting.css';

const Setting: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Setting</IonTitle>
          </IonToolbar>
        </IonHeader>
        <nav className="navbar px-0">
          <div>
          <img src={Logo} alt="akhetpe logo" className="logo"/>
          </div>
          <div>
          <img src={Gold} alt="akhetpe toolbar options" className="Ticlogos"/>
              <img src={Silver} alt="akhetpe toolbar options" className="Ticlogos"/>
              <img src={Friend} alt="akhetpe toolbar options" className="Ticlogos"/><br />
          </div>
        </nav>
        <div className="ml-auto d-flex p-2">
        <img src={Gold} alt="akhetpe toolbar options" className="logos"/>
        <img src={PlayerOption} alt="akhetpe toolbar player select option" className="player-select"/>
        </div>
        <div className="grid-container">
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass"  icon={close}/></div>
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={ellipseOutline}/></div>
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>  
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>
  <div className="grid-item"><IonIcon slot="icon-only"className="iconclass" icon={ellipseOutline}/></div>
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={ellipseOutline}/></div>  
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={ellipseOutline}/></div>
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>
  <div className="grid-item"><IonIcon slot="icon-only" className="iconclass" icon={close}/></div>  
  </div>
      </IonContent>
    </IonPage>
  );
};

export default Setting;

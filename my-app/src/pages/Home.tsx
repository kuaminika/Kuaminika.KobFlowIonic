import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Tabs from '../components/Tabs';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kobflow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Tabs />
      </IonContent>
    </IonPage>
  );
};

export default Home;

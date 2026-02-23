import React from 'react';
import {
  IonContent,
  IonIcon,
  IonHeader,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
  IonPage,
} from '@ionic/react';

import { playCircle, radio, library, search } from 'ionicons/icons';
 
import './Tabs.css';
import ExpenseTab from "./ExpenseTab";
import IncomesTab from './IncomesTab';
function Tabs() {
  return (
    <IonTabs>
    
       <IonTab tab="expenses">
        <IonPage id="home-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Listen now</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">
              <ExpenseTab />
            </div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="incomes">
        <IonPage id="radio-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Radio</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">
              <IncomesTab /></div>
          </IonContent>
        </IonPage>
      </IonTab>

      <IonTabBar slot="bottom">
        <IonTabButton tab="expenses">
          <IonIcon icon={playCircle} />
         Expenses
        </IonTabButton>
        <IonTabButton tab="incomes">
          <IonIcon icon={radio} />
          Incomes
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
export default Tabs;
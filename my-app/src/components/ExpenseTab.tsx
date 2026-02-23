import React from 'react';
import {IonTabBar,IonTabButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
  IonNote,
  IonButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonTab,
} from '@ionic/react';
import {
  addOutline,
  restaurantOutline,
  carOutline,
  bagOutline,
  tvOutline,
  documentTextOutline,
  cashOutline,
  ellipsisHorizontalOutline,
  createOutline,
  trashOutline,
  addCircleOutline,
  filterOutline
} from 'ionicons/icons';
import styles from './ExpensesTab.css';

const ExpensesTab: React.FC = () => {
  return (
    <IonPage id="expenses-page">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Expenses</IonTitle>
          <IonButtons slot="end">
            {/* Category Management Button */}
            <IonButton>
              <IonIcon icon={createOutline} />
              <IonLabel>Edit Cats</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonTabBar slot="top">
              <IonTabButton tab="expenses">
               list
              </IonTabButton>
      </IonTabBar>

      <IonContent className="ion-padding">
        {/* Summary Card */}
        <IonCard className="summary-card">
          <IonCardHeader>
            <IonCardTitle>Total Expenses</IonCardTitle>
            <IonCardSubtitle>This Month</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <h1 className="total-amount">$1,234.56</h1>
          </IonCardContent>
        </IonCard>

        

      

        {/* Add Expense Button */}
        <IonFab vertical="top" horizontal="end" slot="fixed" edge>
          <IonFabButton color="primary">
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>

        {/* Expenses List Header */}
        <IonItem lines="none" className="section-header">
          <IonLabel>
            <h2>Recent Expenses</h2>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton size="small" color="medium">
              <IonIcon icon={filterOutline} />
              Filter
            </IonButton>
          </IonButtons>
        </IonItem>

        {/* Expenses List */}
        <IonList>
          <IonItem>
            <IonAvatar slot="start" className="expense-icon food">
              <IonIcon icon={restaurantOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Grocery Store</h3>
              <p>Today • Food</p>
            </IonLabel>
            <IonNote slot="end" color="danger">
              -$45.30
            </IonNote>
            <IonButtons slot="end" className="expense-actions">
              <IonButton size="small" fill="clear" color="medium">
                <IonIcon icon={ellipsisHorizontalOutline} />
              </IonButton>
            </IonButtons>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="expense-icon transport">
              <IonIcon icon={carOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Uber Ride</h3>
              <p>Yesterday • Transport</p>
            </IonLabel>
            <IonNote slot="end" color="danger">
              -$12.50
            </IonNote>
            <IonButtons slot="end" className="expense-actions">
              <IonButton size="small" fill="clear" color="medium">
                <IonIcon icon={ellipsisHorizontalOutline} />
              </IonButton>
            </IonButtons>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="expense-icon entertainment">
              <IonIcon icon={tvOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Netflix</h3>
              <p>Mar 12 • Entertainment</p>
            </IonLabel>
            <IonNote slot="end" color="danger">
              -$15.99
            </IonNote>
            <IonButtons slot="end" className="expense-actions">
              <IonButton size="small" fill="clear" color="medium">
                <IonIcon icon={ellipsisHorizontalOutline} />
              </IonButton>
            </IonButtons>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="expense-icon shopping">
              <IonIcon icon={bagOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>New Shoes</h3>
              <p>Mar 10 • Shopping</p>
            </IonLabel>
            <IonNote slot="end" color="danger">
              -$89.99
            </IonNote>
            <IonButtons slot="end" className="expense-actions">
              <IonButton size="small" fill="clear" color="medium">
                <IonIcon icon={ellipsisHorizontalOutline} />
              </IonButton>
            </IonButtons>
          </IonItem>
        </IonList>

        {/* Bulk Actions Card */}
        <IonCard className="bulk-actions-card">
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton expand="block" fill="clear" color="medium">
                    <IonIcon icon={trashOutline} slot="start" />
                    Clear All
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="block" fill="clear" color="primary">
                    <IonIcon icon={createOutline} slot="start" />
                    Edit Categories
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ExpensesTab;
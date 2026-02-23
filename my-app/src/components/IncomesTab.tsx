import React from 'react';
import {
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
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import {
  addOutline,
  cashOutline,
  businessOutline,
  cardOutline,
  walletOutline,
  trendingUpOutline,
  briefcaseOutline,
  giftOutline,
  pieChartOutline
} from 'ionicons/icons';
import './IncomesTab.css';

const IncomesTab: React.FC = () => {
  return (
    <IonPage id="incomes-page">
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Incomes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Summary Card */}
        <IonCard className="income-summary-card">
          <IonCardHeader>
            <IonCardTitle>Total Income</IonCardTitle>
            <IonCardSubtitle>This Month</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <h1 className="total-income">$5,678.90</h1>
            
            {/* Mini Stats */}
            <IonGrid className="income-stats">
              <IonRow>
                <IonCol size="6">
                  <div className="stat-item">
                    <IonIcon icon={trendingUpOutline} color="success" />
                    <div>
                      <span className="stat-label">Monthly Avg</span>
                      <span className="stat-value">$5,200</span>
                    </div>
                  </div>
                </IonCol>
                <IonCol size="6">
                  <div className="stat-item">
                    <IonIcon icon={pieChartOutline} color="success" />
                    <div>
                      <span className="stat-label">Sources</span>
                      <span className="stat-value">4 active</span>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Add Income Button */}
        <IonFab vertical="top" horizontal="end" slot="fixed" edge>
          <IonFabButton color="success">
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>

        {/* Income Sources Header */}
        <IonItem lines="none" className="section-header">
          <IonLabel>
            <h2>Income Sources</h2>
          </IonLabel>
        </IonItem>

        {/* Incomes List */}
        <IonList>
          <IonItem>
            <IonAvatar slot="start" className="income-icon salary">
              <IonIcon icon={briefcaseOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Monthly Salary</h3>
              <p>Mar 1 • Full-time job</p>
            </IonLabel>
            <IonNote slot="end" color="success">
              +$3,200.00
            </IonNote>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="income-icon freelance">
              <IonIcon icon={businessOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Freelance Project</h3>
              <p>Mar 15 • Web design</p>
            </IonLabel>
            <IonNote slot="end" color="success">
              +$850.00
            </IonNote>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="income-icon investment">
              <IonIcon icon={trendingUpOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Dividends</h3>
              <p>Mar 20 • Stock returns</p>
            </IonLabel>
            <IonNote slot="end" color="success">
              +$320.45
            </IonNote>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="income-icon gift">
              <IonIcon icon={giftOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Bonus</h3>
              <p>Mar 25 • Performance</p>
            </IonLabel>
            <IonNote slot="end" color="success">
              +$500.00
            </IonNote>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start" className="income-icon rental">
              <IonIcon icon={walletOutline} />
            </IonAvatar>
            <IonLabel>
              <h3>Rental Income</h3>
              <p>Mar 28 • Property</p>
            </IonLabel>
            <IonNote slot="end" color="success">
              +$800.00
            </IonNote>
          </IonItem>
        </IonList>

        {/* Quick Stats Footer */}
        <IonCard className="insights-card">
          <IonCardHeader>
            <IonCardTitle>💡 Insight</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>You've saved 32% of your income this month. Great job! 🎉</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default IncomesTab;
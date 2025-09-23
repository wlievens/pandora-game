import {Routes} from '@angular/router';
import {BillPage} from './pages/bill-page/bill-page';
import {ElectionPage} from './pages/election-page/election-page';
import {GovernmentPage} from './pages/government-page/government-page';
import {PartyPage} from './pages/party-page/party-page';
import {WorldListPage} from './pages/world-list-page/world-list-page';
import {WorldPage} from './pages/world-page/world-page';

export const routes: Routes = [
  {
    path: 'worlds',
    component: WorldListPage
  },
  {
    path: 'worlds/:worldId',
    component: WorldPage
  },
  {
    path: 'worlds/:worldId/governments/:governmentId',
    component: GovernmentPage
  },
  {
    path: 'worlds/:worldId/elections/:electionId',
    component: ElectionPage
  },
  {
    path: 'worlds/:worldId/bills/:billId',
    component: BillPage
  },
  {
    path: 'worlds/:worldId/parties/:partyId',
    component: PartyPage
  },
];

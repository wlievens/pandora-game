import {Routes} from '@angular/router';
import {BillPage} from './pages/bill-page/bill-page';
import {ElectionPage} from './pages/election-page/election-page';
import {GovernmentPage} from './pages/government-page/government-page';
import {NewspaperPage} from './pages/newspaper-page/newspaper-page';
import {PartyCreatePage} from './pages/party-create-page/party-create-page';
import {PartyPage} from './pages/party-page/party-page';
import {PersonPage} from './pages/person-page/person-page';
import {StoryPage} from './pages/story-page/story-page';
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
    path: 'worlds/:worldId/bills/:billId',
    component: BillPage
  },
  {
    path: 'worlds/:worldId/elections/:electionId',
    component: ElectionPage
  },
  {
    path: 'worlds/:worldId/governments/:governmentId',
    component: GovernmentPage
  },
  {
    path: 'worlds/:worldId/newspaper',
    component: NewspaperPage
  },
  {
    path: 'worlds/:worldId/create-party',
    component: PartyCreatePage
  },
  {
    path: 'worlds/:worldId/parties/:partyId',
    component: PartyPage
  },
  {
    path: 'worlds/:worldId/persons/:personId',
    component: PersonPage
  },
  {
    path: 'worlds/:worldId/newspaper/:storyId',
    component: StoryPage
  },
];

import {Routes} from '@angular/router';
import {BillPage} from './pages/bill-page/bill-page';
import {ElectionPage} from './pages/election-page/election-page';
import {GovernmentPage} from './pages/government-page/government-page';
import {NationListPage} from './pages/nation-list-page/nation-list-page';
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
    children: [
      {
        path: '',
        component: WorldPage
      },
      {
        path: 'create-party',
        component: PartyCreatePage
      },
      {
        path: 'nations',
        component: NationListPage
      },
      {
        path: 'newspaper',
        component: NewspaperPage
      },
      {
        path: 'stories/:storyId',
        component: StoryPage
      },
      {
        path: 'bills/:billId',
        component: BillPage
      },
      {
        path: 'elections/:electionId',
        component: ElectionPage
      },
      {
        path: 'governments/:governmentId',
        component: GovernmentPage
      },
      {
        path: 'parties/:partyId',
        component: PartyPage
      },
      {
        path: 'persons/:personId',
        component: PersonPage
      },
      {
        path: 'newspaper/:storyId',
        component: StoryPage
      },
    ]
  },
];

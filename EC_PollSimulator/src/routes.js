import React from 'react';

const AddCandidates = React.lazy(() => import('./components/AddCandidates'));
const PollResult = React.lazy(() => import('./components/PollResult'));
const Vote = React.lazy(() => import('./components/Vote'));
const VotingSummary = React.lazy(() => import('./components/VotingSummary'));

const routes=[
  { path: '/', exact: true, name: 'Home' },
  { path: '/AddCandidates', name: 'AddCandidates', component: AddCandidates },
  { path: '/PollResult', name: 'PollResult', component: PollResult },
  { path: '/Vote', name: 'Vote', component: Vote },
  { path: '/VotingSummary', name: 'VotingSummary', component: VotingSummary },


];

export default routes;
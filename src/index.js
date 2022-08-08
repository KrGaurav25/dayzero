import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import TicketDetails from './TicketApp/TData';
import TicketApplication from './TicketApp/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <TicketApplication data={TicketDetails}></TicketApplication>
  </>
);
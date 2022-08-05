import React from 'react';
import ReactDOM from 'react-dom/client';
import Index1 from './newapp/index';
import ContactManagerComp from './contactManager.js/contactManagerComp';
import App from './WOHOC/app'
import './index.css'
import TaskManager from './TaskManager/TaskManager';
import data from './TaskManager/TaskManagerData';
import contactDetails from './contactManager.js/contactDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <ContactManagerComp data={contactDetails}></ContactManagerComp> */}
  <TaskManager data={data}></TaskManager>
  </>
);
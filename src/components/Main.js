import React from "react";
import List from './List';
import Table from './Table';
import Form from './Form';
const Main = props => {
  const {activetab} = props;
    console.log(activetab)
  switch (activetab) {
    case 'tab1':
      return <List />;
    case 'tab2':
      return <Table />;
    case 'tab3':
        return <Form />;
    default:
      return null;
  }
}

export default Main
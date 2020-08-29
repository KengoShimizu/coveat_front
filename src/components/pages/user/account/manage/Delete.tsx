import React from 'react';
// library
import { Link } from 'react-router-dom';
// components
import HomeLayout from '../../../../templates/HomeLayout';

export const Delete: React.FC = (props: any) => {
  return (
    <HomeLayout history={props.history}>
      <Link to='/accounts/:id/accounttop'>AccountTop</Link>
    </HomeLayout>
  );
}
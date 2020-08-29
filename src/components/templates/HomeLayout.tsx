import React from 'react';
// molecules
import Header from '../molecules/Header/Header';

interface HomeLayoutProps {
  subHeaderText?: string;
  prevRef?: string;
  children?: React.ReactNode;
  history?: any;
  onClick?: any;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({subHeaderText, prevRef, children, history, onClick}) => {
  return (
    <div className="container">
      {history && <Header subHeaderText={subHeaderText} prevRef={prevRef} history={history}/>}
      {!history && <Header subHeaderText={subHeaderText} prevRef={prevRef}/>}
      {onClick && <Header subHeaderText={subHeaderText} prevRef={prevRef} onClick={onClick}/>}
      <div className="wrap">
        <main>
          {children}
        </main>
      </div>
      <style jsx>{`
        *{
          margin:0;
          padding:0;
          border:0;
          outline:0;
          list-style:none;
        }
        a{
          text-decoration: none;
        }
        .container{
          width: 100%
        }
        .wrap{
          padding-top: ${subHeaderText ? '96px' : '56px'};
          width: 100%;
          height: ${subHeaderText ? 'calc(100vh - 96px)' : 'calc(100vh - 56px)'};
        }
      `}</style>
    </div>
  );
}

export default HomeLayout;
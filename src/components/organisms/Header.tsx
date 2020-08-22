import React from 'react';
import { Link } from 'react-router-dom';
import HistoryIcon from './../../img/history.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="service-logo" src="" alt=""/>
      <ul className="icon-list">
        <Link to='/History'>
          <li className="icon-list_option">
            <img className="icon-list_img" src={HistoryIcon} alt=""/>
            <p className="icon-list_caption">閲覧履歴</p>
          </li>
        </Link>
        <li className="icon-list_option">
          <img className="icon-list_img" src={HistoryIcon} alt=""/>
          <p className="icon-list_caption">ログイン</p>
        </li>
        <li className="icon-list_option_menu">
          <img className="icon-list_img" src={HistoryIcon} alt=""/>
        </li>
      </ul>
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
        header{
          height: 56px;
          width: 100%;
          position: fixed;
          background: #FF8A1F;
          display: flex;
          justify-content: space-between;
          padding: 6px 10px;
          box-sizing: border-box;
        }
        .icon-list{
          display: flex;
          padding: 0;
        }
        .icon-list_option{
          text-align: center;
          width: 44px;
          height: 44px;
          margin-right: 4px;
        }
        .icon-list_option_menu{
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-list_img{
          width: 32px;
          height: 32px;
        }
        .icon-list_caption{
          font-size: 8px;
          line-height: 12px;
          color: white;
        }
      `}</style>
    </header>
  );
}

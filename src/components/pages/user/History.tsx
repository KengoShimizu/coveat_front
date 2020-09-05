import React, { useContext } from 'react';
// library
import { Trash2 } from 'react-feather';
import Cookies from 'universal-cookie';
// common
import CommonStyle from '../../../common/CommonStyle';
import { RouteName } from '../../../common/Const';
// components
import HomeLayout from '../../templates/HomeLayout';
import HistoryCardList from '../../organisms/CardList/HistoryCardList';
import Button, { ButtonThemes } from '../../atoms/Button';
import Icon, { IconThemes } from '../../atoms/Icon';
import Modal from '../../molecules/Modal/Modal';
// context
import ModalContext from '../../../context/ModalContext';

const propStyle = {
  deleteBtn: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    margin: '0 0 24px auto'
  },
  deleteBtnIcon: {
    width: '24px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fill: CommonStyle.TextDarkGary,
  }
}

const History: React.FC = (props: any) => {
    const cookies = new Cookies();

    const handleCookie = () => {
      cookies.set('histories', '', { path: '/' });
      cookies.set('histories_date', '', { path: '/' });
    }

    return (
      <HomeLayout headerText='閲覧履歴' prevRef={RouteName.ROOT}>
        <Modal 
          title='本当に履歴を削除しますか？'
          btntext='削除する'
          onClick={handleCookie}/>
        <div className='container'>
          <Button theme={[ButtonThemes.SUBNORMAL]} propStyle={propStyle.deleteBtn} onClick={useContext(ModalContext).toggleModalShown}>
            <Icon theme={[IconThemes.NORMAL]} propStyle={propStyle.deleteBtnIcon}><Trash2 size="18" color="#8C8C8C" /></Icon>
            <span className="delete-btn_text">履歴を削除</span>
          </Button>
          <HistoryCardList/>
        <style jsx>{`
          .container{
            width: 100%;
            min-height: calc(100vh - 40px);
            background-color: ${CommonStyle.BgGray};
            padding-top: 8px;
          }
          .delete-btn_text{
            color: ${CommonStyle.TextDarkGary};
            font-size: 16px;
            line-height: 13px;
          }
        `}</style>
        </div>
      </HomeLayout>
    );

}

export default History;
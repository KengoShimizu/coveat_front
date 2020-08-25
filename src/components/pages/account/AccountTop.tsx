import React, { useEffect, useState, useContext } from 'react';
import { HomeLayout } from '../../templates/HomeLayout';
import Button, { ButtonThemes } from './../../atoms/Button';
import Icon, { IconThemes } from './../../atoms/Icon';
import Text, { TextThemes } from './../../atoms/Text';
import { ChevronRight } from 'react-feather';
import { FlexCard } from './../../molecules/FlexCard';
import { AuthContext } from "../../../context/CommonProvider";

const propStyle = {
  profileCardBtn: {
    width: '44px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    fontSize: '14px'
  },
  profileName: {
    marginLeft: '10px'
  }
}

export const AccountTop: React.FC = () => {
  const { authState, setAuth } = useContext(AuthContext);
  const [account, setAccount] = useState(authState.user);

  useEffect(() => {
    console.log(account);
  }, [])

  return (
    <HomeLayout subHeaderText={'ユーザ情報'} prevRef={'/'}>
      <div className="profile-card">
        <div className="profile-card-icon-name">
          {/* FIXME IconThemes.COVIDMEASURE*/}
          <Icon theme={[IconThemes.COVIDMEASURE]}>
            <img className="infection-control_icon" src={account.image} alt=""/>
          </Icon>
          <Text theme={[TextThemes.CAPTION]} propStyle={propStyle.profileName}> 
            {account.name}
          </Text>
        </div>
        <div className="profile-card-edit">
          <Text theme={[TextThemes.SMALL]} propStyle={propStyle.profileText}> 
            プロフィールを編集
          </Text>
          
        </div>
        <Button propStyle={propStyle.profileCardBtn}>
          <ChevronRight size={24} color="#333"/>
        </Button>
      </div>

      <FlexCard src={account.image} text={'閲覧履歴'}/>
      <FlexCard src={account.image} text={'レビューしたお店'}/>
      <FlexCard src={account.image} text={'ログイン情報の編集'}/>
      <FlexCard src={account.image} text={'ログアウト'}/>
      <FlexCard src={account.image} text={'アカウントを削除する'}/>
      
      <style jsx>{`
        .infection-control_icon{
          width: 32px;
          height: auto;
        }
        .profile-card{
          display: flex;
          width: 100%;
          padding: 12px 0px 12px 15px;
          box-sizing: border-box;
          align-items: center;
          margin-bottom: 16px;
        }
        .profile-card-icon-name{
          display: flex;
          width: calc(100% - 190px);
          margin-right: 16px;
        }
      `}</style>
    </HomeLayout>
  );
}
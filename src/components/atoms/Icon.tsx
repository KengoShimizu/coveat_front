import React from 'react';
import { CommonStyle } from '../../common/CommonStyle';

interface IconProps {
  theme?: IconThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}
export enum IconThemes {
  INIT            = 'INIT',
  NORMAL          = 'NORMAL',
  SMALL           = 'SMALL',
  COVIDMEASURE    = 'COVIDMEASURE',
  PROFILE         = 'PROFILE',
  SELECTEDPROFILE = 'SELECTEDPROFILE',
  LIST            = 'LIST',
}
enum ModifierClassNames {
  INIT            = 'icon-init',
  NORMAL          = 'icon-wrapper_normal',
  SMALL           = 'icon-wrapper_small',
  COVIDMEASURE    = 'infection-control_icon-wrapper',
  PROFILE         = 'profile-icon-wrapper',
  SELECTEDPROFILE = 'profile-icon-wrapper_selected',
  LIST            = 'profile-icon-wrapper_list',
}


const Icon: React.FC<IconProps> = ({theme = [IconThemes.INIT], children, propStyle = {}}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <span 
      className={["icon_wrapper", modifierClasses].join(' ')} style={propStyle}
      >
      {children}
      <style jsx>
        {`
          .icon_wrapper{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .icon_wrapper_lerge{
            width: 40px;
            height: 40px;
          }
          .icon-wrapper_normal{
            width: 24px;
            height: 24px;
          }
          .icon-wrapper_small{
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
          .infection-control_icon-wrapper{
            background-color: ${CommonStyle.KeyColor};
            width: 60px;
            height: 60px;
            border-radius: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          //コメントリストで表示されるアイコン
          .profile-icon-wrapper_list{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          //プロフィール変更の選択肢・ユーザー情報のアイコン
          .profile-icon-wrapper{
            display: inline-block;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            margin: 0.5rem;
          }
          //プロフィール変更で選択中のアイコン
          .profile-icon-wrapper_selected{
            display: inline-block;
            width: 80px;
            height: 80px;
          }
        `}
      </style>
    </span>
  );
}

export default Icon;
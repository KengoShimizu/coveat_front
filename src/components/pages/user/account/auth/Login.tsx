import React, { useRef, useState } from 'react';
import {CommonStyle} from '../../../../../common/CommonStyle';
import { NextRefBtn } from './../../../../molecules/NextRefBtn';
import axios from "axios";
import { HomeLayout } from '../../../../templates/HomeLayout';
import Button, { ButtonThemes } from '../../../../atoms/Button';

export const Login: React.FC = (props: any) => {
  const mailRef = useRef(document.createElement("input"));
  const [err, setErr] = useState("");

  const send = async () => {
    await axios.post('/api/v1/common/sessions/login',{
        email: mailRef.current.value
      })
      .then(res => res.data)
      .catch(err => setErr(err.response.data.errors[0]));

    if (!err) {
      props.history.push({
        pathname: "/accounts/send",
        state: {
          email: mailRef.current.value,
          text: 'ログイン'
        }
      });
    }
    return;
  }

  return (
    <HomeLayout subHeaderText={'ログイン'} prevRef={'/accounts/register'} history={props.history}>
      <div className="form">
        <div className="content">
          <div className="err">{err}</div>
          <div className="mail-form">
            <label className="mail-form_label">メールアドレス</label>
            <input className="mail-form_input" ref={mailRef} type="text" placeholder="sample@sample.com" />
            <div className="mail-form_btn-container">
              <Button theme={[ButtonThemes.NORMAL]}>
                認証コードを送信
              </Button>
            </div>
            <NextRefBtn nextRef='/accounts/register' text='会員登録はこちら'/>
          </div>
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
          .mail-form{
            max-width: 324px;
            width: 90%;
            margin: 0 auto;
          }
          .mail-form_label{
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color: ${CommonStyle.TextDarkGary};
            margin-bottom: 4px;
          }
          .mail-form_input{
            width: 100%;
            border: 1px solid #C0C0C0;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 12px 10px;
            margin-bottom: 32px;
          }
          .mail-form_btn-container{
            margin: 0 auto 32px auto;
            width: fit-content;
          }
          .mail-form_btn{
            padding: 8px 32px;
            background: ${CommonStyle.AccentColor};
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
            color: ${CommonStyle.TextWhite}
          }

          .regist-link{
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color: ${CommonStyle.TextBlack};
            text-align: right;
          }
        `}</style>
      </div>
    </HomeLayout>
  );
}
import React, { useEffect, useState } from 'react';
// library
import { ArrowRight } from 'react-feather';
import axios from "axios";
import useReactRouter from "use-react-router";
// components
import Button, { ButtonThemes } from '../../atoms/Button';
import Text, { TextThemes } from '../../atoms/Text';
import Textarea, { TextareaThemes } from '../../atoms/Textarea';
import { CheckSectionList } from './CheckSectionList';
import Loading from '../../molecules/Loading';
// types
import StepCategory from '../../../types/StepCategory';
// common
import Validate from '../../../common/Validate';

interface InfectionControlProps {
  setPage?: any;
  addData: any;
  setAddData: any;
  post?: any;
}

export const InfectionControl : React.FC<InfectionControlProps> = ({ setPage, setAddData, addData, post }) => {
  const { match }: any = useReactRouter();
  const [isOK, setIsOK] = useState(false);
  const [loading, setLoading] = useState(true);
  const identifer = match.path.match(/owner/g) ? 'owner' : 'user';
  const [stepCategories, setStepCategories] = useState<StepCategory[]>([]);

  const fetchStepCategories = async (isSubscribed: boolean) => {
    try {
      const res = await axios.get(`/api/v1/${identifer}/step_categories`);
      if (isSubscribed) setStepCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event: any) => {
    setAddData({
      ...addData,
      shop: {
        ...addData.shops,
        [event.target.name]: event.target.value
      }
    })
  }

  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    fetchStepCategories(isSubscribed);
    setLoading(false);
    const cleanup = () => {
      isSubscribed = false;
    };
    return cleanup;
  }, [])

  useEffect(() => {
    if(Validate.formValidate('shop_form_infections', addData.step_ids)) setIsOK(false);
    else setIsOK(true);
  }, [addData.step_ids]);

  return (
    loading ? <Loading/> :
    <div className="container">
      <Text theme={[TextThemes.SUBTITLE, TextThemes.LEFT]} >現在お店でおこなっている感染対策に当てはまるものをチェックしてください。</Text>
      <Text theme={[TextThemes.SUBTITLE, TextThemes.LEFT]} propStyle={{ marginBottom: '32px' }}>感染対策の内容はユーザーに公開されます。</Text>
      <CheckSectionList stepCategories={stepCategories} setAddData={setAddData} addData={addData}/>
      {/* ここの書き方めっちゃきもいけど、3項演算使ったらなぜか上手く動かないから仕方ないかも。 */}
      {addData.shop.other_step &&
        <Textarea content={addData.shop.other_step} theme={TextareaThemes.INIT} handleChange={handleChange} label='その他' name='other_step' subtitle='その他にお店で行っている感染対策やメッセージがあればご記入ください。' />
      }
      {!addData.shop.other_step &&
        <Textarea theme={TextareaThemes.INIT} handleChange={handleChange} label='その他' name='other_step' subtitle='その他にお店で行っている感染対策やメッセージがあればご記入ください。' />
      }
      {identifer === 'user' ?
        <Button theme={isOK ? [ButtonThemes.NORMAL] : [ButtonThemes.SUBNORMAL]} propStyle={{margin: '24px auto', width: '150px'}} onClick={isOK ? post : () => {}}>
          登録する
        </Button>
        : post ? 
          <Button theme={isOK ? [ButtonThemes.NORMAL] : [ButtonThemes.SUBNORMAL]} propStyle={{margin: '24px auto', width: '150px'}} onClick={isOK ? post : () => {}}>
            変更する
          </Button>
          :
          <Button theme={isOK ? [ButtonThemes.NORMAL] : [ButtonThemes.SUBNORMAL]} propStyle={{margin: '24px auto', width: '150px'}} onClick={isOK ? () => setPage(2) : () => {}}>
            次へ <ArrowRight />
          </Button>
      }
      <style jsx>
        {`
        `}
      </style>
    </div>
  );
}
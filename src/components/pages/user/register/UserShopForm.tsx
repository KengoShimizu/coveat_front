import React, { useEffect, useState, useContext } from 'react';
// library
import axios from "axios";
import queryString from 'query-string';
// template
import HomeLayout from '../../../templates/HomeLayout';
// context
import AuthContext from './../../../../context/CommonProvider';
// types
import Link from './../../../../types/Link'
// others
import { InfectionControl } from '../../../organisms/ShopForm/InfectionControl';
import { ShopInfo } from './../../../organisms/ShopForm/ShopInfo';

interface AddParam {
  user_id: number;
  name: string;
  kana_name: string;
  address: string;
  contact: string;
  image: string;
  business_date: string;
  price_day: number;
  price_night: number;
  other_step: string;
  step_ids: number[];
  genre_id: number;
  links: Link[];
}

export const UserShopForm: React.FC = (props: any) => {
  const { authState } = useContext(AuthContext);
  const qs = queryString.parse(props.location.search);
  const [page, setPage] = useState(qs.page ? Number(qs.page) : 1);
  const [err, setErr] = useState<string>('');
  const [addData, setAddData] = useState<AddParam>({
    user_id: authState.user.id,
    name: "",
    kana_name: "",
    address: "",
    contact: "",
    image: "",
    business_date: "",
    price_day: 0,
    price_night: 0,
    other_step: "",
    step_ids: [],
    genre_id: 0,
    links: []
  });

  const post = async () => {
    await axios.post('/api/v1/owner/shops', addData)
      .catch(err => console.log(err))
      .finally(() => console.log('FIXME 遷移先'));
    return;
  }

  useEffect(() => {
    setErr('');
  }, [addData])

  return (
    page === 1 ?
    <HomeLayout subHeaderText="01 お店の情報について" prevRef='#' history={props.history}>
      <div className="container">
        <InfectionControl setPage={setPage} setAddData={setAddData} addData={addData}/>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            max-width: 330px;
            margin: 0 auto;
          }
        `}
      </style>
    </HomeLayout>
    :
    <HomeLayout subHeaderText="02 お店の情報について" onClick={() => setPage(1)}>
      <div className="container">
        <ShopInfo setPage={setPage} setAddData={setAddData} addData={addData} post={post}/>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            max-width: 330px;
            margin: 0 auto;
          }
        `}
      </style>
    </HomeLayout>
  );
}
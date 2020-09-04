import React from 'react';
// library
// import { Link } from 'react-router-dom';
// common
// import { RouteName } from './../../../../common/Const';
// components
import HomeLayout from '../../../templates/HomeLayout';
import CommonStyle from '../../../../common/CommonStyle';
import Text, { TextThemes } from './../../../atoms/Text';

const propStyle = {
  privacy: {
    maxWidth: '4oem',
    textAlign: 'justify',
    fontSize: '14px'
  }
};

export const Privacy: React.FC = (props: any) => {
  return (
    <HomeLayout headerText="プライバシーポリシー" prevRef='#' history={props.history}>
      <div className="content">
        <section className="privacy-section">
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            この利用規約（以下，「本規約」といいます。）は，我々がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第1条（適用）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            本規約は，ユーザーと我々との間の本サービスの利用に関わる一切の関係に適用されるものとします。<br/>
            我々は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
            本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第2条（利用登録）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            本サービスにおいては，登録希望者が本規約に同意の上，我々の定める方法によって利用登録を申請し，我々がこれを承認することによって，利用登録が完了するものとします。<br/>
            我々は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
          </Text>
          <ul className="privacy-list">
            <li className="privacy-option">利用登録の申請に際して虚偽の事項を届け出た場合</li>
            <li className="privacy-option">本規約に違反したことがある者からの申請である場合</li>
            <li className="privacy-option">その他，我々が利用登録を相当でないと判断した場合</li>
          </ul>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第3条（認証リンクの管理）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            ユーザーは，自己の責任において，本サービスの認証リンクを適切に管理するものとします。
            ユーザーは，いかなる場合にも，認証リンクを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。我々は，認証リンクによってログインされた場合には，そのメールアドレスを登録しているユーザー自身による利用とみなします。
            認証リンクが第三者によって使用されたことによって生じた損害は，我々に故意又は重大な過失がある場合を除き，我々は一切の責任を負わないものとします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第4条（禁止事項）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          </Text>
          <ul className="privacy-list">
            <li className="privacy-option">
              法令または公序良俗に違反する行為
            </li>
            <li className="privacy-option">
              犯罪行為に関連する行為
            </li>
            <li className="privacy-option">
              本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
            </li>
            <li className="privacy-option">
              我々，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
            </li>
            <li className="privacy-option">
              本サービスによって得られた情報を商業的に利用する行為
            </li>
            <li className="privacy-option">
              我々のサービスの運営を妨害するおそれのある行為
            </li>
            <li className="privacy-option">
              不正アクセスをし，またはこれを試みる行為
            </li>
            <li className="privacy-option">
              他のユーザーに関する個人情報等を収集または蓄積する行為
            </li>
            <li className="privacy-option">
              不正な目的を持って本サービスを利用する行為
            </li>
            <li className="privacy-option">
              本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
            </li>
            <li className="privacy-option">
              他のユーザーに成りすます行為
            </li>
            <li className="privacy-option">
              我々が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
            </li>
            <li className="privacy-option">
              面識のないユーザーとの出会いを目的とした行為
            </li>
            <li className="privacy-option">
              我々のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
            </li>
            <li className="privacy-option">
              その他，我々が不適切と判断する行為
            </li>
          </ul>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第5条（本サービスの提供の停止等）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </Text>
          <ul className="privacy-list">
            <li className="privacy-option">
              本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li className="privacy-option">
              地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
            </li>
            <li className="privacy-option">
              コンピュータまたは通信回線等が事故により停止した場合
            </li>
            <li className="privacy-option">
              その他，我々が本サービスの提供が困難と判断した場合
            </li>
          </ul>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第6条（利用制限および登録抹消）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
          </Text>
          <ul className="privacy-list">
            <li className="privacy-option">
              本規約のいずれかの条項に違反した場合
            </li>
            <li className="privacy-option">
              登録事項に虚偽の事実があることが判明した場合
            </li>
            <li className="privacy-option">
              料金等の支払債務の不履行があった場合
            </li>
            <li className="privacy-option">
              我々からの連絡に対し，一定期間返答がない場合
            </li>
            <li className="privacy-option">
              本サービスについて，最終の利用から一定期間利用がない場合
            </li>
            <li className="privacy-option">
              その他，我々が本サービスの利用を適当でないと判断した場合
            </li>
          </ul>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，本条に基づき我々が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第7条（退会）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            ユーザーは，我々の定める退会手続により，本サービスから退会できるものとします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第8条（保証の否認および免責事項）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            我々は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する我々とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
            前項ただし書に定める場合であっても，我々は，我々の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（我々またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，我々の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
            我々は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第9条（サービス内容の変更等）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第10条（利用規約の変更）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第11条（個人情報の取扱い）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            我々は，本サービスの利用によって取得する個人情報については，我々「プライバシーポリシー」に従い適切に取り扱うものとします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第12条（通知または連絡）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            ユーザーと我々との間の通知または連絡は，我々の定める方法によって行うものとします。我々は,ユーザーから,我々が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第13条（権利義務の譲渡の禁止）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            ユーザーは，我々の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
          </Text>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-title">
            第14条（準拠法・裁判管轄）
          </h2>
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            本規約の解釈にあたっては，日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には，我々の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </Text>
        </section>
        <section className="privacy-section">
          <Text theme={[TextThemes. TEXT]} propStyle={propStyle.privacy}>
            以上
          </Text>
        </section>
        <style jsx>{`
        .content {
          width: 100%;
          padding: 40px 16px;
          box-sizing: border-box;
        }
        .privacy-section{
          max-width: 32em;
          margin: 0 auto 60px auto;
        }
        .privacy-title{
          font-size: ${CommonStyle.SubTitle};
          color: ${CommonStyle.TextBlack};
          margin-bottom: 16px;
          max-width: 24em;
        }
        .privacy-list{
          width: 100%;
          line-height: 1.7em;
        }
        .privacy-option{
          font-size: ${CommonStyle.Caption};
          color: ${CommonStyle.TextBlack};
          margin-top: 16px;
          margin-left: 18px;
          list-style-type: disc;
          
        }
      `}</style>
      </div>
    </HomeLayout>
  );
}
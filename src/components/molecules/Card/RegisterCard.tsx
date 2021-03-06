import React from 'react';
// common
import CommonStyle from '../../../common/CommonStyle';
// components
import Icon, { IconThemes } from '../../atoms/Icon';
import Text, { TextThemes } from '../../atoms/Text';

const propStyle = {
  registerCardIcon: {
    position: 'absolute',
    top: '50%',
    left: '8px',
    transform: 'translateY(-50%)',
    WebkitTransform: 'translateY(-50%)',
  },
  registerCardText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    WebkitTransform: 'translate(-50%, -50%)',
    width: '200px',
  }
}

interface RegisterCardProps {
  src: string;
  text: string;
  className: string;
  nextRef: string;
}

const RegisterCard: React.FC<RegisterCardProps> = ({src, text, className, nextRef}) => {
  return (
    <div className={`register-card ${className}`}>
      <a href={nextRef}>
        <div className="register-card-inner">
          <Icon theme={[IconThemes.LITTLE]} propStyle={propStyle.registerCardIcon}>
            <img className="register-card-image" src={src} alt=""/>
          </Icon>
          <Text theme={[TextThemes.SMALL]} propStyle={propStyle.registerCardText}>
            {text}
          </Text>
        </div>
      </a>
      <style jsx>{`
        .register-card {
          position: relative;
          border-radius: 4px;
          text-align: center;
          background: ${CommonStyle.BgWhite};
          height: 38px;
          width: 320px;
          box-sizing: border-box;
          margin: 16px auto;
        }
        // .register-card-inner {
        //   display: flex;
        // }
        .register-card-image {
          width: 100%;
          height: auto;
        }
        .twitter{
          border: 2px solid ${CommonStyle.TwitterColor};
        }
        .google{
          border: 2px solid ${CommonStyle.GoogleColor};
        }
        .facebook{
          border: 2px solid ${CommonStyle.FacebookColor};
        }
        .email{
          border: 2px solid ${CommonStyle.BorderGray};
        }
      `}</style>
    </div>
  );
}

export default RegisterCard;
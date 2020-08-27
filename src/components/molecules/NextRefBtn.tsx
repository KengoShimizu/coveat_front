import React from 'react';
import Icon, { IconThemes } from './../atoms/Icon';
import Text, { TextThemes } from './../atoms/Text';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

const propStyle = {
  nextRefBtnText: {
    lineHeight: '1.8em',
  },
}

interface NextRefBtnProps {
  nextRef: string;
  text: string;
}

export const NextRefBtn: React.FC<NextRefBtnProps> = ({nextRef, text}) => {
  return (
    <Link to={nextRef}>
      <div className="next-ref-btn">
        <Text theme={[TextThemes.CAPTION]} propStyle={propStyle.nextRefBtnText}>{text}</Text>
        <Icon theme={[IconThemes.NORMAL]}>
          <ChevronRight size={24} color="#333" />
        </Icon>
      </div>
      <style jsx>{`
        .next-ref-btn{
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </Link>
  );
}

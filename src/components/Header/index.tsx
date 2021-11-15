import React from 'react';


interface Props {
  onAddNote(): void;
  onDeleteNote(): void;
}

//SFC: StateLessFunctionalComponent
const Header: React.SFC<Props> = ({onAddNote, onDeleteNote}) => {
  return  (
    <div className="header">
      <div className="header-title">
        <b><span>Luke's 심플노트들</span></b>
      </div>
      <div className="buttons-container">
        <b><button className="buttons" onClick={onAddNote}>추가</button></b>
        <b><button className="buttons" onClick={onDeleteNote}>삭제</button></b>
      </div> 
    </div>
  );
}

export default Header;
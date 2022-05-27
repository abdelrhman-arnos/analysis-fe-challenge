import React from 'react';

interface Props{
    title : string
    subTitle? : string
}

const PageTitle : React.FC<Props> = ({title, subTitle}) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </React.Fragment>
  );
}

export default PageTitle;

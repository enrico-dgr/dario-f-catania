import React from 'react';

namespace Models {
  export interface Props {
    skills: string[];
  }
}

const ToStringList = (props: Models.Props) => {
  return (
    <>
      {props.skills.map((skill, index, arr) => (
        <p className="home__skills-list__skill" key={skill}>
          {skill + (arr.length - 1 === index ? "" : " - ")}
        </p>
      ))}
    </>
  );
};

export default ToStringList;

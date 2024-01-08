import './Experience.scss';

import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import Block from '../Block/Block';

function Experience() {
  const { pageData } = useContext(GlobalContext)
  const { experience } = pageData;

  return (
    experience ? (
      <section id="experience">
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <div className="block-container" key={index} >
            <Block {...item} />
          </div>
        ))}
      </section>
    ) : null
  )
}
 
export default Experience
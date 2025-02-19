import css from './SkillBlock.module.scss';

import Title from 'elements/Title/Title';
import Text from 'elements/Text/Text';

function TechSkillBlock({ title, text }) {
  return (
    <div className={css.skillsBlock}>
      <div className="block">
        <Title tag="h3">{title}</Title>
      </div>
      <div className="content">
        {text.map((paragraph, i) => (
          <Text key={i}>{paragraph}</Text>
        ))}
      </div>
    </div>
  )
}

export default TechSkillBlock
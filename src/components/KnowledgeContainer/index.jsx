import { TitleH2 } from '../TitleH2';

import './styles.css';

export const KnowledgeContainer = () => {
  return (
    <section className="knowledge-section">
      <TitleH2
        title={'Conhecimentos'}
        textClassName={`knowledge-section__title`}
        cursorClassName="knowledge-section__title-cursor"
      />
    </section>
  );
};

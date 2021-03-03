import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile () {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.ProfileContainer}>
      <img src="https://github.com/joaovictordantasj.png" alt="imagem de perfil"/>
      <div>
        <strong>João Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon"/>  
          Level {level}
        </p>
      </div>
    </div>
  );
}
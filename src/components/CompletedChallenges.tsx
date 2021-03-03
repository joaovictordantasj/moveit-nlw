import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallanges.module.css';
import challenges from '../../challenges.json';

export function CompletedChallenges () {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}/{challenges.length}</span>
    </div>
  );
}
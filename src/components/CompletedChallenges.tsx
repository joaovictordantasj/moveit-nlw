import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallenges () {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );
}
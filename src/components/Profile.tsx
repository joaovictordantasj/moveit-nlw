import styles from '../styles/components/Profile.module.css'

export function Profile () {
  return (
    <div className={styles.ProfileContainer}>
      <img src="https://github.com/joaovictordantasj.png" alt="imagem de perfil"/>
      <div>
        <strong>João Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon"/>  
          Level 1
        </p>
      </div>
    </div>
  );
}
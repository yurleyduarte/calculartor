import React from 'react';
import styles from '../css/container.module.css';
import Display from './Display';
import Board from './Board';

const Container = () => {
  return (
    <main className={styles.container}>
      <div className={styles.calculator}>
        <Display />
        <Board />
      </div>
    </main>
  );
};

export default Container;
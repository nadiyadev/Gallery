import React from 'react';
import styles from './Grid.module.css'

export function Grid({children}) {
    return <div className={styles.grid}>{children}</div>
}
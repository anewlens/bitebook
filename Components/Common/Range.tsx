import React from 'react';
import styles from '../../styles/Components/Common/Range.module.scss'

type RangeProps = {
    label: string;
    state: number;
    func: any;
}

const Range = ({ label, state, func }: RangeProps) => (
    <div className={styles.rangeContainer}>
        <label className={styles.range_label}>{label}: <span>{state} hour{state > 1 && 's'}</span></label>
        <input type="range" min="1" max="24" value={state} onChange={e => { func(e.target.value) }} className={styles.range} />
    </div>
)

export default Range;
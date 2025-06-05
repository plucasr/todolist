import React from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <label className={styles.checkboxContainer} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className={styles.checkboxWrapper}>
        <span className={styles.checkmark} />
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
}; 
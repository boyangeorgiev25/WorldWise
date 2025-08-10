/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

export default function Button({ 
  children, 
  onClick, 
  type, 
  disabled = false,
  ariaLabel,
  ...props 
}) {
  return (
    <button 
      onClick={onClick} 
      className={`${styles.btn} ${styles[type]} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      aria-label={ariaLabel}
      type={onClick ? "button" : "submit"}
      {...props}
    >
      {children}
    </button>
  );
}

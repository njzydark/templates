import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  danger?: boolean;
}

export const Button = (props: IProps) => {
  const { primary, danger, ...rest } = props;

  const classes = classnames(styles.btn, {
    [styles.btn_primay]: primary,
    [styles.btn_danger]: danger
  });

  return (
    <button {...rest} className={classes}>
      {props.children}
    </button>
  );
};

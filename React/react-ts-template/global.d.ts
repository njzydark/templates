declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module '*.module.less' {
  const classes: { [className: string]: string };
  export default classes;
}
declare module '*.less';

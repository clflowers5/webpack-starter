// Required to use 'import' statements with scss files.
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

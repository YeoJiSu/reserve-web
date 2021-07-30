// 이미지 Import 가능하도록 바벨 수정필요함.
declare module '*.svg' {
  import React = require('react');

  const ReactComponent: string;
  export default ReactComponent;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

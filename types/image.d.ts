// 이미지 Import 가능하도록 바벨 수정필요함.
declare module '*.svg' {
  import React = require('react');

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

import React from 'react';
import htmlContent from './demo.html';

//works too, but same css issue

//const App=()=><div dangerouslySetInnerHTML={ {__html: htmlContent} } />

function TestPlugin() {
  React.useEffect(() => import('./vue-test-plugin.js'), []);
  return (
    <div>
      <vue-test-plugin />
    </div>
  );
}
export default TestPlugin;

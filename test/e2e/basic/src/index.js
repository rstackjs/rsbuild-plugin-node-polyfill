import path from 'node:path';
import querystring from 'querystring';

const qsRes = querystring.stringify({
  foo: 'bar',
});

document.querySelector('#root').innerHTML = `
  <div>
    <div id="test-querystring">${qsRes}</div>
    <div id="test-path">${path.join('foo', 'bar')}</div>
    <div id="test">Hello Rsbuild!</div>
  </div>
`;

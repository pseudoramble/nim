import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

const react = {
  "node_modules/react/react.js": [
    "Children",
    "Component",
    "createElement",
    "cloneElement",
    "isValidElement",
    "PropTypes",
    "createClass",
    "createFactory",
    "createMixin",
    "DOM",
    "version",
    "__spread",
  ]
};

const reactDom = {
  "node_modules/react-dom/index.js": [
    "findDOMNode",
    "render",
    "unmountComponentAtNode",
    "version",
    "unstable_batchedUpdates",
    "unstable_renderSubtreeIntoContainer",
  ]
};

export default {
  entry: 'src/index.js',
  dest: './dist/app.js',
  globals: {
    process: {
      env: {}
    }
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify('development')
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: Object.assign({}, react, reactDom)
    }),
    babel({
      "exclude": "node_modules/**",
      "presets": ["es2015-rollup", "react"]
    }),
    jsx({ factory: 'React.createElement' })
  ]
};

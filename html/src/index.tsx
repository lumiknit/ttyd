if (process.env.NODE_ENV === 'development') {
    require('preact/debug');
}
import 'whatwg-fetch';
import { h, render } from 'preact';
import { App } from './components/app';
import './style/index.scss';
import './style/fantasque.css';

render(<App />, document.body);

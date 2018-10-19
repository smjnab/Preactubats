import { h, Component } from 'preact';
import { mix, anim } from '../../lib/helpers';
import { home } from './style.scss';

export default class Home extends Component {
	render() {
		return (
			<div class={mix(home, anim("fadeIn faster"))}>
				<h1 class="title">Home</h1>
				<p class="subtitle">This is the Home component.</p>
			</div>
		)
	}
}
import { h, Component } from 'preact';
import { stickBottom } from './style.scss';
import { mix, anim } from '../../lib/helpers';

export default class Footer extends Component {
	render() {
		return (
			<footer class={mix(stickBottom, anim("slideInUp fastest"))}>
				<div class="content has-text-centered is-italic">
					<p>Preactubats by <a href="https://spelmakare.se/">Spelmakare Jens Nilsson AB</a>.</p>
				</div>
			</footer>
		)
	}
}
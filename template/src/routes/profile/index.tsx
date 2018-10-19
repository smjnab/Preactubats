import { h, Component, } from 'preact';
import { mix, anim } from '../../lib/helpers';
import { profile } from './style.scss';

export interface Props {
	user?: string;
}

export interface State {
	time: number;
	count: number;
	cBDisabled: boolean;
}

export default class Profile extends Component<Props, State> {
	state: State;
	timer: NodeJS.Timer | number;
	cBClass: DOMTokenList;
	cTClass: DOMTokenList;

	// Update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	// Increment text with fancy animation
	increment = () => {
		this.setState({
			count: this.state.count + 1,
			cBDisabled: true
		});

		// Click count text bounces
		if (this.state.count < 13) {
			this.cBClass.toggle("is-loading");

			this.cTClass.toggle("animated", true);
			this.cTClass.toggle("bounce");
			this.cTClass.toggle("faster", true);

			// Click count text resets
			setTimeout(() => {
				this.setState({
					cBDisabled: false
				});

				this.cBClass.toggle("is-loading");
				this.cTClass.toggle("bounce");
			}, 500);
		}

		// Click count text fades out
		else {
			this.cTClass.toggle("fadeOut");
		}
	};

	componentWillMount() {
		this.state = {
			time: Date.now(),
			count: 10,
			cBDisabled: false
		};

		// Start a timer for the clock
		this.timer = setInterval(this.updateTime, 1000);
	}

	componentDidMount() {
		this.cBClass = document.getElementById("clickButton").classList;
		this.cTClass = document.getElementById("clickText").classList;
	}

	componentWillUnmount() {
		clearInterval(this.timer as NodeJS.Timer);
		this.cTClass.toggle("fadeOut", false);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }: Props, { time, count, cBDisabled }: State) {
		return (
			<div class={mix(profile, anim("fadeIn faster"))}>
				<h1 class="title">Profile: {user}</h1>
				<p class="subtitle">This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>
				<br />

				<nav class="level is-mobile">
					<div class="level-left">
						<div class="level-item">
							<button id="clickButton" disabled={cBDisabled} class="button is-danger is-rounded is-uppercase has-text-black" onClick={this.increment}>Click Me</button>
						</div>
						<div class="level-item">
							<p id="clickText" class={mix("is-uppercase")}> Clicked {count} times.</p>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

import { h, Component } from 'preact';
import { Router, RouterOnChangeArgs } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Header from './header';
import Footer from './footer';
import Helmet from 'preact-helmet';

// Async routes
const Home = () => import('../routes/home').then(m => m.default);
const Profile = () => import('../routes/profile').then(m => m.default);

export default class App extends Component {
	currentUrl?: string;

	handleRoute = (event: RouterOnChangeArgs) => {
		this.currentUrl = event.url;
	};

	componentDidMount() {
		// Avoid initial flickering
		document.onreadystatechange = () => {
			if (document.readyState == "complete") {
				document.getElementById("app").hidden = false;
			}
		}
	}

	render() {
		return (
			<div hidden id="app" class="app container is-desktop">
				<Helmet
					meta={[
						{ name: "description", content: "Preact template for typescript, scss and Bulma framework." },
						{ name: "keywords", content: "HTML, TSX, React, Bulma, Typescript, Preact" }
					]}
				/>
				<Header />
				<Router onChange={this.handleRoute}>
					<AsyncRoute getComponent={Home} path="/" default />
					<AsyncRoute getComponent={Profile} path="/profile/" user="me" />
					<AsyncRoute getComponent={Profile} path="/profile/:user" />
				</Router>
				<Footer />
			</div>
		);
	}
}

import { h, Component } from 'preact';

export default class Header extends Component {
	navbarBurger: Element;
	navbarMenu: Element;
	navbarDropdown: HTMLElement;

	// Passalong to deal with param
	upOnNavbar = () => {
		this.toggleNavbar();
	}

	// Show/hide menu on making a selection.
	toggleNavbar(onOff?: boolean) {
		//Mobile
		this.navbarBurger.classList.toggle("is-active", onOff);
		this.navbarMenu.classList.toggle("is-active", onOff);

		//Desktop
		this.navbarDropdown.classList.toggle("is-hoverable", onOff);
	}

	// Make sure that is-hoverable is enabled on drop-down menu.
	enterNavbarDropdown = () => {
		this.navbarDropdown.classList.toggle("is-hoverable", true);
	}

	componentDidMount() {
		this.navbarBurger = document.getElementsByClassName("navbar-burger")[0];
		this.navbarMenu = document.getElementsByClassName("navbar-menu")[0];
		this.navbarDropdown = document.getElementById("navbarDropdown");

		// On mobile, close menu when touching anywhere but the navbar.
		document.addEventListener("click", (event: MouseEvent) => {
			if (event.srcElement.className.includes("nav")) return;

			this.toggleNavbar(false);
		});
	}

	render() {
		return (
			<header>
				<nav class="navbar animated slideInDown fastest" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						<a class="navbar-item" name="go to home" href="/">
							<img src="../assets/preactubats.png" alt="site icon" />
						</a>
						<a role="button" onMouseUp={this.upOnNavbar} class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div id="navbarMenu" class="navbar-menu">
						<div class="navbar-start">
							<a onMouseUp={this.upOnNavbar} class="navbar-item" href="/">Home</a>
							<div id="navbarDropdown" onMouseEnter={this.enterNavbarDropdown} class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link">Profiles</a>
								<div class="navbar-dropdown">
									<a class="navbar-item" onMouseUp={this.upOnNavbar} href="/profile">Me</a>
									<a class="navbar-item" onMouseUp={this.upOnNavbar} href="/profile/john">John</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}
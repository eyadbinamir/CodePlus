import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Global } from "../../js/GlobalSettings";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import logo from "../../imgs/logo.svg";
import logoAlt from "../../imgs/logo-alt.svg";
import "../css/Navigation.css";
const Navigation = () => {
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	return (
		<nav
			dir={english ? "ltr" : arabic ? "rtl" : ""}
			className={`${context.theme}`}>
			<div className="container d-flex justify-content-around gap-2 py-2 position-relative align-items-center">
				<div
					className={`d-flex justify-content-between align-items-center gap-3 gap-lg-5 ${
						context.theme === "light" ? "text-dark" : "text-light"
					}`}>
					<div>
						<Link onClick={() => window.scrollTo({ top: 0 })} to="/">
							<img
								className="logo"
								src={context.theme === "dark" ? logoAlt : logo}
								alt="Code+"
							/>
						</Link>
					</div>
					<ul
						onClick={(element) => {
							if (element.target.localName === "a") {
								window.scrollTo({ top: 0 });
							}
						}}
						className="Links text-center d-none d-lg-flex m-0 align-items-center justify-content-between gap-md-3 gap-lg-4 ">
						<li>
							<Link to="/">{english ? "Home" : arabic ? "الرئيسية" : ""}</Link>
						</li>
						<li>
							<Link to="/Courses">
								{english ? "Courses" : arabic ? "الدّورات" : ""}
							</Link>
						</li>
						<li>
							<Link to="/Our-Team">
								{english ? "Our Team" : arabic ? "فريق العمل" : ""}
							</Link>
						</li>
						<li>
							<Link to="/Leaderboard">
								{english ? "Leaderboard" : arabic ? "لوحة الصّدارة" : ""}
							</Link>
						</li>
						<li>
							<Link to="/Why-Code-Plus">
								{english ? "Why Code+?" : arabic ? "لماذا كود بلس؟" : ""}
							</Link>
						</li>
						<li>
							<a href="#About">{english ? "About" : arabic ? "حول" : ""}</a>
						</li>
					</ul>
				</div>
				<div className="d-flex gap-3 d-flex gap-1 align-items-center">
					<div className="control-btns d-flex justify-content-start  align-items-center gap-3">
						<LanguageToggle isNavElement={true} />
						<ThemeToggle isNavElement={true} />
					</div>
					<a
						href="#contact-us"
						className={`contact d-none d-lg-flex align-items-center ${context.theme}`}>
						{english ? "Contact Us!" : arabic ? "تواصل معنا!" : ""}
					</a>
				</div>
				<div
					onClick={() =>
						context.isMenuClicked
							? context.setIsMenuClicked(false)
							: context.setIsMenuClicked(true)
					}
					className={"button d-flex d-lg-none me-2 m-md-0 " + context.theme}>
					<FontAwesomeIcon icon="fa-solid fa-bars"></FontAwesomeIcon>
				</div>
			</div>
			{context.isMenuClicked && context.windowWidth < 1024 && (
				<div className={`menu ${context.theme}`}>
					<div
						className={context.theme === "light" ? "text-dark" : "text-light"}>
						<div className="container">
							<div className="d-flex justify-content-between ms-3 gap-4">
								<ul
									onClick={(element) => {
										if (
											element.target.localName === "a" &&
											element.target.id !== "contact-us"
										) {
											window.scrollTo({ top: 0 });
											context.setIsMenuClicked(false);
										}
									}}
									className="Links d-flex flex-column m-0 align-items-center justify-content-between gap-2 ">
									<li>
										<Link to="/">
											{english ? "Home" : arabic ? "الرئيسية" : ""}
										</Link>
									</li>
									<li>
										<Link to="/Courses">
											{english ? "Courses" : arabic ? "الدّورات" : ""}
										</Link>
									</li>
									<li>
										<Link to="/Our-Team">
											{english ? "Our Team" : arabic ? "فريق العمل" : ""}
										</Link>
									</li>
									<li>
										<Link to="/Leaderboard">
											{english ? "Leaderboard" : arabic ? "لوحة الصّدارة" : ""}
										</Link>
									</li>
									<li>
										<Link to="/Why-Code-Plus">
											{english ? "Why Code+?" : arabic ? "لماذا كود بلس؟" : ""}
										</Link>
									</li>
									<li>
										<a href="#About">
											{english ? "About" : arabic ? "حول" : ""}
										</a>
									</li>
									<a
										href="#contact-us"
										onClick={() => context.setIsMenuClicked(false)}
										className={"contact align-items-center " + context.theme}>
										{english ? "Contact Us!" : arabic ? "تواصل معنا!" : ""}
									</a>
								</ul>
								<div className="d-flex gap-3 align-items-center justify-content-between">
									<div className="d-flex me-3 me-md-5 flex-column  align-items-center gap-3 control-btns">
										<ThemeToggle isNavElement={false} />
										<LanguageToggle isNavElement={false} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};
export default Navigation;

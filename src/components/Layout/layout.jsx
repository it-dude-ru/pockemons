import cn from 'classnames';
import s from './style.module.css';

function Layout({ title, urlBg, colorBg, colorTitle, children }) {
	const sectionStyle = {};
	const h3Style = {};
	if (urlBg) {
		sectionStyle.backgroundImage = `url(${urlBg})`;
	}

	if (colorBg) {
		sectionStyle.backgroundColor = colorBg;
	}
	if (colorTitle) {
		h3Style.color = colorTitle;
	}
	return (
		<section className={s.root} style={sectionStyle}>
			<div className={s.wrapper}>
				<article>
					<div className={s.title}>
						<h3 style={h3Style}>{title}</h3>
						<span className={s.separator}></span>
					</div>
					<div className={cn(s.desc, s.full)}>
						{children}
					</div>
				</article>
			</div>
		</section>
	)
}

export default Layout;
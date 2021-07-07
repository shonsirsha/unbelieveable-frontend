import styles from "./Footer.module.css";
import styled from "styled-components";

const StyledFooter = styled.footer`
	position: absolute;
	z-index: 99;
`;
export default function Footer({ scrollHoriz }) {
	const content = (
		<>
			<img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{" "}
			Three-Sigma Technologies | Unbelieveable.id Developer Preview
		</>
	);
	return (
		<>
			{scrollHoriz ? (
				<StyledFooter className={styles.footer}>{content}</StyledFooter>
			) : (
				<footer>{content}</footer>
			)}
		</>
	);
}

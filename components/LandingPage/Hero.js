import styled from "styled-components";
import { Col, Row, Container, Image } from "react-bootstrap";
import { HeadingXL } from "components/Typography/Headings";
import { TextPrimary } from "components/Typography/Text";
import YellowButton from "components/Buttons/YellowButton";
import { mediaBreakpoint } from "utils/breakpoints";
import Link from "next/link";

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const StyledContainer2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100%;
`;

const StyledHeading = styled(HeadingXL)`
	font-family: MontserratRegular;
	${(props) => !props.scrollh && `max-width: 800px;`}
	& > span {
		font-family: MontserratBold;
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 48px;
	}

	@media (max-width: 320px) {
		margin-top: 94px;
		font-size: 30px;
		line-height: 45px;
	}
`;

const OuterContainer = styled.div`
	height: 100vh;
	background: linear-gradient(#1022a4, #31a4fa);
	@media (max-width: 320px) {
		min-height: 100vh;
	}
`;
const StyledRow = styled(Row)`
	position: relative;
	z-index: 1;
`;
const BlueBlob = styled(Image)`
	position: absolute;
	bottom: 30%;
	left: 10%;
	width: 340px;
	height: 340px;
`;
export default function Hero({ scrollHoriz }) {
	const content = (
		<>
			<StyledRow>
				<Col className="align-items-center d-flex justify-content-center">
					<StyledHeading
						scrollh={scrollHoriz}
						className="text-white text-center"
					>
						Belajarlah Setiap Hari Jadilah <span>UNBELIEVEABLE!</span>
					</StyledHeading>
				</Col>
			</StyledRow>
			<StyledRow className="mt-5">
				<Col className="align-items-center d-flex justify-content-center">
					<TextPrimary className="text-center text-white text-capitalize">
						jadilah lebih baik setiap harinya bersama komunitas kami menuju
						pribadi yang luar biasa!
					</TextPrimary>
				</Col>
			</StyledRow>
			<StyledRow className="mt-4">
				<Col>
					<Link href="/daftar">
						<YellowButton>Menjadi Member</YellowButton>
					</Link>
				</Col>
			</StyledRow>
			<BlueBlob className="position-absolute" src={"/images/blueblob.png"} />
		</>
	);

	return (
		<OuterContainer id="hero">
			{scrollHoriz ? (
				<StyledContainer2>{content}</StyledContainer2>
			) : (
				<StyledContainer className="position-relative">
					{content}
				</StyledContainer>
			)}
		</OuterContainer>
	);
}

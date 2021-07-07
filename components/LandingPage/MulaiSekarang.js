import styled from "styled-components";
import HalfHalf from "components/HalfHalf/HalfHalf";
import { TextPrimary } from "components/Typography/Text";
import { Image } from "react-bootstrap";
import { HeadingSM } from "components/Typography/Headings";
import YellowButton from "components/Buttons/YellowButton";
import { mediaBreakpoint } from "utils/breakpoints";
const StyledHeadingSM = styled(HeadingSM)`
	font-family: MontserratRegular;
	font-size: 29px;

	.bold {
		font-family: MontserratBold;
	}
`;
const StyledTextPrimary = styled(TextPrimary)`
	.bold {
		font-family: OpenSansBold;
	}
`;
const LeftContainer = styled.div`
	padding-right: 80px;
	${(props) => props.scrollh && `padding-top: 120px;`}
	@media ${mediaBreakpoint.down.md} {
		padding-right: 0;
	}
`;

const RightContainer = styled.div`
	padding-left: 80px;
	${(props) => props.scrollh && `padding-top: 120px;`}
	img {
		${(props) => props.scrollh && `width: 460px;`}
		height: 154.93px;
	}
	@media ${mediaBreakpoint.down.md} {
		padding-left: 0;

		img {
			width: 100%;
		}
	}
`;

export default function MulaiSekarang({ scrollHoriz }) {
	const left = (
		<LeftContainer scrollh={scrollHoriz}>
			<StyledHeadingSM className="ws">
				Di sini kami percaya bahwa{" "}
				<span className="bold">proses tidak akan mengkhianati hasil!</span>
			</StyledHeadingSM>
			<StyledTextPrimary className="mt-4 ws">
				belajarlah sesuai dengan apa yang kamu minati dengan gaya belajar masa
				depan rasakan hasilnya mulai <span className="bold"> HARI INI!</span>
			</StyledTextPrimary>
		</LeftContainer>
	);

	const right = (
		<RightContainer scrollh={scrollHoriz}>
			<div className="d-flex flex-column align-items-center">
				<Image src="/images/characters.png" />
			</div>
		</RightContainer>
	);
	return (
		<HalfHalf
			left={left}
			right={right}
			light
			scrollHoriz={scrollHoriz}
			bottom={<YellowButton width={280}>Mulai Sekarang!</YellowButton>}
		/>
	);
}

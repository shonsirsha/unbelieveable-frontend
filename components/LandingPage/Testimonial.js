import styled from "styled-components";
import { TextTertiary } from "components/Typography/Text";
import { Image, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { HeadingXS, HeadingMD } from "components/Typography/Headings";
import { mediaBreakpoint } from "utils/breakpoints";
const StyledHeadingXS = styled(HeadingXS)`
	font-size: 22px;
	margin-top: 96px;
`;

const StyledHeadingMD = styled(HeadingMD)`
	@media ${mediaBreakpoint.down.lg} {
		font-size: 32px;
		line-height: 34px;
	}
`;

const OuterContainer = styled.div`
	display: flex;
	padding: 160px 0;
	padding-bottom: 24px;

	@media ${mediaBreakpoint.down.lg} {
		padding: 48px 0;
	}
`;
const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 350px;
	padding: 32px;
	border-radius: 32px;
	width: 85%;
	align-items: center;
	position: relative;
	img {
		position: absolute;
		top: -50px;
	}
`;

const StyledSlider = styled(Slider)`
	width: 100%;
	max-width: 100%;
	.slick-track {
		margin: auto;
	}
	.slick-list {
		padding-top: 90px;
		padding-bottom: 24px;
	}

	.slick-slide > div {
		display: flex;
		justify-content: center;
	}

	.slick-dots li button:before {
		font-size: 12px;
	}

	.slick-dots li button:before {
		color: #e8bc52;
	}

	.slick-prev:before,
	.slick-next:before {
		color: #e8bc52;
	}
	.slick-prev:before,
	.slick-next:before {
		font-size: 48px;
	}

	.slick-prev {
		z-index: 88;
		left: -58px;
	}

	.slick-next {
		z-index: 88;
	}

	@media ${mediaBreakpoint.down.md} {
		.slick-next,
		.slick-prev {
			display: none !important;
		}
	}
`;
export default function Testimonial({ testimonials }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<OuterContainer>
			<Container>
				<Row>
					<Col lg={12}>
						<StyledHeadingMD className="text-center">
							Testimoni Member yang sudah Join Batch 1
						</StyledHeadingMD>
					</Col>

					<Col lg={12} className="d-flex justify-content-center mt-4">
						<StyledSlider {...settings}>
							{testimonials &&
								testimonials.map((t) => (
									<TestimonialCard
										nama={t.nama}
										status={t.status}
										testimonial={t.testimonial}
									/>
								))}
						</StyledSlider>
					</Col>
				</Row>
			</Container>
		</OuterContainer>
	);
}
const TestimonialCard = ({ nama, status, testimonial }) => {
	return (
		<CardBody className="shadow bg-tan">
			<Image src="/images/plcholder.png" width={160} roundedCircle />

			<StyledHeadingXS>
				{nama}
				{status && `, ${status}`}
			</StyledHeadingXS>
			<TextTertiary className="mt-3 text-center">{testimonial}</TextTertiary>
		</CardBody>
	);
};
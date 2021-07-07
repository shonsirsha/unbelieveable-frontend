import { useEffect, useRef, useState } from "react";
import Layout from "components/Layout";
import Hero from "components/LandingPage/Hero";
import TentangKami from "components/LandingPage/TentangKami";
import CaraKerja from "components/LandingPage/CaraKerja";
import TentangKami2 from "components/LandingPage/TentangKami2";
import MulaiSekarang from "components/LandingPage/MulaiSekarang";
import Testimonial from "components/LandingPage/Testimonial";
import { API_URL } from "config";

export default function Home({ testimonials }) {
	const realElRefWidth = useRef();
	const [fakeWidth, _] = useState(545); // gonna be used as HEIGHT (yes, not width...)
	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener("scroll", () => {
				if (document.querySelector("#wop")) {
					document.querySelector("#wop").style.left = `-${
						document.body.scrollTop || document.documentElement.scrollTop
					}px`;
				}
			});
		}
	}, []);

	return (
		<>
			<div className="d-none d-lg-block position-relative">
				<Layout scrollHoriz landingPage withFB>
					<div
						ref={realElRefWidth}
						style={{ whiteSpace: "nowrap" }}
						id="wop"
						className="d-flex position-fixed"
					>
						<Hero scrollHoriz />

						<TentangKami scrollHoriz />

						<CaraKerja scrollHoriz />

						<TentangKami2 scrollHoriz />

						{testimonials && (
							<Testimonial scrollHoriz testimonials={testimonials} />
						)}

						<MulaiSekarang scrollHoriz />
					</div>
					<div style={{ height: `${fakeWidth}vw` }}></div>
				</Layout>
			</div>

			<div className="d-block d-lg-none">
				<Layout scrollHoriz landingPage withFB>
					<Hero />

					<TentangKami />
					<CaraKerja />
					<TentangKami2 />
					{testimonials && <Testimonial testimonials={testimonials} />}
					<MulaiSekarang />
				</Layout>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/testimonials`);
	const testimonials = await res.json();
	return {
		props: { testimonials },
		revalidate: 1,
	};
}

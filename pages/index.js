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
	const [fakeWidth, _] = useState(250); // gonna be used as HEIGHT (yes, not width...)
	useEffect(() => {
		if (typeof window !== undefined) {
			// window.addEventListener("scroll", () => {
			// 	document.querySelector("#wop").style.left = `-${
			// 		document.body.scrollTop || document.documentElement.scrollTop
			// 	}px`;
			// });
		}
	}, []);

	// $(window).on("scroll", function () {
	// 	$("#realcontent").css("left", -$(window).scrollTop());
	// });
	return (
		<Layout landingPage withFB>
			<Hero />

			<div className="d-none d-md-block">
				<div
					ref={realElRefWidth}
					style={{ whiteSpace: "nowrap" }}
					id="wop"
					className="d-flex "
				>
					<TentangKami scrollHoriz />

					<CaraKerja scrollHoriz />

					<TentangKami2 scrollHoriz />
				</div>
				{/* {testimonials && <Testimonial testimonials={testimonials} />} */}

				{/* <TentangKami2 />

				{testimonials && <Testimonial testimonials={testimonials} />}
				<MulaiSekarang /> */}
			</div>

			<div className="d-block d-md-none">
				<TentangKami />
				<CaraKerja />
				<TentangKami2 />
				{testimonials && <Testimonial testimonials={testimonials} />}
				<MulaiSekarang />
			</div>
		</Layout>
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

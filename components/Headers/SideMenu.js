import { HeadingXXS } from "components/Typography/Headings";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
const OuterContainer = styled.div`
	display: flex;
	height: 100vh;
	margin-right: 200px;
	margin-left: 64px;

	@media (max-width: 1024px) {
		/*iPad Pro and below*/
		display: none;
	}
`;
const MenuContainer = styled.div`
	position: fixed;
	display: flex;
	top: 45%;
	flex-direction: column;

	a {
		text-decoration: none;
	}
`;
const StyledHeadingXXS = styled(HeadingXXS)`
	font-family: MontserratRegular;
	font-size: 19px;
	padding-bottom: 9px;
	padding-top: 15px;
	margin-bottom: 0;
	${(props) => props.active && `border-bottom: 2px solid #171B2D;`}
	color: ${(props) => (props.active ? `#171B2D;` : `#8E8F91;`)}
    transition: 0.2s;
	&:hover {
		cursor: pointer;
		text-decoration: none;
		color: #171b2d;
	}
`;
export default function SideMenu() {
	const router = useRouter();
	const routes = [
		{
			url: "/dashboard",
			text: "dashboard",
		},
		{
			url: "/profil",
			text: "profil",
		},
		{
			url: "/daftar-kelas",
			text: "kelas",
		},
		{
			url: "/pertanyaan",
			text: "pertanyaan",
		},
	];
	return (
		<OuterContainer>
			<MenuContainer>
				{routes.map((r, ix) => (
					<Link key={ix} href={r.url}>
						<a>
							<StyledHeadingXXS
								active={r.url === router.pathname}
								className="text-black"
							>
								{r.text}
							</StyledHeadingXXS>
						</a>
					</Link>
				))}
			</MenuContainer>
		</OuterContainer>
	);
}
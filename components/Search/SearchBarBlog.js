import { useRouter } from "next/router";
import styled from "styled-components";
import { FormControl } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { mediaBreakpoint } from "utils/breakpoints";
import { useState } from "react";
import { whitespace } from "utils/whitespace";
const StyledBar = styled(FormControl)`
	padding: 23px 21px;
	padding-left: 60px;
	background: #f2f2f2;
	border: none;
	font-size: ${(props) => (props.bigtext ? `16px` : `13px`)};
	border-radius: 28px;
	width: ${(props) => props.width}%;
	transition: 0.4s;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px #f2f2f2 inset !important;
		outline: none;
	}

	&:focus {
		background: #e8e8e8;
		outline: none;
	}

	@media ${mediaBreakpoint.down.md} {
		font-size: 13px;
		width: 100%;
	}
`;
const StyledContainer = styled.div`
	width: ${(props) => props.width}%;
	position: relative;
	max-width: 640px;
	display: flex;

	@media ${mediaBreakpoint.down.lg} {
		width: 100%;
		max-width: 100%;
	}
`;

const SearchIcon = styled(MdSearch)`
	position: absolute;
	font-size: 25px;
	left: 18px;
	top: 11px;
`;
export default function SearchBarBlog({
	bigText = false,
	barWidthPercent = "100",
	frontendSearch = false, // frontend filtering only
	...props
}) {
	const router = useRouter();
	const [keyword, setKeyword] = useState("");
	const onChange = (e) => {
		setKeyword(e.target.value);
	};
	const onKeyUp = (e) => {
		if (e.keyCode === 13 && !whitespace(e.target.value)) {
			router.push(`/blog-cari?q=${keyword}&sortBy=trending`);
		}
	};
	return (
		<StyledContainer width={barWidthPercent}>
			{frontendSearch ? (
				<StyledBar {...props} bigtext={bigText ? 1 : 0} width={"100"} />
			) : (
				<StyledBar
					{...props}
					onKeyUp={onKeyUp}
					value={keyword}
					onChange={onChange}
					bigtext={bigText ? 1 : 0}
					width={"100"}
				/>
			)}
			<SearchIcon />
		</StyledContainer>
	);
}
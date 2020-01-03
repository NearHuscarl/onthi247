import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import { H2 } from '../components/Headings';
import { FormattedText, Line, SizedBox } from '../components/Common';
import Button, { ButtonText } from '../components/Buttons';
import { IconInput } from '../components/Input';
import { CartCourseList } from '../components/CourseList';
import ContentContainer from '../layout/ContentContainer';
import styled, { appColors } from '../styles';
import courses from '../data/courses';

const Main = styled.main`
	margin-bottom: 7rem;
`;
const Content = styled.div`
	margin-top: 3.6rem;
	margin-bottom: 4.1rem;

	display: grid;
	grid-template-columns: minmax(min-content, 60rem) minmax(min-content, 24rem);
	column-gap: 5rem;
`;
const Cart = styled.div`
	& > button {
		width: 100%;
		margin-top: 1rem;
		padding: 1rem 0.5rem;
	}

	strike {
		color: ${appColors.greyDark1};
	}
`;
const Price = styled.div`
	font-size: 2.2rem;
	font-weight: 600;
	color: ${appColors.red};
`;
const Small = styled(FormattedText)`
	font-size: 1.2rem;
`;
const DiscountHelp = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;

	& > :first-child {
		margin-right: 1rem;
	}
`;

const CartPage = () => (
	<Main>
		<Breadcrumb path={[routes.home, routes.cart]} />
		<ContentContainer>
			<Content>
				<div>
					<H2>Giỏ hàng (5)</H2>
					<SizedBox height={1} />
					<CartCourseList courses={courses.slice(0, 5)} />
				</div>
				<Cart>
					<H2>Thành tiền</H2>
					<Price>6,800,000đ</Price>
					<strike>7,900,000đ</strike>
					<Small>Ưu đãi còn [3] ngày nữa</Small>
					<Button type='button'>Đến bước thanh toán</Button>
					<Line medium />
					<IconInput placeholder='Mã giảm giá' icon='Áp dụng' />
					<DiscountHelp>
						<ButtonText type='button'>
							<FontAwesomeIcon icon={faTimes} />
						</ButtonText>
						<FormattedText>
							Mã giảm giá [HOCSINHMOI] đang được áp dụng
						</FormattedText>
					</DiscountHelp>
				</Cart>
			</Content>
		</ContentContainer>
	</Main>
);

export default CartPage;

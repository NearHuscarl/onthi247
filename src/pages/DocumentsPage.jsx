import React from 'react';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import DocumentList from '../components/DocumentList';
import Pagination from '../components/Pagination';
import { SizedBox } from '../components/Common';
import DocumentListSideBar from '../components/DocumentListSideBar';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import styled from '../styles';
import documents, { sidebarDocuments } from '../data/documents';

const Content = styled.div`
	display: flex;
	margin-top: 3.6rem;
	margin-bottom: 4.1rem;
`;
const ColLeft = styled.div`
	width: 64.7rem;
	margin-right: 3.3rem;
`;
const ColRight = styled.div`
	flex: 0 1;
`;

const DocumentsPage = () => (
	<main>
		<Breadcrumb path={[routes.home, routes.document]} />
		<Filters
			title='Danh sách tài liệu'
			subTitle='Có tất cả 300 tài liệu trong danh sách'
		/>
		<ContentContainer>
			<Content>
				<ColLeft>
					<DocumentList list={documents} />
				</ColLeft>
				<ColRight>
					<DocumentListSideBar
						title='Tài liệu nổi bật'
						list={sidebarDocuments}
					/>
					<SizedBox height={1} />
					<DocumentListSideBar
						title='Tài liệu mới nhất'
						list={sidebarDocuments}
					/>
					<SizedBox height={1} />
					<Ads />
				</ColRight>
			</Content>
			<Pagination />
			<SizedBox height={7} />
		</ContentContainer>
	</main>
);

export default DocumentsPage;

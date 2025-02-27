import styled from "styled-components";

const PaginationBox = styled.ul``;
const PageItem = styled.li``;
const PageButton = styled.button.attrs({ type: "button" })``;

function Pagination() {
  return (
    <PaginationBox>
      <PageItem>
        <PageButton></PageButton>
      </PageItem>
    </PaginationBox>
  );
}

export default Pagination;

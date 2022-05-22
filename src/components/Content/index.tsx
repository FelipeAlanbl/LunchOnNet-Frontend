import { ContentWrapper } from './style';

function Content({children}:{children: JSX.Element}) {
  return (
    <ContentWrapper>
        {children}
    </ContentWrapper>
  )
}

export default Content
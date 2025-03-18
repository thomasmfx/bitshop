import errorImgUrl from '../../assets/error404.svg';
import * as S from './ErrorPage.styles';

export default function ErrorPage() {
  return (
    <S.Main>
      <S.Image src={errorImgUrl} />
      <S.Link to="/">
        <S.Button>
          <S.Text>Go back to home</S.Text>
        </S.Button>
      </S.Link>
    </S.Main>
  );
}

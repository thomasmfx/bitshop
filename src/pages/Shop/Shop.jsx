import * as S from './Shop.styles'
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Shop() {
  const context = useOutletContext()

  return (
    <S.Main>
      <Outlet context={context} />
    </S.Main>
  )
}

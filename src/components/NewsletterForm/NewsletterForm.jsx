import { Send } from 'react-feather'
import { useState } from 'react'
import * as S from './NewsletterForm.styles'
import send from '../../assets/send.svg'

function NewsletterForm() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <S.Form onSubmit={(e) => e.preventDefault()}>
      <S.Input
        name="email"
        type="email"
        autoComplete="on"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <S.Button type="submit" onClick={handleSubmit}>
        <S.Text>Sing up</S.Text>
        <S.Icon src={send}/> {/* Hide unless its viewed on mobileM */}
      </S.Button>
    </S.Form>
  )
}

export default NewsletterForm

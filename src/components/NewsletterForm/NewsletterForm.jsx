import { useState } from 'react'
import { Span } from '../shared/elements'
import * as S from './NewsletterForm.styles'

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
        <Span>Sing up</Span>
      </S.Button>
    </S.Form>
  )
}

export default NewsletterForm

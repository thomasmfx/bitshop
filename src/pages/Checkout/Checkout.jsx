import { useRef, useEffect, useState } from 'react'
import successAnimation from '../../assets/success-animation.webm'
import BurstEffect from '../../components/BurstEffect/BurstEffect'
import { useNavigate } from 'react-router-dom'
import * as S from './Checkout.styles'

function SuccessAnimation() {
  const [endAnimation, setEndAnimation] = useState(false)
  const videoRef = useRef()

  function playVideo() {
    videoRef.current.play()
  }

  function setPlayback() {
    videoRef.current.playbackRate = 0.3
  }

  useEffect(() => {
    setTimeout(() => {
      playVideo()
    }, 100)

    setTimeout(() => {
      setEndAnimation(true)
    }, 2500)
  }, [])

  return (
    <S.Video
      ref={videoRef}
      endAnimation={endAnimation}
      onCanPlay={() => setPlayback()}
    >
      <S.VideoSource src={successAnimation} type="video/webm" />
    </S.Video>
  )
}

function CheckoutPage() {
  const [hideAnimation, setHideAnimation] = useState(false)
  const [displayDot, setDisplayDot] = useState(false)
  const [hideDotBling, setHideDotBling] = useState(false)
  const [canRedirect, setCanredirect] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setHideAnimation(true)
    }, 4000)

    setTimeout(() => {
      setDisplayDot(true)
    }, 6500)

    setTimeout(() => {
      setHideDotBling(true)
    }, 7000)

    setTimeout(() => {
      setCanredirect(true)
    }, 11000)
  }, [])

  useEffect(() => {
    if (canRedirect) navigate('/')
  })

  return (
    <S.Container>
      {!hideAnimation && <SuccessAnimation />}
      {hideAnimation && (
        <S.Message>
          Thanks for trusting in {''}
          <S.Logo>
            bitShop {''}
            <S.Dot show={displayDot}>{!hideDotBling && <BurstEffect />}</S.Dot>
          </S.Logo>
        </S.Message>
      )}
    </S.Container>
  )
}

export default CheckoutPage

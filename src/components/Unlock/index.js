import {useState} from 'react'
import {Container, Para} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const handleLockBtn = () => {
    setLock(prevState => !prevState)
  }
  return (
    <Container>
      {lock ? (
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <Para>Your Device is {`${lock ? 'Locked' : 'Unlocked'}`}</Para>
      <button onClick={handleLockBtn} type="button">{`${
        lock ? 'Unlock' : 'Lock'
      }`}</button>
    </Container>
  )
}

export default Unlock

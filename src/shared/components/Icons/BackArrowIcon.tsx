import { type FC } from 'react'

export const BackArrowIcon: FC = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={'icon'}>
      <path d='M11.25 12H0.75' stroke='#161616' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M6 17.25L0.75 12L6 6.75' stroke='#161616' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'
      />
    </svg>

  )
}

export default BackArrowIcon
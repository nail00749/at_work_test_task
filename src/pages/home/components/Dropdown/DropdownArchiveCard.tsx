import { type FC } from 'react'

import { useAppDispatch } from '@/core/store/index.ts'
import { Dropdown, User } from '@/shared'
import { activateUser } from '../../store'

interface Props {
  user: User
}

export const DropdownArchiveCard: FC<Props> = (props) => {
  const { user } = props
  const dispatch = useAppDispatch()


  const handleActive = () => {
    dispatch(activateUser(user))
  }

  return (
    <div>
      <Dropdown>
        <div onClick={handleActive}>Активировать</div>
      </Dropdown>
    </div>
  )
}

export default DropdownArchiveCard
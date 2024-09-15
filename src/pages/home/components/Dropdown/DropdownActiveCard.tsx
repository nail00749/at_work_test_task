import { type FC } from 'react'

import { Link } from 'react-router-dom'
import { useAppDispatch } from '@/core/store/index.ts'
import { Dropdown, User } from '@/shared'
import { removeActiveUser, archiveUser } from '../../store'

interface Props {
  user: User
}

export const DropdownActiveCard: FC<Props> = (props) => {
  const { user } = props
  const dispatch = useAppDispatch()

  const handleArchive = () => {
    dispatch(archiveUser(user))
  }

  const handleHide = () => {
    dispatch(removeActiveUser(user.id))
  }

  return (
    <div>
      <Dropdown>
        <div>
          <Link to={`/update/${user.id}`}>
            Редактировать
          </Link>
        </div>
        <div onClick={handleArchive}>Архивировать</div>
        <div onClick={handleHide}>Скрыть</div>
      </Dropdown>
    </div>
  )
}

export default DropdownActiveCard
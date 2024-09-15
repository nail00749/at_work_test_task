import { type FC } from 'react'
import styles from './category.module.scss'
import CategoryItem from './CategoryItem'

interface Props {
  list: string[]
}

export const Category: FC<Props> = (props) => {
  const { list } = props
  return (
    <div className={styles.list_wrapper}>
      {list.map((item) => <CategoryItem key={item} title={item} />)}
    </div>
  )
}

export default Category
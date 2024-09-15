import  { type FC } from 'react'
import styles from './category.module.scss'

interface Props {
  title: string
}

export const CategoryItem: FC<Props> = (props) => {
  const { title } = props
  return (
    <div className={`${styles.category_wrapper} text2-medium`}>
      {title}
      <div className={styles.line} />
    </div>
  )
}

export default CategoryItem
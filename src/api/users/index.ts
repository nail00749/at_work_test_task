export const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6')

  if (response.ok && response.status === 200) {
    return response.json()
  }

  throw new Error('Failed to fetch users')
}

export const getUser = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (response.ok && response.status === 200) {
    return response.json()
  }

  throw new Error('Failed to fetch user')
}
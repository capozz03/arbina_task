import React, { useEffect, useState } from 'react'
import { useAppDispatch, useDebounce } from '../../hooks'
import { getUsersSearchAsync } from '../../redux/slice'

const SearchComponent = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce<string>(value, 500)

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    dispatch(getUsersSearchAsync(debouncedValue))
  }, [debouncedValue])

  return (
    <div className="bp4-align-right">
      <div className="bp4-input-group">
        <span className="bp4-icon bp4-icon-search"></span>
        <input
          className="bp4-input"
          type="search"
          placeholder="Начинайте печатать..."
          dir="auto"
          onChange={searchHandler}
        />
      </div>
    </div>
  )
}

export default SearchComponent

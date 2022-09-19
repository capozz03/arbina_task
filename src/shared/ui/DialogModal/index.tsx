import React, { FC } from 'react'
import { Dialog, Classes } from '@blueprintjs/core'
import { Region } from '@blueprintjs/table'

type TDialogModalProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  userInfo: string[]
  setSelectedRow: (value: Region[]) => void
}

const DialogModal: FC<TDialogModalProps> = ({
  isOpen,
  setIsOpen,
  userInfo,
  setSelectedRow
}) => {

  const fieldNames = [
    'Имя пользователя',
    'Действие',
    'Время, в которое выполнено действие',
  ]

  const closeDialogModal = () => {
    setIsOpen(false)
    setSelectedRow([])
  }

  return (
    <Dialog
      title="Информация о пользователе"
      icon="info-sign"
      isOpen={isOpen}
      onClose={closeDialogModal}
    >
      <div className={Classes.DIALOG_BODY}>
        {userInfo.map((info: string, index: number) => {
          if (index === 2) {
            const date = new Date(info).toLocaleDateString()
            return (
              <p><b>{fieldNames[index]}</b>: {date}</p>
            )
          }
          return (
            <p><b>{fieldNames[index]}</b>: {info}</p>
          )
        })}
      </div>
    </Dialog>
  )
}

export default DialogModal

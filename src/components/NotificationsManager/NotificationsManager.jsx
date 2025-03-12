import PropTypes from 'prop-types'
import { Fragment } from 'react'

function NotificationsManager({ notifications, getNotificationElement }) {
  return (
    <>
      {Object.entries(notifications).map(([name]) => {
        return <Fragment key={name}>{getNotificationElement(name)}</Fragment>
      })}
    </>
  )
}

NotificationsManager.propTypes = {
  notifications: PropTypes.object.isRequired,
  getNotificationElement: PropTypes.func.isRequired,
}

export default NotificationsManager

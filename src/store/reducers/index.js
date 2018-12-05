import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import user from './user'
import record from './record'
import taskDetail from './taskDetail'
import drawTask from './drawTask'
import home from './home'
import task from './task'
import htlist from './htlist'
import detail from './detail'
import newComer from './newComer'
import htOrder from './htOrder'
export default combineReducers({
  counter,
  login,
  user,
  record,
  taskDetail,
  drawTask,
  home,
  task,
  htlist,
  detail,
  newComer,
  htOrder
})

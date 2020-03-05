import React from 'react'
import {Route, IndexRoute} from 'react-route'
import Task from './planet_react/src/Task.js'

const routes = (
		<Route path = "/" component={Task}>
			<IndexRoute component={Task}>
		</Route>
	);
import React from 'react'
import {router, browserHistory} from 'react-route'
import routes from '../routes.js'

export default class AppRoutes extends React.Component
{
	render()
	{
		return
		(
			<router history={browserHistory}
			routes={routes}
			onUpdate={() => window.scrollTo(0,0)}/>
		);
	}
}
import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import 'styles/main.scss'
import 'App.scss'

import Home from 'components/Home/Home'
import RSVP from 'components/RSVP/RSVP'
import { setSpotifyToken } from 'redux/actions'

const App = () => {
	useEffect(() => {
		setSpotifyToken()
	}, [])

	// TODO: Confirmation Pop Up: RSVP SUCCESSFUL

	return (
		<div className='app'>
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/rsvp' component={RSVP} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App

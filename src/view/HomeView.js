import React from 'react'
import Debug from '../component/Debug.js'
import searchInterface from '../component/searchInterface.js'
import Typeahead from '../component/Typeahead'

const searchConfig = searchInterface({name: 'search'})


const Search = searchConfig(Typeahead)

const Home = props =>
  <div>
    <Search/>
  </div>

export default Home


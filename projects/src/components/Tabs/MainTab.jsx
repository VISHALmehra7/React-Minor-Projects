import React from 'react'
import Tabs from './Tabs'

function RandomContent(){
    return <div>Some Random Content</div>
}


function MainTab() {
const  tabs = [
    {
       "label" :"Tab 1",
       "content" : <div>Content of tab 1</div>
    },
    {
       "label" :"Tab 2",
       "content" : <div>Content of tab 2</div>
    },
    {
       "label" :"Tab 3",
       "content" : <RandomContent/>
    }
]

function handleChange(currentTabIndex) {
 console.log(currentTabIndex)
}


  return (
    <Tabs tabsContent={tabs} onChange={handleChange} />
  )
}

export default MainTab
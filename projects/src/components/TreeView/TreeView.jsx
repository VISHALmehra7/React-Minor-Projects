import React from 'react'
import MenuList from './MenuList'

function TreeView({menus=[]}) {
  return (
    <div>
      <MenuList list={menus}/>
    </div>
  )
}

export default TreeView
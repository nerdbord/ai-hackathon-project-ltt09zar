import { useActiveTabStore, useSwitchesStore } from '@/store/store';
import React from 'react'
import Switches from './Switches';
import CheckList from './CheckList';
import Chat from './Chat';

const Content = () => {
    const { activeTab } = useActiveTabStore();
  return (
    <div className="">
        {activeTab === "list" && <CheckList/>}
        {activeTab === "chat" && <Chat/>}
        {activeTab === "switches" && <Switches/>}
    </div>
  )
}

export default Content
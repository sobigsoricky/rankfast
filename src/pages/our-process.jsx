import BookMeating from '@/components/home-page/book-meating'
import RecentProject from '@/components/home-page/recent-project'
import OuterLayout from '@/components/layouts/outer-layout'
import ProcessHeader from '@/components/process/process-header'
import React from 'react'

const OurProcess = () => {
  return (
    <>
        <OuterLayout>
<ProcessHeader/>
<RecentProject/>
<BookMeating/>
        </OuterLayout>
    </>
  )
}

export default OurProcess
import EdtechFeatures from '@/components/edtech/edtech-features'
import EdtechHeader from '@/components/edtech/edtech-header'
import EdtechPartners from '@/components/edtech/edtech-partners'
import AuditReportForm from '@/components/home-page/audit-report-form'
import BookMeating from '@/components/home-page/book-meating'
import Services from '@/components/home-page/services'
import OuterLayout from '@/components/layouts/outer-layout'
import Testimonials from '@/components/testimonials'
import React from 'react'

const Edtech = () => {
  return (
    <> 
    <OuterLayout>
      <EdtechHeader/>
      <EdtechFeatures/>
      <EdtechPartners/>
      <Services/>
      <AuditReportForm/>
      <Testimonials/>
      <BookMeating/>
    </OuterLayout>

    </>
  )
}

export default Edtech
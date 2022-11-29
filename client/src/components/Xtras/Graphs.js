import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

const Graphs = () => {
  const random = () => Math.round(Math.random() * 50)+1
  const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <CRow>
     
       <CCol xs={6}>
         <CCard className="mb-4">
           <CCardHeader>Bar Chart</CCardHeader>
           <CCardBody>
             <CChartBar
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'AtCoder', 'Hackerrank', 'Hackerearth', 'CSES'],
                 datasets: [
                   {
                     label: 'Events',
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                     data:[random(), random(), random(), random(), random(), random(), random()],
                   },
                  
                 ],
               }}
               labels="CodingPlatform"
             />
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs={6}>
         <CCard className="mb-4">
           <CCardHeader>Line Chart</CCardHeader>
           <CCardBody>
             <CChartLine
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'June', 'CSES'],
                 datasets: [
                   {
                     label: 'Codeforces',
                     backgroundColor: 'purple',
                     borderColor: 'purple',
                     pointBackgroundColor: 'purple',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Codechef',
                     backgroundColor: 'brown',
                     borderColor: 'brown',
                     pointBackgroundColor: 'brown',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Leetcode',
                     backgroundColor: 'yellow',
                     borderColor: 'yellow',
                     pointBackgroundColor: 'yellow',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Atcoder',
                     backgroundColor: 'red',
                     borderColor: 'red',
                     pointBackgroundColor: 'red',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },{
                     label: 'Hackerrank',
                     backgroundColor: 'lightgreen',
                     borderColor: 'lightgreen',
                     pointBackgroundColor: 'lightgreen',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Hackerearth',
                     backgroundColor: 'skyblue',
                     borderColor: 'skyblue',
                     pointBackgroundColor: 'skyblue',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'CSES',
                     backgroundColor: 'pink',
                     borderColor: 'pink',
                     pointBackgroundColor: 'pink',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs={6}>
         <CCard className="mb-4">
           <CCardHeader>Doughnut Chart</CCardHeader>
           <CCardBody>
             <CChartDoughnut
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'AtCoder', 'Hackerrank', 'Hackerearth', 'CSES'],
              datasets: [
                   {
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs={6}>
         <CCard className="mb-4">
           <CCardHeader>Pie Chart</CCardHeader>
           <CCardBody>
             <CChartPie
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'June', 'CSES'],   
                 datasets: [
                   {
                     data: [random(), random(), random(), random(), random(), random(), random()],
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs={6}>
         <CCard className="mb-4">
           <CCardHeader>Polar Area Chart</CCardHeader>
           <CCardBody>
             <CChartPolarArea
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'June', 'CSES'],   
                 datasets: [
                   {
                     data: [random(), random(), random(), random(), random(), random(), random()],
                     backgroundColor: ['purple', 'brown', 'yellow', 'red', 'lightgreen', 'skyblue', 'pink'],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       <CCol xs={6}>
         <CCard className="mb-4">
           <CCardHeader>Radar Chart</CCardHeader>
           <CCardBody>
             <CChartRadar
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'June', 'CSES'],   
                 datasets: [
                   {
                     label: 'Users',
                     backgroundColor: 'rgba(220, 220, 220, 0.2)',
                     borderColor: 'rgba(220, 220, 220, 1)',
                     pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                     pointBorderColor: '#fff',
                     pointHighlightFill: '#fff',
                     pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                     data: [65, 59, 90, 81, 56, 55, 40],
                   },
                   {
                     label: 'My Second dataset',
                     backgroundColor: 'rgba(151, 187, 205, 0.2)',
                     borderColor: 'rgba(151, 187, 205, 1)',
                     pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                     pointBorderColor: '#fff',
                     pointHighlightFill: '#fff',
                     pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                     data: [28, 48, 40, 19, 96, 27, 100],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
       <span style={{width:"12cm" ,marginLeft:"-0.25cm"}}>
    <CCol sm={18}>
         <CCard className="mb-4">
           <CCardHeader>Line Chart</CCardHeader>
           <CCardBody>
             <CChartLine
               data={{
                 labels: ['Codeforces', 'Codechef', 'Leetcode', 'Atcoder', 'Hackerrank', 'June', 'CSES'],
                 datasets: [
                   {
                     label: 'Codeforces',
                     backgroundColor: 'purple',
                     borderColor: 'purple',
                     pointBackgroundColor: 'purple',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Codechef',
                     backgroundColor: 'brown',
                     borderColor: 'brown',
                     pointBackgroundColor: 'brown',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Leetcode',
                     backgroundColor: 'yellow',
                     borderColor: 'yellow',
                     pointBackgroundColor: 'yellow',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Atcoder',
                     backgroundColor: 'red',
                     borderColor: 'red',
                     pointBackgroundColor: 'red',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },{
                     label: 'Hackerrank',
                     backgroundColor: 'lightgreen',
                     borderColor: 'lightgreen',
                     pointBackgroundColor: 'lightgreen',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'Hackerearth',
                     backgroundColor: 'skyblue',
                     borderColor: 'skyblue',
                     pointBackgroundColor: 'skyblue',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                   {
                     label: 'CSES',
                     backgroundColor: 'pink',
                     borderColor: 'pink',
                     pointBackgroundColor: 'pink',
                     pointBorderColor: 'black',
                     data: [random(), random(), random(), random(), random(), random(), random()],
                   },
                 ],
               }}
             />
           </CCardBody>
         </CCard>
       </CCol>
    </span>
     </CRow>
  )
}

export default Graphs
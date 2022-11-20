import React from "react";
import {Container, Paper} from "@material-ui/core";
import { Line } from 'react-chartjs-2';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { CCallout, CLink } from '@coreui/react'
import  DocsCallout  from './DocsCallout.js'
import './Analytics.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';

import {
  CAvatar,
  CButton,
  CButtonGroup,
  

  CCardFooter,


  CProgress,

  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'


import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'

import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import {
  
  
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'

import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import img1 from "./Screenshot 2022-11-20 at 3.55.37 AM.png"

const Analytics = () => {
    const random = () => Math.round(Math.random() * 50)+1
    const randomise = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
  return(
<Container>
<div>
  <Container><br/>
  <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              26K{' '}
              <span className="fs-6 fw-normal">
                (-12.4% <CIcon icon={cilArrowBottom} />)
              </span>
            </>
          }
          title="Users"
        
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              $6.200{' '}
              <span className="fs-6 fw-normal">
                (40.9% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Income"
         
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              2.49{' '}
              <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
              </span>
            </>
          }
          title="Conversion Rate"
         
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              44K{' '}
              <span className="fs-6 fw-normal">
                (-23.6% <CIcon icon={cilArrowBottom} />)
              </span>
            </>
          }
          title="Sessions"
        
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                  'January',
                  'February',
                  'March',
                  'April',
                ],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [randomise(), 81, randomise(), 45, 34, randomise(), 40, 85, randomise(), 23, randomise(), 98, 34, 84, 67, 82],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
    <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
         
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                    randomise(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
  </Container>
<br/>
<CCol xs={12}>
      <br />
     
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="Content Goes Here"
        /><br />

      </CCol>
<br/>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
   
  
  >
  
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
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--education"
  date="2002 - 2006"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  > 
  <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
  <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
  <p>
    Creative Direction, Visual Design
  </p>
    </VerticalTimelineElement>
  
</VerticalTimeline>
</div>
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
      {/* <CCol xs={6}>
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
      </CCol> */}
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
                    label: 'My First dataset',
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
    </CRow>
  </Container>

  );
};

export default Analytics;

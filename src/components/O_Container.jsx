import React from 'react'
import A_Title from './A_Title.jsx'
import M_Card from './M_Card.jsx'

const workshops = [
  {
    title: 'Как устроены современные свервисы, коротко о базах данных',
    date: '3 апреля 2025'
  },
  {
    title: 'Программируем страницу поисковой выдачи',
    date: '10 апреля 2025'
  },
  {
    title: 'Основы React',
    date: '17 апреля 2025'
  }
]

// export default class O_Container extends React.Component {
//   render() {
//     const cards = workshops.map((workshop, i) => {
//       return <M_Card key={i} name={workshop.title} date={workshop.date} />
//     })
//     return (
//       <div className="O_Container">
//         <A_Title name="Расписание" />
//         {cards}
//       </div>
//     )
//   }
// }

export default function O_Container() {
  const cards = workshops.map((workshop, i) => {
    return <M_Card key={i} name={workshop.title} date={workshop.date} />
  })

  return (
    <div className="O_Container">
      <A_Title name="Расписание" />
      {cards}
    </div>
  )
}

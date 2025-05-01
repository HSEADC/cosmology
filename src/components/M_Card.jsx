import React from 'react'
import A_Title from './A_Title.jsx'

// export default class M_Card extends React.Component {
//   render() {
//     return (
//       <div className="M_Card">
//         <A_Title name={this.props.name} />
//         <p>{this.props.date}</p>
//       </div>
//     )
//   }
// }

export default function M_Card({ name, date }) {
  return (
    <div className="M_Card">
      <A_Title name={name} />
      <p>{date}</p>
    </div>
  )
}

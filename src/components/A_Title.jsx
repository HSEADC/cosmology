import React from 'react'

// классовый компонент
// export default class A_Title extends React.Component {
//   render() {
//     return <h2 className="A_Title">{this.props.name}</h2>
//   }
// }

// функциональный компонент классический
export default function A_Title({ name }) {
  return <h2 className="A_Title">{name}</h2>
}

// анонимная функция (функциональный компонент в новом синтаксисе — через стрелочную функцию)
// const A_Title = ({ name }) => {
//   return <h2 className="A_Title">{name}</h2>
// }

// export default A_Title

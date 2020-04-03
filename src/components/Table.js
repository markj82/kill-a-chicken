import React from 'react'
import './Table.css'
import chicken from '../local-img/chicken3.png'

const Table = props => {
    return (
        <table onClick={props.clickPointer}>
            <tbody>
        <tr>
            <th><img id="a" onClick={props.hit} src={props.data[0].isVisible && chicken} width='130'></img></th>
            <th><img id="b" onClick={props.hit} src={props.data[1].isVisible && chicken} width="130"></img></th> 
            <th><img id="c" onClick={props.hit} src={props.data[2].isVisible && chicken} width='130'></img></th>
            <th><img id="d" onClick={props.hit} src={props.data[3].isVisible && chicken} width="130"></img></th> 
        </tr>
        <tr>
            <th><img id="e" onClick={props.hit} src={props.data[4].isVisible && chicken} width='130'></img></th>
            <th><img id="f" onClick={props.hit} src={props.data[5].isVisible && chicken} width="130"></img></th> 
            <th><img id="g" onClick={props.hit} src={props.data[6].isVisible && chicken} width='130'></img></th>
            <th><img id="h" onClick={props.hit} src={props.data[7].isVisible && chicken} width="130"></img></th> 
        </tr>
        <tr>
            <th><img id="i" onClick={props.hit} src={props.data[8].isVisible && chicken} width='130'></img></th>
            <th><img id="j" onClick={props.hit} src={props.data[9].isVisible && chicken} width="130"></img></th> 
            <th><img id="k" onClick={props.hit} src={props.data[10].isVisible && chicken} width='130'></img></th>
            <th><img id="l" onClick={props.hit} src={props.data[11].isVisible && chicken} width="130"></img></th> 
        </tr>
        <tr>
            <th><img id="m" onClick={props.hit} src={props.data[12].isVisible && chicken} width='130'></img></th>
            <th><img id="n" onClick={props.hit} src={props.data[13].isVisible && chicken} width="130"></img></th> 
            <th><img id="o" onClick={props.hit} src={props.data[14].isVisible && chicken} width='130'></img></th>
            <th><img id="p" onClick={props.hit} src={props.data[15].isVisible && chicken} width="130"></img></th> 
        </tr>
        </tbody>
        </table>
     );
}
 
export default Table;
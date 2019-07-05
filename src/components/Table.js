import React from 'react'
import './Table.css'
import chicken from '../local-img/chicken1.png'

const Table = props => {
    return (
        <table>
            <tbody>
        <tr>
            <th><img id="a" onClick={props.hit} src={chicken} width="130"></img></th>
            <th><img id="b" onClick={props.hit} src={chicken} width="130"></img></th> 
            <th><img id="c" onClick={props.hit} src={chicken} width="130"></img></th>
            <th><img id="d" onClick={props.hit} src={chicken} width="130"></img></th>
        </tr>
        <tr>
            <td><img id="e" onClick={props.hit} src={chicken} width="130"></img></td>
            <td><img id="f" onClick={props.hit} src={chicken} width="130"></img></td> 
            <td><img id="g" onClick={props.hit} src={chicken} width="130"></img></td>
            <td><img id="h" onClick={props.hit} src={chicken} width="130"></img></td>
        </tr>
        <tr>
            <td><img id="i" onClick={props.hit} src={chicken} width="130"></img></td>
            <td><img id="j" onClick={props.hit} src={chicken} width="130"></img></td> 
            <td><img id="k" onClick={props.hit} src={chicken} width="130"></img></td>
            <td><img id="l" onClick={props.hit} src={chicken} width="130"></img></td>
        </tr>
        <tr>
            <td><img id="m" onClick={props.hit} src={chicken} width="130"></img></td>
            <td><img id="n" onClick={props.hit} src={chicken} width="130"></img></td> 
            <td><img id="o" onClick={props.hit} src={chicken} width="130"></img></td>
            <td><img id="p" onClick={props.hit} src={chicken} width="130"></img></td>
        </tr>
        </tbody>
        </table>
     );
}
 
export default Table;
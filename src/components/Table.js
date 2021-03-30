import React, {Component} from 'react'

class Table extends Component{
    render(){
        return (
            <div><br/><br/><br/><br/>
                      <table >
                    <thead ><tr><th>Id</th><th>Country Name</th><th>Capital</th><th>Rank</th></tr></thead>
                    <tbody><tr><td>101</td><td>India</td><td>Delhi</td><td>1</td></tr>
                          <tr><td>102</td><td>USA</td><td>Washington D.C</td><td>2</td></tr>
                          <tr><td>103</td><td>UK</td><td>London</td><td>3</td></tr>
                      <tr><td>104</td><td>China</td><td>Beijing</td><td>4</td></tr></tbody>
                  </table> 
            </div>
        )
    }
}
export default Table;
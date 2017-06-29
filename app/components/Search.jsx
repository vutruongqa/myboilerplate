var React = require('react');

var Search = React.createClass({
    render: function(){
        return(
            <div>
              
                <input type="search" ref="search" placeholder="Enter keyword to search"/>
                <input type="checkbox" ref="filter"/>
            </div>
   
        );
    }
});

module.exports = Search;